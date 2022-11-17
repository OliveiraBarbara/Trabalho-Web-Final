import { AuthenticationGuard } from './guards/authentication.guard';
import { PageComponent } from './layout/page/page.component';
import { LocalTreinamentoEditComponent } from './pages/local-treinamento/local-treinamento-edit/local-treinamento-edit.component';
import { ExercicioEditComponent } from './pages/exercicio/exercicio-edit/exercicio-edit.component';
import { PreferenciaEditComponent } from './pages/preferencia/preferencia-edit/preferencia-edit.component';
import { InstrutorEditComponent } from './pages/instrutor/instrutor-edit/instrutor-edit.component';
import { AdminEditComponent } from './pages/admin/admin-edit/admin-edit.component';
import { AdminCreateComponent } from './pages/admin/admin-create/admin-create.component';
import { AdminListComponent } from './pages/admin/admin-list/admin-list.component';
import { InstrutorListComponent } from './pages/instrutor/instrutor-list/instrutor-list.component';
import { ClienteEditComponent } from './pages/cliente/cliente-edit/cliente-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ClienteComponent } from './pages/cliente/cliente-create/cliente.component';
import { ClienteListComponent } from './pages/cliente/cliente-list/cliente-list.component';
import { ExercicioComponent } from './pages/exercicio/exercicio-create/exercicio.component';
import { InstrutorComponent } from './pages/instrutor/instrutor-create/instrutor.component';
import { PreferenciaComponent } from './pages/preferencia/preferencia-create/preferencia.component';
import { LocalTreinamentoComponent } from './pages/local-treinamento/local-treinamento-create/local-treinamento.component';
import { LocalTreinamentoListComponent } from './pages/local-treinamento/local-treinamento-list/local-treinamento-list.component';
import { ExercicioListComponent } from './pages/exercicio/exercicio-list/exercicio-list.component';
import { PreferenciaListComponent } from './pages/preferencia/preferencia-list/preferencia-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RoleGuard } from './guards/role.guard';
import { Role } from './models/usuario.model';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: PageComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
    children: [
      {
        path: 'home',
        children: [
          { path: '', component: HomeComponent },
          { path: 'menu', component: MenuComponent },
        ],
      },

      {
        path: 'admin',
        children: [
          {
            path: '',
            component: AdminListComponent,
          },
          {
            path: 'cadastro',
            component: AdminCreateComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Admin] },
          },
          {
            path: ':id/edit',
            component: AdminEditComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Admin] },
          },
        ],
      },
      {
        path: 'cliente',
        children: [
          {
            path: '',
            component: ClienteListComponent,
          },
          {
            path: 'cadastro',
            component: ClienteComponent,
          },
          {
            path: ':id/edit',
            component: ClienteEditComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Cliente] },
          },
        ],
      },
      {
        path: 'instrutor',
        children: [
          {
            path: '',
            component: InstrutorListComponent,
          },
          {
            path: 'cadastro',
            component: InstrutorComponent,
          },
          {
            path: ':id/edit',
            component: InstrutorEditComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Instrutor] },
          },
        ],
      },
      {
        path: 'preferencia',
        children: [
          {
            path: '',
            component: PreferenciaListComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Cliente, Role.Admin] },
          },
          {
            path: 'cadastro',
            component: PreferenciaComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Cliente] },
          },
          {
            path: ':id/edit',
            component: PreferenciaEditComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Cliente] },
          },
        ],
      },
      {
        path: 'exercicio',
        children: [
          {
            path: '',
            component: ExercicioListComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Instrutor, Role.Admin] },
          },
          {
            path: 'cadastro',
            component: ExercicioComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Instrutor] },
          },
          {
            path: ':id/edit',
            component: ExercicioEditComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Instrutor] },
          },
        ],
      },
      {
        path: 'localTreinamento',
        children: [
          {
            path: '',
            component: LocalTreinamentoListComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Instrutor] },
          },
          {
            path: 'cadastro',
            component: LocalTreinamentoComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Instrutor] },
          },
          {
            path: ':id/edit',
            component: LocalTreinamentoEditComponent,
            canActivate: [RoleGuard],
            data: { role: [Role.Instrutor] },
          },
        ],
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
