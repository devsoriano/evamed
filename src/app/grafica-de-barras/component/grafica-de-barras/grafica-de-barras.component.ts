import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-de-barras',
  templateUrl: './grafica-de-barras.component.html',
  styleUrls: ['./grafica-de-barras.component.scss']
})
export class GraficaDeBarrasComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // plugins: {
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'end',
    //     font: {
    //       size: 20,
    //     }
    //   }
    // }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // public chartColors: any[] = [
  //   {backgroundColor:['#DEA961', '#DEA961', '#DEA961', '#DEA961', '#DEA961', '#DEA961', '#DEA961']},
  //   {backgroundColor:['#8F5091', '#8F5091', '#8F5091', '#8F5091', '#8F5091', '#8F5091', '#8F5091']},
  //   {backgroundColor:['#148A93', '#148A93', '#148A93', '#148A93', '#148A93', '#148A93', '#148A93']},
  //   {backgroundColor:['#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89']},
  // ];

  public barChartData: ChartDataSets[] = [
    { data: [20, 30, 10, 45, 25, 5, 40], label: 'Series A', stack: 'a', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
    { data: [15, 20, 40, 20, 35, 38, 37], label: 'Series B', stack: 'a', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
    { data: [40, 38, 30, 8, 10, 25, 8], label: 'Series C', stack: 'a', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
    { data: [25, 12, 20, 27, 30, 32, 15], label: 'Series D', stack: 'a', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' },
    { data: [20, 30, 10, 45, 25, 5, 40], label: 'Series A', stack: 'b', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
    { data: [15, 20, 40, 20, 35, 38, 37], label: 'Series B', stack: 'b', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
    { data: [40, 38, 30, 8, 10, 25, 8], label: 'Series C', stack: 'b', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
    { data: [25, 12, 20, 27, 30, 32, 15], label: 'Series D', stack: 'b', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
