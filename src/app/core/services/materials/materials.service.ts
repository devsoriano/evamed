import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MaterialsService {
  constructor(private http: HttpClient) {}

  getMaterialSchemeProyects() {
    return this.http.get<any>(environment.api_scheme_project).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getConstructionStage() {
    return this.http.get<any>(environment.api_construction_stage).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getACR() {
    return this.http.get<any>(environment.api_annual_consumption_required).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getEDCP() {
    return this.http
      .get<any>(environment.api_electricity_consumption_deconstructive_process)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

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

  addPotentialTypes(data: object) {
    return this.http.post<any>(environment.api_potetnial_types, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updatePotentialTypes(id: string, changes) {
    return this.http
      .put(`${environment.api_potetnial_types}${id}/`, changes)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deletePotentialType(id: number) {
    return this.http.delete(`${environment.api_potetnial_types}${id}/`).pipe(
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

  getTransports() {
    return this.http.get<any>(environment.api_transports).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addTransport(data: object) {
    return this.http.post<any>(environment.api_transports, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updateTransport(id: string, changes) {
    return this.http.put(`${environment.api_transports}${id}/`, changes).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  deleteTransport(id: number) {
    return this.http.delete(`${environment.api_transports}${id}/`).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getPotentialTransport() {
    return this.http.get<any>(environment.api_potential_transport).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addPotentialTransport(data: object) {
    return this.http.post<any>(environment.api_potential_transport, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updatePotentialTransport(id: string, changes) {
    return this.http
      .put(`${environment.api_potential_transport}${id}/`, changes)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deletePotentialTransport(id: number) {
    return this.http
      .delete(`${environment.api_potential_transport}${id}/`)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  getMachinery() {
    return this.http.get<any>(environment.api_source_information).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addMachinery(data: object) {
    return this.http.post<any>(environment.api_source_information, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updateMachinery(id: string, changes) {
    return this.http
      .put(`${environment.api_source_information}${id}/`, changes)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deleteMachinery(id: number) {
    return this.http.delete(`${environment.api_source_information}${id}/`).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getMachineryPotential() {
    return this.http.get<any>(environment.api_source_information_data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addMachineryPotential(data: object) {
    return this.http
      .post<any>(environment.api_source_information_data, data)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  updateMachineryPotential(id: string, changes) {
    return this.http
      .put(`${environment.api_source_information_data}${id}/`, changes)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deleteMachineryPotential(id: number) {
    return this.http
      .delete(`${environment.api_source_information_data}${id}/`)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  getTypeEnergy() {
    return this.http.get<any>(environment.api_type_energy).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addTypeEnergy(data: object) {
    return this.http.post<any>(environment.api_type_energy, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updateTypeEnergy(id: string, changes) {
    return this.http.put(`${environment.api_type_energy}${id}/`, changes).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  deleteTypeEnergy(id: number) {
    return this.http.delete(`${environment.api_type_energy}${id}/`).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  getTypeEnergyData() {
    return this.http.get<any>(environment.api_type_energy_data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  addTypeEnergyData(data: object) {
    return this.http.post<any>(environment.api_type_energy_data, data).pipe(
      tap((data) => {
        return data;
      })
    );
  }

  updateTypeEnergyData(id: string, changes) {
    return this.http
      .put(`${environment.api_type_energy_data}${id}/`, changes)
      .pipe(
        tap((data) => {
          return data;
        })
      );
  }

  deleteTypeEnergyData(id: number) {
    return this.http.delete(`${environment.api_type_energy_data}${id}/`).pipe(
      tap((data) => {
        return data;
      })
    );
  }
}
