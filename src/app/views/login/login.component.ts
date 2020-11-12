import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  message: string;
  hasFailed = false;
  submitLabel = 'Login';
  title = 'Login';

  constructor(private router: Router, private http: HttpClient) { }

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
    ).subscribe(
      data => {
        if (data){
          console.log(data);
          this.router.navigate(['/']);
        }
      },
      error => {
        if (error.error.error.message){
          this.message =  'Erreur dans l\'inscription: ' + error.error.error.message;
          this.hasFailed = true;
        }
      }
    );
  }
}
