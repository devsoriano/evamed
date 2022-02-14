import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';

@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.scss'],
})
export class AddMaterialComponent implements OnInit {
  addMaterialForm: FormGroup;

  units: any;

  ListDatabases: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private materialsService: MaterialsService
  ) {
    this.buildForm();
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
    this.materialsService.getDbMaterials().subscribe((data) => {
      this.ListDatabases = data;
    });
  }

  ngOnInit(): void {}

  private buildForm() {
    this.addMaterialForm = this.fb.group({
      name_material: [null, Validators.required],
      database_from: [null, Validators.required],
      description: [null, Validators.required],
      unit_id: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.addMaterialForm.valid) {
      const material = this.addMaterialForm.value;
      this.materialsService.addMaterial(material).subscribe((data) => {
        console.log(data);
      });
    }
  }

  goToMaterialList() {
    this.router.navigateByUrl('admin-materials');
  }
}
