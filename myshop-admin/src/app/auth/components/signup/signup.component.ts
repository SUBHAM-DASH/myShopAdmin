import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder, private _auth: AuthService,private router:Router) {}
  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(1)]],
      lastname: ['', [Validators.required, Validators.minLength(1)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  //Submit the form
  onSubmitSignup() {
    this._auth.signUp(this.signupForm.value).subscribe(
      (res: any) => {
        console.log(res);
        if(res.status == "success"){
          alert(res.message);
          this.router.navigate(['/auth/login']);
        }
      },
      (err) => {
        alert(err.message);
        this.signupForm.reset();
      }
    );
  }
}
