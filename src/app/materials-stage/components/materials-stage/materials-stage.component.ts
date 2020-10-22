import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatListOption } from '@angular/material/list';
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
  SistemasConstructivos: any;
  listMateriales: any;
  selectedOptions: string[] = [];
  panelOpenFirst = false;
  panelOpenSecond = false;
  panelOpenThird = false;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    /*this.route.queryParams.filter(params => params.data)
      .subscribe( params => {
        this.data = JSON.parse(params.data);
      }
    );*/

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
    const sistConstructivos = [];
    this.listData.map( sc => {
      sistConstructivos.push(sc.Sistema_constructivo);
    });
    this.SistemasConstructivos = [...new Set(sistConstructivos)];
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

}
