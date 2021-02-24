import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prev-steps',
  templateUrl: './prev-steps.component.html',
  styleUrls: ['./prev-steps.component.scss']
})
export class PrevStepsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PrevStepsComponent>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToSteps() {
    this.dialogRef.close();
    this.router.navigateByUrl('materials-stage');
  }

}
