import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  optionSelected: string;
}

@Component({
  selector: 'app-choose-type-of-project',
  templateUrl: './choose-type-of-project.component.html',
  styleUrls: ['./choose-type-of-project.component.scss'],
})
export class ChooseTypeOfProjectComponent implements OnInit {
  options: string[] = ['Huella de carbono incorporado', 'Uso', 'Ciclo de vida'];

  constructor(
    public dialogRef: MatDialogRef<ChooseTypeOfProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.optionSelected = 'Huella de carbono incorporado';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
