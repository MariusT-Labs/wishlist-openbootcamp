import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpFormComponent } from './components/sign-up-page/sign-up-form/sign-up-form.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';


@NgModule({
  declarations: [
    SignUpPageComponent,
    LoginPageComponent,
    SignUpFormComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    HttpClientModule
  ],   
  exports: [
    SignUpPageComponent
  ]
})
export class AuthModule { }
