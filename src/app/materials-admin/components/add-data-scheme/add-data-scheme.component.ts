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

  unit_id: number;

  unit_name: string = 'Seleccione potencial de impacto ambiental';

  constructor(
    private materialsService: MaterialsService,
    private analisisService: AnalisisService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddDataSchemeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log('entra a este proceso!!!!!');
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

  onNoClick() {
    console.log('entra al onNoClick');
    this.dialogRef.close(this.data);
  }

  private buildForm() {
    console.log('entra al build form');
    this.form = this.formBuilder.group({
      potential_type_id: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  addScheme(event) {
    console.log('addScheme');
    event.preventDefault();
    if (this.form.valid) {
      const material = this.form.value;

      this.analisisService
        .addMaterialSchemeData({
          ...material,
          material_id: this.material_id,
          standard_id: this.standard_id,
          unit_id: this.unit_id,
        })
        .subscribe((newScheme) => {
          this.onNoClick();
        });
    }
  }

  potentialSelected(potentialId) {
    console.log('entra al potentialSelected');
    const potentialData = this.ListPotential.filter(
      (data) => data.id === potentialId
    );

    const unitData = this.units.filter(
      (data) => data.name_unit == potentialData[0].unit_potential_type
    );

    try {
      this.unit_id = unitData[0].id;
      this.unit_name = unitData[0].name_unit;
    } catch (e) {
      this.unit_id = null;
      this.unit_name = 'No se encontró coincidencia con unidades';
    }
  }
}
