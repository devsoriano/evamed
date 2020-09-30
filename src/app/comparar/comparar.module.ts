import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompararRoutingModule } from './comparar-routing.module';
import { CompararComponent } from './component/comparar/comparar.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
// import { AddNewProjectComponent } from '../add-new-project/add-new-project.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompararComponent],
  imports: [
    CommonModule,
    SharedModule,
    CompararRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    CompararComponent,
    // AddNewProjectComponent
  ],
})
export class CompararModule { }
