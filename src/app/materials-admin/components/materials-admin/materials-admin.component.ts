import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialsService } from './../../../core/services/materials/materials.service';

export interface Material {
  id: number;
  database_from: string;
  description: string;
  name_material: string;
  unit_id: number;
}

@Component({
  selector: 'app-materials-admin',
  templateUrl: './materials-admin.component.html',
  styleUrls: ['./materials-admin.component.scss'],
})
export class MaterialsAdminComponent implements OnInit {
  materialList: Material[];
  displayedColumns: string[] = [
    'id',
    'database_from',
    'name_material',
    'description',
    'unit_id',
    'actions',
  ];

  constructor(
    private router: Router,
    private materialsService: MaterialsService
  ) {
    this.materialsService.getMaterials().subscribe((data) => {
      this.materialList = data;
    });
  }

  ngOnInit(): void {}

  goToAddMaterial() {
    this.router.navigateByUrl('admin-materials/add');
  }

  deleteMaterial(id) {
    this.materialsService.deleteMaterial(id).subscribe(() => {
      this.materialsService.getMaterials().subscribe((data) => {
        this.materialList = data;
      });
    });
  }
}
