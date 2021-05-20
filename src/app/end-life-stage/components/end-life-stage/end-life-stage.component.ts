import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { EndLifeService } from './../../../core/services/end-life/end-life.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-end-life-stage',
  templateUrl: './end-life-stage.component.html',
  styleUrls: ['./end-life-stage.component.scss'],
})
export class EndLifeStageComponent implements OnInit {
  sheetNames: any;
  contentData: any;
  listData: any;
  indexSheet: any;
  nameProject: string;
  projectId: number;
  SistemasConstructivos: any;
  listMateriales: any;
  selectedOptions: string[] = [];
  panelOpenFirst = false;
  panelOpenSecond = false;
  panelOpenThird = false;
  dataArrayEC = [];
  dataArrayTD = [];
  EC: any;
  TD: any;
  catalogoFuentes: any;
  catalogoUnidadEnergia: [];
  selectedSheet: any;

  constructor(
    private router: Router,
    private endLifeService: EndLifeService,
    private catalogsService: CatalogsService
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
      // console.log('lógica de unidades!!!!');
      // console.log(data);
      let energia = [];
      data.map((unidad) => {
        if (unidad.name_energy_unit === 'Hrs') {
          energia.push(data);
        }
      });
      this.catalogoUnidadEnergia = data;
    });
  }

  ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));

    this.sheetNames = [];
    this.nameProject = PDP.name_project;
    this.projectId = PDP.id;
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

    this.initialChange();
    this.indexSheet = undefined;
    this.dataArrayTD.push([]);
  }

  initialChange() {
    // take index of selection
    this.indexSheet = this.sheetNames.indexOf('Cimentación');
    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i && this.EC !== undefined) {
        this.dataArrayEC = this.EC[i];
        this.dataArrayTD = this.TD[i];
      }
    }
  }

  onGroupsChange(options: MatListOption[]) {
    let selectedSheet;
    // map these MatListOptions to their values
    options.map((option) => {
      selectedSheet = option.value;
    });
    // take index of selection
    this.indexSheet = this.sheetNames.indexOf(selectedSheet);
    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i && this.EC !== undefined) {
        this.dataArrayEC = this.EC[i];
        this.dataArrayTD = this.TD[i];
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
  }

  onNgModelChange(event) {
    // console.log('on ng model change', event);
  }

  showMaterials(event, sc) {
    const materiales = [];
    this.listData.map((data) => {
      if (data.Sistema_constructivo === sc) {
        materiales.push(data.Material);
      }
    });
    this.listMateriales = materiales;
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
    if (this.TD === undefined) {
      this.TD = [];
    }
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.EC[i] = this.dataArrayEC;
        this.TD[i] = this.dataArrayTD;
      }
    }
  }

  saveStepFour() {
    console.log('confirm step 4');
    try {
      Object.entries(this.EC).forEach(([key, ec]) => {
        let ecAny: any;
        ecAny = ec;
        ecAny.map((data) => {
          console.log('Fin de vida!!!');
          console.log(data);
          this.endLifeService
            .addECDP({
              quantity: data.cantidad,
              unit_id: data.unidad,
              source_information_id: data.fuente,
              section_id: parseInt(key, 10) + 1,
              project_id: this.projectId,
            })
            .subscribe((data) => {
              console.log(data);
            });
        });
      });
    } catch (error) {
      console.log(error);
    }
    this.router.navigateByUrl('/');
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
