import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsStageRoutingModule } from './materials-stage-routing.module';
import { MaterialsStageComponent } from './components/materials-stage/materials-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { ProjectAndReturnComponent } from './../shared/components/project-and-return/project-and-return/project-and-return.component';

@NgModule({
  declarations: [
    MaterialsStageComponent,
    ProjectAndReturnComponent
  ],
  imports: [
    CommonModule,
    MaterialsStageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class MaterialsStageModule { }
