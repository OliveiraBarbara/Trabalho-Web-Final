import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Preferencia } from 'src/app/models/preferencia.model';

@Component({
  selector: 'app-preferencia-delete',
  templateUrl: './preferencia-delete.component.html',
  styleUrls: ['./preferencia-delete.component.scss']
})
export class PreferenciaDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Preferencia) {}

  ngOnInit(): void {
  }

}
