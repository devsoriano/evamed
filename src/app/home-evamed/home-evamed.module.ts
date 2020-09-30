import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEvamedRoutingModule } from './home-evamed-routing.module';
import { HomeEvamedComponent } from './components/home-evamed/home-evamed.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { AddNewProjectComponent } from './../add-new-project/add-new-project.component';
import { ChooseTypeOfProjectComponent } from './../choose-type-of-project/choose-type-of-project.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeEvamedComponent,
    AddNewProjectComponent,
    ChooseTypeOfProjectComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeEvamedRoutingModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    HomeEvamedComponent,
    AddNewProjectComponent,
    ChooseTypeOfProjectComponent
  ],
  entryComponents: [
    AddNewProjectComponent,
    ChooseTypeOfProjectComponent
  ]
})
export class HomeEvamedModule { }
