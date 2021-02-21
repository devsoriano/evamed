import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-stage-update',
  templateUrl: './material-stage-update.component.html',
  styleUrls: ['./material-stage-update.component.scss']
})
export class MaterialStageUpdateComponent implements OnInit {

  selectedSheet: any;
  sheetNames: any;
  contentData: any;
  listData2: any;
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
  projectId: number;
  SOR = [];
  SOD = [];
  SOU = [];
  sectionRevit: boolean;
  sectionDynamo: boolean;
  selectedMaterial: boolean;
  dataMaterialSelected: any;

  constructor(
    private materialsService: MaterialsService,
    private projectsService: ProjectsService,
    private router: Router
  ) { 
    this.projectsService.getMaterialSchemeProyectOrigin().subscribe(data => {
      const listData2 = [];
      data.map( item => {
        if (item.project_id === parseInt(localStorage.getItem('idProyectoConstrucción'), 10)) {
          listData2.push(item);
        }
      });
      this.listData2 = listData2;
    })
  }

  ngOnInit() {
    this.selectedMaterial = false;
    
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
    options.map(option => {
      this.selectedSheet = option.value;
    });

    this.indexSheet = this.sheetNames.indexOf(this.selectedSheet);
 
    let ListGetSCRevit = [];
    let ListGetSCDimano = [];
    this.listData2.map( item => {
      if (item.origin_id === 1 && this.indexSheet + 1 === item.section_id) {
        ListGetSCRevit.push(item.construction_system) 
      }
      if (item.origin_id === 2 && this.indexSheet + 1 === item.section_id) {
        ListGetSCDimano.push(item.construction_system) 
      }
    });

    this.ListSCRevit = [...new Set(ListGetSCRevit)];
    this.ListSCDynamo = [...new Set(ListGetSCDimano)];

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

  updateStepOne() {
    //Lógica de editar
    console.log('editar');
  }

  showMaterials(event, sc, origin) {
    event.stopPropagation();
    this.selectedMaterial = false;
    // let originId = 1;
    // origin === 'revit-user' ? originId = 1 : originId = 2;
    const listMateriales = [];
    this.listData2.map( item => {
      const prevData = [];
      if (item.construction_system === sc && origin === 'revit-user') { 
        if (item.origin_id === 1 || item.origin_id === 3) {
          this.materialsService.searchMaterial(item.material_id).subscribe( material => {
            material.map( materialData => { 
              if ( (item.material_id === materialData.id) && (item.section_id === this.indexSheet + 1) ) {
                prevData['Material'] = materialData.name_material;
                prevData['Cantidad'] = item.quantity;
                listMateriales.push(prevData); 
              }
            });
          });
        }
      }
      if (item.construction_system === sc && origin === 'dynamo') {
        if (item.origin_id === 2) {
          console.log('entra a opciones dynamo');
          this.materialsService.searchMaterial(item.material_id).subscribe( material => {
            material.map( materialData => { 
              if ( item.material_id === materialData.id ) {
                prevData['Material'] = materialData.name_material;
                prevData['Cantidad'] = item.quantity;
                listMateriales.push(prevData); 
              }
            });
          });
        }
      }
    });
    // Asign list materials
    this.listMateriales = listMateriales;
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

  onSelectedMaterial(event, value) {
    console.log('selección de materiales ***************************');
    this.dataMaterialSelected = value.selected[0]?.value;
    this.selectedMaterial = true;

    console.log(this.dataMaterialSelected);
  }

  onReturnListMaterials() {
    this.selectedMaterial = false;
  }

  addElement() {
    console.log('add element');
  }

  addSC() {
    console.log('add SC');
  }

  goToMaterialStage() {
    this.router.navigateByUrl('material-stage');
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
