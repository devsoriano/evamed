import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  id: number;
  type_energy_id: number;
  potential_type_id: number;
  unit_id: number;
  value: string;
}

@Component({
  selector: 'app-add-potential-energy',
  templateUrl: './add-potential-energy.component.html',
  styleUrls: ['./add-potential-energy.component.scss'],
})
export class AddPotentialEnergyComponent implements OnInit {
  form: FormGroup;

  id: string;

  type_energy_id: number;

  units: any;

  ListSchemeData: any;

  ListPotential: any;

  potential: any;

  unit_id: number;

  unit_name: string = 'Seleccione potencial de impacto ambiental';

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPotentialEnergyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data);
    this.type_energy_id = data.type_energy_id;
    this.buildForm();
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
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
      potential_type_id: [null, Validators.required],
      value: [null, Validators.required],
    });
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

  addScheme(event) {
    event.preventDefault();
    if (this.form.valid) {
      const potential = this.form.value;

      this.materialsService
        .addTypeEnergyData({
          ...potential,
          type_energy_id: this.type_energy_id,
          unit_id: this.unit_id,
        })
        .subscribe((newScheme) => {
          this.onNoClick();
        });
    }
  }
}
