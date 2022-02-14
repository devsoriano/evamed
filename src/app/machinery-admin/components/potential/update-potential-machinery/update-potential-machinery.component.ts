import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  id: number;
  sourceInformarion_id: number;
  potential_type_id: number;
  unit_id: number;
  value: string;
}

@Component({
  selector: 'app-update-potential-machinery',
  templateUrl: './update-potential-machinery.component.html',
  styleUrls: ['./update-potential-machinery.component.scss'],
})
export class UpdatePotentialMachineryComponent implements OnInit {
  form: FormGroup;

  id: string;

  sourceInformarion_id: number;

  units: any;

  ListSchemeData: any;

  ListPotential: any;

  potential: any;

  unit_id: number;

  unit_name: string = 'Seleccione potencial de impacto ambiental';

  loading: boolean = true;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdatePotentialMachineryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.buildForm();
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
    this.materialsService.getPotentialTypes().subscribe((potential) => {
      this.ListPotential = potential;
    });
  }

  ngOnInit(): void {
    this.materialsService.getMachineryPotential().subscribe((data) => {
      const schema = data.filter(
        (schemaSelected) => schemaSelected.id === this.data.id
      );
      this.id = schema[0].id;
      this.form.patchValue(schema[0]);
      this.potentialSelected(schema[0].potential_type_id);

      if (this.id) {
        this.loading = false;
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      potential_type_id: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  updateScheme(event) {
    event.preventDefault();
    if (this.form.valid) {
      const scheme = this.form.value;
      this.materialsService
        .updateMachineryPotential(this.id, {
          ...scheme,
          unit_id: this.unit_id,
        })
        .subscribe((newScheme) => {
          console.log(newScheme);
          this.onNoClick();
        });
    }
  }

  potentialSelected(potentialId) {
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
