import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteEnergyComponent } from '../delete-energy/delete-energy.component';
import { AddEnergyComponent } from '../add-energy/add-energy.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-energy-admin',
  templateUrl: './energy-admin.component.html',
  styleUrls: ['./energy-admin.component.scss'],
})
export class EnergyAdminComponent implements OnInit {
  energyList: any;

  displayedColumns: string[] = ['id', 'name_type_energy', 'actions'];

  constructor(
    private materialsService: MaterialsService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.materialsService.getTypeEnergy().subscribe((data) => {
      this.energyList = data;
    });
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  addEnergy(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddEnergyComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteEnergy(event: Event, unitId) {
    event.preventDefault();
    const energySelected = this.energyList.filter((data) => data.id === unitId);
    const dialogRef = this.dialog.open(DeleteEnergyComponent, {
      width: '680px',
      data: energySelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
