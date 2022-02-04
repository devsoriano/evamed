import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsAdminComponent } from './components/materials-admin/materials-admin.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { UpdateMaterialComponent } from './components/update-material/update-material.component';
import { UpdateSchemeComponent } from './components/update-scheme/update-scheme.component';

const routes: Routes = [
  {
    path: '',
    component: MaterialsAdminComponent,
  },
  {
    path: 'add',
    component: AddMaterialComponent,
  },
  {
    path: 'update/:id',
    component: UpdateMaterialComponent,
  },
  {
    path: 'scheme-update/:id',
    component: UpdateSchemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialsAdminRoutingModule {}
