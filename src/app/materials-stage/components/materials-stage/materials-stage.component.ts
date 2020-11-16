import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-materials-stage',
  templateUrl: './materials-stage.component.html',
  styleUrls: ['./materials-stage.component.scss']
})

export class MaterialsStageComponent implements OnInit {

  // standard variables
  sheetNames: any;
  contentData: any;
  listData: any;
  indexSheet: number;
  ListSCRevit: any;
  ListSCDynamo: any;
  ListSCUsuario: any;
  listMateriales: any;
  selectedOptionsRevit: string[] = [];
  selectedOptionsDynamo: string[] = [];
  selectedOptionsUsuario: string[] = [];
  panelOpenFirst = false;
  panelOpenSecond = false;
  panelOpenThird = false;
  allMaterials = [];
  nameProject: string;
  SOR = [];
  SOD = [];
  SOU = [];

  constructor(
    private route: ActivatedRoute,
    private materialsService: MaterialsService,
  ) { 
  }

  ngOnInit() {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    
    this.nameProject = PDP.name_project;

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
    this.listData = this.contentData[this.indexSheet + 1];
    // get "sistemas constructivos"
    const SCRevit = [];
    const SCDynamo = [];
    const SCUsuario = [];

    this.listData.map( sc => {
      if (sc.Origen === 'Modelo de Revit') {
        SCRevit.push(sc.Sistema_constructivo);
      }
      if (sc.Origen === 'Calculado en Dynamo') {
        SCDynamo.push(sc.Sistema_constructivo);
      }
      if (sc.Origen === 'Usuario') {
        SCUsuario.push(sc.Sistema_constructivo);
      }
    });
    
    this.ListSCRevit = [...new Set(SCRevit)];
    this.ListSCDynamo = [...new Set(SCDynamo)];
    this.ListSCUsuario = [...new Set(SCUsuario)];
    
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) { 
      this.indexSheet === i && this.SOR !== undefined ? this.selectedOptionsRevit = this.SOR[i] : this.selectedOptionsRevit;
      this.indexSheet === i && this.SOD !== undefined ? this.selectedOptionsDynamo = this.SOD[i] : this.selectedOptionsDynamo;
      this.indexSheet === i && this.SOU !== undefined ? this.selectedOptionsUsuario = this.SOU[i] : this.selectedOptionsUsuario;
    }
  }

  onNgModelChangeRevit(event) {
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) { 
      this.indexSheet === i ? this.SOR[i] = this.selectedOptionsRevit : this.SOR[i];
    }
  }

  onNgModelChangeDynamo(event) {
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) { 
      this.indexSheet === i ? this.SOD[i] = this.selectedOptionsDynamo : this.SOD[i];
    }
  }

  onNgModelChangeUser(event) {
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) { 
      this.indexSheet === i ? this.SOU[i] = this.selectedOptionsUsuario : this.SOU[i];
    }
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

  saveStepOne() {
    
  }
}