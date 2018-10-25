import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../core/api/api.service';
import { NewUser } from './new-user';

@Injectable()
export class SignUpService {

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) {}

  userNameIsTaken(userName: string) {
    return this.http.get(this.api.GET.userExists(userName));
  }

  signup(user: NewUser) {
    return this.http.post(this.api.POST.signUp(), user);
  }
}