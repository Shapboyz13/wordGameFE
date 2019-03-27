import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  formSubmitted: Boolean = false;
  isPassFieldText:Boolean = false;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
	    email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  formSubmit (form: FormGroup) {

  	this.formSubmitted = true;
  	if (form.valid){
      let payload = {
        "user" : {
          "email": this.email.value,
          "password": this.password.value
        }
      }
      this._authService.authPost('register', JSON.stringify(payload)).subscribe((data:  Array<object>) => {
        console.log('data',data);
      });
  	}
  	// console.log(form)
  }

  get email() {
    return this.registerForm.get('email');
	}

  get password() {
    return this.registerForm.get('password');
	}

}
