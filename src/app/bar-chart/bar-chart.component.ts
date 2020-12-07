import {
  Component, OnInit, ViewChild, Input, Output, EventEmitter
} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { runInThisContext } from 'vm';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  @ViewChild('MyChart') chartDir: BaseChartDirective;
  private canvas: any;

  @Input() inputProyects: any;
  @Input('porcentaje') porcentaje: any;
  @Input() showMe: boolean;


  private colores = { FinDeVida: '#DEA961', Uso: '#8F5091', Construccion: '#148A93', Producción: '#4DBE89' };
  private coloresBW = { Producción: '#B1B1B1', Construccion: '#6A6A6A', Uso: '#686868', FinDeVida: '#969696' };

  private lastClick = 'Ninguno';
  private hovered = null;
  private centrosX = {};
  private proyectos = [];
  private inicializado = false;
  @Output() lastClickEvent = new EventEmitter<string>();
  private maxValue = 0;

  public barChartOptions: ChartOptions = {
    responsive: true,
    title: { display: true },
    legend: { display: false },
    tooltips: { enabled: false },
    events: ['touchstart', 'mousemove', 'click'],
    plugins: {
      datalabels: {
        color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          size: 10,
        }
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels, {
    afterDraw: this.agregaTitulosProyectos.bind(this)
  }];


  public barChartData: ChartDataSets[];


  constructor() { }

  ngOnInit(): void {
    this.iniciaIndicadores();
    this.iniciaDatos();
    this.ajustaEjeY();
  }

  ngAfterViewInit() {
    // Ya que se inicializa el componente
    this.canvas = this.chartDir.chart.canvas;
    // console.log(this.chartDir.chart);
    this.canvas.addEventListener('mousemove', e => { this.onHover(e); });
    this.canvas.addEventListener('mousedown', e => { this.onMouseDown(e); });
  }

  agregarProyecto(cambio: any) {
    // console.log(cambio);
    this.inputProyects = [...cambio];
    this.iniciaIndicadores();
    this.iniciaDatos();
    this.ajustaEjeY();
    // this.chartDir.chart.update();
    // this.ngOnInit()

  }


  /*public togglePorcentaje(vao:boolean){
    this.porcentaje = vao;
    this.iniciaDatos();
    this.ajustaEjeY();
    this.chartDir.chart.update();
  }*/

  // configuración de datos (lectura de datos de entrada)
  private ajustaEjeY() {
    // se se usan porcentajes, limita el eje y de 0 a 100
    if (this.porcentaje) {
      this.barChartOptions.scales = {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            max: 100
          }
        }]
      };
    } else {
      this.barChartOptions.scales = {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            max: this.maxValue
          }
        }]
      };
    }
  }

  private iniciaIndicadores() {
    // se obtienen todos los indicadores en los proyectos
    this.barChartLabels = [];
    if (this.inputProyects.length == 0){
      return;
    }
    this.inputProyects.forEach(proyecto => {
      // console.log(proyecto)
      Object.keys(proyecto.Datos).forEach(indicador => {
        if (!this.barChartLabels.includes(indicador)) {
          this.barChartLabels = [...this.barChartLabels, indicador];
        }
        if (Object.keys( proyecto.Datos[indicador]).includes('total')){
          proyecto.Datos[indicador].total = 0;
        }
        proyecto.Datos[indicador].total = Object.values(proyecto.Datos[indicador]).reduce((a: any, b: any) => a + b, 0);
        // console.log(proyecto.Nombre,proyecto.Datos[indicador])
        this.maxValue = Math.max(this.maxValue, proyecto.Datos[indicador].total);
      });
    });
  }

  private iniciaDatos() {
    // le da el formato necesario a los datos para que se puedan graficar
    let datos = [];

    this.inputProyects.forEach(proyecto => {
      const auxDatos = { Producción: [], Construccion: [], Uso: [], FinDeVida: [] };
      this.barChartLabels.forEach(indicador => {
        Object.keys(auxDatos).forEach(etapa => {
          const indicadores = Object.keys(proyecto.Datos);
          if (!indicadores.includes(indicador.toString()) || !Object.keys(proyecto.Datos[indicador.toString()]).includes(etapa)) {
            auxDatos[etapa] = [...auxDatos[etapa], 0];
          } else {
            auxDatos[etapa] = [...auxDatos[etapa],
            // proyecto.Datos[indicador.toString()][etapa].toFixed(2)
            this.porcentaje ?
              (proyecto.Datos[indicador.toString()][etapa] * 100 / proyecto.Datos[indicador.toString()].total).toFixed(2) :
              proyecto.Datos[indicador.toString()][etapa].toFixed(2)
            ];
          }
        });
      });

      Object.keys(auxDatos).forEach(etapa => {
        datos = [...datos,
        {
          data: auxDatos[etapa],
          label: etapa,
          stack: proyecto.Nombre,
          backgroundColor: this.colores[etapa],
          hoverBackgroundColor: this.colores[etapa]
        }];
      });
    });
    this.barChartData = datos;
  }

  // configurcion de estilo (Titulos de proyectos)
  private iniciaPosiciones(chart: any) {
    // Se encuentran las posiciones de las barras
    const labels = chart['$datalabels']['_labels'];
    this.centrosX = {};
    this.proyectos = [];
    labels.some(label => {
      const proyecto = label['$context']['dataset'].stack;
      const elemento = label['_el'];
      const x = elemento['_view'].x;

      if (this.centrosX[proyecto] == undefined) {
        this.centrosX[proyecto] = [];
        this.proyectos = [proyecto, ...this.proyectos];
      }
      if (!this.centrosX[proyecto].includes(x)) {
        this.centrosX[proyecto].push(x);
      }
    });
  }

  private agregaTitulosProyectos(chart: any) {
    // Se agrega los titulos de las barras de varios proyectos (solo cuando son más de uno)
    const ctx = chart.canvas.getContext('2d');
    const labels = chart['$datalabels']['_labels'];
    const centroY = (chart['boxes'][1].height / 2);

    this.iniciaPosiciones(chart);
    if( chart['$datalabels']['_labels'].length == 0){
      return;
    } 
    ctx.font = chart['$datalabels']['_labels'][0]['_ctx'].font;//'30px Comic Sans MS';
    ctx.fillStyle = 'gray';
    ctx.textAlign = 'center';
    if (this.proyectos.length < 2) {
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

  public onMouseDown(e: any) {
    const limiteInferior = this.chartDir.chart.height - this.chartDir.chart['boxes'][2].height;
    const limiteSuperior = this.chartDir.chart['boxes'][1].height;

    if (e.offsetY > limiteInferior) {
      // Control de click en etiquetas
      const seleccion = this.getEtiquetaCercana(e);
      this.focusColumnas(seleccion);
    } else if (e.offsetY < limiteSuperior) {
      // Control de click de Proyecto
      this.focusProyecto(e);
    } else {
      //this.togglePorcentaje();
    }
  }

  private focusProyecto(e: any) {
    // Selecciona todas las barras de un proyecto cuando se hace click en el area superior de la grafica
    const labels = this.chartDir.chart['$datalabels']['_labels'];
    let stack = null;


    labels.some(label => {
      const elemento = label['_el'];
      if (elemento.inXRange(e.offsetX)) {
        stack = label['$context']['dataset'].stack;
        return true;
      }
    });

    if (this.lastClick !== stack) {
      this.barChartData.forEach((data, index) => {
        let color = new Array(data.data.length);
        if (data.stack == stack) {
          color.fill(this.colores[data.label]);
        } else {
          color.fill(this.coloresBW[data.label]);
        }

        this.barChartData[index].backgroundColor = color;
        this.barChartData[index].hoverBackgroundColor = color;
      });

      this.chartDir.update();
      this.lastClick = stack;
    } else {
      this.resetColores();
      this.lastClick = null;
    }
  }

  private focusColumnas(seleccion: any) {
    // Selecciona las columnas deacuerdo con la etiqueta en el eje X De acuerdo a barChartLabels
    if (this.lastClick !== seleccion.label) {
      this.barChartData.forEach((datos, index) => {
        let color = new Array(datos.data.length);

        color.fill(this.coloresBW[datos.label]);
        color[seleccion.index] = this.colores[datos.label];

        this.barChartData[index].backgroundColor = color;
        this.barChartData[index].hoverBackgroundColor = color;
      });
      this.chartDir.update();
      this.lastClick = seleccion.label;
    } else {
      this.resetColores();
      this.lastClick = null;
    }
    this.lastClickEvent.emit(this.lastClick);
  }

  private getEtiquetaCercana(e: any) {
    // Obtiene la etiqueta mas cercana al click en el eje X de acuerdo con barChartLabels
    const etiquetas = this.chartDir.chart['boxes'][2]['_labelItems'];
    let max = this.chartDir.chart.width;
    let seleccion = '';
    let indice = -1;

    etiquetas.forEach((etiqueta, i) => {
      const distancia = Math.abs(etiqueta.x - e.offsetX);
      if (distancia < max) {
        max = distancia;
        seleccion = etiqueta.label;
        indice = i;
      }
    });
    return { label: seleccion, index: indice };
  }

  public onHover(e: any) {
    // Controla el flujo de hover sobre los elementos de las barras
    if (this.showMe) {
      if (this.hovered !== null) {
        const serie = this.chartDir.chart.data.datasets[this.hovered['_datasetIndex']].label;
        if (this.hovered.inRange(e.offsetX, e.offsetY)) {
          if (this.lastClick !== serie) {
            this.focusSeries(serie);
            this.lastClick = serie;
          }
        } else {
          this.resetColores();
          this.hovered = null;
          this.lastClick = null;
        }
      }
    }
  }

  public resetColores() {
    // Pone todas las series en color normal
    this.barChartData.forEach((data, index) => {
      const color = this.colores[data.label];
      this.barChartData[index].backgroundColor = color;
      this.barChartData[index].hoverBackgroundColor = color;
    });

    this.chartDir.update();
  }

  public focusSeries(serie) {
    // Pone la serie seleccionada de color normal, el resto se pone en blanco y negro
    this.barChartData.forEach((datos, index) => {
      let color: any;

      if (datos.label !== serie) {
        color = this.coloresBW[datos.label];
      } else {
        color = this.colores[datos.label];
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
