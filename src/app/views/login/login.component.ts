import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  title = 'Login';
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const {required, minLength, email} = Validators;

    // @ts-ignore
    this.loginForm = this.fb.group({
      email: ['', [email, required]],
      password: ['', [minLength(8), required]]
    });
  }
}
