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

  filterSelected: any;

  filters: any = [
    {
      id: 'a',
      name: 'orden alfabético',
    },
    {
      id: 'b',
      name: 'más antiguo',
    },
    {
      id: 'c',
      name: 'más reciente',
    },
  ];

  alpha: any;

  orderMayorId: any;

  orderMinorId: any;

  inmutableList: any;

  constructor(
    private router: Router,
    private materialsService: MaterialsService
  ) {
    this.materialsService.getMaterials().subscribe((data) => {
      this.materialList = data;
      this.inmutableList = data;
    });
    this.materialsService.getDbMaterials().subscribe((data) => {
      data.map((db) => {
        this.filters.push(db);
      });
    });
  }

  ngOnInit(): void {}

  goToAddMaterial() {
    this.router.navigateByUrl('admin-materials/add');
  }

  goToAdmin() {
    this.router.navigateByUrl('admin');
  }

  deleteMaterial(id) {
    this.materialsService.deleteMaterial(id).subscribe(() => {
      this.materialsService.getMaterials().subscribe((data) => {
        this.materialList = data;
      });
    });
  }

  SortArray(x, y) {
    return x.name_material.localeCompare(y.name_material, 'fr', {
      ignorePunctuation: true,
    });
  }

  filterAlpha(materialList) {
    return materialList.slice().sort(this.SortArray);
  }

  filterOrderMinorId(materialList) {
    return materialList.slice().sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  filterOrderMayorId(materialList) {
    return materialList.slice().sort((a, b) => (a.id < b.id ? 1 : -1));
  }

  filterByDataBase(filter) {
    return this.inmutableList.filter((res) => res.database_from === filter);
  }

  selectFilter(filter) {
    let filterSelected = [];

    if (filter === 'orden alfabético') {
      filterSelected = this.filterAlpha(this.inmutableList);
    } else if (filter === 'más antiguo') {
      filterSelected = this.filterOrderMinorId(this.inmutableList);
    } else if (filter === 'más reciente') {
      filterSelected = this.filterOrderMayorId(this.inmutableList);
    } else {
      filterSelected = this.filterByDataBase(filter);
    }

    this.materialList = filterSelected;

    console.log(filterSelected);
  }
}
