import { catchError } from 'rxjs';
import { Cidade } from './../../../models/cidade.model';
import { LocalTreinamentoService } from './../local-treinamento.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalTreinamento } from 'src/app/models/local-treinamento.model';
import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../../cidade/cidade.service';

@Component({
  selector: 'app-local-treinamento-edit',
  templateUrl: './local-treinamento-edit.component.html',
  styleUrls: ['./local-treinamento-edit.component.scss'],
})
export class LocalTreinamentoEditComponent implements OnInit {
  id!: number;
  form: FormGroup = new FormGroup({});
  local!: LocalTreinamento;
  cidades: Cidade[] = [];

  constructor(
    private readonly router: Router,
    private readonly localService: LocalTreinamentoService,
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
      nomeLocal: [null, [Validators.required]],
      valor: [null, [Validators.required]],
      hora: [null, [Validators.required]],
      endereco: this.fb.group({
        rua: [],
        num: [],
        bairro: [],
        complemento: [],
        cep: [],
        cidade: [],
      }),
    });

    this.localService.findById(this.id).subscribe((resp) => {
      this.local = resp;

      this.form.patchValue(this.local);

      if (this.local.enderecos && this.local.enderecos[0]) {
        this.form.patchValue({
          endereco: this.local.enderecos[0],
        });
      }
    });
  }

  save(): void {
    const local = this.form.value;
    this.localService.create(local).subscribe((resp) => {
      this.localService.showMessage(
        'Local de Treinamento Atualizada com Sucesso!'
      );
      this.router.navigate(['/localTreinamento']);
    });

    this.form.markAllAsTouched();
    if (this.form.valid) {
      const local: LocalTreinamento = this.form.value;

      this.localService
        .update(this.id, local)
        .pipe(
          catchError((err) => {
            this.localService.showMessage(
              'Erro ao alterar o local de treinamento',
              true
            );
            return err;
          })
        )

        .subscribe((resp) => {
          this.localService.showMessage(
            'Local de Treinamento atualizada com sucesso!'
          );
          this.router.navigate(['/localTreinamento']);
        });
    } else {
      this.localService.showMessage('Dados incompletos', true);
    }
  }

  cancel(): void {
    this.router.navigate(['/localTreinamento']);
  }
}
