import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { IntermedialComponent } from '../intermedial/intermedial.component';
import { PassStepComponent } from '../pass-step/pass-step.component';
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
  suma: number;

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
    private materialsService: MaterialsService,
    private catalogsService: CatalogsService,
    private router: Router,
    private electricitConsumptionService: ElectricitConsumptionService,
    public dialog: MatDialog
  ) {
    this.catalogsService.getEnergyUnits().subscribe((data) => {
      this.catalogoUnidadEnergia = data;
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
      this.nameProject = globalData[0].name;
      this.cantidad = globalData[0].quantity;
      this.unidad = globalData[0].unit_id;
      this.CAID = globalData[0].id;
    });

    this.electricitConsumptionService.getECD().subscribe((data) => {
      this.ECD_IDS = [];
      data.map((item) => {
        if (item.annual_consumption_required_id === this.CAID) {
          if (item.source === 'electric') {
            this.cantidadMixElectrico = this.trunc(item.quantity, 2);
            this.porcentajeMixElectrico = item.percentage;
            this.unidadMixElectrico = item.unit_id;
            this.tipoMixElectrico = item.type;
          }
          if (item.source === 'fuel') {
            this.cantidadCombustible = this.trunc(item.quantity, 2);
            this.porcentajeCombustible = item.percentage;
            this.unidadCombustible = item.unit_id;
            this.tipoCombustible = item.type;
          }
          if (item.source === 'panels') {
            this.cantidadPanelesFotovoltaicos = this.trunc(item.quantity, 2);
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
    this.suma = 0;
    this.cantidadMixElectrico = Math.round((cantidadMixElectrico * 100) / 100);
    this.porcentajeMixElectrico = Math.round(
      (((cantidadMixElectrico * 100) / this.cantidad) * 100) / 100
    );

    if (this.cantidadCombustible == null) {
      this.cantidadCombustible = 0;
    }
    if (this.cantidadPanelesFotovoltaicos == null) {
      this.cantidadPanelesFotovoltaicos = 0;
    }
    this.suma =
      +this.cantidadMixElectrico +
      +this.cantidadCombustible +
      +this.cantidadPanelesFotovoltaicos;

    console.log(this.suma);
    if (this.suma > this.cantidad) {
      alert('la cantidad supera el consumo anual requerido');
      this.cantidadMixElectrico = 0;
      this.porcentajeMixElectrico = 0;
    } else {
      console.log(this.suma);
    }
  }

  changePorcentajeME(porcentajeMixElectrico) {
    this.suma = 0;
    this.porcentajeMixElectrico = Math.round(
      (porcentajeMixElectrico * 100) / 100
    );
    this.cantidadMixElectrico = Math.round(
      (((porcentajeMixElectrico * this.cantidad) / 100) * 100) / 100
    );

    if (this.porcentajeCombustible == null) {
      this.porcentajeCombustible = 0;
    }
    if (this.porcentajePanelesFotovoltaicos == null) {
      this.porcentajePanelesFotovoltaicos = 0;
    }
    this.suma =
      +this.porcentajeMixElectrico +
      +this.porcentajeCombustible +
      +this.porcentajePanelesFotovoltaicos;

    console.log(this.suma);
    if (this.suma > 100) {
      alert('la cantidad supera el consumo anual requerido');
      this.porcentajeMixElectrico = 0;
      this.cantidadMixElectrico = 0;
    } else {
      console.log(this.suma);
    }
  }

  changeCantidadC(cantidadCombustible) {
    this.suma = 0;
    this.cantidadCombustible = Math.round((cantidadCombustible * 100) / 100);
    this.porcentajeCombustible = Math.round(
      (((cantidadCombustible * 100) / this.cantidad) * 100) / 100
    );

    if (this.cantidadMixElectrico == null) {
      this.cantidadMixElectrico = 0;
    }

    if (this.cantidadPanelesFotovoltaicos == null) {
      this.cantidadPanelesFotovoltaicos = 0;
    }
    this.suma =
      +this.cantidadMixElectrico +
      +this.cantidadCombustible +
      +this.cantidadPanelesFotovoltaicos;

    console.log(this.suma);
    if (this.suma > this.cantidad) {
      alert('la cantidad supera el consumo anual requerido');
      this.cantidadCombustible = 0;
      this.porcentajeCombustible = 0;
    } else {
      console.log(this.suma);
    }
  }

  changePorcentajeC(porcentajeCombustible) {
    this.suma = 0;
    this.porcentajeCombustible = Math.round(
      (porcentajeCombustible * 100) / 100
    );
    this.cantidadCombustible = Math.round(
      (((porcentajeCombustible * this.cantidad) / 100) * 100) / 100
    );

    if (this.porcentajeMixElectrico == null) {
      this.porcentajeMixElectrico = 0;
    }

    if (this.porcentajePanelesFotovoltaicos == null) {
      this.porcentajePanelesFotovoltaicos = 0;
    }
    this.suma =
      +this.porcentajeMixElectrico +
      +this.porcentajeCombustible +
      +this.porcentajePanelesFotovoltaicos;

    console.log(this.suma);
    if (this.suma > 100) {
      alert('la cantidad supera el consumo anual requerido');
      this.porcentajeCombustible = 0;
      this.cantidadCombustible = 0;
    } else {
      console.log(this.suma);
    }
  }

  changeCantidadPF(cantidadPanelesFotovoltaicos) {
    this.suma = 0;
    this.cantidadPanelesFotovoltaicos = Math.round(
      (cantidadPanelesFotovoltaicos * 100) / 100
    );
    this.porcentajePanelesFotovoltaicos = Math.round(
      (((cantidadPanelesFotovoltaicos * 100) / this.cantidad) * 100) / 100
    );

    if (this.cantidadMixElectrico == null) {
      this.cantidadMixElectrico = 0;
    }
    if (this.cantidadCombustible == null) {
      this.cantidadCombustible = 0;
    }

    this.suma =
      +this.cantidadMixElectrico +
      +this.cantidadCombustible +
      +this.cantidadPanelesFotovoltaicos;

    console.log(this.suma);
    if (this.suma > this.cantidad) {
      alert('la cantidad supera el consumo anual requerido');
      this.cantidadPanelesFotovoltaicos = 0;
      this.porcentajePanelesFotovoltaicos = 0;
    } else {
      console.log(this.suma);
    }
  }

  changePorcentajePF(porcentajePanelesFotovoltaicos) {
    this.suma = 0;
    this.porcentajePanelesFotovoltaicos = Math.round(
      (porcentajePanelesFotovoltaicos * 100) / 100
    );
    this.cantidadPanelesFotovoltaicos = Math.round(
      (((porcentajePanelesFotovoltaicos * this.cantidad) / 100) * 100) / 100
    );

    if (this.porcentajeMixElectrico == null) {
      this.porcentajeMixElectrico = 0;
    }
    if (this.porcentajeCombustible == null) {
      this.porcentajeCombustible = 0;
    }

    this.suma =
      +this.porcentajeMixElectrico +
      +this.porcentajeCombustible +
      +this.porcentajePanelesFotovoltaicos;

    console.log(this.suma);
    if (this.suma > 100) {
      alert('la cantidad supera el consumo anual requerido');
      this.porcentajePanelesFotovoltaicos = 0;
      this.cantidadPanelesFotovoltaicos = 0;
    } else {
      console.log(this.suma);
    }
  }

  async saveUpdate() {
    await this.electricitConsumptionService
      .updateACR(this.CAID.toString(), {
        id: this.CAID,
        quantity: this.cantidad,
        unit_id: this.unidad,
      })
      .subscribe((data) => {
        console.log('Se editó el ACR');
        console.log(data);
      });

    await this.ECD_IDS.map((item) => {
      this.electricitConsumptionService.getECDById(item).subscribe((data) => {
        console.log(data);
        if (data.source === 'fuel') {
          this.electricitConsumptionService
            .updateECD(data.id, {
              quantity: this.cantidadCombustible,
              percentage: this.porcentajeCombustible,
              annual_consumption_required_id: this.CAID,
              unit_id: this.unidadCombustible,
              type: this.tipoCombustible,
            })
            .subscribe((data) => {
              console.log('update fuel');
              console.log(data);
            });
        } else if (data.source === 'electric') {
          this.electricitConsumptionService
            .updateECD(data.id, {
              quantity: this.cantidadMixElectrico,
              percentage: this.porcentajeMixElectrico,
              annual_consumption_required_id: this.CAID,
              unit_id: this.unidadMixElectrico,
              type: this.tipoMixElectrico,
            })
            .subscribe((data) => {
              console.log('update electric');
              console.log(data);
            });
        } else if (data.source === 'panels') {
          this.electricitConsumptionService
            .updateECD(data.id, {
              quantity: this.cantidadPanelesFotovoltaicos,
              percentage: this.porcentajePanelesFotovoltaicos,
              annual_consumption_required_id: this.CAID,
              unit_id: this.unidadPanelesFotovoltaicos,
              type: null,
            })
            .subscribe((data) => {
              console.log('update panels');
              console.log(data);
            });
        }
      });
    });
  }
  async saveStepThree() {
    await this.electricitConsumptionService
      .updateACR(this.CAID.toString(), {
        id: this.CAID,
        quantity: this.cantidad,
        unit_id: this.unidad,
      })
      .subscribe((data) => {
        console.log('Se editó el ACR');
        console.log(data);
      });

    await this.ECD_IDS.map((item) => {
      this.electricitConsumptionService.getECDById(item).subscribe((data) => {
        console.log(data);
        if (data.source === 'fuel') {
          this.electricitConsumptionService
            .updateECD(data.id, {
              quantity: this.cantidadCombustible,
              percentage: this.porcentajeCombustible,
              annual_consumption_required_id: this.CAID,
              unit_id: this.unidadCombustible,
              type: this.tipoCombustible,
            })
            .subscribe((data) => {
              console.log('update fuel');
              console.log(data);
            });
        } else if (data.source === 'electric') {
          this.electricitConsumptionService
            .updateECD(data.id, {
              quantity: this.cantidadMixElectrico,
              percentage: this.porcentajeMixElectrico,
              annual_consumption_required_id: this.CAID,
              unit_id: this.unidadMixElectrico,
              type: this.tipoMixElectrico,
            })
            .subscribe((data) => {
              console.log('update electric');
              console.log(data);
            });
        } else if (data.source === 'panels') {
          this.electricitConsumptionService
            .updateECD(data.id, {
              quantity: this.cantidadPanelesFotovoltaicos,
              percentage: this.porcentajePanelesFotovoltaicos,
              annual_consumption_required_id: this.CAID,
              unit_id: this.unidadPanelesFotovoltaicos,
              type: null,
            })
            .subscribe((data) => {
              console.log('update panels');
              console.log(data);
            });
        }
      });
    });

    await this.materialsService.getEDCP().subscribe((edcp) => {
      const schemaFilter = edcp.filter(
        (schema) =>
          schema.project_id == localStorage.getItem('idProyectoConstrucción')
      );

      if (schemaFilter.length === 0) {
        this.router.navigateByUrl('end-life-stage');
      } else {
        this.router.navigateByUrl('update-end-life');
      }
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
          this.saveUpdate();
        }
        this.materialsService.getMaterialSchemeProyects().subscribe((msp) => {
          const schemaFilter = msp.filter(
            (schema) =>
              schema.project_id ==
              localStorage.getItem('idProyectoConstrucción')
          );

          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('materials-stage');
          } else {
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
          this.saveUpdate();
        }
        this.materialsService.getConstructionStage().subscribe((cse) => {
          const schemaFilter = cse.filter(
            (schema) =>
              schema.project_id ==
              localStorage.getItem('idProyectoConstrucción')
          );
          console.log(schemaFilter);

          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('construction-stage');
          } else {
            this.router.navigateByUrl('construction-stage-update');
          }
        });
      }
    });
  }

  trunc(x, positions = 0) {
    var s = x.toString();
    var l = s.length;
    var decimalLength = s.indexOf('.') + 1;
    var numStr = s.substr(0, decimalLength + positions);
    return Number(numStr);
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
            (schema) =>
              schema.project_id ==
              localStorage.getItem('idProyectoConstrucción')
          );

          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('end-life-stage');
          } else {
            this.router.navigateByUrl('update-end-life');
          }
        });
      }
    });
  }
}
