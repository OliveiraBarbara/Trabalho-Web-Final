import { Endereco } from './../../../models/endereco.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailValidator, FormBuilder, FormGroup } from '@angular/forms';
import { Cidade } from 'src/app/models/cidade.model';
import { Estado } from 'src/app/models/estado.model';
import { CidadeService } from '../../cidade/cidade.service';
import { EstadoService } from '../../estado/estado.service';
import { catchError } from 'rxjs';
import { Instrutor } from 'src/app/models/instrutor.model';
import { InstrutorService } from '../instrutor.service';

@Component({
  selector: 'app-instrutor-edit',
  templateUrl: './instrutor-edit.component.html',
  styleUrls: ['./instrutor-edit.component.scss']
})
export class InstrutorEditComponent implements OnInit {

  id!: number;
  estados: Estado[] = [];
  cidades: Cidade[] = [];
  form: FormGroup = new FormGroup({});
  instrutor!: Instrutor;
  endereço!: Endereco;

  constructor(
    private readonly router: Router,
    private readonly instrutorService: InstrutorService,
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
      cref: [],
      telefone: [],
      email: [],
      endereco: this.fb.group({
        rua: [],
        num: [],
        bairro: [],
        complemento: [],
        cep: [],
        cidade: [],
      }),
      modalidade: [],
    });

    this.instrutorService.findById(this.id).subscribe((resp) => {
      this.instrutor = resp;

      this.form.patchValue(this.instrutor);

      if (this.instrutor.enderecos && this.instrutor.enderecos[0]) {
        this.form.patchValue({
          endereco: this.instrutor.enderecos[0],
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
      this.router.navigate(['/cliente']);
    });*/

    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { endereco, ...dados } = this.form.value;
      const instrutor: Instrutor = {
        ...dados,
        enderecos: [
          {
            ...endereco,
            num: parseInt(endereco.num),
          },
        ],
      };
      this.instrutorService
        .update(this.id, instrutor)
        .pipe(
          catchError((err) => {
            this.instrutorService.showMessage(
              'Instrutor não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.instrutorService.showMessage('Instrutor Atualizado com Sucesso!');
          this.router.navigate(['/instrutor']);
        });
    } else {
      this.instrutorService.showMessage(
        'Há campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/instrutor']);
  }

  compareCidade(o1: Cidade, o2: Cidade): boolean {
    return o1?.id === o2?.id;
  }
}

