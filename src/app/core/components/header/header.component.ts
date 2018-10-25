import { Component } from '@angular/core';
import { UserService } from '../../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'pic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private user$: Observable<User>;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.user$ = this.userService.getUser();
  }

  logout(): void {
    this.userService.invalidate();
    this.goToLogin();
  }

  goToLogin(): void {
    this.router.navigate(['/']);
  }
}
