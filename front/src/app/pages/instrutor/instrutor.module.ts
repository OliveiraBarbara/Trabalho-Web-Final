import { RouterModule } from '@angular/router';
import { InstrutorDeleteComponent } from './instrutor-delete/instrutor-delete.component';
import { InstrutorEditComponent } from './instrutor-edit/instrutor-edit.component';
import { InstrutorListComponent } from './instrutor-list/instrutor-list.component';
import { InstrutorComponent } from './instrutor-create/instrutor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogInstrutorComponent } from './dialog/dialog-instrutor.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    InstrutorComponent,
    InstrutorListComponent,
    InstrutorEditComponent,
    InstrutorDeleteComponent,
    DialogInstrutorComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
})
export class InstrutorModule {}
