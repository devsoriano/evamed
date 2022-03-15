import { Component, OnInit } from '@angular/core';
import { MaterialsService } from 'src/app/core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTransportComponent } from '../add-transport/add-transport.component';
import { DeleteTransportComponent } from '../delete-transport/delete-transport.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-admin',
  templateUrl: './transport-admin.component.html',
  styleUrls: ['./transport-admin.component.scss'],
})
export class TransportAdminComponent implements OnInit {
  transportList: any;

  displayedColumns: string[] = ['id', 'name_transport', 'actions'];

  constructor(
    private materialsService: MaterialsService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.materialsService.getTransports().subscribe((data) => {
      this.transportList = data;
    });
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  addTransport(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddTransportComponent, {
      width: '680px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteTransport(event: Event, unitId) {
    event.preventDefault();
    const transportSelected = this.transportList.filter(
      (data) => data.id === unitId
    );
    const dialogRef = this.dialog.open(DeleteTransportComponent, {
      width: '680px',
      data: transportSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
