import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  name_transport: string;
}

@Component({
  selector: 'app-add-transport',
  templateUrl: './add-transport.component.html',
  styleUrls: ['./add-transport.component.scss'],
})
export class AddTransportComponent implements OnInit {
  form: FormGroup;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddTransportComponent>,
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
      name_transport: [null, Validators.required],
    });
  }

  addTransport(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const unit = this.form.value;
      this.materialsService.addTransport(unit).subscribe((data) => {
        this.onNoClick();
      });
    }
  }
}
