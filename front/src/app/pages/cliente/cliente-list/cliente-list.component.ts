import { ClienteService } from './../cliente.service';
import { Cliente } from './../../../models/cliente.model';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
  of,
  startWith,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { ClienteDeleteComponent } from '../cliente-delete/cliente-delete.component';
import { DialogComponent } from '../dialog/dialog.component';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss'],
})
export class ClienteListComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  isLoadingResults: boolean = true;
  data: Cliente[] = [];
  resultsLength: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['id', 'cpf', 'nome', 'telefone', 'actions'];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly clienteService: ClienteService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly authenticatioService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [],
    });

    const sub = this.form /*observador da consulta*/
      .get('search')!
      .valueChanges.pipe(distinctUntilChanged(), debounceTime(150))
      .subscribe(() => {
        this.paginator.firstPage();
        this.refresh.next(true);
      });
    this.subscriptions.push(sub);
  }

  ngAfterViewInit(): void {
    const sub = merge(this.refresh, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          const search = this.form.get('search')?.value;
          return this.clienteService
            .list(this.paginator.pageIndex + 1, this.paginator.pageSize, search)
            .pipe(catchError(() => of(null)));
        }),
        map((data) => {
          /*dados retornados do back no front*/
          this.isLoadingResults = false;
          if (data) {
            this.resultsLength = data.meta.totalItems;
            return data.items;
          }
          return [];
        })
      )
      .subscribe((data) => (this.data = data));
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    /*componente está sendo distruído */
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  navigateToClienteCreate(): void {
    this.router.navigate(['/cliente/cadastro']);
  }

  openDeleteDialog(cliente: Cliente): void {
    const dialogRef = this.dialog.open(ClienteDeleteComponent, {
      data: cliente,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.clienteService.delete(cliente.id as number).subscribe(() => {
          this.paginator.firstPage();
          this.refresh.next(true);
          this.clienteService.showMessage('Cliente excluído com sucesso!');
        });
      }
    });
  }

  openDialog(cliente: Cliente): void {
    this.dialog.open(DialogComponent, {
      data: cliente,
    });
  }

  checkRole(roles: string[]): boolean {
    const user = this.authenticatioService.getCurrentUsuarioValue();
    return !!user && roles.indexOf(user.role) > -1;
  }
}
