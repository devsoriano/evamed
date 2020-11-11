import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap  } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor(
    private http: HttpClient,
  ) { }

  usesCatalog() {
    return this.http.get<any>(
      environment.api_uses,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  countriesCatalog() {
    return this.http.get<any>(
      environment.api_countries,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  typeProjectCatalog() {
    return this.http.get<any>(
      environment.api_type_project,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  usefulLifeCatalog() {
    return this.http.get<any>(
      environment.api_useful_life,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  housingSchemeCatalog() {
    return this.http.get<any>(
      environment.api_housing_scheme,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getSourceInformation() {
    return this.http.get<any>(
      environment.api_source_information,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getBulkUnits() {
    return this.http.get<any>(
      environment.api_bulk_units,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getEnergyUnits() {
    return this.http.get<any>(
      environment.api_energy_units,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getVolumeUnits() {
    return this.http.get<any>(
      environment.api_volume_units,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }


}
