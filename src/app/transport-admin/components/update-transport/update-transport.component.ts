import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-transport',
  templateUrl: './update-transport.component.html',
  styleUrls: ['./update-transport.component.scss'],
})
export class UpdateTransportComponent implements OnInit {
  form: FormGroup;

  id: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private materialsService: MaterialsService,
    public dialog: MatDialog
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.materialsService.getTransports().subscribe((data) => {
        const transportFiltered = data.filter(
          (transporte) => transporte.id === parseInt(params.id)
        );

        transportFiltered.map((transport) => {
          this.id = transport.id;
          this.form.patchValue(transport);
        });
      });
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name_transport: [null, Validators.required],
    });
  }

  updateMaterial(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const transport = this.form.value;
      this.materialsService
        .updateTransport(this.id, transport)
        .subscribe((newProduct) => {
          this.ngOnInit();
          this.router.navigate(['./admin-transports/']);
        });
    }
  }

  goToTransportList() {
    this.router.navigateByUrl('admin-transports');
  }
}
