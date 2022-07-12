import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-delete-data-base',
  templateUrl: './delete-data-base.component.html',
  styleUrls: ['./delete-data-base.component.scss'],
})
export class DeleteDataBaseComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeleteDataBaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deleteDbMaterial(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteDbMaterial(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
