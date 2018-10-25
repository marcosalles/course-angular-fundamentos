import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LengthValidator {
  static minLength(length: number) {
    return (control: AbstractControl) => {
      if (control.value.trim().length < length) {
        return {
          minLength: {
            value: length,
            message: (field) => `${field} must be at least ${length} characters long`
          }
        }
      };
    
      return null;
    };
  }

  static maxLength(length: number) {
    return (control: AbstractControl) => {
      if (control.value.length > length) {
        return {
          maxLength: {
            value: length,
            message: (field) => `${field} must be at most ${length} characters long`
          }
        }
      };
    
      return null;
    };
  }
}