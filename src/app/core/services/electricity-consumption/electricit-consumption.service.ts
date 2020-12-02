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
}
