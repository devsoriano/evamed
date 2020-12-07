import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnalisisService {
  proyectos = [];
  constructor(private http: HttpClient,) {
    // this._getProjects().subscribe( data => {
    //   this.proyectos = data;
    // });

  }
  getPotentialTypes(){
    return this.http.get<any>(
      environment.api_potetnial_types,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }


  getStandars(){
    return this.http.get<any>(
      environment.api_standards,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getMaterialSchemeProyect(){
    return this.http.get<any>(
      environment.api_scheme_project,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getMaterialSchemeData() {
    return this.http.get<any>(
      environment.api_material_scheme_data,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

}
