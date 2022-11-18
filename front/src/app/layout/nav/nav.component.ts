import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private readonly authenticatioService: AuthenticationService) {}

  ngOnInit(): void {}

  checkRole(roles: string[]): boolean {
    const user = this.authenticatioService.getCurrentUsuarioValue();
    return !!user && roles.indexOf(user.role) > -1;
  }
}
