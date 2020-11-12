import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-credentials-component',
  templateUrl: './user-credentials-component.component.html',
  styleUrls: ['./user-credentials-component.component.sass']
})
export class UserCredentialsComponentComponent implements OnInit {
  @Input() title: string;
  @Input() submitLabel: string;
  @Output() submitForm: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  form: FormGroup;



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const {required, minLength, email} = Validators;

    this.form = this.fb.group({
      email: ['', [email, required]],
      password: ['', [minLength(8), required]]
    });
  }

  onSubmit(): void{
    this.submitForm.emit(this.form);
  }
}
