import { LoginData, Usuario } from '../models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';
import { InterceptorSkipHeader } from '../interceptors/jwt-auth.interceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  navegateToRoute() {
    throw new Error('Method not implemented.');
  }
  private baseApi: string = '/auth';
  public currentUsuario: Observable<Usuario | null>;
  private currentUsuarioSubject: BehaviorSubject<Usuario | null>;
  private propertyName: string = 'currentUsuario';
  private tokenExpiryTime: number = 3600;

  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router,
    private readonly http: HttpClient
  ) {
    this.currentUsuarioSubject = new BehaviorSubject<Usuario | null>(
      this.getUsuarioStorage(false)
    );
    this.currentUsuario = this.currentUsuarioSubject.asObservable();
  }

  isLoggedIn(): boolean {
    const usuario = this.getUsuarioStorage(false);
    return !!(usuario && usuario.access_token !== null);
  }

  getCurrentUsuarioValue(): Usuario | null {
    return this.currentUsuarioSubject.value;
  }

  logout(): void {
    this.storageService.remove(this.propertyName);
    this.currentUsuarioSubject.next(null);
  }

  login(email: string, senha: string): Observable<Usuario | null> {
    let headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http
      .post<LoginData>(
        environment.baseUrl + this.baseApi + '/login',
        {
          email,
          senha,
        },
        { headers }
      )
      .pipe(
        switchMap((dataAuth) => {
          if (dataAuth?.access_token) {
            headers = headers.set(
              'Authorization',
              `${dataAuth.token_type} ${dataAuth.access_token}`
            );
            return this.http
              .get<Usuario>(environment.baseUrl + this.baseApi + '/usuario', {
                headers,
              })
              .pipe(
                map((usuario) => {
                  usuario = { ...usuario, ...dataAuth };
                  this.storageService.set(
                    this.propertyName,
                    usuario,
                    this.tokenExpiryTime
                  );
                  this.currentUsuarioSubject.next(usuario);
                  return usuario;
                })
              );
          } else {
            return of(null);
          }
        })
      );
  }

  validateTokenExpirationTime(): void {
    if (this.storageService.isExpired(this.propertyName)) {
      this.logout();
    }
  }

  private getUsuarioStorage(isRediret: boolean = true) {
    let usuario: Usuario | null = null;
    try {
      usuario = this.storageService.get(this.propertyName);
    } catch (error) {
      this.logout();
      if (isRediret) {
        this.router.navigate(['/login']);
      }
    }
    return usuario;
  }

  updateUserData(): Observable<Usuario> {
    return this.http
      .get<Usuario>(environment.baseUrl + this.baseApi + '/usuario')
      .pipe(
        map((usuario) => {
          const current = this.getUsuarioStorage(false);
          usuario = { ...current, ...usuario };
          this.storageService.set(
            this.propertyName,
            usuario,
            this.tokenExpiryTime
          );
          this.currentUsuarioSubject.next(usuario);
          return usuario;
        })
      );
  }
}
