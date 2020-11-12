import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatListOption } from '@angular/material/list';
import { MatAccordion } from '@angular/material/expansion';
import { CatalogsService } from './../../../core/services/catalogs/catalogs.service';
import 'rxjs/add/operator/filter';

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
  indexSheet: any;
  SistemasConstructivos: any;
  catalogoFuentes: [];
  catalogoUnidadEnergia: [];
  catalogoUnidadVolumen: [];
  catalogoUnidadMasa: [];

  EnergiaConsumida: {
    cantidad, 
    unidad,
    fuente,
  }[] = [{ 
    cantidad : 0, 
    unidad: '',
    fuente: ''
  }];
  dataArrayEC = [];

  AguaConsumida: {
    cantidad, 
    unidad,
    fuente,
  }[] = [{ 
    cantidad : 0, 
    unidad: '',
    fuente: ''
  }];
  dataArrayAC = [];

  DesechosGenerados: {
    cantidad, 
    unidad,
    fuente,
  }[] = [{ 
    cantidad : 0, 
    unidad: '',
    fuente: ''
  }];
  dataArrayDG = [];

  constructor(
    private route: ActivatedRoute,
    private catalogsService: CatalogsService,
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
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    this.sheetNames = data.sheetNames;
    this.contentData = data.data;
    this.dataArrayEC.push(this.EnergiaConsumida);
    this.dataArrayAC.push(this.AguaConsumida);
    this.dataArrayDG.push(this.DesechosGenerados);
    console.log('entra a esta madre');
    console.log(this.indexSheet);
  }

  addFormEC() {
    this.EnergiaConsumida = [{ 
      cantidad : 0, 
      unidad: '',
      fuente: ''
    }];
    this.dataArrayEC.push(this.EnergiaConsumida);
  }

  removeFormEC(i) {
    this.dataArrayEC.splice(i)
  }

  onSaveEC() {
    console.log(this.dataArrayEC);
  }

  addFormAC() {
    this.AguaConsumida = [{ 
      cantidad : 0, 
      unidad: '',
      fuente: ''
    }];
    this.dataArrayAC.push(this.AguaConsumida);
  }

  removeFormAC(i) {
    this.dataArrayAC.splice(i)
  }

  onSaveAC() {
    console.log(this.dataArrayAC);
  }

  addFormDG() {
    this.DesechosGenerados = [{ 
      cantidad : 0, 
      unidad: '',
      fuente: ''
    }];
    this.dataArrayDG.push(this.DesechosGenerados);
  }

  removeFormDG(i) {
    this.dataArrayDG.splice(i)
  }

  onSaveDG() {
    console.log(this.dataArrayDG);
  }

  onGroupsChange(options: MatListOption[]) {
    let selectedSheet;
    // map these MatListOptions to their values
    options.map(option => {
      selectedSheet = option.value;
    });
    // take index of selection
    this.indexSheet = this.sheetNames.indexOf(selectedSheet);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%');
    console.log(selectedSheet);
    console.log(this.indexSheet);
  }

  onNgModelChange(event) {
    console.log('on ng model change', event);
  }
}
