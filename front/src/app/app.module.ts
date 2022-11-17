import { JsonDateInterceptor } from './interceptors/json-date.interceptor';
import { InstrutorModule } from './pages/instrutor/instrutor.module';
import { JwtAuthInterceptor } from './interceptors/jwt-auth.interceptor';
import { RedDirective } from './directives/red.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ExercicioComponent } from './pages/exercicio/exercicio-create/exercicio.component';
import { PreferenciaComponent } from './pages/preferencia/preferencia-create/preferencia.component';
import { PreferenciaListComponent } from './pages/preferencia/preferencia-list/preferencia-list.component';
import { ExercicioListComponent } from './pages/exercicio/exercicio-list/exercicio-list.component';
import { ClienteModule } from './pages/cliente/cliente.module';
import { PreferenciaEditComponent } from './pages/preferencia/preferencia-edit/preferencia-edit.component';
import { ExercicioEditComponent } from './pages/exercicio/exercicio-edit/exercicio-edit.component';
import { ExercicioDeleteComponent } from './pages/exercicio/exercicio-delete/exercicio-delete.component';
import { PreferenciaDeleteComponent } from './pages/preferencia/preferencia-delete/preferencia-delete.component';
import { PageComponent } from './layout/page/page.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminModule } from './pages/admin/admin.module';
import { LocalTreinamentoModule } from './pages/local-treinamento/local-treinamento.module';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    RedDirective,
    HomeComponent,
    MenuComponent,
    PageComponent,
    LoginComponent,
    PreferenciaComponent,
    PreferenciaListComponent,
    PreferenciaEditComponent,
    PreferenciaDeleteComponent,
    ExercicioComponent,
    ExercicioListComponent,
    ExercicioEditComponent,
    ExercicioDeleteComponent,
  ],
  imports: [
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
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClienteModule,
    AdminModule,
    InstrutorModule,
    LocalTreinamentoModule,
    MatSortModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JsonDateInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtAuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
