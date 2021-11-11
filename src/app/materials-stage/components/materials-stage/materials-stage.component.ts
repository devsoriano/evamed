import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AddConstructiveElementComponent } from '../add-constructive-element/add-constructive-element.component';
import { AddConstructiveSystemComponent } from '../add-constructive-system/add-constructive-system.component';
import { MatDialog } from '@angular/material/dialog';
import { AnalisisService } from 'src/app/core/services/analisis/analisis.service';

export interface Material {
  id: number;
  name_material: string;
  unit_id: number;
}

@Component({
  selector: 'app-materials-stage',
  templateUrl: './materials-stage.component.html',
  styleUrls: ['./materials-stage.component.scss'],
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
  panelOpenFirst: boolean = true;
  panelOpenSecond: boolean = true;
  panelOpenThird: boolean = true;
  allMaterials = [];
  nameProject: string;
  projectId: number;
  SOR = [];
  SOD = [];
  SOU = [];
  IMGP = [];
  sectionRevit: boolean;
  sectionDynamo: boolean;
  selectedMaterial: boolean;
  showSearch: boolean;
  showMaterial: boolean;
  showEPD: boolean;
  dataMaterialSelected: any;
  materialsList: any;
  catalogoPaises: any;
  catalogoEstados: any;
  catalogoCiudades: any;
  catalogoTransportesLocal: any;
  catalogoTransportesExtrangero: any;
  vidaUtilSeleccionado: any;
  ciudadOrigenSeleccionada: any;
  reemplazos: any;
  distanciaInicial: any;
  newConstructiveElement: string;
  newConstructiveSystem: string;
  SCseleccionado: string = '';
  materialData: any;
  EPDS: any;
  EPiC: any;
  mexicaniuh: any;
  showListMaterials: boolean;
  showMexican: boolean;

  myControl = new FormControl();
  options: Material[];
  filteredOptions: Observable<Material[]>;

  displayedColumns: string[] = ['Standard', 'Potencial', 'Valor', 'Unidad'];

  constructor(
    private materialsService: MaterialsService,
    private projectsService: ProjectsService,
    private router: Router,
    private catalogsService: CatalogsService,
    public dialog: MatDialog,
    private analisis: AnalisisService
  ) {
    this.materialsService.getMaterials().subscribe((data) => {
      this.materialsList = data;
      this.options = this.materialsList;
      const EPDS = data.filter((res) => res.database_from === 'EPDs');
      const EPIC = data.filter((res) => res.database_from === 'EPiC');
      const mexicaniuh = data.filter(
        (res) => res.database_from === 'mexicaniuh'
      );
      this.EPDS = EPDS.sort((a, b) =>
        a.name_material > b.name_material ? 1 : -1
      );
      this.EPiC = EPIC.sort((a, b) =>
        a.name_material > b.name_material ? 1 : -1
      );
      this.mexicaniuh = mexicaniuh.sort((a, b) =>
        a.name_material > b.name_material ? 1 : -1
      );
    });
    this.catalogsService.countriesCatalog().subscribe((data) => {
      this.catalogoPaises = data;
    });
    this.catalogsService.getStates().subscribe((data) => {
      this.catalogoEstados = data;
    });
    this.catalogsService.getTransports().subscribe((data) => {
      this.catalogoTransportesLocal = data;
      this.catalogoTransportesExtrangero = data;
    });
  }

  ngOnInit() {
    
    //carga de imagenes
    let images = [
      "../../../../assets/map/2.jpg",
      "../../../../assets/map/4.jpg",
      "../../../../assets/map/5.jpg",
      "../../../../assets/map/6.jpg",
      "../../../../assets/map/7.jpg",
      "../../../../assets/map/8.jpg",
      "../../../../assets/map/9.jpg",
      "../../../../assets/map/10.jpg",
      "../../../../assets/map/11.jpg",
      "../../../../assets/map/12.jpg",
      "../../../../assets/map/13.jpg",
      "../../../../assets/map/14.jpg"
    ];
    this.preload(images);
    // fragmento para autocompletado
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );

    this.selectedMaterial = false;
    this.showSearch = false;
    this.showMaterial = false;
    this.showEPD = false;
    this.showMexican = false;
    this.showListMaterials = true;

    const PDP = JSON.parse(sessionStorage.getItem('primaryDataProject'));
    const data = JSON.parse(sessionStorage.getItem('dataProject'));
    this.ciudadOrigenSeleccionada = PDP.city_id_origin;

    this.catalogsService.usefulLifeCatalog().subscribe((data) => {
      data.map((item) => {
        if (item.id === PDP.useful_life_id) {
          this.vidaUtilSeleccionado = item.name_useful_life;
        }
      });
    });

    this.sheetNames = [];
    this.nameProject = PDP.name_project;
    this.projectId = PDP.id;
    data.sheetNames.map((sheetname) => {
      if (
        sheetname !== 'Muros InterioresBis' &&
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

  // Lógica para autocompletado
  displayFn(material: Material): string {
    return material && material.name_material ? material.name_material : '';
  }

  private _filter(name: string): Material[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      (option) => option.name_material.toLowerCase().indexOf(filterValue) === 0
    );
  }
  
  preload(array) {
   
 for (var i = 0; i < array.length; i++) {
      this.IMGP[i] = new Image();
        this.IMGP[i].src = array[i];
      }
  }
  onGroupsChange(options: MatListOption[]) {
    options.map((option) => {
      this.selectedSheet = option.value;
    });

    this.indexSheet = this.sheetNames.indexOf(this.selectedSheet);
    if (this.indexSheet >= 11) {
      this.indexSheet = this.indexSheet + 5;
    }
    this.listData = this.contentData[this.indexSheet + 1];

    const SCRevit = [];
    const SCDynamo = [];
    const SCUsuario = [];

    this.listData.map((sc) => {
      if (sc.Origen === 'Modelo de Revit' || sc.Origen === 'Template EVAMED') {
        SCRevit.push(sc.Sistema_constructivo);
      }
      if (sc.Origen === 'Opciones EVAMED') {
        SCDynamo.push(sc.Sistema_constructivo);
      }
      if (sc.Origen === 'Usuario_Plataforma') {
        SCUsuario.push(sc.Sistema_constructivo);
      }
    });

    this.ListSCRevit = [...new Set(SCRevit)];
    this.ListSCDynamo = [...new Set(SCDynamo)];
    this.ListSCUsuario = [...new Set(SCUsuario)];

    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i && this.SOR !== undefined) {
        this.selectedOptionsRevit = this.SOR[i];
      }
      if (this.indexSheet === i && this.SOD !== undefined) {
        this.selectedOptionsDynamo = this.SOD[i];
      }
      if (this.indexSheet === i && this.SOU !== undefined) {
        this.selectedOptionsUsuario = this.SOU[i];
      }
    }

    // console.log('Avance indicador');
    /* Object.entries(this.SOR).forEach(([key, value]) => {
      this.contentData[parseInt(key, 10) + 1].map(data => {
        value.map(sc => {
          if (data.Sistema_constructivo === sc) {
            if (data.Origen === 'Modelo de Revit' || data.Origen === 'Template EVAMED') {
              console.log(parseInt(key, 10) + 1);
            }
          }
        });
      });
    }); */
  }

  onSelectedMaterial(value) {
    console.log('onSelectMaterial');
    console.log(value);
    this.dataMaterialSelected = value.selected[0]?.value.value;

    this.dataMaterialSelected.vidaUtil === undefined
      ? (this.dataMaterialSelected.vidaUtil = parseInt(
          this.vidaUtilSeleccionado,
          10
        ))
      : this.dataMaterialSelected.vidaUtil;

    this.dataMaterialSelected.reemplazos === undefined
      ? (this.dataMaterialSelected.reemplazos = 0)
      : this.dataMaterialSelected.reemplazos;

    this.catalogoTransportesLocal = [];
    this.catalogsService.getTransports().subscribe((data) => {
      data.map((item) => {
        this.catalogoTransportesLocal.push(item);
      });
    });

    //console.log('transporte local');
    //console.log(this.dataMaterialSelected.transporte_1);
    //console.log('transporte extrangero');
    //console.log(this.dataMaterialSelected.transporte_2);

    this.materialsList.map((material) => {
      if (material.name_material === this.dataMaterialSelected.Material) {
        this.dataMaterialSelected.name_material_db = material.name_material;
      }
    });

    this.dataMaterialSelected.materialSelectedDB = 'Buscar material';
    if (this.dataMaterialSelected.name_material_db !== undefined) {
      this.dataMaterialSelected.materialSelectedDB =
        this.dataMaterialSelected.name_material_db;
    }

    if (this.dataMaterialSelected.materialDB !== undefined) {
      this.dataMaterialSelected.materialSelectedDB =
        this.dataMaterialSelected.materialDB.name_material;
    }

    this.selectedMaterial = true;
  }

  changeLifeTime(reemplazos) {
    let lifeTime = this.vidaUtilSeleccionado;
    lifeTime =
      parseInt(this.vidaUtilSeleccionado, 10) / (parseInt(reemplazos, 10) + 1);
    this.dataMaterialSelected.vidaUtil = lifeTime;
  }

  changeReplaces(vidaUtil) {
    let replaces = 0;
    replaces = parseInt(this.vidaUtilSeleccionado, 10) / parseInt(vidaUtil, 10);
    this.dataMaterialSelected.reemplazos = Math.ceil(replaces) - 1;
  }

  selectState(id) {
    this.catalogoCiudades = [];
    this.catalogsService.getCities().subscribe((data) => {
      data.map((item) => {
        if (item.state_id === id) {
          this.catalogoCiudades.push(item);
        }
      });
    });
  }

  selectCountry(id) {
    this.catalogsService.getExternalDistances().subscribe((data) => {
      data.map((item) => {
        let typeTransport = 'mar';
        if (id === item.id + 1) {
          switch (item.region) {
            case 'PACIFICO' || 'ATLANTICO':
              typeTransport = 'mar';
              break;
            case 'NORTE' || 'SUR':
              typeTransport = 'terreste';
              break;
            default:
              break;
          }

          this.catalogoTransportesExtrangero = [];
          if (typeTransport === 'terreste') {
            this.catalogsService.getTransports().subscribe((data) => {
              data.map((item) => {
                // if (item.id >= 3) {
                this.catalogoTransportesExtrangero.push(item);
                // }
              });
            });
          } else {
            this.catalogsService.getTransports().subscribe((data) => {
              data.map((item) => {
                if (item.id < 3) {
                  this.catalogoTransportesExtrangero.push(item);
                }
              });
            });
          }
        }
      });
    });
  }

  onNgModelChangeRevit(event) {
    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
        this.SOR[i] = this.selectedOptionsRevit;
      }
    }
  }

  onNgModelChangeDynamo(event) {
    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
      if (this.indexSheet === i) {
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
      this.contentData[parseInt(key, 10) + 1].map((data) => {
        value.map((sc) => {
          if (data.Sistema_constructivo === sc) {
            if (
              data.Origen === 'Modelo de Revit' ||
              data.Origen === 'Template EVAMED'
            ) {
              this.materialsService
                .searchMaterial(data.Material)
                .subscribe((material) => {
                  material.map((materialData) => {
                    console.log(materialData);
                    console.log(data);
                    if (materialData.name_material === data.Material) {
                      this.projectsService
                        .addSchemeProject({
                          construction_system: data.Sistema_constructivo,
                          comercial_name: data.Material,
                          quantity: data.Cantidad,
                          provider_distance: 0,
                          material_id: materialData.id,
                          project_id: projectId,
                          origin_id: 1,
                          section_id: parseInt(key, 10) + 1,
                          value: null,
                          distance_init:
                            data.distancia_1 === '' ||
                            data.distancia_1 === undefined
                              ? 1
                              : parseInt(data.distancia_1, 10),
                          distance_end:
                            data.distancia_2 === '' ||
                            data.distancia_2 === undefined
                              ? 1
                              : parseInt(data.distancia_2, 10),
                          replaces:
                            data.reemplazos === '' ||
                            data.reemplazos === undefined
                              ? 0
                              : data.reemplazos,
                          city_id_origin: this.ciudadOrigenSeleccionada,
                          state_id_origin: 1,
                          city_id_end: 1,
                          transport_id_origin:
                            data.transporte_1 === '' ||
                            data.transporte_1 === undefined
                              ? 1
                              : parseInt(data.transporte_1, 10),
                          transport_id_end:
                            data.transporte_2 === '' ||
                            data.transporte_2 === undefined
                              ? 1
                              : parseInt(data.transporte_2, 10),
                          unit_text: data.Unidad,
                          description_material: data['Descripción de Material'],
                        })
                        .subscribe((data) => {
                          console.log('Success Modelo Revit o Template EVAMED!');
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
      this.contentData[parseInt(key, 10) + 1].map((data) => {
        value.map((sc) => {
          if (data.Sistema_constructivo === sc) {
            if (data.Origen === 'Modelo de Revit') {
              this.materialsService
                .searchMaterial(data.Material)
                .subscribe((material) => {
                  material.map((materialData) => {
                    if (materialData.name_material === data.Material) {
                      this.projectsService
                        .addSchemeProject({
                          construction_system: data.Sistema_constructivo,
                          comercial_name: data.Material,
                          quantity: data.Cantidad,
                          provider_distance: 0,
                          material_id: materialData.id,
                          project_id: projectId,
                          origin_id: 1,
                          section_id: parseInt(key, 10) + 1,
                          value: null,
                          distance_init:
                            data.distancia_1 === '' ||
                            data.distancia_1 === undefined
                              ? 1
                              : parseInt(data.distancia_1, 10),
                          distance_end:
                            data.distancia_2 === '' ||
                            data.distancia_2 === undefined
                              ? 1
                              : parseInt(data.distancia_2, 10),
                          replaces:
                            data.reemplazos === '' ||
                            data.reemplazos === undefined
                              ? 0
                              : data.reemplazos,
                          city_id_origin: this.ciudadOrigenSeleccionada,
                          state_id_origin: 1,
                          city_id_end: 1,
                          transport_id_origin:
                            data.transporte_1 === '' ||
                            data.transporte_1 === undefined
                              ? 1
                              : data.transporte_1,
                          transport_id_end:
                            data.transporte_2 === '' ||
                            data.transporte_2 === undefined
                              ? 1
                              : data.transporte_2,
                          unit_text: data.Unidad,
                          description_material: data['Descripción de Material'],
                        })
                        .subscribe((data) => {
                          console.log('Success Modelo Revit o Template EVAMED!');
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
  }

  showMaterials(sc, origin) {
    this.SCseleccionado = '/ ' + sc;
    this.selectedMaterial = false;
    this.showSearch = false;
    this.showMaterial = false;
    const materiales = [];
    let counterRevit = 1;
    let countDynamo = 1;

    this.listData.map((data) => {
      if (data.Sistema_constructivo === sc && origin === 'revit-user') {
        if (data.Origen === 'Modelo de Revit' || data.Origen === 'Template EVAMED') {
          data.signal = false;
          let materialABuscar = data.Material;
          if (data.materialSelectedDB !== undefined) {
            if (data.materialDB !== undefined) {
              materialABuscar = data.materialDB.name_material;
            }
          }

          this.materialsService
            .searchMaterial(materialABuscar)
            .subscribe((material) => {
              material.map((materialData) => {
                if (materialData.name_material === materialABuscar) {
                  data.signal = true;
                }
              });
            });
          data.key = counterRevit++;
          materiales.push(data);
        }
      }
      if (data.Sistema_constructivo === sc && origin === 'dynamo') {
        if (data.Origen === 'Opciones EVAMED') {
          data.signal = false;
          let materialABuscar = data.Material;
          if (data.materialSelectedDB !== undefined) {
            if (data.materialSelectedDB !== 'Buscar material') {
              materialABuscar = data.materialSelectedDB;
            }
          }
          this.materialsService
            .searchMaterial(materialABuscar)
            .subscribe((material) => {
              material.map((materialData) => {
                if (materialData.name_material === data.Material) {
                  data.signal = true;
                }
              });
            });
          data.key = countDynamo++;
          materiales.push(data);
        }
      }
    });
    this.listMateriales = materiales;
  }

  showDetailMaterial(event, material) {
    event.stopPropagation();
    this.showMaterial = true;
    console.log('este detail!!!!!!!!!!!!!!!!!!!!');
    console.log(material);
    this.dataMaterialSelected.name = material.name_material;
    this.dataMaterialSelected.description = material.description;
    // this.dataMaterialSelected.registrationNumber = 'S-P-01927';
    // this.dataMaterialSelected.publicationDate = '202-04-01';
    // this.dataMaterialSelected.utilLife = '2025-04-01';
  }

  showEPIC() {
    this.showListMaterials = false;
  }

  showMexicanIuh() {
    this.showListMaterials = false;
    this.showMexican = true;
  }

  returnDatabaseList() {
    this.showListMaterials = true;
    this.showMexican = false;
  }

  showDetailEPD(event, material) {
    event.stopPropagation();
    this.showEPD = true;
    this.dataMaterialSelected.name = material.name_material;
    this.dataMaterialSelected.id = material.id;
    this.dataMaterialSelected.description = material.description;
    this.analisis.getMaterialSchemeData().subscribe((msds) => {
      const msd = msds.filter((msd) => msd.material_id === material.id);
      console.log('esta perra mamada!!!!!');
      console.log(msd);

      this.dataMaterialSelected.msd = msd;
    });
  }

  onSelectMaterial(event, material) {
    event.stopPropagation();
    this.dataMaterialSelected.materialSelectedDB = material;
    console.log(this.dataMaterialSelected.materialSelectedDB);
    this.returnMaterialData();
  }

  returnListEpds() {
    this.showEPD = false;
  }

  returnListDB() {
    this.showMaterial = false;
  }

  returnMaterialData() {
    this.selectedMaterial = true;
    this.showSearch = false;
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

  onReturnListMaterials() {
    this.selectedMaterial = false;
    this.showSearch = false;
    this.showMaterial = false;
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
    this.showMaterial = false;
    this.showEPD = false;
  }

  addConstructiveElementsDialog() {
    const dialogRef = this.dialog.open(AddConstructiveElementComponent, {
      width: '680px',
      data: {
        newConstructiveElement: this.newConstructiveElement,
        newConstructiveSystem: this.newConstructiveSystem,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.sheetNames.push(result.newConstructiveElement);
      this.contentData.push([
        {
          Origen: 'Usuario_Plataforma',
          Sistema_constructivo: result.newConstructiveSystem,
        },
      ]);
    });
  }

  addConstructiveSystemDialog() {
    const dialogRef = this.dialog.open(AddConstructiveSystemComponent, {
      width: '680px',
      data: {
        newConstructiveSystem: this.newConstructiveSystem,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
