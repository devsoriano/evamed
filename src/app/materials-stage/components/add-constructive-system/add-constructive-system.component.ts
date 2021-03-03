import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  newConstructiveSystem: string;
}

@Component({
  selector: 'app-add-constructive-system',
  templateUrl: './add-constructive-system.component.html',
  styleUrls: ['./add-constructive-system.component.scss']
})
export class AddConstructiveSystemComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddConstructiveSystemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }
}
