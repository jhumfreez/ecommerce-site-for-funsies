import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent implements OnInit {
  readonly form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(30),
      ]),
      phone: new FormControl('', [
        Validators.pattern('[-\\d]*'),
        Validators.maxLength(15),
      ]),
    });
  }

  ngOnInit() {}
}
