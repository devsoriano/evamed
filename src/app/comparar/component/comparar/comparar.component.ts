import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){ }

  ngOnInit(): void {  }

  flag(x:number) {
  this.bandera = x;
  }

  grafica(x: number) {
    if (this.bandera == 1) {
        this.showVar = !this.showVar;
    } else {
      this.showVar_1 = !this.showVar_1;
    }
  }

}
