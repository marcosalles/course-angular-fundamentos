import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatternValidator {
  static slugged(control: AbstractControl) {
    const slugPattern = /^(?:[a-z0-9]+-?)*[a-z0-9]+$/;
    if (!slugPattern.test(control.value)) {
      return {
        slugged: {
          message: (field) => `${field} can only have lowercase letters, numbers or hyphens and cannot start or end in hyphens`
        }
      }
    };

    return null;
  };
}