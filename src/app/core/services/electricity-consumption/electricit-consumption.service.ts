import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElectricitConsumptionService {

  constructor(
    private http: HttpClient,
  ) { }

  getACR() {
    return this.http.get<any>(
      environment.api_annual_consumption_required,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getECD() {
    return this.http.get<any>(
      environment.api_electricity_consumption_data,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addACR( acrData: object ) {
    return this.http.post<any>(
      environment.api_annual_consumption_required,
      acrData
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addECD( ECD: object ) {
    return this.http.post<any>(
      environment.api_electricity_consumption_data,
      ECD
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
