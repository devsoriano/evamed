import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materials-stage',
  templateUrl: './materials-stage.component.html',
  styleUrls: ['./materials-stage.component.scss']
})

export class MaterialsStageComponent implements OnInit {

  selectedSheet: any;
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
  selectedMaterial: any;
  panelOpenFirst = false;
  panelOpenSecond = false;
  panelOpenThird = false;
  allMaterials = [];
  nameProject: string;
  projectId: number;
  SOR = [];
  SOD = [];
  SOU = [];
  sectionRevit: boolean;
  sectionDynamo: boolean;

  constructor(
    private materialsService: MaterialsService,
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    const data = JSON.parse(sessionStorage.getItem('dataProject'));

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
    options.map(option => {
      this.selectedSheet = option.value;
    });

    this.indexSheet = this.sheetNames.indexOf(this.selectedSheet);
    this.listData = this.contentData[this.indexSheet + 1];
    const SCRevit = [];
    const SCDynamo = [];
    // const SCUsuario = [];

    this.listData.map( sc => {
      if (sc.Origen === 'Modelo de Revit' || sc.Origen === 'Usuario') {
        SCRevit.push(sc.Sistema_constructivo);
      }
      if (sc.Origen === 'Calculado en Dynamo') {
        SCDynamo.push(sc.Sistema_constructivo);
      }
      // if (sc.Origen === 'Usuario') {
      //  SCUsuario.push(sc.Sistema_constructivo);
      // }
    });

    this.ListSCRevit = [...new Set(SCRevit)];
    this.ListSCDynamo = [...new Set(SCDynamo)];
    // this.ListSCUsuario = [...new Set(SCUsuario)];

    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) {
      if (this.indexSheet === i && this.SOR !== undefined) {
        this.selectedOptionsRevit = this.SOR[i];
      }
      if (this.indexSheet === i && this.SOD !== undefined) {
        this.selectedOptionsDynamo = this.SOD[i];
      }
      // this.indexSheet === i && this.SOU !== undefined ? this.selectedOptionsUsuario = this.SOU[i] : this.selectedOptionsUsuario;
    }
  }

  onNgModelChangeRevit(event) {
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) {
      if (this.indexSheet === i) {
        this.SOR[i] = this.selectedOptionsRevit;
      }
    }
  }

  onNgModelChangeDynamo(event) {
    let i;
    for ( i = 0; i <= this.sheetNames.length; i++ ) {
      if ( this.indexSheet === i ) {
        this.SOD[i] = this.selectedOptionsDynamo;
      }
    }
  }

  onNgModelChangeUser(event) {
  //  let i;
  //  for ( i = 0; i <= this.sheetNames.length; i++ ) {
  //    this.indexSheet === i ? this.SOU[i] = this.selectedOptionsUsuario : this.SOU[i];
  //  }
  }

  onNgModelChangeMaterial(event) {
    // console.log(this.selectedMaterial);
  }

  saveStepOne() {
    // Save Modelo Revit and Usuario
    Object.entries(this.SOR).forEach(([key, value]) => {
      this.contentData[parseInt(key, 10) + 1].map(data => {
        value.map(sc => {
          if (data.Sistema_constructivo === sc) {
            if (data.Origen === 'Modelo de Revit' || data.Origen === 'Usuario') {
              this.materialsService.searchMaterial(data.Material).subscribe( material => {
                material.map( materialData => {
                  if (materialData.name_material === data.Material) {
                    this.projectsService.addSchemeProject({
                      construction_system: data.Sistema_constructivo,
                      quantity: data.Cantidad,
                      provider_distance: 0,
                      material_id:  materialData.id,
                      project_id: this.projectId,
                      origin_id: 1,
                      section_id: parseInt(key, 10) + 1
                    }).subscribe( data => {
                      console.log('Success!');
                      console.log(data);
                    });
                  }
                });
              });
            }
          }
        });
      });
    });

    // Save Dynamo
    Object.entries(this.SOD).forEach(([key, value]) => {
      this.contentData[parseInt(key, 10) + 1].map(data => {
        value.map(sc => {
          if (data.Sistema_constructivo === sc) {
            if (data.Origen === 'Cálculo en Dynamo' ) {
              this.materialsService.searchMaterial(data.Material).subscribe( material => {
                material.map( materialData => {
                  if (materialData.name_material === data.Material) {
                    this.projectsService.addSchemeProject({
                      construction_system: data.Sistema_constructivo,
                      quantity: data.Cantidad,
                      provider_distance: 0,
                      material_id:  materialData.id,
                      project_id: this.projectId,
                      origin_id: 2,
                      section_id: parseInt(key, 10) + 1
                    }).subscribe( data => {
                      console.log('Success!');
                      console.log(data);
                    });
                  }
                });
              });
            }
          }
        });
      });
    });

    this.router.navigateByUrl('construction-stage');
  }

  showMaterials(event, sc, origin) {
    event.stopPropagation();
    const materiales = [];
    this.listData.map( data => {
      if (data.Sistema_constructivo === sc && origin === 'revit-user') {
        if (data.Origen === 'Modelo de Revit' || data.Origen === 'Usuario') {
          materiales.push(data.Material);
        }
      }
      if (data.Sistema_constructivo === sc && origin === 'dynamo') {
        if (data.Origen === 'Calculado en Dynamo') {
          materiales.push(data.Material);
        }
      }
    });
    this.listMateriales = materiales;
  }

  removeMaterial(event, sc, origin) {
    event.stopPropagation();
    console.log('entra a remove materials');
  }

  restoreMaterial(event, sc, origin) {
    event.stopPropagation();
    console.log('entra a restore material');
  }

  duplicateMaterial(event, sc, origin) {
    event.stopPropagation();
    console.log('entra a restore material');
  }

  onSelection(event, value) {
    // data
    console.log('***********************************************Data********************************************************');
    console.log(this.listData);
    console.log('**********************************************Content Data***************************************************');
    console.log(this.contentData);
    console.log('****************************************index********************************************');
    console.log(this.indexSheet);
    // value
    console.log('************************************************Value****************************************************');
    console.log(value.selected[0]?.value);
  }


  addElement() {
    console.log('add element');
  }

  addSC() {
    console.log('add SC');
  }
}
