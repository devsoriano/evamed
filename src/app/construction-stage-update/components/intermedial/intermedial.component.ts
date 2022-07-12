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
    this.materialsService.getACR().subscribe((acr) => {
      const schemaFilter = acr.filter(
        (schema) =>
          schema.project_id == localStorage.getItem('idProyectoConstrucción')
      );

      if (schemaFilter.length === 0) {
        this.router.navigateByUrl('usage-stage');
      } else {
        this.router.navigateByUrl('usage-stage-update');
      }
    });
    this.onNoClick();
  }
}
