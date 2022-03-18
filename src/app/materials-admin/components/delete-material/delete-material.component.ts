import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
  name_material: string;
}

@Component({
  selector: 'app-delete-transport',
  templateUrl: './delete-material.component.html',
  styleUrls: ['./delete-material.component.scss'],
})
export class DeleteMaterialComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeleteMaterialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    console.log('On Init');
    console.log(this.data);
  }

  onNoClick() {
    this.dialogRef.close(this.data);
  }

  deleteMaterial(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteMaterial(id).subscribe(() => {
      this.onNoClick();
    });
  }
}
