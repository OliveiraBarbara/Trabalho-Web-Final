import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../shared/authentication.service';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor() {}

  ngOnInit() {}
}
