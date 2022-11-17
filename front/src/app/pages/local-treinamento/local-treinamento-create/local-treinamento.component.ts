import { CidadeService } from './../../cidade/cidade.service';
import { Cidade } from 'src/app/models/cidade.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalTreinamento } from 'src/app/models/local-treinamento.model';
import { LocalTreinamentoService } from '../local-treinamento.service';

@Component({
  selector: 'app-local-treinamento',
  templateUrl: './local-treinamento.component.html',
  styleUrls: ['./local-treinamento.component.scss'],
})
export class LocalTreinamentoComponent implements OnInit {
  cidades: Cidade[] = [];
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly localTreinamentoService: LocalTreinamentoService,
    private readonly cidadeService: CidadeService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cidadeService.list().subscribe((resp) => {
      this.cidades = resp;
      this.cidades.sort((a: Cidade, b: Cidade) => a.nome.localeCompare(b.nome));
    });
    this.form = this.fb.group({
      nome: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      horaFunc: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      num: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      complemento: [],
      cep: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
    });
  }

  save(): void {
    const dados = this.form.value;
    const localTreinamento: LocalTreinamento = {
      ...dados,
      enderecos: [
        {
          rua: dados.endereco,
          num: parseInt(dados.num),
          bairro: dados.bairro,
          complemento: dados.complemento,
          cep: dados.cep,
          cidade: dados.cidade,
        },
      ],
    };
    this.localTreinamentoService.create(localTreinamento).subscribe((resp) => {
      this.localTreinamentoService.showMessage(
        'Local de Treinamento Cadastrado com Sucesso!'
      );
      this.router.navigate(['/localTreinamento']);
    });
  }

  cancel(): void {
    this.router.navigate(['/localTreinamento']);
  }
}
