import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCredentialsComponentComponent } from './views/user-credentials-component/user-credentials-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ListComponent } from './views/rooms/list/list.component';
import { CreateComponent } from './views/rooms/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    UserCredentialsComponentComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
