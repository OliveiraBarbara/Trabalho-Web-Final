import { Admin } from './../../../models/admin.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { Cidade } from 'src/app/models/cidade.model';
import { Endereco } from 'src/app/models/endereco.model';
import { Estado } from 'src/app/models/estado.model';
import { CidadeService } from '../../cidade/cidade.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {
  id!: number;
  estados: Estado[] = [];
  cidades: Cidade[] = [];
  form: FormGroup = new FormGroup({});
  admin!: Admin;
  endereco!: Endereco;

  constructor(
    private readonly router: Router,
    private readonly adminService: AdminService,
    private readonly cidadeService: CidadeService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.cidadeService.list().subscribe((resp) => {
      this.cidades = resp;
      this.cidades.sort((a: Cidade, b: Cidade) => a.nome.localeCompare(b.nome));
    });
    this.form = this.fb.group({
      nome: [],
      numReg: [],
      telefone: [],
      email: [],
      cargo: [],
      formacao: [],
      horaTrabalho: [],
      endereco: this.fb.group({
        rua: [],
        num: [],
        bairro: [],
        complemento: [],
        cep: [],
        cidade: [],
      }),
    });

    this.adminService.findById(this.id).subscribe((resp) => {
      this.admin = resp;

      this.form.patchValue(this.admin);

      if (this.admin.enderecos && this.admin.enderecos[0]) {
        this.form.patchValue({
          endereco: this.admin.enderecos[0],
        });
      }
    });
  }

  save(): void {
    /*const dados = this.form.value;
    const cliente: Cliente = {
      ...dados,
      enderecos: [
        {
          rua: dados.rua,
          num: parseInt(dados.num),
          bairro: dados.bairro,
          complemento: dados.complemento,
          cep: dados.cep,
          cidade: dados.cidade,
        },
      ],
    };
    this.clienteService.update(this.id, cliente).subscribe((resp) => {
      this.clienteService.showMessage('Cliente Atualizado com Sucesso!');
      this.router.navigate(['/admin ']);
    });*/

    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { endereco, ...dados } = this.form.value;
      const admin: Admin = {
        ...dados,
        enderecos: [
          {
            ...endereco,
            num: parseInt(endereco.num),
          },
        ],
      };

      this.adminService
        .update(this.id, admin)
        .pipe(
          catchError((err) => {
            this.adminService.showMessage(
              'Administrador não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.adminService.showMessage('Administrador Atualizado com Sucesso!');
          this.router.navigate(['/admin']);
        });
    } else {
      this.adminService.showMessage(
        'Há campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/admin']);
  }

  compareCidade(o1: Cidade, o2: Cidade): boolean {
    return o1?.id === o2?.id;
  }
}
