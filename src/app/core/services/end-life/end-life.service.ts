import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EndLifeService {
  constructor(private http: HttpClient) {}

  addTOGW(togwData: object) {
    return this.http
      .post<any>(environment.api_treatment_of_generate_wasted, togwData)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  addECDP(ecdpData: object) {
    return this.http
      .post<any>(
        environment.api_electricity_consumption_deconstructive_process,
        ecdpData
      )
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  getECDP() {
    return this.http
      .get<any>(environment.api_electricity_consumption_deconstructive_process)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }
}
