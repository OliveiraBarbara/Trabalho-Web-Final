import { Instrutor } from 'src/app/models/instrutor.model';
import { Cliente } from 'src/app/models/cliente.model';
import { Admin } from './admin.model';

//export type Usuario = ((Admin | Cliente | Instrutor) & LoginData) & Role;

export interface Usuario {
  id: number;
  email: string;
  role: Role;
  access_token?: string;
  token_type?: string;
}

export interface LoginData {
  access_token?: string;
  token_type?: string;
}

export enum Role {
  Cliente = 'cliente',
  Instrutor = 'instrutor',
  Admin = 'admin',
}
