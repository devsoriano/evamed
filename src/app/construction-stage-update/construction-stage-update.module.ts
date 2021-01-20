import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionStageUpdateRoutingModule } from './construction-stage-update-routing.module';
import { ConstructionStageUpdateComponent } from './components/construction-stage-update/construction-stage-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [
    ConstructionStageUpdateComponent
  ],
  imports: [
    CommonModule,
    ConstructionStageUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ]
})
export class ConstructionStageUpdateModule { }
