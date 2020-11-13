import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {


  title = 'Create Room';
  createForm: FormGroup;
  @Output() submitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private http: HttpClient, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    const {required, minLength, email} = Validators;

    this.createForm = this.fb.group({
      name: ['', [minLength(5), required]]
    });
  }

  create(): void {
    this.submitForm.emit(this.createForm);
    const nameValue = this.createForm.value.name;
    const apiUrl = 'http://localhost:3000/api/rooms?access_token=LXgdWEvAU3UrWI3GAG0GHVEgSN3x7N4dARCwZIEAccAuVKDHbkOlLaXt6U0eeB8k';
    const credentials = {
      name: nameValue
    };
    this.http.post(
      apiUrl,
      credentials
    ).subscribe(
      data => {
        if (data){
          console.log('SUBSCRIBE' + data);
        }
      },
      error => {
        if (error.error.error.message){
          console.log('Erreur dans l\'inscription: ' + error.error.error.message);
        }
      }
    );
  }

}
