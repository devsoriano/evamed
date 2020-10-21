import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConstructionStageRoutingModule } from './construction-stage-routing.module';
import { ConstructionStageComponent } from './components/construction-stage/construction-stage.component';


@NgModule({
  declarations: [ConstructionStageComponent],
  imports: [
    CommonModule,
    ConstructionStageRoutingModule
  ]
})
export class ConstructionStageModule { }
