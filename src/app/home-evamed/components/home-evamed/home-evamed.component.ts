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
  usoSeleccionado: number;
  paisSeleccionado: string;
  tipoSeleccionado: string;
  vidaUtilSeleccionado: string;
  esqHabitacionalSeleccionado: string;
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
    private materialsService: MaterialsService,
    private projects: ProjectsService,
    private users: UserService
  ) {
    this.catalogsService.usesCatalog().subscribe(data => {
      this.catalogoUsos = data;
    });
    this.catalogsService.countriesCatalog().subscribe(data => {
      this.catalogoPaises = data;
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
      this.sector = data[0].sector;
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
    /*this.materialsService.getfake().subscribe( data => {
      data.map( item => {
        this.materialsService.addFake({
          name_material: item.name_material,
          unit_id: item.unit_id
        }).subscribe();
      });
    });*/
  }

  ngOnInit(): void { }

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
        usoSeleccionado: this.usoSeleccionado,
        paisSeleccionado: this.paisSeleccionado,
        tipoSeleccionado: this.tipoSeleccionado,
        superficieConstruida: this.superficieConstruida,
        superficieHabitable: this.superficieHabitable,
        vidaUtilSeleccionado: this.vidaUtilSeleccionado,
        esqHabitacionalSeleccionado: this.esqHabitacionalSeleccionado,
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
          user_platform_id: parseInt(localStorage.getItem('email-id'), 10)
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
