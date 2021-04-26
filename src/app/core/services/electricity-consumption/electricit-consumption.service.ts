import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ElectricitConsumptionService {
  constructor(private http: HttpClient) {}

  getACR() {
    return this.http.get<any>(environment.api_annual_consumption_required).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addACR(acrData: object) {
    return this.http
      .post<any>(environment.api_annual_consumption_required, acrData)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  getECD() {
    return this.http
      .get<any>(environment.api_electricity_consumption_data)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  addECD(ECD: object) {
    return this.http
      .post<any>(environment.api_electricity_consumption_data, ECD)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deleteACR(id: number) {
    console.log('proceso de eliminación');
    console.log(`${environment.api_annual_consumption_required}${id}/`);
    return this.http
      .delete(`${environment.api_annual_consumption_required}${id}/`)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deleteECD(id: number) {
    console.log('proceso de eliminación');
    console.log(`${environment.api_electricity_consumption_data}${id}/`);
    return this.http
      .delete(`${environment.api_electricity_consumption_data}${id}/`)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }
}
