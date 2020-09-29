import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-grafica-de-barras',
  templateUrl: './grafica-de-barras.component.html',
  styleUrls: ['./grafica-de-barras.component.scss']
})
export class GraficaDeBarrasComponent implements OnInit {

  @ViewChild('MyChart')
  private chartComponent: any;
  
  private colores: any[] = ['#DEA961', '#8F5091', '#148A93', '#4DBE89'];
  private coloresBW: any[] = ['#B1B1B1', '#6A6A6A', '#686868', '#969696'];

  private lastClick = 'Ninguno';

  public barChartOptions: ChartOptions = {
    responsive: true,
    
    legend : {display : false},
    tooltips : {enabled : false},
    plugins: {
      datalabels: {
        color : 'white',
        anchor: 'center',
        align: 'center',
        font: {
          size: 10,
        }
      }
    }
  };
  public barChartLabels: Label[] = ['Indicador 1',
                                    'Indicador 2',
                                    'Indicador 3',
                                    'Indicador 4',
                                    'Indicador 4',
                                    'Indicador 6',
                                    'Indicador 7'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];


  public barChartData: ChartDataSets[] = [
    { data: [20, 30, 10, 45, 25, 5, 40], label: 'Producción', stack: 'a', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
    { data: [15, 20, 40, 20, 35, 38, 37], label: 'Construccion', stack: 'a', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
    { data: [40, 38, 30, 8, 10, 25, 8], label: 'Uso', stack: 'a', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
    { data: [25, 12, 20, 27, 30, 32, 15], label: 'Fin de vida', stack: 'a', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' },
    { data: [20, 30, 10, 45, 25, 5, 40], label: 'Producción', stack: 'b', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
    { data: [15, 20, 40, 20, 35, 38, 37], label: 'Construccion', stack: 'b', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
    { data: [40, 38, 30, 8, 10, 25, 8], label: 'Uso', stack: 'b', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
    { data: [25, 12, 20, 27, 30, 32, 15], label: 'Fin de vida', stack: 'b', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' }
  ];

  // public barChartData: ChartDataSets[] = [
  //   { data: [20, 30, 10, 45, 25, 5, 40], label: 'Producción', stack: 'Edificio 1', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
  //   { data: [15, 20, 40, 20, 35, 38, 37], label: 'Construccion', stack: 'Edificio 1', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
  //   { data: [40, 38, 30, 8, 10, 25, 8], label: 'Uso', stack: 'Edificio 1', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
  //   { data: [25, 12, 20, 27, 30, 32, 15], label: 'Fin de vida', stack: 'Edificio 1', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' },
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // events

  public onChartClick(e: any): void {
    if (e.active.length > 0) {
      var chart = e.active[0]._chart;
      var serie = chart.data.datasets[chart.getElementAtEvent(event)[0]._datasetIndex].label
      var datos = [];
      this.barChartData.forEach( (element, index) => {
        var color;
        if (element.label !== serie && this.lastClick !== serie ){
          color = this.coloresBW[ index % this.colores.length ];
        }else{
          color = this.colores[ index % this.colores.length ];
        }
        this.barChartData[index].backgroundColor = color;
        this.barChartData[index].hoverBackgroundColor = color;
        datos.push(this.barChartData[index]);
      });
      // this.barChartData = datos;
      chart.update();
      this.lastClick = this.lastClick === serie ? 'None' : serie;
      // console.log(chart);

    }else{
      // TODO: interaccion con etiquetas del eje X
      // // var chart = this.chartComponent;
      // console.log(this.chartComponent);
      // console.log(e.event.offsetX, e.event.offsetY);
    }
  }

}
