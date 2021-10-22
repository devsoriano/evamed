import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { ElectricitConsumptionService } from './../../../core/services/electricity-consumption/electricit-consumption.service';

@Component({
  selector: 'app-usage-stage-update',
  templateUrl: './usage-stage-update.component.html',
  styleUrls: ['./usage-stage-update.component.scss'],
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
  suma:number;
  
  panelOpenFirst = false;
  panelOpenSecond = false;
  panelOpenThird = false;
  selectedPreference: string;
  preferences: string[] = ['cantidad', 'porcentaje'];
  catalogoUnidadEnergia: [];
  catalogoTipoEnergiaElectrica: any;
  catalogoTipoEnergiaCombustible: any;
  CAID: number;
  globalData: any;
  ECD_IDS: any;

  constructor(
    private catalogsService: CatalogsService,
    private router: Router,
    private electricitConsumptionService: ElectricitConsumptionService
  ) {
    this.catalogsService.getEnergyUnits().subscribe((data) => {
      this.catalogoUnidadEnergia = data;
    });
    this.catalogsService.getTypeEnergy().subscribe((data) => {
      // this.catalogoTipoEnergia = data;
      const tipoEnergiaElectrica = [];
      const tipoEnergiaCombustible = [];
      data.map((tipo) => {
        if (
          tipo.name_type_energy === 'Energía eléctrica, Medio voltaje (MX)' ||
          tipo.name_type_energy === 'Energía eléctrica, Alto voltaje (MX)' ||
          tipo.name_type_energy === 'Energía eléctrica, Bajo voltaje (MX)'
        ) {
          tipoEnergiaElectrica.push(tipo);
        }

        if (
          tipo.name_type_energy ===
          'Calefacción doméstica con gas natural (GLO)'
        ) {
          tipoEnergiaCombustible.push(tipo);
        }
      });

      this.catalogoTipoEnergiaElectrica = tipoEnergiaElectrica;
      this.catalogoTipoEnergiaCombustible = tipoEnergiaCombustible;
    });

    this.electricitConsumptionService.getACR().subscribe((data) => {
      const globalData = [];
      data.map((item) => {
        if (
          item.project_id ===
          parseInt(localStorage.getItem('idProyectoConstrucción'), 10)
        ) {
          globalData.push(item);
        }
      });
      this.globalData = globalData;
      this.projectId = globalData[0].project_id;
      this.nameProject = 'Genérico';
      this.cantidad = globalData[0].quantity;
      this.unidad = globalData[0].unit_id;
      this.CAID = globalData[0].id;
    });

    this.electricitConsumptionService.getECD().subscribe((data) => {
      this.ECD_IDS = [];
      data.map((item) => {
        if (item.annual_consumption_required_id === this.CAID) {
          if (item.source === 'electric') {
            this.cantidadMixElectrico = item.quantity;
            this.porcentajeMixElectrico = item.percentage;
            this.unidadMixElectrico = item.unit_id;
            this.tipoMixElectrico = item.type;
          }
          if (item.source === 'fuel') {
            this.cantidadCombustible = item.quantity;
            this.porcentajeCombustible = item.percentage;
            this.unidadCombustible = item.unit_id;
            this.tipoCombustible = item.type;
          }
          if (item.source === 'panels') {
            this.cantidadPanelesFotovoltaicos = item.quantity;
            this.porcentajePanelesFotovoltaicos = item.percentage;
            this.unidadPanelesFotovoltaicos = item.unit_id;
          }
          this.ECD_IDS.push(item.id);
        }
      });
    });
  }

  ngOnInit() {}

   changeCantidadME(cantidadMixElectrico) {
    this.suma=0;
     this.cantidadMixElectrico =cantidadMixElectrico.toFixed(2).toString();
    this.porcentajeMixElectrico = Math.round((((cantidadMixElectrico * 100) / this.cantidad) * 100) / 100);
    
    this.suma=+this.cantidadMixElectrico + +this.cantidadCombustible + +this.cantidadPanelesFotovoltaicos;
    
    console.log(this.suma);
    if(this.suma > this.cantidad){
     alert("la cantidad supera el consumo anual requerido");
      this.cantidadMixElectrico=0;
      this.porcentajeMixElectrico=0;
    }else{ console.log(this.suma);}
      
  }

  changePorcentajeME(porcentajeMixElectrico) {
    this.suma=0;
    this.porcentajeMixElectrico =porcentajeMixElectrico.toFixed(2).toString();
    this.cantidadMixElectrico = Math.round((((porcentajeMixElectrico * this.cantidad) / 100) * 100) / 100);
    
    this.suma=+this.porcentajeMixElectrico + +this.porcentajeCombustible + +this.porcentajePanelesFotovoltaicos;
    
    console.log(this.suma);
    if(this.suma > 100){
     alert("la cantidad supera el consumo anual requerido");
      this.porcentajeMixElectrico=0;
      this.cantidadMixElectrico=0;
    }else{ console.log(this.suma);}
  
  }

  changeCantidadC(cantidadCombustible) {
    this.suma=0;
    this.cantidadCombustible =cantidadCombustible.toFixed(2).toString();
    this.porcentajeCombustible = Math.round((((cantidadCombustible * 100) / this.cantidad) * 100) / 100);
    
    
     this.suma=+this.cantidadMixElectrico + +this.cantidadCombustible + +this.cantidadPanelesFotovoltaicos;
    
    console.log(this.suma);
    if(this.suma > this.cantidad){
     alert("la cantidad supera el consumo anual requerido");
      this.cantidadCombustible=0;
      this.porcentajeCombustible=0;
    }else{ console.log(this.suma);}
  
  }

  changePorcentajeC(porcentajeCombustible) {
    this.suma=0;
    this.porcentajeCombustible =porcentajeCombustible.toFixed(2).toString();
    this.cantidadCombustible = Math.round((((porcentajeCombustible * this.cantidad) / 100) * 100) / 100);
   
     this.suma=+this.porcentajeMixElectrico + +this.porcentajeCombustible + +this.porcentajePanelesFotovoltaicos;
    
    console.log(this.suma);
    if(this.suma > 100){
     alert("la cantidad supera el consumo anual requerido");
      this.porcentajeCombustible=0;
      this.cantidadCombustible=0;
    }else{ console.log(this.suma);}
  
  
  }

  changeCantidadPF(cantidadPanelesFotovoltaicos) {
    this.suma=0;
    this.cantidadPanelesFotovoltaicos =cantidadPanelesFotovoltaicos.toFixed(2).toString();
    this.porcentajePanelesFotovoltaicos =
      Math.round((((cantidadPanelesFotovoltaicos * 100) / this.cantidad) * 100) / 100);
    
     this.suma=+this.cantidadMixElectrico + +this.cantidadCombustible + +this.cantidadPanelesFotovoltaicos;
    
    console.log(this.suma);
    if(this.suma > this.cantidad){
     alert("la cantidad supera el consumo anual requerido");
      this.cantidadPanelesFotovoltaicos=0;
      this.porcentajePanelesFotovoltaicos=0;
    }else{ console.log(this.suma);}
  
  }

  changePorcentajePF(porcentajePanelesFotovoltaicos) {
    this.suma=0;
     this.porcentajePanelesFotovoltaicos =porcentajePanelesFotovoltaicos.toFixed(2).toString();
    this.cantidadPanelesFotovoltaicos =
      Math.round((((porcentajePanelesFotovoltaicos * this.cantidad) / 100) * 100) / 100);
   
     this.suma=+this.porcentajeMixElectrico + +this.porcentajeCombustible + +this.porcentajePanelesFotovoltaicos;
    
    console.log(this.suma);
    if(this.suma > 100){
     alert("la cantidad supera el consumo anual requerido");
      this.porcentajePanelesFotovoltaicos=0;
      this.cantidadPanelesFotovoltaicos=0;
    }else{ console.log(this.suma);}
  
  
  }

  saveStepThree() {
    console.log('entra al proceso de edición');
    console.log(this.globalData[0].id);
    console.log(this.ECD_IDS);

    this.ECD_IDS.map((item) =>
      this.electricitConsumptionService.deleteECD(item).subscribe((data) => {
        this.electricitConsumptionService
          .deleteACR(this.globalData[0].id)
          .subscribe((data) => {
            this.electricitConsumptionService
              .addACR({
                quantity: this.cantidad,
                project_id: localStorage.getItem('idProyectoConstrucción'),
                unit_id: this.unidad,
              })
              .subscribe((data) => {
                console.log('success!!!!!!');
                this.electricitConsumptionService
                  .addECD({
                    quantity: this.cantidadCombustible,
                    percentage: this.porcentajeCombustible,
                    annual_consumption_required_id: data.id,
                    unit_id: this.unidadCombustible,
                    type: this.tipoCombustible,
                    source: 'fuel',
                  })
                  .subscribe((data) => {
                    console.log('combustible!!!!!');
                    console.log(data);
                  });
                console.log('success!!!!!!');
                this.electricitConsumptionService
                  .addECD({
                    quantity: this.cantidadMixElectrico,
                    percentage: this.porcentajeMixElectrico,
                    annual_consumption_required_id: data.id,
                    unit_id: this.unidadMixElectrico,
                    type: this.tipoMixElectrico,
                    source: 'electric',
                  })
                  .subscribe((data) => {
                    console.log('Mix electrico');
                    console.log(data);
                  });
                console.log('success!!!!!!');
                this.electricitConsumptionService
                  .addECD({
                    quantity: this.cantidadPanelesFotovoltaicos,
                    percentage: this.porcentajePanelesFotovoltaicos,
                    annual_consumption_required_id: data.id,
                    unit_id: this.unidadPanelesFotovoltaicos,
                    type: null,
                    source: 'panels',
                  })
                  .subscribe((data) => {
                    console.log('paneles fotovoltaicos');
                    console.log(data);
                  });
              });
          });
      })
    );
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
