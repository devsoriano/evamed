import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EndLifeUpdateComponent } from './components/end-life-update/end-life-update.component';

const routes: Routes = [
  {
    path: '',
    component: EndLifeUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndLifeUpdateRoutingModule {}
