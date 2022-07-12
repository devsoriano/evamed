import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-delete-potential-machinery',
  templateUrl: './delete-potential-machinery.component.html',
  styleUrls: ['./delete-potential-machinery.component.scss'],
})
export class DeletePotentialMachineryComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeletePotentialMachineryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deletePotential(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteMachineryPotential(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
