import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogData {
  nameProject: string;
}

@Component({
  selector: 'app-change-name-project',
  templateUrl: './change-name-project.component.html',
  styleUrls: ['./change-name-project.component.scss']
})
export class ChangeNameProjectComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ChangeNameProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }
}
