import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpUserEvent, HttpResponse, HttpProgressEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (this.tokenService.hasToken()) {
      request = request.clone({
        setHeaders: {
          'x-access-token': this.tokenService.getToken()
        }
      });
    }
    return next.handle(request);
  }
}
