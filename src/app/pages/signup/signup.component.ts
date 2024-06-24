import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  username: string = '';
  password: number = 0;
  repassword: number = 0;
  dob!: Date;
  email: string = '';

  constructor(private router: Router) {}
  signupForm!: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      username: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.signupForm?.valid) {
      console.log(this.signupForm.value);
    }
  }

  @Output() switchToSignup = new EventEmitter<boolean>();
  islogin: boolean = true;
  goToSignup() {
    this.switchToSignup.emit(this.islogin);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
