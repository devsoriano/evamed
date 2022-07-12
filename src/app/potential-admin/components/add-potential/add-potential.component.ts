import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  id: number;
  name_complete_potential_type: string;
  name_potential_type: number;
  unit_potential_type: number;
}

@Component({
  selector: 'app-add-potential',
  templateUrl: './add-potential.component.html',
  styleUrls: ['./add-potential.component.scss'],
})
export class AddPotentialComponent implements OnInit {
  form: FormGroup;

  units: any;
  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPotentialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.buildForm();

    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_complete_potential_type: [null, Validators.required],
      name_potential_type: [null, Validators.required],
      unit_potential_type: [null, Validators.required],
    });
  }

  addPotentialType(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const potentialType = this.form.value;
      this.materialsService
        .addPotentialTypes(potentialType)
        .subscribe((data) => {
          console.log(data);
          this.onNoClick();
        });
    }
  }
}
