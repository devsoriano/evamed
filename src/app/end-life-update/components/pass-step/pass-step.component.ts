import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pass-step',
  templateUrl: './pass-step.component.html',
  styleUrls: ['./pass-step.component.scss'],
})
export class PassStepComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PassStepComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { continue: boolean }
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.data.continue = false;
    this.dialogRef.close(this.data);
  }

  continueOnly(event: Event) {
    event.preventDefault();
    this.data.continue = true;
    this.dialogRef.close(this.data);
  }
}
