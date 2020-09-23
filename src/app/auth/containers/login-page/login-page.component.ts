import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  isLoginFailed = false;
  isNotFilledValues = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  submitForm(): void {
    this.isNotFilledValues = false;
    this.isLoginFailed = false;

    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(isLoggedIn => {
        if (isLoggedIn){
          this.router.navigate(['/']);
        }
        else {
          this.loginForm.setErrors({ invalid: true });
          this.isLoginFailed = true;
        }
      });
    } else {
      this.isNotFilledValues = true;
    }
  }

  loginExternal(provider: string) {
    this.authService.loginExternal(provider);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
