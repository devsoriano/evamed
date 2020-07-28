import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeEvamedComponent } from './components/home-evamed/home-evamed.component';


const routes: Routes = [
  {
    path: '',
    component: HomeEvamedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeEvamedRoutingModule { }
