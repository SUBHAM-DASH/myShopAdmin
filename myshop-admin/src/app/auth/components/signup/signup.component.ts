import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  signupForm!: FormGroup;
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(1)]],
      lastname: ['', [Validators.required, Validators.minLength(1)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  //Submit the form
  onSubmitSignup() {
    console.log(this.signupForm.value);
  }

  //Submit the google
  onClickGoogle(){
    console.log("google click");
  }

  //Submit the facebook
  onClickFacebook(){
    console.log("facebook click");
  }
}
