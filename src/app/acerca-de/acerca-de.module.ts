import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcercaDeRoutingModule } from './acerca-de-routing.module';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';


@NgModule({
  declarations: [AcercaDeComponent],
  imports: [
    CommonModule,
    AcercaDeRoutingModule
  ]
})
export class AcercaDeModule { }
