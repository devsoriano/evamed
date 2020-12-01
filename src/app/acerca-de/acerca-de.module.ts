import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercaDeRoutingModule } from './acerca-de-routing.module';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../material/material.module';
// import { AddNewProjectComponent } from '../add-new-project/add-new-project.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AcercaDeComponent,
    // AddNewProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AcercaDeRoutingModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    AcercaDeComponent,
    // AddNewProjectComponent
  ],
  // entryComponents: [AddNewProjectComponent]
})
export class AcercaDeModule { }
