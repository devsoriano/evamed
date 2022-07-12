import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialsService } from './../../../../core/services/materials/materials.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  potential_type_id: number;
  transport_id: number;
  value: string;
}

@Component({
  selector: 'app-add-potential-transport',
  templateUrl: './add-potential-transport.component.html',
  styleUrls: ['./add-potential-transport.component.scss'],
})
export class AddPotentialTransportComponent implements OnInit {
  form: FormGroup;

  transport_id: number;

  ListPotential: any;

  constructor(
    private materialsService: MaterialsService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPotentialTransportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.buildForm();
    this.transport_id = data.transport_id;
    this.materialsService.getPotentialTypes().subscribe((data) => {
      this.ListPotential = data;
    });
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      potential_type_id: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close(this.data);
  }

  addPotential(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const potential = this.form.value;
      this.materialsService
        .addPotentialTransport({
          ...potential,
          transport_id: this.transport_id,
        })
        .subscribe((newScheme) => {
          this.onNoClick();
        });
    }
  }
}
