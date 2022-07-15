import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { ElectricitConsumptionService } from './../../../core/services/electricity-consumption/electricit-consumption.service';
import { IntermedialComponent } from '../intermedial/intermedial.component';
import { MatDialog } from '@angular/material/dialog';
import { PassStepComponent } from '../pass-step/pass-step.component';

@Component({
  selector: 'app-usage-stage',
  templateUrl: './usage-stage.component.html',
  styleUrls: ['./usage-stage.component.scss'],
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
  catalogoUnidadEnergia: any;
  catalogoTipoEnergiaElectrica: any;
  catalogoTipoEnergiaCombustible: any;
  endSave: boolean = false;

  constructor(
    private materialsService: MaterialsService,
    private catalogsService: CatalogsService,
    private router: Router,
    private electricitConsumptionService: ElectricitConsumptionService,
    public dialog: MatDialog
  ) {
    this.catalogsService.getEnergyUnits().subscribe((data) => {
      let catalogoUnidades = [];
      data.map((unidad) => {
        if (unidad.name_energy_unit === 'kWh') {
          catalogoUnidades.push(unidad);
        }
      });
      console.log(catalogoUnidades);
      this.catalogoUnidadEnergia = catalogoUnidades;
    });
    this.catalogsService.getTypeEnergy().subscribe((data) => {
      // this.catalogoTipoEnergia = data;
      const tipoEnergiaElectrica = [];
      const tipoEnergiaCombustible = [];
      data.map((tipo) => {
        /*if (
          tipo.name_type_energy ===
            'Energía eléctrica, Bajo voltaje (MX)-ECOINVENT3' ||
          tipo.name_type_energy ===
            'Energía eléctrica, Alto voltaje (MX)-ECOINVENT3' ||
          tipo.name_type_energy ===
            'Energía eléctrica, Medio voltaje (MX)-ECOINVENT3' ||
          tipo.name_type_energy ===
            'Energía eléctrica, Alto voltaje (MX)-MEXICANIUH' ||
          tipo.name_type_energy ===
            'Energía eléctrica, Medio voltaje (MX)-MEXICANIUH' ||
          tipo.name_type_energy ===
            'Energía eléctrica, Bajo voltaje (MX)-MEXICANIUH'
        ) {
        tipoEnergiaElectrica.push(tipo);
        }*/

        if (
          tipo.name_type_energy ===
          'Calefacción doméstica con gas natural (GLO)'
        ) {
          tipoEnergiaCombustible.push(tipo);
        } else {
          tipoEnergiaElectrica.push(tipo);
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
    this.unidadPanelesFotovoltaicos = 1;
    this.unidad = 1;
    this.unidadCombustible = 1;
    this.unidadMixElectrico = 1;
    console.log(this.catalogoUnidadEnergia);
  }

  changeCantidadME(cantidadMixElectrico) {
    this.porcentajeMixElectrico = (cantidadMixElectrico * 100) / this.cantidad;
  }

  changePorcentajeME(porcentajeMixElectrico) {
    this.cantidadMixElectrico = (porcentajeMixElectrico * this.cantidad) / 100;
  }

  changeCantidadC(cantidadCombustible) {
    this.porcentajeCombustible = (cantidadCombustible * 100) / this.cantidad;
  }

  changePorcentajeC(porcentajeCombustible) {
    this.cantidadCombustible = (porcentajeCombustible * this.cantidad) / 100;
  }

  changeCantidadPF(cantidadPanelesFotovoltaicos) {
    this.porcentajePanelesFotovoltaicos =
      (cantidadPanelesFotovoltaicos * 100) / this.cantidad;
  }

  changePorcentajePF(porcentajePanelesFotovoltaicos) {
    this.cantidadPanelesFotovoltaicos =
      (porcentajePanelesFotovoltaicos * this.cantidad) / 100;
  }

  async saveStepThree() {
    await this.electricitConsumptionService
      .addACR({
        quantity: this.cantidad,
        project_id: this.projectId,
        unit_id: this.unidad,
      })
      .subscribe(async (data) => {
        await this.electricitConsumptionService
          .addECD({
            quantity:
              this.cantidadCombustible === undefined
                ? 0
                : this.cantidadCombustible,
            percentage:
              this.porcentajeCombustible === undefined
                ? 0
                : this.porcentajeCombustible,
            annual_consumption_required_id: data.id,
            unit_id:
              this.unidadCombustible === undefined ? 1 : this.unidadCombustible,
            type:
              this.tipoCombustible === undefined ? 11 : this.tipoCombustible,
            source: 'fuel',
          })
          .subscribe((data) => {
            console.log('combustible!!!!!');
            console.log(data);
          });
        await this.electricitConsumptionService
          .addECD({
            quantity:
              this.cantidadMixElectrico === undefined
                ? 0
                : this.cantidadMixElectrico,
            percentage:
              this.porcentajeMixElectrico === undefined
                ? 0
                : this.porcentajeMixElectrico,
            annual_consumption_required_id: data.id,
            unit_id:
              this.unidadMixElectrico === undefined
                ? 1
                : this.unidadMixElectrico,
            type:
              this.tipoMixElectrico === undefined ? 1 : this.tipoMixElectrico,
            source: 'electric',
          })
          .subscribe((data) => {
            console.log('Mix electrico');
            console.log(data);
          });
        await this.electricitConsumptionService
          .addECD({
            quantity:
              this.cantidadPanelesFotovoltaicos === undefined
                ? 0
                : this.cantidadPanelesFotovoltaicos,
            percentage:
              this.porcentajePanelesFotovoltaicos === undefined
                ? 0
                : this.porcentajePanelesFotovoltaicos,
            annual_consumption_required_id: data.id,
            unit_id:
              this.unidadPanelesFotovoltaicos === undefined
                ? 1
                : this.unidadPanelesFotovoltaicos,
            type: null,
            source: 'panels',
          })
          .subscribe((data) => {
            console.log('paneles fotovoltaicos');
            console.log(data);
          });
        await this.router.navigateByUrl('end-life-stage');
      });
  }

  goToMaterialStage() {
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
        if (result.save) {
          this.saveStepThree();
        }
        this.materialsService.getMaterialSchemeProyects().subscribe((msp) => {
          const schemaFilter = msp.filter(
            (schema) => schema.project_id === this.projectId
          );

          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('materials-stage');
          } else {
            localStorage.setItem(
              'idProyectoConstrucción',
              this.projectId.toString()
            );
            this.router.navigateByUrl('material-stage-update');
          }
        });
      }
    });
  }

  goToConstructionStage() {
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
        if (result.save) {
          this.saveStepThree();
        }
        this.materialsService.getConstructionStage().subscribe((cse) => {
          const schemaFilter = cse.filter(
            (schema) => schema.project_id === this.projectId
          );

          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('construction-stage');
          } else {
            localStorage.setItem(
              'idProyectoConstrucción',
              this.projectId.toString()
            );
            this.router.navigateByUrl('construction-stage-update');
          }
        });
      }
    });
  }

  goToUsageStage() {
    this.router.navigateByUrl('usage-stage');
  }

  goToEndLife() {
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
        if (result.save) {
          this.saveStepThree();
        }
        this.materialsService.getEDCP().subscribe((edcp) => {
          const schemaFilter = edcp.filter(
            (schema) => schema.project_id === this.projectId
          );

          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('end-life-stage');
          } else {
            localStorage.setItem(
              'idProyectoConstrucción',
              this.projectId.toString()
            );
            this.router.navigateByUrl('update-end-life');
          }
        });
      }
    });
  }

  continue() {
    this.saveStepThree();
    this.materialsService.getEDCP().subscribe((edcp) => {
      const schemaFilter = edcp.filter(
        (schema) => schema.project_id === this.projectId
      );

      if (schemaFilter.length === 0) {
        this.router.navigateByUrl('end-life-stage');
      } else {
        localStorage.setItem(
          'idProyectoConstrucción',
          this.projectId.toString()
        );
        this.router.navigateByUrl('update-end-life');
      }
    });
  }
}
