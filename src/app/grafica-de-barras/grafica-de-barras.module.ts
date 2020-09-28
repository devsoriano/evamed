import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficaDeBarrasRoutingModule } from './grafica-de-barras-routing.module';
import { GraficaDeBarrasComponent } from './component/grafica-de-barras/grafica-de-barras.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [GraficaDeBarrasComponent],
  imports: [
    CommonModule,
    SharedModule,
    GraficaDeBarrasRoutingModule,
    MaterialModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    GraficaDeBarrasComponent
  ],
})
export class GraficaDeBarrasModule { }
