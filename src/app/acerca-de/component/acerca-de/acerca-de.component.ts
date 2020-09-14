import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
// import { AddNewProjectComponent } from '../../../add-new-project/add-new-project.component';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  nombre: string;
  uso: string;
  superficieConstruida: string;
  superficieHabitable: string;
  noNiveles: string;
  vidaUtil: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  logout() {
    this.auth.logout()
    .then(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  // openDialogANP() {
  //   const dialogRef = this.dialog.open(AddNewProjectComponent, {
  //     width: '680px',
  //     data: {
  //       nombre: this.nombre,
  //       uso: this.uso,
  //       superficieConstruida: this.superficieConstruida,
  //       superficieHabitable: this.superficieHabitable,
  //       noNiveles: this.noNiveles,
  //       vidaUtil: this.vidaUtil,
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     try {
  //       this.nombre = result.nombre;
  //       this.uso = result.uso;
  //       this.superficieConstruida = result.superficieConstruida;
  //       this.superficieHabitable = result.superficieHabitable;
  //       this.noNiveles = result.noNiveles;
  //       this.vidaUtil = result.vidaUtil;
  //     } catch (e){
  //       console.log('close modal');
  //     }

  //   });
  // }
}
