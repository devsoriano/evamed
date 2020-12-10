import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficaDeBarrasRoutingModule } from './grafica-de-barras-routing.module';
import { GraficaDeBarrasComponent } from './component/grafica-de-barras/grafica-de-barras.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CompararComponent } from '../component/comparar/comparar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { RadialChartComponent } from 'src/app/radial-chart/radial-chart.component';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BarChartSimpleComponent } from 'src/app/bar-chart-simple/bar-chart-simple.component';



@NgModule({
  declarations: [
    GraficaDeBarrasComponent,
    CompararComponent,
    BarChartComponent,
    RadialChartComponent,
    PieChartComponent,
    BarChartSimpleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GraficaDeBarrasRoutingModule,
    MaterialModule,
    FormsModule,
    ChartsModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatCheckboxModule,
  ],
  exports: [
    GraficaDeBarrasComponent,
  ],
})
export class GraficaDeBarrasModule { }
