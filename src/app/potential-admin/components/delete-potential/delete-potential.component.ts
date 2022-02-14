import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
  name_complete_potential_type: string;
  name_potential_type: number;
  unit_potential_type: number;
}

@Component({
  selector: 'app-delete-potential',
  templateUrl: './delete-potential.component.html',
  styleUrls: ['./delete-potential.component.scss'],
})
export class DeletePotentialComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeletePotentialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deletePotential(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deletePotentialType(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
