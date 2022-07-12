import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-delete-potential-transport',
  templateUrl: './delete-potential-transport.component.html',
  styleUrls: ['./delete-potential-transport.component.scss'],
})
export class DeletePotentialTransportComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeletePotentialTransportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close(this.data);
  }

  deletePotential(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deletePotentialTransport(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
