import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListOption } from '@angular/material/list';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { EndLifeService } from 'src/app/core/services/end-life/end-life.service';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { ProjectsService } from 'src/app/core/services/projects/projects.service';
import { IntermedialComponent } from '../intermedial/intermedial.component';
import { PassStepComponent } from '../pass-step/pass-step.component';

@Component({
  selector: 'app-end-life-update',
  templateUrl: './end-life-update.component.html',
  styleUrls: ['./end-life-update.component.scss'],
})
export class EndLifeUpdateComponent implements OnInit {
  nameProject: string;
  selectedSheet: any;
  sheetNames: any;
  indexSheet: any;
  dataArrayEC = [];
  dataArrayTD = [];
  EC: any;
  TD: any;
  catalogoFuentes: any;
  catalogoUnidadEnergia: any;
  ECDP: any;
  projectId: any;

  constructor(
    private projectsService: ProjectsService,
    private catalogsService: CatalogsService,
    private endLifeService: EndLifeService,
    private materialsService: MaterialsService,
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
    this.projectsService
      .getProjectById(localStorage.getItem('idProyectoConstrucción'))
      .subscribe((data: any) => {
        this.nameProject = data.name_project;
        this.projectId = data.id;
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
    this.endLifeService.getECDP().subscribe((data) => {
      const ECDP = [];
      data.map((item) => {
        if (
          item.project_id ===
          parseInt(localStorage.getItem('idProyectoConstrucción'), 10)
        ) {
          ECDP.push(item);
        }
      });

      this.ECDP = ECDP;
    });
  }

  ngOnInit(): void {
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

    this.indexSheet = undefined;
    this.dataArrayTD.push([]);
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
    let getDataECPD = [];

    this.ECDP.map((item: any) => {
      const prevData = [];
      if (item.section_id === this.indexSheet + 1) {
        prevData['id'] = item.id;
        prevData['cantidad'] = item.quantity;
        prevData['fuente'] = item.source_information_id;
        prevData['energy_unit_id'] = item.energy_unit_id;
        getDataECPD.push(prevData);
      }
    });

    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.dataArrayEC = getDataECPD;

        if (this.EC !== undefined) {
          this.dataArrayEC = this.EC[i];
        }

        if (this.dataArrayEC === undefined) {
          this.dataArrayEC = getDataECPD;
        }
      }
    }

    this.selectedSheet = selectedSheet;

    this.dataArrayEC === undefined ? (this.dataArrayEC = []) : this.dataArrayEC;
    this.dataArrayTD === undefined ? (this.dataArrayTD = []) : this.dataArrayTD;

    if (this.dataArrayEC.length === 0) {
      this.dataArrayEC.push([]);
    }

    if (this.dataArrayTD.length === 0) {
      this.dataArrayTD.push([]);
    }

    this.onSaveECNatural();
  }

  removeFormEC(i, id) {
    this.endLifeService.deleteECDP(id).subscribe(() => {
      console.log(`Se eliminó ${id}`);
    });
    this.dataArrayEC.splice(i, i);
  }

  addFormEC() {
    if (this.dataArrayEC === undefined) {
      this.dataArrayEC = [];
    }
    this.dataArrayEC.push([]);
  }

  onSaveECNatural() {
    let i;
    if (this.EC === undefined) {
      this.EC = [];
    }
    /*if (this.TD === undefined) {
      this.TD = [];
    }*/
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.EC[i] = this.dataArrayEC;
        // this.TD[i] = this.dataArrayTD;
      }
    }
  }

  onSaveEC() {
    let i;
    if (this.EC === undefined) {
      this.EC = [];
    }
    /*if (this.TD === undefined) {
      this.TD = [];
    }*/
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.EC[i] = this.dataArrayEC;
        // this.TD[i] = this.dataArrayTD;
      }
    }

    Object.entries(this.EC).forEach(([key, ec]) => {
      let ecAny: any;
      ecAny = ec;
      if (this.indexSheet === parseInt(key)) {
        ecAny.map((data) => {
          if (data.id !== undefined) {
            this.endLifeService.deleteECDP(data.id).subscribe(() => {
              console.log(`Se eliminó ${data.id}`);
            });
          }
          try {
            this.endLifeService
              .addECDP({
                quantity: data.cantidad,
                unit_id: 2,
                source_information_id: data.fuente,
                section_id: parseInt(key, 10) + 1,
                project_id: parseInt(
                  localStorage.getItem('idProyectoConstrucción'),
                  10
                ),
              })
              .subscribe((data) => {
                console.log(data);
              });
          } catch (e) {
            console.log('No hay que eliminar***');
          }
        });
      }
    });
  }

  saveStepFour() {}

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
    const dialogRef = this.dialog.open(PassStepComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.continue) {
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
    this.router.navigateByUrl('end-life-stage');
  }

  continueStep(event: Event) {
    console.log('continuar!!!!');
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
