import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { MatAccordion } from '@angular/material/expansion';
import { CatalogsService } from './../../../core/services/catalogs/catalogs.service';
import { ConstructionStageService } from 'src/app/core/services/construction-stage/construction-stage.service';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { IntermedialComponent } from '../intermedial/intermedial.component';
import { PassStepComponent } from '../pass-step/pass-step.component';

@Component({
  selector: 'app-construction-stage',
  templateUrl: './construction-stage.component.html',
  styleUrls: ['./construction-stage.component.scss'],
})
export class ConstructionStageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  sheetNames: any;
  contentData: any;
  listData: any;
  indexSheet: any;
  SistemasConstructivos: any;
  catalogoFuentes: any;
  catalogoUnidadEnergia: any;
  catalogoUnidadVolumen: [];
  catalogoUnidadMasa: [];
  nameProject: string;
  projectId: number;
  dataArrayEC = [];
  dataArrayAC = [];
  dataArrayDG = [];
  EC: any;
  AC: any;
  DG: any;
  selectedSheet: any;
  endSave: boolean = false;

  constructor(
    private materialsService: MaterialsService,
    private catalogsService: CatalogsService,
    private constructionStageService: ConstructionStageService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.catalogsService.getSourceInformation().subscribe((data) => {
      // this.catalogoFuentes = data;
      const fuentes = [];
      data.map((fuente) => {
        if (fuente.name_source_information !== 'Mexicaniuh - CADIS') {
          fuentes.push(fuente);
        }
      });
      this.catalogoFuentes = fuentes;
    });
    this.catalogsService.getEnergyUnits().subscribe((data) => {
      let energia = [];
      data.map((unidad) => {
        if (unidad.name_energy_unit === 'Hrs') {
          energia.push(unidad);
        }
      });
      this.catalogoUnidadEnergia = energia;
    });
    this.catalogsService.getVolumeUnits().subscribe((data) => {
      this.catalogoUnidadVolumen = data;
    });
    this.catalogsService.getBulkUnits().subscribe((data) => {
      this.catalogoUnidadMasa = data;
    });
  }

  ngOnInit() {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    const data = JSON.parse(sessionStorage.getItem('dataProject'));

    this.nameProject = PDP.name_project;
    this.projectId = PDP.id;

    this.sheetNames = [];
    data.sheetNames.map((sheetname) => {
      if (
        sheetname !== 'Muros InterioresBis' &&
        sheetname !== 'Inicio' &&
        sheetname !== 'Registro' &&
        sheetname !== 'ListaElementos' &&
        sheetname !== 'BD' &&
        sheetname !== 'Parametros'
      ) {
        this.sheetNames.push(sheetname);
      }
    });
    this.contentData = data.data;
    this.indexSheet = undefined;
  }

  onGroupsChange(options: MatListOption[]) {
    let selectedSheet;
    // map these MatListOptions to their values
    options.map((option) => {
      selectedSheet = option.value;
    });
    // take index of selection
    this.indexSheet = this.sheetNames.indexOf(selectedSheet);
    // take memory of saved data
    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i && this.EC !== undefined) {
        this.dataArrayEC = this.EC[i];
      }
      if (this.indexSheet === i && this.AC !== undefined) {
        this.dataArrayAC = this.AC[i];
      }
      if (this.indexSheet === i && this.DG !== undefined) {
        this.dataArrayDG = this.DG[i];
      }
    }

    this.selectedSheet = selectedSheet;
    if (this.dataArrayEC.length === 0) {
      this.addFormEC();
    }
    if (this.dataArrayAC.length === 0) {
      this.addFormAC();
    }
    if (this.dataArrayDG.length === 0) {
      this.addFormDG();
    }
  }

  addFormEC() {
    if (this.dataArrayEC === undefined) {
      this.dataArrayEC = [];
    }
    this.dataArrayEC.push([]);
  }

  removeFormEC(i) {
    this.dataArrayEC.splice(i);
  }

  onSaveEC() {
    let i;
    if (this.EC === undefined) {
      this.EC = [];
    }
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.EC[i] = this.dataArrayEC;
      }
    }
  }

  addFormAC() {
    if (this.dataArrayAC === undefined) {
      this.dataArrayAC = [];
    }
    this.dataArrayAC.push([]);
  }

  removeFormAC(i) {
    this.dataArrayAC.splice(i);
  }

  onSaveAC() {
    let i;
    if (this.AC === undefined) {
      this.AC = [];
    }
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.AC[i] = this.dataArrayAC;
      }
    }
  }

  addFormDG() {
    if (this.dataArrayDG === undefined) {
      this.dataArrayDG = [];
    }
    this.dataArrayDG.push([]);
  }

  removeFormDG(i) {
    this.dataArrayDG.splice(i);
  }

  onSaveDG() {
    let i;
    if (this.DG === undefined) {
      this.DG = [];
    }
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.DG[i] = this.dataArrayDG;
      }
    }
  }

  onNgModelChange(event) {}

  async saveStepTwo() {
    try {
      await Object.entries(this.EC).forEach(([key, ec]) => {
        let ecAny: any;
        ecAny = ec;
        ecAny.map((data) => {
          this.constructionStageService
            .addConstructiveSistemElement({
              quantity: data.cantidad,
              project_id: this.projectId,
              section_id: parseInt(key, 10) + 1,
              constructive_process_id: 1,
              volume_unit_id: null,
              energy_unit_id: data.unidad,
              bulk_unit_id: null,
              source_information_id: data.fuente,
            })
            .subscribe((data) => {
              console.log('Success EC!!!!!!!');
              console.log(data);
            });
        });
      });
    } catch (error) {
      console.log(error);
    }

    try {
      await Object.entries(this.AC).forEach(([key, ec]) => {
        let ecAny: any;
        ecAny = ec;
        ecAny.map((data) => {
          this.constructionStageService
            .addConstructiveSistemElement({
              quantity: data.cantidad,
              project_id: this.projectId,
              section_id: parseInt(key, 10) + 1,
              constructive_process_id: 2,
              volume_unit_id: data.unidad,
              energy_unit_id: null,
              bulk_unit_id: null,
              source_information_id: data.fuente,
            })
            .subscribe((data) => {
              console.log('Success AC!!!!!');
              console.log(data);
            });
        });
      });
    } catch (error) {
      console.log(error);
    }

    try {
      await Object.entries(this.DG).forEach(([key, ec]) => {
        let ecAny: any;
        ecAny = ec;
        ecAny.map((data) => {
          this.constructionStageService
            .addConstructiveSistemElement({
              quantity: data.cantidad,
              project_id: this.projectId,
              section_id: parseInt(key, 10) + 1,
              constructive_process_id: 3,
              volume_unit_id: null,
              energy_unit_id: null,
              bulk_unit_id: data.unidad,
              source_information_id: data.fuente,
            })
            .subscribe((data) => {
              console.log('Success DG!!!!!');
              console.log(data);
            });
        });
      });
    } catch (error) {
      console.log(error);
    }

    //await this.showModal();
    // this.router.navigateByUrl('usage-stage');
  }

  goToMaterialStage() {
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
        if(result.save) {
          this.saveStepTwo();
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
    this.router.navigateByUrl('construction-stage');
  }

  
  goToUsageStage() { 
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
        if(result.save) {
          this.saveStepTwo();
        }
        this.materialsService.getACR().subscribe((acr) => {
          const schemaFilter = acr.filter(
            (schema) => schema.project_id === this.projectId
          );
    
          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('usage-stage');
          } else {
            localStorage.setItem(
              'idProyectoConstrucción',
              this.projectId.toString()
            );
            this.router.navigateByUrl('usage-stage-update');
          }
        });
      }
    });
  }

  goToEndLife() {
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
        if(result.save) {
          this.saveStepTwo();
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
    this.saveStepTwo();
    this.materialsService.getACR().subscribe((acr) => {
      const schemaFilter = acr.filter(
        (schema) => schema.project_id === this.projectId
      );

      if (schemaFilter.length === 0) {
        this.router.navigateByUrl('usage-stage');
      } else {
        localStorage.setItem(
          'idProyectoConstrucción',
          this.projectId.toString()
        );
        this.router.navigateByUrl('usage-stage-update');
      }
    });
  }

}
