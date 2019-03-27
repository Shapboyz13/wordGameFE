import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  formSubmitted: Boolean = false;
  isPassFieldText:Boolean = false;
  constructor(
    private fb: FormBuilder,
    private _authService : AuthService,
    private _router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
	    email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  formSubmit (form: FormGroup) {
    console.log(form);
  	this.formSubmitted = true;
    if (form.valid){
      let payload = {
        "user" : {
          "email": this.email.value,
          "password": this.password.value
        }
      }
      this._authService.authPost('login', JSON.stringify(payload)).subscribe((data:  Array<object>) => {
        console.log(data['user']);
        if(data['user'].token){
          localStorage.setItem('_pokeToken', JSON.stringify(data['user'].token));
          this._router.navigate(['./dashboard']);
        }
      });
      return;
    }
  }

  get email() {
    return this.loginForm.get('email');
	}

  get password() {
    return this.loginForm.get('password');
	}

}
