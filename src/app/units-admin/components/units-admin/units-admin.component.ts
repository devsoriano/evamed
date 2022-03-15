import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { AddUnitComponent } from '../add-unit/add-unit.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUnitComponent } from '../update-unit/update-unit.component';
import { DeleteUnitComponent } from '../delete-unit/delete-unit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-units-admin',
  templateUrl: './units-admin.component.html',
  styleUrls: ['./units-admin.component.scss'],
})
export class UnitsAdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name_unit', 'actions'];

  units: any;

  constructor(
    private materialsService: MaterialsService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }
  addUnit(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddUnitComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  updateUnit(event: Event, unitId) {
    event.preventDefault();
    const unitSelected = this.units.filter((data) => data.id === unitId);
    const dialogRef = this.dialog.open(UpdateUnitComponent, {
      width: '680px',
      data: unitSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteUnit(event: Event, unitId) {
    event.preventDefault();
    const unitSelected = this.units.filter((data) => data.id === unitId);
    const dialogRef = this.dialog.open(DeleteUnitComponent, {
      width: '680px',
      data: unitSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
