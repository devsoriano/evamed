import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { EndLifeService } from './../../../core/services/end-life/end-life.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-end-life-stage',
  templateUrl: './end-life-stage.component.html',
  styleUrls: ['./end-life-stage.component.scss']
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
  EC: any;
  catalogoFuentes: any;
  catalogoUnidadEnergia: [];
  vertedero: string;
  reciclaje: string;
  reuso: string;

  constructor(
    private router: Router,
    private endLifeService: EndLifeService,
    private catalogsService: CatalogsService
  ) {
    this.catalogsService.getSourceInformation().subscribe(data => {
      const fuentes = [];
      data.map( fuente => {
        if (fuente.name_source_information !== 'Mexicaniuh - CADIS') {
          fuentes.push(fuente);
        }
      });
      this.catalogoFuentes = fuentes;
    });
    this.catalogsService.getEnergyUnits().subscribe(data => {
      this.catalogoUnidadEnergia = data;
    });
  }

  ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));

    this.sheetNames = [];
    this.nameProject = PDP.name_project;
    this.projectId = PDP.id;
    data.sheetNames.map( sheetname => {
      if ( sheetname !== 'Muros InterioresBis' &&
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
  }

  onGroupsChange(options: MatListOption[]) {
    let selectedSheet;
    // map these MatListOptions to their values
    options.map(option => {
      selectedSheet = option.value;
    });
    // take index of selection
    this.indexSheet = this.sheetNames.indexOf(selectedSheet);
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) {
      if ( this.indexSheet === i && this.EC !== undefined ) {
        this.dataArrayEC = this.EC[i];
      }
    }
  }

  onNgModelChange(event) {
    // console.log('on ng model change', event);
  }

  showMaterials(event, sc) {
    const materiales = [];
    this.listData.map( data => {
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
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.EC[i] = this.dataArrayEC;
      }
    }
  }

  saveStepFour() {
    console.log('confirm step 4');
    try {
      Object.entries(this.EC).forEach(([key, ec]) => {
        let ecAny: any;
        ecAny = ec;
        ecAny.map( data => {
          console.log('Fin de vida!!!');
          console.log(data);
          this.endLifeService.addECDP({
            quantity: data.cantidad,
            unit_id: data.unidad,
            source_information_id: data.fuente,
            section_id: parseInt(key, 10) + 1,
            project_id: this.projectId
          }).subscribe(data => {
            console.log(data);
          });
        });
      });
    } catch (error) {
      console.log(error);
    }
    this.router.navigateByUrl('/');

  }

}
