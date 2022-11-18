import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PreferenciaService } from '../preferencia.service';

@Component({
  selector: 'app-preferencia',
  templateUrl: './preferencia.component.html',
  styleUrls: ['./preferencia.component.scss'],
})
export class PreferenciaComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(
    private readonly router: Router,
    private readonly preferenciaService: PreferenciaService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      material: [null, [Validators.required]],
      periodo: [null, [Validators.required]],
    });
  }

  save(): void {
    const preferencia = this.form.value;
    this.preferenciaService.create(preferencia).subscribe((resp) => {
      this.preferenciaService.showMessage(
        'Preferência do Cliente Cadastrada com Sucesso!'
      );
      this.router.navigate(['/preferencia']);
    });
  }
  cancel(): void {
    this.router.navigate(['/preferencia']);
  }
}
