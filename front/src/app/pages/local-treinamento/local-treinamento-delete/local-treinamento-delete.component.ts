import { LocalTreinamento } from 'src/app/models/local-treinamento.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-local-treinamento-delete',
  templateUrl: './local-treinamento-delete.component.html',
  styleUrls: ['./local-treinamento-delete.component.scss']
})
export class LocalTreinamentoDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: LocalTreinamento) {}

  ngOnInit(): void {
  }

}
