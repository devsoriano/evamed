import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeEvamedRoutingModule } from './home-evamed-routing.module';
import { HomeEvamedComponent } from './components/home-evamed/home-evamed.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeEvamedComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeEvamedRoutingModule
  ]
})
export class HomeEvamedModule { }
