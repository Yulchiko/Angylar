import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import { Router } from '@angular/router';

import {AuthService} from "../../service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  userNameError: string;

  constructor(private authService: AuthService, private router: Router) {
    this._createForm()
  }

   _createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
    }, [this._checkPasswords])
  }

    register(): void {
        const rawValue = this.form.getRawValue();
        delete rawValue.confirmPassword;
        this.authService.register(rawValue).subscribe({
                next: () => {
                    this.router.navigate(['login'])
                },
                error: e => this.userNameError = e.error.username[0]
            }
        )
    }

  _checkPasswords(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password')
    const confirmPassword = form.get('confirmPassword')
    return password?.value === confirmPassword?.value ? null : {notSame: true}
  }
}

