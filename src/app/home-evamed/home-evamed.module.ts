import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEvamedRoutingModule } from './home-evamed-routing.module';
import { HomeEvamedComponent } from './components/home-evamed/home-evamed.component';
import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { AddNewProjectComponent } from './components/add-new-project/add-new-project.component';
import { ChooseTypeOfProjectComponent } from './components/choose-type-of-project/choose-type-of-project.component';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartsModule } from 'ng2-charts';


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
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    ChartsModule
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
