import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intermedial',
  templateUrl: './intermedial.component.html',
  styleUrls: ['./intermedial.component.scss'],
})
export class IntermedialComponent implements OnInit {
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<IntermedialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  continueStep(event: Event) {
    event.preventDefault();
    this.router.navigateByUrl('/');
    this.onNoClick();
  }
}
