import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name_source_information: string;
}

@Component({
  selector: 'app-add-machinery',
  templateUrl: './add-machinery.component.html',
  styleUrls: ['./add-machinery.component.scss'],
})
export class AddMachineryComponent implements OnInit {
  form: FormGroup;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddMachineryComponent>,
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
      name_source_information: [null, Validators.required],
    });
  }

  addMachinery(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const machinery = this.form.value;
      this.materialsService.addMachinery(machinery).subscribe((data) => {
        this.onNoClick();
      });
    }
  }
}
