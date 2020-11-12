import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})

export class RegisterComponent implements OnInit {

  hasFailed = false;
  isCreated = false;
  message = 'Votre inscription a bien été prise en compte';
  submitLabel = 'Register';
  title = 'Register';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  register(form: FormGroup): void {
    const {email, password} = form.value;
    const emailValue = email;
    const passwordValue = password;
    const apiUrl = 'http://localhost:3000/api/users?access_token=LXgdWEvAU3UrWI3GAG0GHVEgSN3x7N4dARCwZIEAccAuVKDHbkOlLaXt6U0eeB8k';
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
          this.isCreated = true;
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
