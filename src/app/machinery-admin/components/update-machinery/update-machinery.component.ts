import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPotentialMachineryComponent } from '../potential/add-potential-machinery/add-potential-machinery.component';
import { UpdatePotentialMachineryComponent } from '../potential/update-potential-machinery/update-potential-machinery.component';
import { DeletePotentialMachineryComponent } from '../potential/delete-potential-machinery/delete-potential-machinery.component';

@Component({
  selector: 'app-update-machinery',
  templateUrl: './update-machinery.component.html',
  styleUrls: ['./update-machinery.component.scss'],
})
export class UpdateMachineryComponent implements OnInit {
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
      this.materialsService.getMachinery().subscribe((data) => {
        const machinaryFiltered = data.filter(
          (machinary) => machinary.id === parseInt(params.id)
        );

        machinaryFiltered.map((machinary) => {
          this.id = machinary.id;
          this.form.patchValue(machinary);
          this.potentialList = [];
          this.materialsService.getMachineryPotential().subscribe((data) => {
            const potentialList = data.filter(
              (potential) => potential.sourceInformarion_id === machinary.id
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
      name_source_information: [null, Validators.required],
    });
  }

  goToMachineryList() {
    this.router.navigateByUrl('admin-machinery');
  }

  updateMachinery(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const machinery = this.form.value;
      this.materialsService
        .updateMachinery(this.id, machinery)
        .subscribe((newProduct) => {
          this.ngOnInit();
          this.router.navigate(['./admin-machinery/']);
        });
    }
  }

  addPotential(event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AddPotentialMachineryComponent, {
      width: '680px',
      data: { sourceInformarion_id: this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }

  updatePotential(event: Event, element: any) {
    event.preventDefault();
    const dialogRef = this.dialog.open(UpdatePotentialMachineryComponent, {
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
    const dialogRef = this.dialog.open(DeletePotentialMachineryComponent, {
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
