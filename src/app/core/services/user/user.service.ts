import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  addUser( userData: object ) {
    return this.http.post<any>(
      environment.api_users,
      userData
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getUsers() {
    return this.http.get<any>(environment.api_users).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  searchUser( email ) {
    return this.http.get<any>(
      environment.api_users + '?search=' + email,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
