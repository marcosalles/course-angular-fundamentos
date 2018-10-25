import { Injectable } from '@angular/core';

const TOKEN_KEY = '2d3f456j78uhgvdgxju';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string) {
    this.storage().setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return this.storage().getItem(TOKEN_KEY);
  }

  clearToken(): void {
    this.storage().removeItem(TOKEN_KEY);
  }

  private storage() {
    return window.localStorage;
  }
}
