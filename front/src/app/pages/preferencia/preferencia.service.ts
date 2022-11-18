import { AuthenticationService } from './../../shared/authentication.service';
import { Preferencia } from './../../models/preferencia.model';
import { ResponseDataList } from './../../models/shared';
import { environment } from './../../../environments/environment';
import { Observable, catchError, switchMap, map } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreferenciaService {
  baseApi: string = '/preferencia';
  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient,
    private readonly authenticationService: AuthenticationService
  ) {}

  create(preferencia: Preferencia): Observable<Preferencia> {
    return this.http
      .post<Preferencia>(environment.baseUrl + '/cliente/add-pref', preferencia)
      .pipe(
        switchMap((preferencia) => {
          return this.authenticationService
            .updateUserData()
            .pipe(map(() => preferencia));
        })
      );
  }

  findById(id: number): Observable<Preferencia> {
    return this.http.get<Preferencia>(
      environment.baseUrl + this.baseApi + `/${id}`
    );
  }

  update(id: number, preferencia: Preferencia): Observable<Preferencia> {
    return this.http
      .patch<Preferencia>(
        environment.baseUrl + this.baseApi + `/${id}`,
        preferencia
      )
      .pipe(
        switchMap((preferencia) => {
          return this.authenticationService
            .updateUserData()
            .pipe(map(() => preferencia));
        })
      );
  }

  list(
    page: number,
    limit: number,
    search?: string
  ): Observable<ResponseDataList<Preferencia>> {
    let params = new HttpParams().set('page', page).set('limit', limit);
    if (search?.trim()) {
      params = params.set('search', search.trim());
    }
    return this.http.get<ResponseDataList<Preferencia>>(
      environment.baseUrl + this.baseApi + '/ver-preferencia',
      { params }
    );
  }

  delete(id: number): Observable<boolean | unknown> {
    return this.http
      .delete<boolean>(environment.baseUrl + this.baseApi + `/${id}`)
      .pipe(
        catchError((err) => {
          this.showMessage(
            'Essa Preferência possuí dependências internas, portanto não pode ser excluída.',
            true
          );
          return err;
        }),
        switchMap((preferencia) => {
          return this.authenticationService
            .updateUserData()
            .pipe(map(() => preferencia));
        })
      );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
