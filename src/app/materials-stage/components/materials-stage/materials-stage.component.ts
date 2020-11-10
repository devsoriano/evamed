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

  sheetNames: any;
  contentData: any;
  listData: any;
  indexSheet: any;
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

  constructor(
    private route: ActivatedRoute,
    private materialsService: MaterialsService,
  ) { 
    this.materialsService.getMaterials().subscribe(data => {
      this.allMaterials = data;
    });
  }

  ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    this.sheetNames = data.sheetNames;
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
    this.listData = this.contentData[this.indexSheet];
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
  }

  onNgModelChangeRevit(event) {
    console.log('on ng model change Revit', event);
  }

  onNgModelChangeDynamo(event) {
    console.log('on ng model change dynamo', event);
  }

  onNgModelChangeUser(event) {
    console.log('on ng model change user', event);
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

}
