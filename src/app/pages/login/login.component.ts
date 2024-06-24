import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [
    RouterLink,
    FormsModule,
    SignupComponent,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class LoginComponent {
  username: string = '';
  password: number = 0;

  constructor(private router: Router) {}
  loginForm!: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  onSubmit() {
    if (this.loginForm?.valid) {
      console.log(this.loginForm.value);
    }
  }
  @Output() switchToSignup = new EventEmitter<boolean>();
  islogin: boolean = false;
  goToSignup() {
    this.switchToSignup.emit(this.islogin);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
