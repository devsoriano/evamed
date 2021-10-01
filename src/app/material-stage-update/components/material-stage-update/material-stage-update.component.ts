import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AnalisisService } from 'src/app/core/services/analisis/analisis.service';

export interface Material {
  id: number;
  name_material: string;
  unit_id: number;
}

@Component({
  selector: 'app-material-stage-update',
  templateUrl: './material-stage-update.component.html',
  styleUrls: ['./material-stage-update.component.scss'],
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
  showSearch: boolean;
  catalogoTransportesExtrangero: any;
  catalogoPaises: any;
  catalogoCiudades: any;
  catalogoEstados: any;
  catalogoTransportesLocal: any;
  vidaUtilSeleccionado: any;
  vidaUtilSeleccionadoId: any;
  dataProject: any;
  materialsList: any;
  showEPD: boolean;
  EPDS: any;
  showMaterial: boolean;
  showListMaterials: boolean;
  showMexican: boolean;
  EPiC: any;
  mexicaniuh: any;

  myControl = new FormControl();
  options: Material[];
  filteredOptions: Observable<Material[]>;

  displayedColumns: string[] = ['Standard', 'Potencial', 'Valor', 'Unidad'];

  constructor(
    private materialsService: MaterialsService,
    private projectsService: ProjectsService,
    private catalogsService: CatalogsService,
    private analisis: AnalisisService,
    private router: Router
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
    this.projectsService.getMaterialSchemeProyect().subscribe((data) => {
      const listData2 = [];
      data.map((item) => {
        if (
          item.project_id ===
          parseInt(localStorage.getItem('idProyectoConstrucción'), 10)
        ) {
          listData2.push(item);
        }
      });
      this.listData2 = listData2;
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

    this.projectsService
      .getProjectById(localStorage.getItem('idProyectoConstrucción'))
      .subscribe((data: any) => {
        this.nameProject = data.name_project;
        this.catalogsService.usefulLifeCatalog().subscribe((distances) => {
          distances.map((distance) => {
            console.log(data.useful_life_id);
            if (data.useful_life_id === distance.id) {
              this.vidaUtilSeleccionado = parseInt(distance.name_useful_life);
              this.vidaUtilSeleccionadoId = parseInt(distance.id);
            }
          });
        });
      });
  }

  ngOnInit() {
    // fragmento para autocompletado
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this._filter(name) : this.options.slice()))
    );

    this.selectedMaterial = false;
    this.showEPD = false;
    this.showMexican = false;
    this.showListMaterials = true;

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

    this.showSearch = false;
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

  onGroupsChange(options: MatListOption[]) {
    options.map((option) => {
      this.selectedSheet = option.value;
    });

    this.indexSheet = this.sheetNames.indexOf(this.selectedSheet);

    let ListGetSCRevit = [];
    let ListGetSCDimano = [];
    this.listData2.map((item) => {
      if (item.origin_id === 1 && this.indexSheet + 1 === item.section_id) {
        ListGetSCRevit.push(item.construction_system);
      }
      if (item.origin_id === 2 && this.indexSheet + 1 === item.section_id) {
        ListGetSCDimano.push(item.construction_system);
      }
    });

    this.ListSCRevit = [...new Set(ListGetSCRevit)];
    this.ListSCDynamo = [...new Set(ListGetSCDimano)];

    let i;
    for (i = 0; i <= this.sheetNames.length; i++) {
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

  updateStepOne() {
    //Lógica de editar
    console.log('editar------------------');
    console.log(this.listData2);
    this.listData2.map((item) => console.log(item));
  }

  showMaterials(event, sc, origin) {
    event.stopPropagation();
    this.selectedMaterial = false;
    this.showSearch = false;
    this.showMaterial = false;
    // let originId = 1;
    // origin === 'revit-user' ? originId = 1 : originId = 2;
    const listMateriales = [];
    let counterRevit = 1;
    let countDynamo = 1;

    this.listData2.map((item) => {
      const prevData = [];
      if (item.construction_system === sc && origin === 'revit-user') {
        if (item.origin_id === 1 || item.origin_id === 3) {
          this.materialsService
            .searchMaterial(item.material_id)
            .subscribe((material) => {
              material.map((materialData) => {
                if (
                  item.material_id === materialData.id &&
                  item.section_id === this.indexSheet + 1
                ) {
                  console.log('Material Data');
                  // console.log(materialData);
                  console.log(item);
                  prevData['name_material'] = materialData.name_material;
                  prevData['quantity'] = item.quantity;
                  prevData['origin_id'] = item.origin_id;
                  prevData['material_id'] = item.material_id;
                  prevData['reemplazos'] = item.replaces;
                  prevData['transport_id_end'] = item.transport_id_end;
                  prevData['transport_id_origin'] = item.transport_id_origin;
                  prevData['vidaUtil'] = this.vidaUtilSeleccionado;
                  prevData['unit_text'] = item.unit_text;
                  prevData['description_material'] = item.description_material;
                  prevData['material_scheme_project_id'] = item.id;
                  prevData['construction_system'] = item.construction_system;
                  prevData['project_id'] = item.project_id;
                  prevData['section_id'] = item.section_id;
                  prevData['city_id_origin'] = item.city_id_origin;
                  prevData['city_id_end'] = item.city_id_end;
                  prevData['state_id_origin'] = item.state_id_origin;
                  prevData['transporte_1'] = item.transport_id_origin;
                  prevData['transporte_2'] = item.transport_id_end;
                  prevData['distancia_1'] = parseInt(item.distance_init);
                  prevData['distancia_2'] = parseInt(item.distance_end);
                  prevData['key'] = counterRevit++;
                  listMateriales.push(prevData);
                }
              });
            });
        }
      }
      if (item.construction_system === sc && origin === 'dynamo') {
        if (item.origin_id === 2) {
          this.materialsService
            .searchMaterial(item.material_id)
            .subscribe((material) => {
              material.map((materialData) => {
                if (item.material_id === materialData.id) {
                  prevData['name_material'] = materialData.name_material;
                  prevData['quantity'] = item.quantity;
                  prevData['origin_id'] = item.origin_id;
                  prevData['material_id'] = item.material_id;
                  prevData['reemplazos'] = item.replaces;
                  prevData['transport_id_end'] = item.transport_id_end;
                  prevData['transport_id_origin'] = item.transport_id_origin;
                  prevData['vidaUtil'] = this.vidaUtilSeleccionado;
                  prevData['unit_text'] = item.unit_text;
                  prevData['description_material'] = item.description_material;
                  prevData['material_scheme_project_id'] = item.id;
                  prevData['construction_system'] = item.construction_system;
                  prevData['project_id'] = item.project_id;
                  prevData['section_id'] = item.section_id;
                  prevData['city_id_end'] = item.city_id_end;
                  prevData['city_id_origin'] = item.city_id_origin;
                  prevData['state_id_origin'] = item.state_id_origin;
                  prevData['transporte_1'] = item.transport_id_origin;
                  prevData['transporte_2'] = item.transport_id_end;
                  prevData['distancia_1'] = parseInt(item.distance_init);
                  prevData['distancia_2'] = parseInt(item.distancia_end);
                  prevData['key'] = countDynamo++;

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

  updateMaterialSelected(dataMaterialSelected) {
    console.log('información a actualizar!!!');
    console.log(dataMaterialSelected);
    this.projectsService
      .updateMaterialSchemeProject(
        dataMaterialSelected.material_scheme_project_id,
        {
          comercial_name: dataMaterialSelected.name_material,
          construction_system: dataMaterialSelected.construction_system, // en duro
          provider_distance: 0,
          quantity: dataMaterialSelected.quantity,
          value: null,
          distance_init: parseInt(dataMaterialSelected.distancia_1, 10),
          distance_end: parseInt(dataMaterialSelected.distancia_2, 10),
          replaces: dataMaterialSelected.reemplazos,
          unit_text: dataMaterialSelected.unit_text,
          description_material: dataMaterialSelected.description_material,
          material_id: dataMaterialSelected.material_id,
          project_id: dataMaterialSelected.project_id,
          origin_id: parseInt(this.vidaUtilSeleccionadoId),
          section_id: dataMaterialSelected.section_id,
          state_id_origin: dataMaterialSelected.state_id_origin,
          city_id_origin: 2,
          city_id_end: 1,
          transport_id_origin: dataMaterialSelected.transport_id_origin,
          transport_id_end: dataMaterialSelected.transport_id_end,
        }
      )
      .subscribe((data) => {
        //console.log(
        //  'Update data-----------------------------------------------'
        //);
        console.log(data);
        location.reload();
      });
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
    console.log(value.selected[0]?.value.value);

    this.selectState(value.selected[0]?.value.value.state_id_origin);
    this.dataMaterialSelected = value.selected[0]?.value.value;
    this.selectedMaterial = true;
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
                if (item.id >= 3) {
                  this.catalogoTransportesExtrangero.push(item);
                }
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

  showDetailEPD(event, material) {
    event.stopPropagation();
    this.showEPD = true;
    this.dataMaterialSelected.name = material.name_material;
    this.dataMaterialSelected.id = material.id;
    this.dataMaterialSelected.description =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";
    this.analisis.getMaterialSchemeData().subscribe((msds) => {
      const msd = msds.filter((msd) => msd.material_id === material.id);
      console.log(msd);
      this.dataMaterialSelected.msd = msd;
    });
  }

  changeReplaces(vidaUtil) {
    let replaces = 0;
    replaces = parseInt(this.vidaUtilSeleccionado, 10) / parseInt(vidaUtil, 10);
    this.dataMaterialSelected.reemplazos = Math.ceil(replaces) - 1;
  }

  changeLifeTime(reemplazos) {
    let lifeTime = this.vidaUtilSeleccionado;
    lifeTime =
      parseInt(this.vidaUtilSeleccionado, 10) / (parseInt(reemplazos, 10) + 1);
    this.dataMaterialSelected.vidaUtil = lifeTime;
  }

  onReturnListMaterials() {
    this.selectedMaterial = false;
    this.showSearch = false;
    this.showMaterial = false;
  }

  returnMaterialData() {
    this.selectedMaterial = true;
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
    this.showMaterial = false;
    this.showEPD = false;
  }

  returnListEpds() {
    this.showEPD = false;
  }

  onSelectMaterial(event, material) {
    event.stopPropagation();
    this.dataMaterialSelected.materialSelectedDB = material;
    console.log(this.dataMaterialSelected.materialSelectedDB);
  }

  showDetailMaterial(event, material) {
    event.stopPropagation();
    this.showMaterial = true;
    this.dataMaterialSelected.name = material.name_material;
    this.dataMaterialSelected.description =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";
    this.dataMaterialSelected.registrationNumber = 'S-P-01927';
    this.dataMaterialSelected.publicationDate = '202-04-01';
    this.dataMaterialSelected.utilLife = '2025-04-01';
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
  }

  returnListDB() {
    this.showMaterial = false;
  }
}
