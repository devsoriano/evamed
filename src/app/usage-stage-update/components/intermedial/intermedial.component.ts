import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MaterialsService } from './../../../core/services/materials/materials.service';

@Component({
  selector: 'app-intermedial',
  templateUrl: './intermedial.component.html',
  styleUrls: ['./intermedial.component.scss'],
})
export class IntermedialComponent implements OnInit {
  constructor(
    private router: Router,
    private materialsService: MaterialsService,
    public dialogRef: MatDialogRef<IntermedialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  continueStep(event: Event) {
    event.preventDefault();
    this.materialsService.getEDCP().subscribe((edcp) => {
      const schemaFilter = edcp.filter(
        (schema) =>
          schema.project_id == localStorage.getItem('idProyectoConstrucción')
      );

      if (schemaFilter.length === 0) {
        this.router.navigateByUrl('end-life-stage');
      } else {
        this.router.navigateByUrl('update-end-life');
      }
    });
    this.onNoClick();
  }
}
