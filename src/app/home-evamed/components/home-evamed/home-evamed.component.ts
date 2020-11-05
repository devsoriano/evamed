import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNewProjectComponent } from './../../../add-new-project/add-new-project.component';
import { ChooseTypeOfProjectComponent } from './../../../choose-type-of-project/choose-type-of-project.component';
import { ProjectsService } from './../../../core/services/projects.service';
import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';

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
  usoSeleccionado: string;
  paisSeleccionado: string;
  tipoSeleccionado: string;
  vidaUtilSeleccionado: string;
  superficieConstruida: string;
  superficieHabitable: string;
  noNiveles: string;
  optionSelected: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private projectsService: ProjectsService,
    private catalogsService: CatalogsService,
  ) {
    this.catalogsService.usesCatalog().subscribe(data => {
      this.catalogoUsos = data;
    });
    this.catalogsService.countriesCatalog().subscribe(data => {
      this.catalogoPaises = data;
    });
    this.catalogsService.TypeProjectCatalog().subscribe(data => {
      this.catalogoTipo = data;
    });
    this.catalogsService.usefulLifeCatalog().subscribe(data => {
      this.catalogoVidaUtil = data;
    });
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
      width: '800px',
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

  openDialogANP() {
    const dialogRef = this.dialog.open(AddNewProjectComponent, {
      width: '680px',
      data: {
        nombre: this.nombre,
        catalogoUsos: this.catalogoUsos,
        catalogoPaises: this.catalogoPaises,
        catalogoTipo: this.catalogoTipo,
        catalogoVidaUtil: this.catalogoVidaUtil,
        usoSeleccionado: this.usoSeleccionado,
        paisSeleccionado: this.paisSeleccionado,
        tipoSeleccionado: this.tipoSeleccionado,
        superficieConstruida: this.superficieConstruida,
        superficieHabitable: this.superficieHabitable,
        vidaUtilSeleccionado: this.vidaUtilSeleccionado,
        noNiveles: this.noNiveles,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      try {
        this.projectsService.addProject({
          name_project: result.nombre,
          builded_surface: parseInt(result.superficieConstruida),
          living_area: parseInt(result.superficieHabitable),
          tier: parseInt(result.noNiveles),
          use_id:  1, // result.usoSeleccionado,
          type_id: result.tipoSeleccionado,
          country_id: result.paisSeleccionado,
          useful_life_id: result.vidaUtilSeleccionado,
        }).subscribe(data => {
          sessionStorage.setItem('primaryDataProject', JSON.stringify(data));
          this.openDialogCTOP();
        });
      } catch (e){
        console.log('close modal');
      }
    });
  }
}
