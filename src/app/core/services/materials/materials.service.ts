import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor(
    private http: HttpClient,
  ) { }

  getMaterials() {
    return this.http.get<any>(
      environment.api_materials,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  searchMaterial( material ) {
    return this.http.get<any>(
      environment.api_materials + '?search=' + material,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getfake() {
    return this.http.get<any>(
      'http://127.0.0.1:8000/api-projects/material-scheme-data/',
      //'https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/',
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  deleteFake( id: number ) {
    return this.http.delete(
      `https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/${id}/`
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addFake( schemeData: object ) {
    return this.http.post<any>(
      'https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/',
      schemeData
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }




}
