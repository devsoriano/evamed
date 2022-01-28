import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.scss'],
})
export class UpdateMaterialComponent implements OnInit {
  form: FormGroup;

  id: string;

  units: any;

  dataBase = [
    { id: 'EPiC', name: 'EPiC' },
    { id: 'EPDs', name: 'EPDs' },
    { id: 'mexicaniuh', name: 'mexicaniuh' },
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private materialsService: MaterialsService
  ) {
    this.buildForm();
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.materialsService.getMaterials().subscribe((data) => {
        const materialFiltered = data.filter(
          (material) => material.id === parseInt(params.id)
        );
        materialFiltered.map((material) => {
          this.id = material.id;
          this.form.patchValue(material);
        });
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_material: [null, Validators.required],
      database_from: [null, Validators.required],
      description: [null, Validators.required],
      unit_id: [null, Validators.required],
    });
  }

  saveMaterial(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const material = this.form.value;
      console.log(material);
      this.materialsService
        .updateMaterial(this.id, material)
        .subscribe((newProduct) => {
          console.log(newProduct);
          //this.router.navigate(['./']);
        });
    }
  }

  goToMaterialList() {
    this.router.navigateByUrl('admin-materials');
  }
}
