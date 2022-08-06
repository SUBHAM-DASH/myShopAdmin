import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required,Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required,Validators.minLength(4)]],
    });
  }

  //Submit the form
  onSubmitLogin(){
    console.log(this.loginForm.value);
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
