import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name_unit: string;
}

@Component({
  selector: 'app-update-unit',
  templateUrl: './update-unit.component.html',
  styleUrls: ['./update-unit.component.scss'],
})
export class UpdateUnitComponent implements OnInit {
  form: FormGroup;

  id: string;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.id = this.data[0].id;
    this.form.patchValue(this.data[0]);
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_unit: [null, Validators.required],
    });
  }

  updateUnit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const unit = this.form.value;
      this.materialsService.updateUnit(this.id, unit).subscribe((data) => {
        console.log(data);
        this.onNoClick();
      });
    }
  }
}
