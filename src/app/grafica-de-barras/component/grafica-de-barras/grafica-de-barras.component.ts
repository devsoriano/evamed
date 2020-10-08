import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { element } from 'protractor';

@Component({
  selector: 'app-grafica-de-barras',
  templateUrl: './grafica-de-barras.component.html',
  styleUrls: ['./grafica-de-barras.component.scss']
})
export class GraficaDeBarrasComponent implements OnInit {

  @ViewChild('MyChart') chartDir: BaseChartDirective;
  
  private canvas;

  private colores: any[] = ['#DEA961', '#8F5091', '#148A93', '#4DBE89'];
  private coloresBW: any[] = ['#B1B1B1', '#6A6A6A', '#686868', '#969696'];

  private lastClick = 'Ninguno';
  private hovered = null;

  public barChartOptions: ChartOptions = {
    responsive: true,
    title : {display : true},
    legend : {display : false},
    tooltips : {enabled : false},
    events: ['touchstart', 'mousemove', 'click'],
    // x_axis : {d},
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

  constructor(private elementRef:ElementRef) {}

  ngOnInit(): void {
    // console.log(this);
  }

  ngAfterViewInit(){
    this.canvas = this.elementRef.nativeElement.querySelector('canvas');
    this.canvas.addEventListener('mousemove', e => { this.onHover(e); });
    this.canvas.addEventListener('mousedown', e => { this.onMouseDown(e); });

    console.log(this.chartDir.chart);
  }

  public onMouseDown(e: any){
    const limite = this.chartDir.chart.height - this.chartDir.chart['boxes'][2].height;
    if (e.offsetY > limite){
      // Control de click en etiquetas
      const seleccion = this.getEtiquetaCercana(e);
      this.focusColumnas(seleccion);
      console.log(e.offsetX, e.offsetY, seleccion);
    }
  }

  private focusColumnas(seleccion: any){

    if (this.lastClick !== seleccion.label){
      this.barChartData.forEach( (e , index) => {
        let color = new Array(e.data.length);

        color.fill(this.coloresBW[ index % this.colores.length ]);
        color[seleccion.index] = this.colores[ index % this.colores.length ];

        this.barChartData[index].backgroundColor = color;
        this.barChartData[index].hoverBackgroundColor = color;
      });

      this.chartDir.update();
      this.lastClick = seleccion.label;
    }else{
      this.resetColores();
      this.lastClick = null;
    }
  }

  private getEtiquetaCercana(e: any){
    const etiquetas = this.chartDir.chart['boxes'][2]['_labelItems'];
    let max = this.chartDir.chart.width;
    let seleccion = '';
    let indice = -1;

    etiquetas.forEach( (etiqueta, i) => {
      const distancia = Math.abs(etiqueta.x - e.offsetX);
      if (distancia < max){
        max = distancia;
        seleccion = etiqueta.label;
        indice = i;
      }
    });
    return {label: seleccion, index: indice};
  }

  public onHover(e: any){
    // Controla el flujo de hover sobre los elementos de las barras
    if (this.hovered !== null){
      const serie = this.chartDir.chart.data.datasets[this.hovered['_datasetIndex']].label;
      if (this.hovered.inRange(e.offsetX, e.offsetY)){
        if (this.lastClick !== serie){
          this.focusSeries(serie);
          this.lastClick = serie;
        }
      }else{
        this.resetColores();
        this.hovered = null;
        this.lastClick = null;
      }
    }
  }

  private resetColores(){
    // Pone todas las series en color normal
    this.barChartData.forEach( ( _ , index) => {
      const color = this.colores[ index % this.colores.length ];
      this.barChartData[index].backgroundColor = color;
      this.barChartData[index].hoverBackgroundColor = color;
    });

    this.chartDir.update();
  }

  private focusSeries(serie){
    // Pone la serie seleccionada de color normal, el resto se pone en blanco y negro
    this.barChartData.forEach( (e , index) => {
      let color: any;

      if (e.label !== serie){
        color = this.coloresBW[ index % this.colores.length ];
      }else{
        color = this.colores[ index % this.colores.length ];
      }

      this.barChartData[index].backgroundColor = color;
      this.barChartData[index].hoverBackgroundColor = color;
    });

    this.chartDir.update();
  }

  // events
  public onChartHover(e: any): void {
    // Asigna el elemento de la grafica sobre el cual se hace hover
    this.hovered = this.chartDir.chart.getElementAtEvent(event)[0];
  }


  public onChartClick(e: any): void {
  }

}
