import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionStageUpdateRoutingModule } from './construction-stage-update-routing.module';
import { ConstructionStageUpdateComponent } from './components/construction-stage-update/construction-stage-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';

@NgModule({
  declarations: [ConstructionStageUpdateComponent, IntermedialComponent],
  imports: [
    CommonModule,
    ConstructionStageUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [ConstructionStageUpdateComponent, IntermedialComponent],
  entryComponents: [IntermedialComponent],
})
export class ConstructionStageUpdateModule {}
