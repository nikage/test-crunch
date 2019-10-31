import { Component }               from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService }             from 'src/app/auth.service';
import { HttpClient }              from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ],
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: [ null, Validators.required ],
    password: [ null, Validators.required ],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.auth
      .login({ ...this.loginForm.value, subdomain: 'externaldemo' })
      .subscribe(result => {
        console.log('Auth', result);
      });
  }
}
