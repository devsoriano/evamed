import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { UpdatePotentialComponent } from '../update-potential/update-potential.component';
import { DeletePotentialComponent } from '../delete-potential/delete-potential.component';
import { AddPotentialComponent } from '../add-potential/add-potential.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-potential-admin',
  templateUrl: './potential-admin.component.html',
  styleUrls: ['./potential-admin.component.scss'],
})
export class PotentialAdminComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name_potential_type',
    'name_complete_potential_type',
    'unit_potential_type',
    'actions',
  ];

  ListPotential: any;

  constructor(
    private materialsService: MaterialsService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  ngOnInit(): void {
    this.materialsService.getPotentialTypes().subscribe((data) => {
      this.ListPotential = data;
    });
  }

  addPotential(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddPotentialComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  updatePotential(event: Event, potentialId) {
    event.preventDefault();
    const unitSelected = this.ListPotential.filter(
      (data) => data.id === potentialId
    );
    const dialogRef = this.dialog.open(UpdatePotentialComponent, {
      width: '680px',
      data: unitSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deletePotential(event: Event, potentialId) {
    event.preventDefault();
    const unitSelected = this.ListPotential.filter(
      (data) => data.id === potentialId
    );
    const dialogRef = this.dialog.open(DeletePotentialComponent, {
      width: '680px',
      data: unitSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
