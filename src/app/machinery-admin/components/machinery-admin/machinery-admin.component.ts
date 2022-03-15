import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { AddMachineryComponent } from '../add-machinery/add-machinery.component';
import { DeleteMachineryComponent } from '../delete-machinery/delete-machinery.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machinery-admin',
  templateUrl: './machinery-admin.component.html',
  styleUrls: ['./machinery-admin.component.scss'],
})
export class MachineryAdminComponent implements OnInit {
  machineryList: any;

  displayedColumns: string[] = ['id', 'name_source_information', 'actions'];

  constructor(
    private materialsService: MaterialsService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.materialsService.getMachinery().subscribe((data) => {
      this.machineryList = data;
    });
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  addMachinery(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddMachineryComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteMachinery(event: Event, unitId) {
    event.preventDefault();
    const machinerySelected = this.machineryList.filter(
      (data) => data.id === unitId
    );
    const dialogRef = this.dialog.open(DeleteMachineryComponent, {
      width: '680px',
      data: machinerySelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
