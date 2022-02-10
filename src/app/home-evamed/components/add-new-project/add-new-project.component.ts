import { CatalogsService } from 'src/app/core/services/catalogs/catalogs.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  nombre: string;
  catalogoUsos: any;
  catalogoPaises: any;
  catalogoTipo: any;
  catalogoVidaUtil: any;
  catalogoEsqHabitacional: any;
  catalogoEstados: any;
  filtroUsoSeleccionado: number;
  usoSeleccionado: number;
  paisSeleccionado: any;
  tipoSeleccionado: any;
  ciudadSeleccionada: any;
  vidaUtilSeleccionado: string;
  esqHabitacionalSeleccionado: string;
  estadoSeleccionado: any;
  superficieConstruida: string;
  superficieHabitable: string;
  noNiveles: string;
  vidaUtil: string;
}

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrls: ['./add-new-project.component.scss'],
})
export class AddNewProjectComponent implements OnInit {
  catalogoCiudades: any;

  constructor(
    private catalogsService: CatalogsService,
    public dialogRef: MatDialogRef<AddNewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {}

  select(id) {
    this.catalogoCiudades = [];
    this.catalogsService.getCities().subscribe((data) => {
      data.map((item) => {
        if (item.state_id === id) {
          this.catalogoCiudades.push(item);
        }
      });
    });
  }
}
