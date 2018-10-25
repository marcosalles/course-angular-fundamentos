import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { SignUpService } from '../../home/sign-up/sign-up.service';

@Injectable()
export class UsernameValidator {

  constructor(private signUpService: SignUpService) { }

  userNameTaken() {
    return (control: AbstractControl) => {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName => this.signUpService.userNameIsTaken(userName)))
        .pipe(map(usernameIsTaken => {
          if (usernameIsTaken) {
            return {
              userNameTaken: {
                message: () => 'This username has already been taken'
              }
            }
          }
          return null;
        }))
        .pipe(first());
    };
  }
}