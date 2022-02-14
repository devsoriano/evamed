import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';
import { UpdateDataSchemeComponent } from '../update-data-scheme/update-data-scheme.component';
import { MatDialog } from '@angular/material/dialog';
import { AddDataSchemeComponent } from '../add-data-scheme/add-data-scheme.component';

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.scss'],
})
export class UpdateMaterialComponent implements OnInit {
  form: FormGroup;

  id: string;

  units: any;

  ListSchemeData: any;

  ListPotential: any;

  ListStandards: any;

  potential: any;

  ListDatabases: any;

  displayedColumns: string[] = [
    'id',
    'potential_type_id',
    'standard_id',
    'unit_id',
    'value',
    'actions',
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private materialsService: MaterialsService,
    private analisisService: AnalisisService,
    public dialog: MatDialog
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

    this.materialsService.getDbMaterials().subscribe((data) => {
      this.ListDatabases = data;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.materialsService.getMaterials().subscribe((data) => {
        const materialFiltered = data.filter(
          (material) => material.id === parseInt(params.id)
        );

        // Filtrado de Esquema de material
        materialFiltered.map((material) => {
          this.id = material.id;
          this.form.patchValue(material);
          this.ListSchemeData = [];
          this.analisisService.getMaterialSchemeData().subscribe((msds) => {
            const ListSchemeData = msds.filter(
              (msd) => msd.material_id === material.id
            );

            this.ListSchemeData = ListSchemeData.sort((a, b) => {
              a.standard > b.standard ? 1 : -1;
            });
          });
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
      this.materialsService
        .updateMaterial(this.id, material)
        .subscribe((newProduct) => {
          this.ngOnInit();
          this.router.navigate(['./admin-materials']);
        });
    }
  }

  goToMaterialList() {
    this.router.navigateByUrl('admin-materials');
  }

  goToAddScheme() {
    const dialogRef = this.dialog.open(AddDataSchemeComponent, {
      width: '680px',
      data: { material_id: this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deleteSchema(id: number) {
    console.log('Delete...');
    console.log(id);
  }

  getPotential(id: number) {
    const potencial = this.ListPotential.filter(
      (potencial) => potencial.id === id
    );

    return potencial[0].name_complete_potential_type;
  }

  getStandard(id: number) {
    const standard = this.ListStandards.filter(
      (standard) => standard.id === id
    );

    return standard[0].name_standard;
  }

  getUnit(id: number) {
    const unit = this.units.filter((unit) => unit.id === id);

    return unit[0].name_unit;
  }

  openModalSchema(elem) {
    const dialogRef = this.dialog.open(UpdateDataSchemeComponent, {
      width: '680px',
      data: { ...elem },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
