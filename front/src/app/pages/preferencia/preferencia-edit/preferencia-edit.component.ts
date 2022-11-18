import { catchError } from 'rxjs/operators';
import { Preferencia } from 'src/app/models/preferencia.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PreferenciaService } from '../preferencia.service';

@Component({
  selector: 'app-preferencia-edit',
  templateUrl: './preferencia-edit.component.html',
  styleUrls: ['./preferencia-edit.component.scss'],
})
export class PreferenciaEditComponent implements OnInit {
  id!: number;
  form: FormGroup = new FormGroup({});
  preferencia!: Preferencia;

  constructor(
    private readonly router: Router,
    private readonly preferenciaService: PreferenciaService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.form = this.fb.group({
      material: [null, [Validators.required]],
      periodo: [null, [Validators.required]],
    });

    this.preferenciaService.findById(this.id).subscribe((resp) => {
      this.preferencia = resp;

      this.form.patchValue(this.preferencia);
    });
  }

  save(): void {
    const preferencia = this.form.value;
    this.preferenciaService.create(preferencia).subscribe((resp) => {
      this.preferenciaService.showMessage(
        'Preferência do Cliente Atualizada com Sucesso!'
      );
      this.router.navigate(['/preferencia']);
    });

    this.form.markAllAsTouched();
    if (this.form.valid) {
      const preferencia: Preferencia = this.form.value;

      this.preferenciaService
        .update(this.id, preferencia)
        .pipe(
          catchError((err) => {
            this.preferenciaService.showMessage(
              'Erro ao alterar preferência',
              true
            );
            return err;
          })
        )

        .subscribe((resp) => {
          this.preferenciaService.showMessage(
            'Preferencia atualizada com sucesso!'
          );
          this.router.navigate(['/preferencia']);
        });
    } else {
      this.preferenciaService.showMessage('Dados incompletos', true);
    }
  }

  cancel(): void {
    this.router.navigate(['/preferencia']);
  }
}
