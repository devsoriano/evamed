import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name_unit: string;
}

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.scss'],
})
export class AddUnitComponent implements OnInit {
  form: FormGroup;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_unit: [null, Validators.required],
    });
  }

  addUnit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const unit = this.form.value;
      this.materialsService.addUnit(unit).subscribe((data) => {
        this.onNoClick();
      });
    }
  }
}
