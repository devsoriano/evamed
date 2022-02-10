import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';

@Component({
  selector: 'app-add-scheme',
  templateUrl: './add-scheme.component.html',
  styleUrls: ['./add-scheme.component.scss'],
})
export class AddSchemeComponent implements OnInit {
  form: FormGroup;

  id: string;

  units: any;

  ListSchemeData: any;

  ListPotential: any;

  ListStandards: any;

  potential: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private materialsService: MaterialsService,
    private analisisService: AnalisisService
  ) {
    this.buildForm();
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
    this.materialsService.getStandards().subscribe((data) => {
      this.ListStandards = data;
    });
    this.materialsService.getPotentialTypes().subscribe((data) => {
      this.ListPotential = data;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

  addScheme(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.activatedRoute.params.subscribe((params: Params) => {
        const material = this.form.value;
        //console.log({ ...material, material_id: parseInt(params.id) });
        this.analisisService
          .addMaterialSchemeData({
            ...material,
            material_id: parseInt(params.id),
          })
          .subscribe((data) => {
            console.log('se ha agregado un nuevo esquema');
            console.log(data);
          });
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      unit_id: [null, Validators.required],
      potential_type_id: [null, Validators.required],
      standard_id: [null, Validators.required],
      value: [null, Validators.required],
    });
  }

  goToMaterialList() {
    this.router.navigateByUrl(`admin-materials/update/${this.id}`);
  }
}
