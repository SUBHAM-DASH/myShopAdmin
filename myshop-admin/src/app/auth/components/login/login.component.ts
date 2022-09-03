import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _auth: AuthService,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  //Submit the form
  onSubmitLogin() {
    this._auth.login(this.loginForm.value).subscribe(
      (res: any) => {
        if (res.status == 'success') {
          localStorage.setItem('token', res.token);
          alert(res.message);
          this.router.navigate(['/pages']);
          this.loginForm.reset();
        }
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  //Submit the google
  onClickGoogle() {
    console.log('google click');
  }

  //Submit the facebook
  onClickFacebook() {
    console.log('facebook click');
  }
}
