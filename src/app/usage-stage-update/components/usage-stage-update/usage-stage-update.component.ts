import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { ElectricitConsumptionService } from './../../../core/services/electricity-consumption/electricit-consumption.service';


@Component({
  selector: 'app-usage-stage-update',
  templateUrl: './usage-stage-update.component.html',
  styleUrls: ['./usage-stage-update.component.scss']
})
export class UsageStageUpdateComponent implements OnInit {

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
  CAID: number;

  constructor(
    private catalogsService: CatalogsService,
    private router: Router,
    private electricitConsumptionService: ElectricitConsumptionService
  ) {
    this.catalogsService.getEnergyUnits().subscribe(data => {
      this.catalogoUnidadEnergia = data;
    });
    this.catalogsService.getTypeEnergy().subscribe(data => {
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
    
    this.electricitConsumptionService.getACR().subscribe( data => {
      const globalData = [];
      data.map( item => {
        if (item.project_id === parseInt(localStorage.getItem('idProyectoConstrucción'), 10)) {
          globalData.push(item);
        }
      });
      this.projectId = globalData[0].project_id;
      this.nameProject = 'Genérico';
      this.cantidad = globalData[0].quantity;
      this.unidad = globalData[0].unit_id;
      this.CAID = globalData[0].id;
    });

    this.electricitConsumptionService.getECD().subscribe( data => {
      console.log('respuesta!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      data.map ( item => {
        if( item.annual_consumption_required_id === this.CAID ) {
          console.log(item);
        }
      });
    })

  }

  ngOnInit() {
  }

  saveStepThree() {
    console.log('entra al proceso de editar step three');
  }

  goToMaterialStage() {
    this.router.navigateByUrl('materials-stage');
  }

  goToConstructionStage() {
    this.router.navigateByUrl('construction-stage');
  }

  goToUsageStage() {
    this.router.navigateByUrl('usage-stage');
  }

  goToEndLife() {
    this.router.navigateByUrl('end-life-stage');
  }

}
