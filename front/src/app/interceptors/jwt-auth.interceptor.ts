import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../shared/authentication.service';
import { MessagesService } from '../shared/messages.service';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class JwtAuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly messagesService: MessagesService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const usuario = this.authenticationService.getCurrentUsuarioValue();
    if (request.headers.has(InterceptorSkipHeader)) {
      return next.handle(request);
    }
    if (!usuario || !usuario.access_token || usuario.access_token.length == 0) {
      this.messagesService.error(
        'O token de autenticação expirou. Por favor, faça o login novamente.'
      );
      return next.handle(request);
    } else {
      const modified = request.clone({
        setHeaders: {
          Authorization: `${usuario.token_type} ${usuario.access_token}`,
        },
      });
      return next.handle(modified);
    }
  }
}
