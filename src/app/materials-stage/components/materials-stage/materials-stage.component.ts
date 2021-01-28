import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';

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
  showSearch: boolean;
  dataMaterialSelected: any;
  materialsList: any;
  estadoSeleccionado: any;
  ciudadSeleccionada: any;
  catalogoEstados: any;
  catalogoCiudades: any;
  vidaUtilSeleccionado: any;
  reemplazos: any;
  busqueda: any

  constructor(
    private materialsService: MaterialsService,
    private projectsService: ProjectsService,
    private router: Router,
    private catalogsService: CatalogsService
  ) { 
    this.materialsService.getMaterials().subscribe( data => {
      this.materialsList = data;
    });
    this.catalogsService.getStates().subscribe( data => {
      this.catalogoEstados = data;
    });
  }

  ngOnInit() {
    this.selectedMaterial = false;
    this.showSearch = false;
    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    this.catalogsService.usefulLifeCatalog().subscribe(data => {
      data.map( item => {
        if (item.id === PDP.useful_life_id) {
          this.vidaUtilSeleccionado = item.name_useful_life;
        }
      });
    });

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

    this.initialChange();
  }

  initialChange() {
    this.selectedSheet = 'Cimentación';
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

    // console.log('Avance indicador');
    /* Object.entries(this.SOR).forEach(([key, value]) => {
      this.contentData[parseInt(key, 10) + 1].map(data => {
        value.map(sc => {
          if (data.Sistema_constructivo === sc) {
            if (data.Origen === 'Modelo de Revit' || data.Origen === 'Usuario') {
              console.log(parseInt(key, 10) + 1);
            }
          }
        });
      });
    }); */
  }

  select(id) {
    this.catalogoCiudades = [];
    this.catalogsService.getCities().subscribe( data => {
      data.map( item => {
        if ( item.state_id === id) {
          this.catalogoCiudades.push(item);
        }
      });
    });
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
    const projectId = this.projectId;

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
                      project_id: projectId,
                      origin_id: 1,
                      section_id: parseInt(key, 10) + 1,
                      value: null
                    }).subscribe( data => {
                      console.log('Success Modelo Revit o Usuario!');
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
            if (data.Origen === 'Calculado en Dynamo' ) {
              this.materialsService.searchMaterial(data.Material).subscribe( material => {
                material.map( materialData => {
                  if (materialData.name_material === data.Material) {
                    this.projectsService.addSchemeProject({
                      construction_system: data.Sistema_constructivo,
                      quantity: data.Cantidad,
                      provider_distance: 0,
                      material_id:  materialData.id,
                      project_id: projectId,
                      origin_id: 2,
                      section_id: parseInt(key, 10) + 1,
                      value: null
                    }).subscribe( data => {
                      console.log('Success Dynamo!');
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
    
    let i;
    let originalData = [];
    for ( i = 1; i <= this.sheetNames.length; i++ ) { 
      originalData.push(this.contentData[i]);
    }
    
    originalData.map( (data, key) => {
      data.map( dataSheet => {
        if ( dataSheet.Material !== null ) {
          this.materialsService.searchMaterial(dataSheet.Material).subscribe( material => { 
            material.map( materialData => { 
              if (materialData.name_material === dataSheet.Material) { 
                console.log(dataSheet);
                let originId = 0 
                if (dataSheet.Origen === 'Calculado en Dynamo' ) { 
                  originId = 2;
                }
                if ( dataSheet.Origen === 'Modelo de Revit' || dataSheet.Origen === 'Usuario' ) { 
                  originId = 1;
                }
                this.projectsService.addSchemeProjectOriginal({
                  construction_system: dataSheet.Sistema_constructivo,
                  quantity: dataSheet.Cantidad,
                  provider_distance: 0,
                  material_id:  materialData.id,
                  project_id: projectId,
                  origin_id: originId,
                  section_id: key + 1,
                  value: null
                }).subscribe( data => {
                  console.log('Success save original schema!');
                  this.router.navigateByUrl('construction-stage');
                });
              }
            });
          });
        }
      });
    }); 
  }

  showMaterials(event, sc, origin) {
    event.stopPropagation();
    this.selectedMaterial = false;
    this.showSearch = false;
    const materiales = [];
    this.listData.map( (data, key) => {
      if (data.Sistema_constructivo === sc && origin === 'revit-user') {
        if (data.Origen === 'Modelo de Revit' || data.Origen === 'Usuario') {
          materiales.push(data);
        }
      }
      if (data.Sistema_constructivo === sc && origin === 'dynamo') {
        if (data.Origen === 'Calculado en Dynamo') {
          materiales.push(data);
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
  }

  onSelectedMaterial(event, value) {
    this.dataMaterialSelected = value.selected[0]?.value.value;
    this.selectedMaterial = true;
  }

  onReturnListMaterials() {
    this.selectedMaterial = false;
    this.showSearch = false;
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

  goToSearchInfo() {
    this.showSearch = true;
    this.selectedMaterial = false;
  }

  searchInfo() {
  }
}
