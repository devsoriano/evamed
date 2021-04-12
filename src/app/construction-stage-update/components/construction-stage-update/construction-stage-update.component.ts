import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { MatAccordion } from '@angular/material/expansion';
import { CatalogsService } from './../../../core/services/catalogs/catalogs.service';
import { ConstructionStageService } from 'src/app/core/services/construction-stage/construction-stage.service';

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

  constructor(
    private catalogsService: CatalogsService,
    private constructionStageService: ConstructionStageService,
    private router: Router
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
  }

  ngOnInit() {
    this.nameProject = 'Genérico';

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
    let getDataAC = [];
    let getDataDG = [];
    this.CSE.map((item, key) => {
      const prevData = [];
      if (item.section_id === this.indexSheet + 1) {
        switch (item.constructive_process_id) {
          case 1:
            prevData['cantidad'] = item.quantity;
            prevData['fuente'] = item.source_information_id;
            prevData['energy_unit_id'] = item.energy_unit_id;
            getDataEC.push(prevData);
            break;
          case 2:
            prevData['cantidad'] = item.quantity;
            prevData['fuente'] = item.source_information_id;
            prevData['energy_unit_id'] = item.energy_unit_id;
            getDataAC.push(prevData);
            break;
          case 3:
            prevData['cantidad'] = item.quantity;
            prevData['fuente'] = item.source_information_id;
            prevData['energy_unit_id'] = item.energy_unit_id;
            getDataDG.push(prevData);
            break;
          default:
            break;
        }
      }
    });

    // take memory of saved data
    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      // Initial data exist
      if (this.indexSheet === i) {
        this.dataArrayEC = getDataEC;
        this.dataArrayAC = getDataAC;
        this.dataArrayDG = getDataDG;
      }
      // Flujo normal
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

  saveStepTwo() {
    console.log('update steep two');

    try {
      Object.entries(this.EC).forEach(([key, ec]) => {
        let ecAny: any;
        ecAny = ec;
        ecAny.map((data) => {
          this.constructionStageService
            .addConstructiveSistemElement({
              quantity: data.cantidad,
              project_id: localStorage.getItem('idProyectoConstrucción'),
              section_id: parseInt(key, 10) + 1,
              constructive_process_id: 1,
              volume_unit_id: null,
              energy_unit_id: data.energy_unit_id,
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
    // this.router.navigateByUrl('usage-stage');
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
