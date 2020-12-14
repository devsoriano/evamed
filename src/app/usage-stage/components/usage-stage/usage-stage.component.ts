import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { ElectricitConsumptionService } from './../../../core/services/electricity-consumption/electricit-consumption.service';

@Component({
  selector: 'app-usage-stage',
  templateUrl: './usage-stage.component.html',
  styleUrls: ['./usage-stage.component.scss']
})
export class UsageStageComponent implements OnInit {
  nameProject: string;
  projectId: string;
  cantidad: number;
  unidad: number;

  tipoMixElectrico: number;
  cantidadMixElectrico: number;
  porcentajeMixElectrico: number;
  unidadMixElectrico: number;

  tipoCombustible: number;
  cantidadCombustible: number;
  unidadCombustible: number;
  porcentajeCombustible: number;

  tipoPanelesFotovoltaicos: number;
  cantidadPanelesFotovoltaicos: number;
  unidadPanelesFotovoltaicos: number;
  porcentajePanelesFotovoltaicos: number;

  panelOpenFirst = false;
  panelOpenSecond = false;
  panelOpenThird = false;
  selectedPreference: string;
  preferences: string[] = ['cantidad', 'porcentaje'];
  catalogoUnidadEnergia: [];
  catalogoTipoEnergiaElectrica: any;
  catalogoTipoEnergiaCombustible: any;

  constructor(
    private catalogsService: CatalogsService,
    private router: Router,
    private electricitConsumptionService: ElectricitConsumptionService
  ) {
    this.catalogsService.getEnergyUnits().subscribe(data => {
      this.catalogoUnidadEnergia = data;
    });
    this.catalogsService.getTypeEnergy().subscribe(data => {
      console.log('catalogo');
      console.log(data);
      // this.catalogoTipoEnergia = data;
      const tipoEnergiaElectrica = [];
      const tipoEnergiaCombustible = [];
      data.map( tipo => {
        if ( tipo.name_type_energy === 'Energía eléctrica, Medio voltaje (MX)' ||
          tipo.name_type_energy === 'Energía eléctrica, Alto voltaje (MX)' ||
          tipo.name_type_energy === 'Energía eléctrica, Bajo voltaje (MX)' ) {
          tipoEnergiaElectrica.push(tipo);
        }

        if ( tipo.name_type_energy === 'Calefacción doméstica con gas natural (GLO)' ) {
          tipoEnergiaCombustible.push(tipo);
        }
      });

      this.catalogoTipoEnergiaElectrica = tipoEnergiaElectrica;
      this.catalogoTipoEnergiaCombustible = tipoEnergiaCombustible;
    });
  }

  ngOnInit() {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    this.projectId = PDP.id;
    this.nameProject = PDP.name_project;
  }

  saveStepThree() {
    console.log('save step three');
    console.log(this.cantidad);
    console.log(this.projectId);
    console.log(this.unidad);
    this.electricitConsumptionService.addACR({
      quantity: this.cantidad,
      project_id: this.projectId,
      unit_id: this.unidad
    }).subscribe(data => {
      console.log('success!!!!!!');
      this.electricitConsumptionService.addECD({
        quantity: this.cantidadCombustible,
        percentage: this.porcentajeCombustible,
        annual_consumption_required_id: data.id,
        unit_id: this.unidadCombustible,
        type: this.tipoCombustible
      }).subscribe( data => {
        console.log('combustible!!!!!');
        console.log(data);
      });
      console.log('success!!!!!!');
      this.electricitConsumptionService.addECD({
        quantity: this.cantidadMixElectrico,
        percentage: this.porcentajeMixElectrico,
        annual_consumption_required_id: data.id,
        unit_id: this.unidadMixElectrico,
        type: this.tipoMixElectrico
      }).subscribe( data => {
        console.log('Mix electrico');
        console.log(data);
      });
      console.log('success!!!!!!');
      this.electricitConsumptionService.addECD({
        quantity: this.cantidadPanelesFotovoltaicos,
        percentage: this.porcentajePanelesFotovoltaicos,
        annual_consumption_required_id: data.id,
        unit_id: this.unidadPanelesFotovoltaicos,
        type: null
      }).subscribe( data => {
        console.log('paneles fotovoltaicos');
        console.log(data);
      });
    });
    this.router.navigateByUrl('end-life-stage');
  }

}
