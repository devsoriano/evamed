import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatSelectModule } from '@angular/material/select';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { CompararRoutingModule } from './comparar-routing.module';
import { CompararComponent } from './component/comparar/comparar.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { RadialChartComponent } from '../radial-chart/radial-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { BarChartSimpleComponent } from '../bar-chart-simple/bar-chart-simple.component';
// import { MatRadioButton } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { GraficasTercerSeccionComponent } from './component/graficas-tercer-seccion/graficas-tercer-seccion.component';


@NgModule({
  declarations: [
    CompararComponent,
    PieChartComponent,
    RadialChartComponent,
    BarChartComponent,
    BarChartSimpleComponent,
    GraficasTercerSeccionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CompararRoutingModule,
    MaterialModule,
    FormsModule,
    ChartsModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    ScrollingModule,
    MatCheckboxModule
  ],
  exports: [
    CompararComponent,
  ],
})
export class CompararModule { }
