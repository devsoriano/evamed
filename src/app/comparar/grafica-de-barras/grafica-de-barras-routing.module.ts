import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficaDeBarrasComponent } from './component/grafica-de-barras/grafica-de-barras.component';


const routes: Routes = [
  {
    path: '',
    component: GraficaDeBarrasComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficaDeBarrasRoutingModule { }
