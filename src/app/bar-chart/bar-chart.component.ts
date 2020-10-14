import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, ChartRenderProps } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { element } from 'protractor';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @ViewChild('MyChart') chartDir: BaseChartDirective;
  private canvas: any;

  private colores: any[] = ['#DEA961', '#8F5091', '#148A93', '#4DBE89'];
  private coloresBW: any[] = ['#B1B1B1', '#6A6A6A', '#686868', '#969696'];

  private lastClick = 'Ninguno';
  private hovered = null;
  private centrosX = {};
  private proyectos = [];
  private inicializado = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
    title : {display : true},
    legend : {display : false},
    tooltips : {enabled : false},
    events: ['touchstart', 'mousemove', 'click'],
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
  public barChartPlugins = [pluginDataLabels, {
    afterDraw: this.agregaTitulosProyectos.bind(this)
  }];


  public barChartData: ChartDataSets[] = [
    { data: [20, 30, 10, 45, 25, 5, 40], label: 'Producción', stack: 'Proyecto1', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
    { data: [15, 20, 40, 20, 35, 38, 37], label: 'Construccion', stack: 'Proyecto1', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
    { data: [40, 38, 30, 8, 10, 25, 8], label: 'Uso', stack: 'Proyecto1', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
    { data: [25, 12, 20, 27, 30, 32, 15], label: 'Fin de vida', stack: 'Proyecto1', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' },
    { data: [20, 30, 10, 45, 25, 5, 40], label: 'Producción', stack: 'Proyecto2', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
    { data: [15, 20, 40, 20, 35, 38, 37], label: 'Construccion', stack: 'Proyecto2', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
    { data: [40, 38, 30, 8, 10, 25, 8], label: 'Uso', stack: 'Proyecto2', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
    { data: [25, 12, 20, 27, 30, 32, 15], label: 'Fin de vida', stack: 'Proyecto2', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' },
    { data: [20, 30, 10, 45, 25, 5, 40], label: 'Producción', stack: 'Proyecto3', backgroundColor: '#DEA961', hoverBackgroundColor: '#DEA961'},
    { data: [15, 20, 40, 20, 35, 38, 37], label: 'Construccion', stack: 'Proyecto3', backgroundColor: '#8F5091', hoverBackgroundColor: '#8F5091' },
    { data: [40, 38, 30, 8, 10, 25, 8], label: 'Uso', stack: 'Proyecto3', backgroundColor: '#148A93', hoverBackgroundColor: '#148A93' },
    { data: [25, 12, 20, 27, 30, 32, 15], label: 'Fin de vida', stack: 'Proyecto3', backgroundColor: '#4DBE89', hoverBackgroundColor: '#4DBE89' }
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
    // Ya que se inicializa el componente
    this.canvas = this.elementRef.nativeElement.querySelector('#canvas');

    this.canvas.addEventListener('mousemove', e => { this.onHover(e); });
    this.canvas.addEventListener('mousedown', e => { this.onMouseDown(e); });


    // console.log(this.chartDir.chart);

    // this.agregaTitulosProyectos();

  }

  private iniciaPosiciones(chart: any){
    // Se encuentran las posiciones de las barras
    const labels = chart['$datalabels']['_labels'];
    this.centrosX = {};
    this.proyectos = [];
    labels.some(label => {
      const proyecto = label['$context']['dataset'].stack;
      const elemento = label['_el'];
      const x = elemento['_view'].x;

      if (this.centrosX[proyecto] == undefined){
        this.centrosX[proyecto] = [];
        this.proyectos = [proyecto, ...this.proyectos];
      }
      if (!this.centrosX[proyecto].includes(x)){
        this.centrosX[proyecto].push(x);
      }
    });
    this.inicializado = true;
  }

  private agregaTitulosProyectos(chart: any){
    // Se agrega los titulos de las barras de varios proyectos (solo cuando son más de uno)
    const ctx = chart.canvas.getContext('2d');
    const labels = chart['$datalabels']['_labels'];
    const centroY = (chart['boxes'][1].height/2);

    this.iniciaPosiciones(chart);

    ctx.font = chart['$datalabels']['_labels'][0]['_ctx'].font;//'30px Comic Sans MS';
    ctx.fillStyle = 'gray';
    ctx.textAlign = 'center';
    if (this.proyectos.length < 2){
      return;
    }
    // ctx.clearRect( 0, 0,this.canvas.width, chart['boxes'][1].height*3/4 );

    this.proyectos.forEach((proyecto, index) => {
      this.centrosX[proyecto].forEach(x => {
        ctx.fillText((index + 1).toString(), x, centroY);
      });
    });
  }

  // Control de eventos en la grafica

  public onMouseDown(e: any){
    const limiteInferior = this.chartDir.chart.height - this.chartDir.chart['boxes'][2].height;
    const limiteSuperior = this.chartDir.chart['boxes'][1].height;

    if (e.offsetY > limiteInferior){
      // Control de click en etiquetas
      const seleccion = this.getEtiquetaCercana(e);
      this.focusColumnas(seleccion);
    }else if (e.offsetY < limiteSuperior){
      // Control de click de Proyecto
      this.focusProyecto(e);
    }
  }

  private focusProyecto(e: any){
    // Selecciona todas las barras de un proyecto cuando se hace click en el area superior de la grafica
    const labels = this.chartDir.chart['$datalabels']['_labels'];
    let stack = null;

    labels.some(label => {
      const elemento = label['_el'];
      if (elemento.inXRange(e.offsetX)){
        stack = label['$context']['dataset'].stack;
        return true;
      }
    });

    if (this.lastClick !== stack){
      this.barChartData.forEach( (data , index) => {
        let color = new Array(data.data.length);
        if (data.stack == stack){
          color.fill(this.colores[ index % this.colores.length ]);
        }else{
          color.fill(this.coloresBW[ index % this.colores.length ]);
        }

        this.barChartData[index].backgroundColor = color;
        this.barChartData[index].hoverBackgroundColor = color;
      });

      this.chartDir.update();
      this.lastClick = stack;
    }else{
      this.resetColores();
      this.lastClick = null;
    }
  }

  private focusColumnas(seleccion: any){
    // Selecciona las columnas deacuerdo con la etiqueta en el eje X De acuerdo a barChartLabels
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
    // Obtiene la etiqueta mas cercana al click en el eje X de acuerdo con barChartLabels
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

  public onChartHover(e: any): void {
    // Asigna el elemento de la grafica sobre el cual se hace hover
    this.hovered = this.chartDir.chart.getElementAtEvent(event)[0];
  }


  public onChartClick(e: any): void {
  }

}
