import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-add-data-base',
  templateUrl: './add-data-base.component.html',
  styleUrls: ['./add-data-base.component.scss'],
})
export class AddDataBaseComponent implements OnInit {
  form: FormGroup;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddDataBaseComponent>,
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
      name: [null, Validators.required],
    });
  }

  addDbMaterial(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const dataBase = this.form.value;
      this.materialsService.addDbMaterial(dataBase).subscribe((data) => {
        this.onNoClick();
      });
    }
  }
}
