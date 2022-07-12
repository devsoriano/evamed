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

  onNoClick() {
    this.dialogRef.close(this.data);
  }

  continueStep(event: Event) {
    event.preventDefault();
    this.materialsService.getConstructionStage().subscribe((cse) => {
      const schemaFilter = cse.filter(
        (schema) =>
          schema.project_id == localStorage.getItem('idProyectoConstrucción')
      );
      console.log(schemaFilter);

      if (schemaFilter.length === 0) {
        this.router.navigateByUrl('construction-stage');
      } else {
        this.router.navigateByUrl('construction-stage-update');
      }
    });
    this.onNoClick();
  }
}
