import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateDataSchemeComponent } from 'src/app/materials-admin/components/update-data-scheme/update-data-scheme.component';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-update-data-base',
  templateUrl: './update-data-base.component.html',
  styleUrls: ['./update-data-base.component.scss'],
})
export class UpdateDataBaseComponent implements OnInit {
  form: FormGroup;

  id: string;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateDataSchemeComponent>,
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
      name: [null, Validators.required],
    });
  }

  updateDbMaterial(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const dataBase = this.form.value;
      this.materialsService
        .updateDbMaterial(this.id, dataBase)
        .subscribe((data) => {
          this.onNoClick();
        });
    }
  }
}
