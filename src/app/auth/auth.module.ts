import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { RecoverPasswordComponent } from './components/recover-password/recover-password/recover-password.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
