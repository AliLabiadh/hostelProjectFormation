import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  submitLabel = 'Login';
  title = 'Login';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(form: FormGroup): void {
    const {email, password} = form.value;
    const emailValue = email;
    const passwordValue = password;
    const apiUrl = 'http://localhost:3000/api/users/login?access_token=LXgdWEvAU3UrWI3GAG0GHVEgSN3x7N4dARCwZIEAccAuVKDHbkOlLaXt6U0eeB8k';
    const credentials = {
      email: emailValue,
      password: passwordValue
    };
    this.http.post(
      apiUrl,
      credentials
    ).subscribe();
  }
}
