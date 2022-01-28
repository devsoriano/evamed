import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';

export interface Material {
  id: number;
  database_from: string;
  description: string;
  name_material: string;
  unit_id: number;
}

export interface PotentialTransport {
  id: number;
  value: string;
  material_id: number;
  unit_id: number;
}

@Component({
  selector: 'app-potential-transport',
  templateUrl: './potential-transport.component.html',
  styleUrls: ['./potential-transport.component.scss'],
})
export class PotentialTransportComponent implements OnInit {
  materialList: Material[];

  potentialTransportList: PotentialTransport[];

  displayedColumns: string[] = [
    'id',
    'value',
    'transport_id',
    'potential_type_id',
    'actions',
  ];

  constructor(
    private router: Router,
    private materialsService: MaterialsService,
    private analisisService: AnalisisService
  ) {
    this.materialsService.getMaterials().subscribe((data) => {
      this.materialList = data;
    });
    this.analisisService.getPotentialTransport().subscribe((data) => {
      this.potentialTransportList = data;
    });
  }

  ngOnInit(): void {}

  goToAddPotentialTransport() {
    this.router.navigateByUrl('admin-potential-transport/add');
  }

  deletePotentialItem(id: number) {
    console.log('eliminar');
  }
}
