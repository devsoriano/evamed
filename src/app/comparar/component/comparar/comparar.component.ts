import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
})
export class CompararComponent implements OnInit {

  bandera:number;
  showVar: boolean = false;
  showVar_1: boolean = false;
  ID:number;

  constructor(){ }

  ngOnInit(): void {  }

  flag(x:number) {
  this.bandera = x;
  }

  grafica(x: number) {
    this.ID = x;
    if (this.bandera == 1) {
      this.showVar = !this.showVar;
    } else {
      this.showVar_1 = !this.showVar_1;
    }
  }

}
