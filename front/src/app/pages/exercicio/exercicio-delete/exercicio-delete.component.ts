import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercicio } from 'src/app/models/exercicio.model';

@Component({
  selector: 'app-exercicio-delete',
  templateUrl: './exercicio-delete.component.html',
  styleUrls: ['./exercicio-delete.component.scss']
})
export class ExercicioDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Exercicio) {}

  ngOnInit(): void {
  }

}
