import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface DialogData {
  id: number;
  name_transport: string;
}

@Component({
  selector: 'app-delete-machinery',
  templateUrl: './delete-machinery.component.html',
  styleUrls: ['./delete-machinery.component.scss'],
})
export class DeleteMachineryComponent implements OnInit {
  constructor(
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<DeleteMachineryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  deleteMachinery(event: Event, id: number) {
    event.preventDefault();
    this.materialsService.deleteMachinery(id).subscribe((data) => {
      this.onNoClick();
    });
  }
}
