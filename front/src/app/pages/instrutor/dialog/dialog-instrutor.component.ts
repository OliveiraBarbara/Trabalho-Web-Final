import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-instrutor.component.html',
  styleUrls: ['./dialog-instrutor.component.scss'],
})
export class DialogInstrutorComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogInstrutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
