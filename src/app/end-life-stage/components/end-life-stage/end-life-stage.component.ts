import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
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
  nameProject: any;
  SistemasConstructivos: any;
  listMateriales: any;
  selectedOptions: string[] = [];
  panelOpenFirst = false;
  panelOpenSecond = false;
  panelOpenThird = false;
  dataArrayEC = [];
  EC: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));

    this.nameProject = PDP.name_project;
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

}
