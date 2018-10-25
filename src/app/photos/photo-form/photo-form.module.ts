import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PhotoFormComponent } from './photo-form.component';
import { ValidationMessageModule } from '../../shared/components/validation-message/validation-message.module';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
  declarations: [
    PhotoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    PhotoModule
  ]
})
export class PhotoFormModule { }