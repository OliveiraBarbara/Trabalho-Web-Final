import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Exercicio } from 'src/app/models/exercicio.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ExercicioService } from '../exercicio.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-exercicio-edit',
  templateUrl: './exercicio-edit.component.html',
  styleUrls: ['./exercicio-edit.component.scss'],
})
export class ExercicioEditComponent implements OnInit {
  id!: number;
  form: FormGroup = new FormGroup({});
  exercicio!: Exercicio;

  constructor(
    private readonly router: Router,
    private readonly exercicioService: ExercicioService,
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    this.form = this.fb.group({
      tipo: [],
      tempo: [],
    });

    this.exercicioService.findById(this.id).subscribe((resp) => {
      this.exercicio = resp;

      this.form.patchValue(this.exercicio);
    });
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.exercicioService
        .update(this.id, this.exercicio)
        .pipe(
          catchError((err) => {
            this.exercicioService.showMessage(
              'Exercício não pode ser atualizado!',
              true
            );
            return err;
          })
        )
        .subscribe((resp) => {
          this.exercicioService.showMessage(
            'Exercício Atualizado com Sucesso!'
          );
          this.router.navigate(['/exercicio']);
        });
    } else {
      this.exercicioService.showMessage(
        'Há campos inválidos no formulário!',
        true
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/exercicio']);
  }
}
