import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompararRoutingModule } from './comparar-routing.module';
import { CompararComponent } from './component/comparar/comparar.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { RadialChartComponent } from '../radial-chart/radial-chart.component';
import { ChartsModule } from 'ng2-charts';
import { GraficaDeBarrasModule } from '../grafica-de-barras/grafica-de-barras.module';


@NgModule({
  declarations: [CompararComponent,PieChartComponent,RadialChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompararRoutingModule,
    MaterialModule,
    FormsModule,
    ChartsModule,
    GraficaDeBarrasModule
  ],
  exports: [
    CompararComponent,
  ],
})
export class CompararModule { }
