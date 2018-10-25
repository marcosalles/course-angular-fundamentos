import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private api: ApiService
  ) { }

  authenticate(userName: string, password: string): Observable<any> {
    return this.http
      .post(
        this.api.POST.login(),
        { userName: userName, password },
        { observe: 'response' }
      )
      .pipe(tap(
        res => {
          const token = res.headers.get('x-access-token');
          this.userService.setToken(token);
        }
      ));
  }
}
