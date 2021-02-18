import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNewProjectComponent } from './../../../add-new-project/add-new-project.component';
import { ChooseTypeOfProjectComponent } from './../../../choose-type-of-project/choose-type-of-project.component';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { CatalogsService } from './../../../core/services/catalogs/catalogs.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { MaterialsService } from './../../../core/services/materials/materials.service';
@Component({
  selector: 'app-home-evamed',
  templateUrl: './home-evamed.component.html',
  styleUrls: ['./home-evamed.component.scss']
})

export class HomeEvamedComponent implements OnInit {

  nombre: string;
  catalogoUsos: any;
  catalogoPaises: any;
  catalogoTipo: any;
  catalogoVidaUtil: any;
  catalogoEsqHabitacional: any;
  catalogoEstados: any;
  catalogoCiudades: any;
  usoSeleccionado: number;
  paisSeleccionado: string;
  tipoSeleccionado: string;
  vidaUtilSeleccionado: string;
  esqHabitacionalSeleccionado: string;
  estadoSeleccionado: any;
  ciudadSeleccionada: any;
  superficieConstruida: string;
  superficieHabitable: string;
  noNiveles: string;
  optionSelected: string;
  projectsList: any = 0;
  countProjectList: number;
  user: string;
  sector: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private projectsService: ProjectsService,
    private catalogsService: CatalogsService,
    private projects: ProjectsService,
    private users: UserService,
    private materialsService: MaterialsService
  ) {
    this.catalogsService.usesCatalog().subscribe(data => {
      this.catalogoUsos = data;
    });
    this.catalogsService.countriesCatalog().subscribe(data => {
      this.catalogoPaises = [];
      data.map( item => {
        if (item.id === 1) {
          this.catalogoPaises.push(item);
        }  
      });
    });
    this.catalogsService.typeProjectCatalog().subscribe(data => {
      this.catalogoTipo = data;
    });
    this.catalogsService.usefulLifeCatalog().subscribe(data => {
      this.catalogoVidaUtil = data;
    });
    this.catalogsService.housingSchemeCatalog().subscribe(data => {
      this.catalogoEsqHabitacional = data;
    });
    this.users.searchUser(localStorage.getItem('email-login')).subscribe( data => {
      this.user = data[0].name;
      this.sector = data[0].institution;
      localStorage.setItem('email-id', data[0].id);
      this.projectsList = [];
      this.projects.getProjects().subscribe( data => {
        data.map( item => {
          if ( item.user_platform_id === parseInt(localStorage.getItem('email-id'), 10)) {
            this.projectsList.push(item);
          }
          this.countProjectList = this.projectsList.length;
        });
      });
    });
     // this.materialsService.getfake().subscribe( data => {
     //  data.map( item => {
     //   if(item.id > 2201 && item.id < 2400) {
          // this.materialsService.deleteFake(item.id).subscribe();
     //     this.materialsService.addFake({
     //       value: item.value,
     //       material_id: item.material_id,
     //       standard_id: item.standard_id,
     //       potential_type_id: item.potential_type_id,
     //       unit_id: item.unit_id
     //     }).subscribe();
     //   }
        
        /*this.materialsService.addFake({
          value: item.value,
          material_id: item.material_id,
          standard_id: item.standard_id,
          potential_type_id: item.potential_type_id,
          unit_id: item.unit_id
        }).subscribe();*/
        
    //  });
    //}); 
    this.catalogsService.getStates().subscribe( data => {
      this.catalogoEstados = data;
    });
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout()
    .then(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  openDialogCTOP() {
    const dialogRef = this.dialog.open(ChooseTypeOfProjectComponent, {
      width: '900px',
      data: {
        optionSelected: 'Huella de carbono'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      try {
        this.optionSelected = result.optionSelected;
        this.router.navigateByUrl('do-files');
      } catch (e){
        console.log('close modal');
      }
    });
  }

  deleteProject(id) {
    this.projects.deleteProject(id).subscribe(data => {
      this.users.searchUser(localStorage.getItem('email-login')).subscribe( data => {
        localStorage.setItem('email-id', data[0].id);
        this.projectsList = [];
        this.projects.getProjects().subscribe( data => {
          data.map( item => {
            if ( item.user_platform_id === parseInt(localStorage.getItem('email-id'), 10) ) {
              this.projectsList.push(item);
            }
            this.countProjectList = this.projectsList.length;
          });
        });
      });
    });
  }

  openDialogANP() {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
      width: '680px',
      data: {
        nombre: this.nombre,
        catalogoUsos: this.catalogoUsos,
        catalogoPaises: this.catalogoPaises,
        catalogoTipo: this.catalogoTipo,
        catalogoVidaUtil: this.catalogoVidaUtil,
        catalogoEsqHabitacional: this.catalogoEsqHabitacional,
        catalogoEstados: this.catalogoEstados,
        usoSeleccionado: this.usoSeleccionado,
        paisSeleccionado: this.paisSeleccionado,
        tipoSeleccionado: this.tipoSeleccionado,
        superficieConstruida: this.superficieConstruida,
        superficieHabitable: this.superficieHabitable,
        vidaUtilSeleccionado: this.vidaUtilSeleccionado,
        esqHabitacionalSeleccionado: this.esqHabitacionalSeleccionado,
        estadoSeleccionado: this.estadoSeleccionado,
        ciudadSeleccionada: this.ciudadSeleccionada,
        noNiveles: this.noNiveles,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      try {
        this.projectsService.addProject({
          name_project: result.nombre,
          builded_surface: parseInt(result.superficieConstruida, 10),
          living_area: parseInt(result.superficieHabitable, 10),
          tier: parseInt(result.noNiveles, 10),
          use_id:  result.usoSeleccionado,
          type_id: result.tipoSeleccionado === undefined ? null : result.tipoSeleccionado,
          country_id: result.paisSeleccionado,
          useful_life_id: result.vidaUtilSeleccionado,
          housing_scheme_id: result.esqHabitacionalSeleccionado === undefined ? null : result.esqHabitacionalSeleccionado,
          user_platform_id: parseInt(localStorage.getItem('email-id'), 10),
          city_id_origin: result.ciudadSeleccionada === undefined ? null : result.ciudadSeleccionada,
          distance: null
        }).subscribe(data => {
          sessionStorage.setItem('primaryDataProject', JSON.stringify(data));
          this.openDialogCTOP();
        });
      } catch (e){
        console.log('close modal');
      }
    });
  }

  redirectResultados(id) {
    sessionStorage.setItem('projectID', id);
    this.router.navigateByUrl('resultados');
  }

  updateMaterial(id) {
    localStorage.setItem('idProyectoConstrucción', id);
    this.router.navigateByUrl('material-stage-update');
  }

  updateConstruction(id) {
    localStorage.setItem('idProyectoConstrucción', id);
    this.router.navigateByUrl('construction-stage-update');
  }

  updateUso(id) {
    localStorage.setItem('idProyectoConstrucción', id);
    this.router.navigateByUrl('usage-stage-update');
  }


}
