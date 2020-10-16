import { Input } from '@angular/core';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @ViewChild('MyChart') chartDir: BaseChartDirective;
  @Input() showMePartially: boolean;
  @Input() id:number;

  private colores: any[] = ['#4DBE89', '#148A93', '#8F5091', '#DEA961'];
  private coloresG: any[] = ['#4DBE89', '#96e2bd', '#4dba8b', '#1f8253'];
  private coloresB: any[] = ['#148A93', '#0da8b6', '#64dee6', '#67c1c9'];
  private coloresP: any[] = ['#8F5091', '#d37cd4', '#8c4c90', '#6c1d6c'];
  private coloresY: any[] = ['#DEA961', '#d99d1c', '#d59a3d', '#f5e381'];

  public pieChartType = 'doughnut';
  public pieChartOptions = {
    segmentShowStroke: false
  };
  public pieChartData: ChartDataSets[] = [
    {data: [80, 10, 5, 5],
      backgroundColor: this.colores},
  ];

  constructor() { }

  ngOnInit(): void {  }

  ngOnChanges(){
    //determinar color de la gráfica
    let color: any;
    switch (this.id) {
      case 1:{
        this.pieChartData[0].backgroundColor = this.coloresG;
        break;
      }
      case 2: {
        this.pieChartData[0].backgroundColor = this.coloresB;
        break;
      }
      case 3: {
        this.pieChartData[0].backgroundColor = this.coloresP;
        break;
      }
      case 4: {
        this.pieChartData[0].backgroundColor = this.coloresY;
        break;
      }
      default: {
        break;
      }
    }
  }
}
