import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';
import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'pic-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private detectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: [
        '',
        Validators.required
      ],
      password: [
        '',
        Validators.required
      ]
    });
    this.detectorService.ifBrowser(() => this.userNameInput.nativeElement.focus());
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.auth
      .authenticate(userName, password)
      .subscribe(
        data => {
          this.router.navigate(['user', data.body.name]);
        },
        err => {
          console.log(err);
          this.loginForm.reset();
          this.detectorService.ifBrowser(() => this.userNameInput.nativeElement.focus());
        }
      );
  }
}
