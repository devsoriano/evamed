import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsStageRoutingModule } from './materials-stage-routing.module';
import { MaterialsStageComponent } from './components/materials-stage/materials-stage.component';


@NgModule({
  declarations: [MaterialsStageComponent],
  imports: [
    CommonModule,
    MaterialsStageRoutingModule
  ]
})
export class MaterialsStageModule { }
