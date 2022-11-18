import { Cliente } from './../../../models/cliente.model';
import { AuthenticationService } from './../../../shared/authentication.service';
import { MatTable } from '@angular/material/table';
import { PreferenciaDeleteComponent } from './../preferencia-delete/preferencia-delete.component';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import {
  Subscription,
  Subject,
  distinctUntilChanged,
  debounceTime,
} from 'rxjs';
import { Preferencia } from 'src/app/models/preferencia.model';
import { PreferenciaService } from '../preferencia.service';
import { PreferenciaTableDataSource } from './preferencia-table-datasource';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-preferencia-list',
  templateUrl: './preferencia-list.component.html',
  styleUrls: ['./preferencia-list.component.scss'],
})
export class PreferenciaListComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<Preferencia>;
  dataSource: PreferenciaTableDataSource;

  isLoadingResults: boolean = false;
  data: Preferencia[] = [];
  resultsLength: number = 0;
  subscriptions: Subscription[] = [];
  displayedColumns: string[] = ['idPref', 'material', 'periodo', 'actions'];
  form!: FormGroup;
  refresh: Subject<boolean> = new Subject();

  constructor(
    private readonly router: Router,
    private readonly preferenciaService: PreferenciaService,
    private readonly fb: FormBuilder,
    private readonly dialog: MatDialog,
    private readonly authenticationService: AuthenticationService
  ) {
    this.dataSource = new PreferenciaTableDataSource();
  }

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

    this.atualizarDadosTabela();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    // const sub = merge(this.refresh, this.paginator.page)
    //   .pipe(
    //     startWith({}),
    //     switchMap(() => {
    //       this.isLoadingResults = true;
    //       const search = this.form.get('search')?.value;
    //       return this.preferenciaService
    //         .list(this.paginator.pageIndex + 1, this.paginator.pageSize, search)
    //         .pipe(catchError(() => of(null)));
    //     }),
    //     map((data) => {
    //       /*dados retornados do back no front*/
    //       this.isLoadingResults = false;
    //       if (data) {
    //         this.resultsLength = data.meta.totalItems;
    //         return data.items;
    //       }
    //       return [];
    //     })
    //   )
    //   .subscribe((data) => (this.data = data));
    // this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    /*componente está sendo distruído */
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  navigateToPreferenciaCreate(): void {
    this.router.navigate(['/preferencia/cadastro']);
  }

  openDeleteDialog(preferencia: Preferencia): void {
    const dialogRef = this.dialog.open(PreferenciaDeleteComponent, {
      data: preferencia,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.preferenciaService
          .delete(preferencia.idPref as number)
          .subscribe(() => {
            this.paginator.firstPage();
            this.refresh.next(true);
            this.atualizarDadosTabela();
            this.preferenciaService.showMessage(
              'Peferencia excluída com sucesso!'
            );
          });
      }
    });
  }

  private atualizarDadosTabela(): void {
    const cliente: Cliente =
      this.authenticationService.getCurrentUsuarioValue() as unknown as Cliente;
    this.dataSource.data = cliente ? [...cliente.preferencias] : [];
    this.dataSource.refresh.next(true);
  }
}
