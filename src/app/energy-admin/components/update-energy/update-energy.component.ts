import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPotentialEnergyComponent } from '../potential/add-potential-energy/add-potential-energy.component';
import { UpdatePotentialEnergyComponent } from '../potential/update-potential-energy/update-potential-energy.component';
import { DeletePotentialEnergyComponent } from '../potential/delete-potential-energy/delete-potential-energy.component';

@Component({
  selector: 'app-update-energy',
  templateUrl: './update-energy.component.html',
  styleUrls: ['./update-energy.component.scss'],
})
export class UpdateEnergyComponent implements OnInit {
  form: FormGroup;

  units: any;

  id: string;

  potentialList: any;

  potentialTypeList: any;

  displayedColumns: string[] = [
    'id',
    'potential_type_id',
    'unit_id',
    'value',
    'actions',
  ];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private materialsService: MaterialsService,
    public dialog: MatDialog
  ) {
    this.buildForm();
    this.materialsService.getPotentialTypes().subscribe((data) => {
      this.potentialTypeList = data;
    });
    this.materialsService.getUnits().subscribe((data) => {
      this.units = data;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.materialsService.getTypeEnergy().subscribe((data) => {
        const energyFiltered = data.filter(
          (energy) => energy.id === parseInt(params.id)
        );

        energyFiltered.map((energy) => {
          this.id = energy.id;
          this.form.patchValue(energy);
          this.potentialList = [];
          this.materialsService.getTypeEnergyData().subscribe((data) => {
            const potentialList = data.filter(
              (potential) => potential.type_energy_id === energy.id
            );
            this.potentialList = potentialList;
            console.log(this.potentialList);
          });
        });
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_type_energy: [null, Validators.required],
    });
  }

  goToEnergyList() {
    this.router.navigateByUrl('admin-energy');
  }

  updateEnergy(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const energy = this.form.value;
      this.materialsService
        .updateTypeEnergy(this.id, energy)
        .subscribe((newProduct) => {
          this.ngOnInit();
          this.router.navigate(['./admin-energy/']);
        });
    }
  }

  addPotential(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddPotentialEnergyComponent, {
      width: '680px',
      data: { type_energy_id: this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  updatePotential(event: Event, element: any) {
    event.preventDefault();
    const dialogRef = this.dialog.open(UpdatePotentialEnergyComponent, {
      width: '680px',
      data: { ...element },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  deletePotential(event: Event, potentialId: number) {
    event.preventDefault();
    const potentialSelected = this.potentialList.filter(
      (data) => data.id === potentialId
    );
    const dialogRef = this.dialog.open(DeletePotentialEnergyComponent, {
      width: '680px',
      data: potentialSelected,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  getPotential(id: number) {
    const potencial = this.potentialTypeList.filter(
      (potencial) => potencial.id === id
    );

    return potencial[0].name_complete_potential_type;
  }

  getUnit(id: number) {
    const unit = this.units.filter((unit) => unit.id === id);

    return unit[0].name_unit;
  }
}
