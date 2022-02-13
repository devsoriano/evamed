import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  constructor(private http: HttpClient) {}

  getMaterials() {
    return this.http.get<any>(environment.api_materials).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  searchMaterial(material) {
    return this.http
      .get<any>(environment.api_materials + '?search=' + material)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  addMaterial(data: object) {
    return this.http.post<any>(environment.api_materials, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  deleteMaterial(id: number) {
    return this.http.delete(`${environment.api_materials}${id}/`).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updateMaterial(id: string, changes) {
    return this.http.put(`${environment.api_materials}${id}/`, changes).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getfake() {
    return this.http
      .get<any>(
        'http://127.0.0.1:8000/api-projects/material-scheme-data/'
        //'https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/',
      )
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deleteFake(id: number) {
    return this.http
      .delete(
        `https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/${id}/`
      )
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  addFake(schemeData: object) {
    return this.http
      .post<any>(
        'https://evamed-rest-api.herokuapp.com/api-projects/material-scheme-data/',
        schemeData
      )
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  getUnits() {
    return this.http.get<any>(environment.api_units).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addUnit(data: object) {
    return this.http.post<any>(environment.api_units, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updateUnit(id: string, changes) {
    return this.http.put(`${environment.api_units}${id}/`, changes).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  deleteUnit(id: number) {
    return this.http.delete(`${environment.api_units}${id}/`).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getPotentialTypes() {
    return this.http.get<any>(environment.api_potetnial_types).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getStandards() {
    return this.http.get<any>(environment.api_standards).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getDbMaterials() {
    return this.http.get<any>(environment.api_db_material).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addDbMaterial(data: object) {
    return this.http.post<any>(environment.api_db_material, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updateDbMaterial(id: string, changes) {
    return this.http.put(`${environment.api_db_material}${id}/`, changes).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  deleteDbMaterial(id: number) {
    return this.http.delete(`${environment.api_db_material}${id}/`).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
