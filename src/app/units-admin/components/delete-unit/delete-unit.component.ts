import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
  name_unit: string;
}

@Component({
  selector: 'app-delete-unit',
  templateUrl: './delete-unit.component.html',
  styleUrls: ['./delete-unit.component.scss'],
})
export class DeleteUnitComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeleteUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deleteUnit(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteUnit(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
