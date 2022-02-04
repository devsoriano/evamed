import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';

@Component({
  selector: 'app-update-potential-transport',
  templateUrl: './update-potential-transport.component.html',
  styleUrls: ['./update-potential-transport.component.scss'],
})
export class UpdatePotentialTransportComponent implements OnInit {
  materialList: any;

  potentialTypesList: any;

  transportList: any;

  form: FormGroup;

  id: string;

  units: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private analisisService: AnalisisService
  ) {
    this.buildForm();
    this.analisisService.getPotentialTypes().subscribe((data) => {
      this.potentialTypesList = data;
      console.log(data);
    });
    this.transportList = [];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.analisisService.getPotentialTransport().subscribe((data) => {
        const potentialTransportFiltered = data.filter(
          (pt) => pt.id === parseInt(params.id)
        );
        potentialTransportFiltered.map((pt) => {
          this.id = pt.id;
          this.form.patchValue(pt);
        });
      });
    });
  }

  ngOnInit(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      value: [null, Validators.required],
      transport_id: [null, Validators.required],
      potential_type_id: [null, Validators.required],
    });
  }

  saveMaterial(e) {}

  goToMaterialList() {}
}
