import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnalisisService } from '../../../core/services/analisis/analisis.service';

export interface DialogData {
  id: number;
  material_id: number;
  potential_type_id: number;
  standard_id: number;
  unit_id: number;
  value: string;
}

@Component({
  selector: 'app-add-data-scheme',
  templateUrl: './add-data-scheme.component.html',
  styleUrls: ['./add-data-scheme.component.scss'],
})
export class AddDataSchemeComponent implements OnInit {
  form: FormGroup;

  id: string;

  material_id: number;

  units: any;

  ListSchemeData: any;

  ListPotential: any;

  ListStandards: any;

  potential: any;

  standard_id: number;

  constructor(
    private materialsService: MaterialsService,
    private analisisService: AnalisisService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddDataSchemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data);
    this.material_id = data.material_id;
    this.buildForm();
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
    this.materialsService.getStandards().subscribe((data) => {
      this.ListStandards = data;
    });
    this.materialsService.getPotentialTypes().subscribe((data) => {
      this.ListPotential = data;
    });
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      unit_id: [null, Validators.required],
      potential_type_id: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  addScheme(event) {
    event.preventDefault();
    if (this.form.valid) {
      const material = this.form.value;

      this.analisisService
        .addMaterialSchemeData({
          ...material,
          material_id: this.material_id,
          standard_id: this.standard_id,
        })
        .subscribe((newScheme) => {
          console.log(newScheme);
          this.onNoClick();
        });
    }
  }
}
