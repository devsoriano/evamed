import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  id: number;
  potential_type_id: number;
  transport_id: number;
  value: string;
}

@Component({
  selector: 'app-update-potential-transport',
  templateUrl: './update-potential-transport.component.html',
  styleUrls: ['./update-potential-transport.component.scss'],
})
export class UpdatePotentialTransportComponent implements OnInit {
  form: FormGroup;

  transport_id: number;

  ListPotential: any;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdatePotentialTransportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.buildForm();
    this.materialsService.getPotentialTypes().subscribe((data) => {
      this.ListPotential = data;
    });
  }

  ngOnInit(): void {
    this.form.patchValue(this.data[0]);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      potential_type_id: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  updatePotential(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const scheme = this.form.value;
      this.materialsService
        .updatePotentialTransport(this.data[0].id, {
          ...scheme,
          transport_id: this.data[0].standard_id,
        })
        .subscribe((newScheme) => {
          console.log(newScheme);
          this.onNoClick();
        });
    }
  }
}
