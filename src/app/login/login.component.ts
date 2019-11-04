import { Component }               from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService }             from 'src/app/auth.service';
import { Router }                  from '@angular/router';

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
    private router: Router,
  ) {
  }

  onSubmit() {
    this.auth
      .login({ ...this.loginForm.value, subdomain: 'externaldemo' })
      .subscribe(result => {
        this.router.navigate([ 'dashboard' ]);
      });
  }
}
