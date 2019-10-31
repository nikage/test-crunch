import { Component }   from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router }      from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {
  title = 'test-crunch';

  constructor(private router: Router,
              private auth: AuthService) {

    if(!this.auth.isSessionValid()) {
      this.router.navigate(['/login']);
    }
  }
}
