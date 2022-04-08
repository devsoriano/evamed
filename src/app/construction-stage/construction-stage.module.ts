import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionStageRoutingModule } from './construction-stage-routing.module';
import { ConstructionStageComponent } from './components/construction-stage/construction-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';

@NgModule({
  declarations: [ConstructionStageComponent, IntermedialComponent],
  imports: [
    CommonModule,
    ConstructionStageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [IntermedialComponent],
  entryComponents: [IntermedialComponent],
})
export class ConstructionStageModule {}
