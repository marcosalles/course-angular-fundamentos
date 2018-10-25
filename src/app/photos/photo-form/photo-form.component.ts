import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LengthValidator } from '../../shared/validators/length.validator';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pic-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {
  private photoForm: FormGroup;
  private file: File;
  private preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private service: PhotoService,
    private router: Router
  ){ }

  ngOnInit() {
    this.photoForm = this.formBuilder
    .group({
      file: ['', Validators.required],
      description: ['', LengthValidator.maxLength(300)],
      allowComments: [true]
    })
  }

  save() {
    const {description, allowComments} = this.photoForm.getRawValue();
    this.service
      .upload(this.file, description, allowComments)
      .subscribe(() => this.router.navigate(['']));
  }

  handlers() {
    return {
      fileChanged: (file: File) => {
        this.file = file;
        const reader = new FileReader();
        reader.onload = (event: any) => {
          this.preview = event.target.result;
        }
        reader.readAsDataURL(file);
      },
      buildPhoto: () => {
        return {
          url: this.preview,
          title: 'Preview',
          likes: 0,
          comments: 0
        }
      }
    }
  }
}
