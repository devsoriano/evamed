import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
}
@Component({
  selector: 'app-delete-data-scheme',
  templateUrl: './delete-data-scheme.component.html',
  styleUrls: ['./delete-data-scheme.component.scss'],
})
export class DeleteDataSchemeComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeleteDataSchemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close(this.data);
  }

  deletePotential(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteMaterialSchemeData(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
