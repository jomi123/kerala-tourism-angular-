import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  templateUrl: './auth.component.html',
  template: ``,
  styleUrl: './auth.component.scss',
  imports: [NgIf, LoginComponent, SignupComponent],
})
export class AuthComponent {
  showLogin: boolean = true;

  switchToSignup(check: boolean) {
    this.showLogin = check;
    console.log(this.showLogin);
  }
}
