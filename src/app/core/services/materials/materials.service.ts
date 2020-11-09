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

  
}
