import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsageStageUpdateComponent } from './components/usage-stage-update/usage-stage-update.component';


const routes: Routes = [
  {
    path: '',
    component: UsageStageUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageStageUpdateRoutingModule { }
