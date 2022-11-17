import { Admin } from './../../../models/admin.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.scss']
})
export class AdminDeleteComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Admin) { }

  ngOnInit(): void {
  }

}
