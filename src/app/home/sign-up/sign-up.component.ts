import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LengthValidator } from '../../shared/validators/length.validator';
import { PatternValidator } from '../../shared/validators/pattern.validator';
import { UsernameValidator } from '../../shared/validators/username.validator';
import { NewUser } from './new-user';
import { SignUpService } from './sign-up.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from '../../core/platform-detector/platform-detector.service';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [ UsernameValidator ]
})
export class SignUpComponent implements OnInit {
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usernameValidator: UsernameValidator,
    private signUpService: SignUpService,
    private router: Router,
    private detectorService: PlatformDetectorService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      userName: [
        '',
        [
          PatternValidator.slugged,
          LengthValidator.minLength(2),
          LengthValidator.maxLength(30)
        ],
        [
          this.usernameValidator.userNameTaken(),
        ]
      ],
      fullName: ['', [
        LengthValidator.minLength(2),
        LengthValidator.maxLength(40)
      ]],
      password: ['', [
        LengthValidator.minLength(8),
        LengthValidator.maxLength(255)
      ]],
    });
    this.detectorService.ifBrowser(() => this.emailInput.nativeElement.focus());
  }

  signUp() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
      .signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        (error) => console.log(error)
      );
  }
}
