import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout, retry, catchError, switchMap, finalize, tap  } from 'rxjs/operators';
import { TokenService } from './token.service';
import { _throw } from 'rxjs/observable/throw';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  servicioResponse: string;

  boolError: boolean;

  response: {};

  constructor(
    private af: AngularFireAuth,
    private http: HttpClient,
    private token: TokenService
  ) { }

  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.auth.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  loginCoreEVAMED( username: string, password: string ) {

    return this.http.post<any>(
      'http://127.0.0.1:8000/api-profiles/login/',
      { username, password }
    ).pipe(
      tap((data: { token: string }) => {
        const token = data.token;
        this.token.saveToken(token);
      })
    );
  }
}
