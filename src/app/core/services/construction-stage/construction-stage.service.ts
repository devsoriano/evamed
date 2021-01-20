import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstructionStageService {

  constructor(
    private http: HttpClient,
  ) { }

  addConstructiveSistemElement( projectData: object ) {
    return this.http.post<any>(
      environment.api_construction_stage,
      projectData
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getConstructiveSystemElement() {
    return this.http.get<any>(
      environment.api_construction_stage,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
