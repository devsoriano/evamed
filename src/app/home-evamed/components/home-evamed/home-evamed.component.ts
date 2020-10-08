import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddNewProjectComponent } from './../../../add-new-project/add-new-project.component';
import { ChooseTypeOfProjectComponent } from './../../../choose-type-of-project/choose-type-of-project.component';
import { ProjectsService } from './../../../core/services/projects.service';

@Component({
  selector: 'app-home-evamed',
  templateUrl: './home-evamed.component.html',
  styleUrls: ['./home-evamed.component.scss']
})
export class HomeEvamedComponent implements OnInit {

  nombre: string;
  uso: string;
  superficieConstruida: string;
  superficieHabitable: string;
  noNiveles: string;
  vidaUtil: string;
  optionSelected: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog,
    private projectsService: ProjectsService
  ) { }

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
      console.log('The dialog was closed');
      console.log(result);
      try {
        this.optionSelected = result.optionSelected;
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
        uso: this.uso,
        superficieConstruida: this.superficieConstruida,
        superficieHabitable: this.superficieHabitable,
        noNiveles: this.noNiveles,
        vidaUtil: this.vidaUtil,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // console.log(result);
      try {
        this.nombre = result.nombre;
        this.uso = result.uso;
        this.superficieConstruida = result.superficieConstruida;
        this.superficieHabitable = result.superficieHabitable;
        this.noNiveles = result.noNiveles;
        this.vidaUtil = result.vidaUtil;
        this.openDialogCTOP();
        this.projectsService.addProject({
          name_project: this.nombre,
          use: this.uso,
          builded_surface: this.superficieConstruida,
          living_area: this.superficieHabitable,
          tier: this.noNiveles,
          useful_life: this.vidaUtil,
        }).subscribe(data => {
          console.log('response service');
          console.log(data);
        });
      } catch (e){
        console.log('close modal');
      }

    });
  }


}
