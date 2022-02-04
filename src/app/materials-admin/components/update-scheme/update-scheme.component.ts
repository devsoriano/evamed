import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';

@Component({
  selector: 'app-update-scheme',
  templateUrl: './update-scheme.component.html',
  styleUrls: ['./update-scheme.component.scss'],
})
export class UpdateSchemeComponent implements OnInit {
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
      this.analisisService.getMaterialSchemeData().subscribe((data) => {
        const schema = data.filter(
          (schemaSelected) => schemaSelected.id === parseInt(params.id)
        );
        this.id = schema[0].id;
        this.form.patchValue(schema[0]);
      });
    });
  }

  updateScheme(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const scheme = this.form.value;
      this.analisisService
        .updateMaterialSchemeData(this.id, scheme)
        .subscribe((newScheme) => {
          console.log(newScheme);
          //this.router.navigate(['./']);
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
}
