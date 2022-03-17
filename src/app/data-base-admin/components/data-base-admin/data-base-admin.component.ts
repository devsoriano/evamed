import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDataBaseComponent } from '../add-data-base/add-data-base.component';
import { UpdateDataBaseComponent } from '../update-data-base/update-data-base.component';
import { DeleteDataBaseComponent } from '../delete-data-base/delete-data-base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-base-admin',
  templateUrl: './data-base-admin.component.html',
  styleUrls: ['./data-base-admin.component.scss'],
})
export class DataBaseAdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];

  dataBases: any;

  constructor(
    private materialsService: MaterialsService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.materialsService.getDbMaterials().subscribe((data) => {
      this.dataBases = data;
    });
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  addDBMaterials(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddDataBaseComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  updateDbMaterials(event: Event, unitId) {
    event.preventDefault();
    const unitSelected = this.dataBases.filter((data) => data.id === unitId);
    const dialogRef = this.dialog.open(UpdateDataBaseComponent, {
      width: '680px',
      data: unitSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteDbMaterials(event: Event, unitId) {
    event.preventDefault();
    const unitSelected = this.dataBases.filter((data) => data.id === unitId);
    const dialogRef = this.dialog.open(DeleteDataBaseComponent, {
      width: '680px',
      data: unitSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
