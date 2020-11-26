import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { MatAccordion } from '@angular/material/expansion';
import { CatalogsService } from './../../../core/services/catalogs/catalogs.service';
import { ConstructionStageService } from 'src/app/core/services/construction-stage/construction-stage.service';

@Component({
  selector: 'app-construction-stage',
  templateUrl: './construction-stage.component.html',
  styleUrls: ['./construction-stage.component.scss']
})

export class ConstructionStageComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  sheetNames: any;
  contentData: any;
  listData: any;
  indexSheet: number;
  SistemasConstructivos: any;
  catalogoFuentes: [];
  catalogoUnidadEnergia: [];
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

  constructor(
    private route: ActivatedRoute,
    private catalogsService: CatalogsService,
    private constructionStageService: ConstructionStageService
  ) { 
    this.catalogsService.getSourceInformation().subscribe(data => {
      this.catalogoFuentes = data;
    });
    this.catalogsService.getEnergyUnits().subscribe(data => {
      this.catalogoUnidadEnergia = data;
    });
    this.catalogsService.getVolumeUnits().subscribe(data => {
      this.catalogoUnidadVolumen = data;
    });
    this.catalogsService.getBulkUnits().subscribe(data => {
      this.catalogoUnidadMasa = data;
    });
  }

  ngOnInit() {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    
    this.nameProject = PDP.name_project;
    this.projectId = PDP.id;

    this.sheetNames = [];
    data.sheetNames.map( sheetname => {
      if ( sheetname !== "Muros InterioresBis" && 
        sheetname !== "Inicio" &&
        sheetname !== "Registro" &&
        sheetname !== "ListaElementos" &&
        sheetname !== "BD" &&
        sheetname !== "Parametros"
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
    // take memory of saved data 
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) {
      if ( this.indexSheet === i && this.EC !== undefined ) {
        this.dataArrayEC = this.EC[i];
      }
      if ( this.indexSheet === i && this.AC !== undefined ) {
        this.dataArrayAC = this.AC[i];
      }
      if ( this.indexSheet === i && this.DG !== undefined ) {
        this.dataArrayDG = this.DG[i];
      }
    }
  }

  addFormEC() {
    this.dataArrayEC === undefined ? this.dataArrayEC = []: this.dataArrayEC;
    this.dataArrayEC.push([]);
  }

  removeFormEC(i) {
    this.dataArrayEC.splice(i)
  }

  onSaveEC() {
    let i;
    this.EC === undefined ? this.EC = []: this.EC;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.EC[i] = this.dataArrayEC;
      }
    }
  }

  addFormAC() {
    this.dataArrayAC === undefined ? this.dataArrayAC = []: this.dataArrayAC;
    this.dataArrayAC.push([]);
  }

  removeFormAC(i) {
    this.dataArrayAC.splice(i)
  }

  onSaveAC() {
    let i;
    this.AC === undefined ? this.AC = []: this.AC;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.AC[i] = this.dataArrayAC;
      }
    }
  }

  addFormDG() {
    this.dataArrayDG === undefined ? this.dataArrayDG = []: this.dataArrayDG;
    this.dataArrayDG.push([]);
  }

  removeFormDG(i) {
    this.dataArrayDG.splice(i)
  }

  onSaveDG() {
    let i;
    this.DG === undefined ? this.DG = []: this.DG;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.DG[i] = this.dataArrayDG;
      }
    }
  }

  onNgModelChange(event) {
  }

  saveStepTwo() {
    try {
      Object.entries(this.EC).forEach(([key, ec]) => {
        let ec_any: any;
        ec_any = ec
        ec_any.map( data => {
          this.constructionStageService.addConstructiveSistemElement({
            'quantity': data.cantidad,
            'project_id': this.projectId,
            'section_id': parseInt(key) + 1,
            'constructive_process_id': 1,
            'volume_unit_id': null,
            'energy_unit_id': data.unidad,
            'bulk_unit_id': null,
            'source_information_id': data.fuente
        }).subscribe(data => {
            console.log('Success!');
            console.log(data);
          });
        });
      });
    } catch(error) {
      console.log(error);
    }

    try {
      Object.entries(this.AC).forEach(([key, ec]) => {
        let ec_any: any;
        ec_any = ec
        ec_any.map( data => {
          this.constructionStageService.addConstructiveSistemElement({
            'quantity': data.cantidad,
            'project_id': this.projectId,
            'section_id': parseInt(key) + 1,
            'constructive_process_id': 2,
            'volume_unit_id':  data.unidad,
            'energy_unit_id': null,
            'bulk_unit_id': null,
            'source_information_id': data.fuente
        }).subscribe(data => {
            console.log('Success!');
            console.log(data);
          });
        });
      });
    } catch(error) {
      console.log(error);
    }

    try {
      Object.entries(this.DG).forEach(([key, ec]) => {
        let ec_any: any;
        ec_any = ec
        ec_any.map( data => {
          this.constructionStageService.addConstructiveSistemElement({
            'quantity': data.cantidad,
            'project_id': this.projectId,
            'section_id': parseInt(key) + 1,
            'constructive_process_id': 3,
            'volume_unit_id':  null,
            'energy_unit_id': null,
            'bulk_unit_id':data.unidad,
            'source_information_id': data.fuente
        }).subscribe(data => {
            console.log('Success!');
            console.log(data);
          });
        });
      });
    } catch(error) {
      console.log(error);
    }
  }

}
