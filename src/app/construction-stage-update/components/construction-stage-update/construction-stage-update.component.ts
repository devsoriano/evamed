import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { MatAccordion } from '@angular/material/expansion';
import { CatalogsService } from './../../../core/services/catalogs/catalogs.service';
import { ConstructionStageService } from 'src/app/core/services/construction-stage/construction-stage.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { IntermedialComponent } from '../intermedial/intermedial.component';
import { MatDialog } from '@angular/material/dialog';
import { PassStepComponent } from '../pass-step/pass-step.component';

@Component({
  selector: 'app-construction-stage-update',
  templateUrl: './construction-stage-update.component.html',
  styleUrls: ['./construction-stage-update.component.scss'],
})
export class ConstructionStageUpdateComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  sheetNames: any;
  contentData: any;
  listData: any;
  indexSheet: number;
  SistemasConstructivos: any;
  catalogoFuentes: any;
  catalogoUnidadEnergia: any;
  catalogoUnidadVolumen: [];
  catalogoUnidadMasa: [];
  nameProject: string;
  dataArrayEC = [];
  dataArrayAC = [];
  dataArrayDG = [];
  EC: any;
  AC: any;
  DG: any;
  selectedSheet: any;
  CSE: any;
  IMGP = [];
  projectId: number;

  constructor(
    private materialsService: MaterialsService,
    private catalogsService: CatalogsService,
    private projectsService: ProjectsService,
    private constructionStageService: ConstructionStageService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.catalogsService.getSourceInformation().subscribe((data) => {
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
    this.constructionStageService
      .getConstructiveSystemElement()
      .subscribe((data) => {
        const CSE = [];
        data.map((item) => {
          if (
            item.project_id ===
            parseInt(localStorage.getItem('idProyectoConstrucción'), 10)
          ) {
            CSE.push(item);
          }
        });
        this.CSE = CSE;
      });
    this.projectsService
      .getProjectById(localStorage.getItem('idProyectoConstrucción'))
      .subscribe((data: any) => {
        this.nameProject = data.name_project;
      });
  }

  ngOnInit() {
    //carga de imagenes
    let images = [
      '../../../../assets/map/2.jpg',
      '../../../../assets/map/4.jpg',
      '../../../../assets/map/5.jpg',
      '../../../../assets/map/6.jpg',
      '../../../../assets/map/7.jpg',
      '../../../../assets/map/8.jpg',
      '../../../../assets/map/9.jpg',
      '../../../../assets/map/10.jpg',
      '../../../../assets/map/11.jpg',
      '../../../../assets/map/12.jpg',
      '../../../../assets/map/13.jpg',
      '../../../../assets/map/14.jpg',
    ];
    this.preload(images);

    this.sheetNames = [
      'Cimentación',
      'Muros interiores',
      'Muros exteriores',
      'Pisos',
      'Techos',
      'Entrepiso',
      'Estructura',
      'Puertas',
      'Ventanas',
      'Inst. especiales',
      'Otros',
    ];

    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    this.projectId = PDP.id;
  }

  preload(array) {
    for (var i = 0; i < array.length; i++) {
      this.IMGP[i] = new Image();
      this.IMGP[i].src = array[i];
    }
  }

  trunc(x, posiciones = 0) {
    var s = x.toString();
    var l = s.length;
    var decimalLength = s.indexOf('.') + 1;
    var numStr = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
  }

  onGroupsChange(options: MatListOption[]) {
    let selectedSheet;
    // map these MatListOptions to their values
    options.map((option) => {
      selectedSheet = option.value;
    });
    // take index of selection
    this.indexSheet = this.sheetNames.indexOf(selectedSheet);

    // map data exist to edit
    let getDataEC = [];

    this.CSE.map((item) => {
      const prevData = [];
      if (item.section_id === this.indexSheet + 1) {
        switch (item.constructive_process_id) {
          case 1:
            prevData['id'] = item.id;
            prevData['cantidad'] = this.trunc(item.quantity);
            prevData['fuente'] = item.source_information_id;
            prevData['energy_unit_id'] = item.energy_unit_id;
            getDataEC.push(prevData);
            break;
          default:
            break;
        }
      }
    });

    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.dataArrayEC = getDataEC;

        if (this.EC !== undefined) {
          this.dataArrayEC = this.EC[i];
        }

        if (this.dataArrayEC === undefined) {
          this.dataArrayEC = getDataEC;
        }
      }
    }

    //Excepciones de insert
    this.selectedSheet = selectedSheet;
    if (this.dataArrayEC !== undefined) {
      if (this.dataArrayEC.length === 0) {
        this.addFormEC();
      }
    } else {
      this.addFormEC();
    }

    //Load Save
    this.onSaveECNatural();
  }

  addFormEC() {
    if (this.dataArrayEC === undefined) {
      this.dataArrayEC = [];
    }
    this.dataArrayEC.push([]);
  }

  removeFormEC(i, id) {
    this.constructionStageService
      .deleteConstructiveSystemElement(id)
      .subscribe(() => {
        console.log(`Se eliminó ${id}`);
      });

    this.dataArrayEC.splice(i, i);
  }

  onSaveECNatural() {
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

    console.log('entra al proceso de OnSaveEC!!!!!!!!!!!!!!!!!!!!!!');

    Object.entries(this.EC).forEach(([key, ec]) => {
      let ecAny: any;
      ecAny = ec;
      if (this.indexSheet === parseInt(key)) {
        ecAny.map((data) => {
          console.log(data);
          if (data.id !== undefined) {
            this.constructionStageService
              .deleteConstructiveSystemElement(data.id)
              .subscribe(() => {
                console.log(`Se eliminó ${data.id}`);
              });
          }
          try {
            this.constructionStageService
              .addConstructiveSistemElement({
                quantity: data.cantidad,
                project_id: parseInt(
                  localStorage.getItem('idProyectoConstrucción'),
                  10
                ),
                section_id: parseInt(key, 10) + 1,
                constructive_process_id: 1,
                volume_unit_id: null,
                energy_unit_id: 2, // value hours
                bulk_unit_id: null,
                source_information_id: data.fuente,
              })
              .subscribe((data) => {
                console.log(`Se agregó ${data.id}`);
              });
          } catch (e) {
            console.log('No hay que eliminar');
          }
        });
      }
    });
  }

  addFormAC() {
    if (this.dataArrayAC === undefined) {
      this.dataArrayAC = [];
    }
    this.dataArrayAC.push([]);
  }

  removeFormAC(i, id) {
    this.constructionStageService
      .deleteConstructiveSystemElement(id)
      .subscribe(() => {
        console.log(`Se eliminó ${id}`);
      });
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

  saveStepTwo() {
    console.log('update steep two');
  }

  goToMaterialStage() {
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
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
    this.router.navigateByUrl('construction-stage');
  }

  goToUsageStage() {
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
        this.materialsService.getACR().subscribe((acr) => {
          const schemaFilter = acr.filter(
            (schema) =>
              schema.project_id ==
              localStorage.getItem('idProyectoConstrucción')
          );

          if (schemaFilter.length === 0) {
            this.router.navigateByUrl('usage-stage');
          } else {
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

  continueStep(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(IntermedialComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.ngOnInit();
    });
  }
}
