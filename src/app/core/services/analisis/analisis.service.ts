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

  getECDP() {
    return this.http.get<any>(
      environment.api_electricity_consumption_deconstructive_process,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getUsefulLife(){
    return this.http.get<any>(
      environment.api_useful_life,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  //api_type_energy

  getTypeEnergy(){
    return this.http.get<any>(
      environment.api_type_energy,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }


  getTypeEnergyData(){
    return this.http.get<any>(
      environment.api_type_energy_data,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }
  getElectricityConsumptionData(){
    return this.http.get<any>(
      environment.api_electricity_consumption_data,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getAnnualConsumptionRequired(){
    return this.http.get<any>(
      environment.api_annual_consumption_required,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getSourceInformation(){
    return this.http.get<any>(
      environment.api_source_information,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }


  getSourceInformationData(){
    return this.http.get<any>(
      environment.api_source_information_data,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getConstructiveSystemElement(){
    return this.http.get<any>(
      environment.api_construction_stage,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
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

  getSectionsList(){
    return this.http.get<any>(
      environment.api_sections,
    ).pipe(
      tap((data) => {
        return data;
      })
    );
  }

}
