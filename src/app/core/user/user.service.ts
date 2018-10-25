import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable, BehaviorSubject } from 'rxjs';
import * as jtwDecode from 'jwt-decode';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject(null);
  private userName: string;
  
  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify(this.tokenService.getToken());
    }
  }
  
  isLogged(): boolean {
    return this.tokenService.hasToken();
  }
  
  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  getUserName(): string {
    return this.userName;
  }
  
  setToken(token: string): void {
    this.tokenService.setToken(token);
    this.decodeAndNotify(token);
  }
  
  invalidate(): void {
    this.tokenService.clearToken();
    this.userSubject.next(null);
  }
  
  private decodeAndNotify(token: string): void {
    const user = jtwDecode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }
}
