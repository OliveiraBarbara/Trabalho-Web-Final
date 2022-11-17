import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../../admin/dialog/dialog.component';

@Component({
  selector: 'app-dialog-local',
  templateUrl: './dialog-local.component.html',
  styleUrls: ['./dialog-local.component.scss'],
})
export class DialogLocalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
}
