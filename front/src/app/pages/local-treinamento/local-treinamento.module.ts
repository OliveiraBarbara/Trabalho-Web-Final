import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DialogLocalComponent } from './dialog-local/dialog-local.component';
import { LocalTreinamentoComponent } from './local-treinamento-create/local-treinamento.component';
import { LocalTreinamentoDeleteComponent } from './local-treinamento-delete/local-treinamento-delete.component';
import { LocalTreinamentoEditComponent } from './local-treinamento-edit/local-treinamento-edit.component';
import { LocalTreinamentoListComponent } from './local-treinamento-list/local-treinamento-list.component';

@NgModule({
  declarations: [
    LocalTreinamentoComponent,
    LocalTreinamentoDeleteComponent,
    LocalTreinamentoEditComponent,
    LocalTreinamentoListComponent,
    DialogLocalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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
export class LocalTreinamentoModule {}
