import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor(
    private http: HttpClient,
  ) { }

  usesCatalog() {
    return this.http.get<any>(
      'https://evamed-rest-api.herokuapp.com/api-projects/uses/',
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  countriesCatalog() {
    return this.http.get<any>(
      'https://evamed-rest-api.herokuapp.com/api-projects/countries/',
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  TypeProjectCatalog() {
    return this.http.get<any>(
      'https://evamed-rest-api.herokuapp.com/api-projects/type-project/',
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  usefulLifeCatalog() {
    return this.http.get<any>(
      'https://evamed-rest-api.herokuapp.com/api-projects/useful-life/',
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
