import { Injectable } from '@angular/core';

const API_URL: string = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  GET = {
    userFeed: (userName: string) => this.url(`/${userName}/photos`),
    userExists: (userName: string) => this.url(`/user/exists/${userName}`),

    photo: (photo: string) => this.url(`/imgs/${photo}`)
  }
  
  POST = {
    login: () => this.url('/user/login'),
    signUp: () => this.url('/user/signup'),

    uploadPhoto: () => this.url('/photos/upload')
  };
  
  url(endpoint: string): string {
    return `${API_URL}${endpoint}`;
  }
}
