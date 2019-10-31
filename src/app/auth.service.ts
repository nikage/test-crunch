import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiHost: string = 'https://api.thegoodtill.com';

  constructor(private http: HttpClient) {
  }


  login(credentials) {
    return this.http
      .post(this.apiHost + '/api/login', credentials)
      .pipe(
        tap(this.setSession),
        shareReplay(),
      );
  }

  isSessionValid(): boolean {
    // TODO: check expiration date
    return Boolean(localStorage.getItem('token'));
  }

  private setSession(result) {
    localStorage.setItem('token', result.token);
  }


}
