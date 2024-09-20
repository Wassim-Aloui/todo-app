import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent 

    


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    NavbarComponent 
  ]
})
export class UserModule { }