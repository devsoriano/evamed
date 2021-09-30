import {
  Component, OnInit, ViewChild, Input, Output, EventEmitter
} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { runInThisContext } from 'vm';
import { element } from 'protractor';
import { convertToObject } from 'typescript';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  @ViewChild('MyChart') chartDir: BaseChartDirective;
  private canvas: any;


  @Input() inputProyects: any;
  @Input('porcentaje') porcentaje : any;
  @Input() showMe:boolean;
  @Input() Bandera_bar:boolean;
  @Input() Columna_seleccionada:string;
  @Input() banera_enfoqueSerie_externo:boolean;
  @Input() serie_input:string;
  @Input() bandera_enfoqueColumna:boolean;
  @Input() elementoConstructivo:String;
  @Input() impactoAmbiental:any;

  private colores = { FinDeVida: '#DEA961', Uso : '#8F5091', Construccion: '#148A93', Producción : '#4DBE89'};
  private coloresBWGraph2Nuevo = ['rgb(90, 16, 2,0.5)','rgb(144, 37, 17,0.5)', 'rgb(190, 50, 24,0.5)', 'rgb(235, 63, 32,0.5)','rgb(235, 87, 32,0.5)','rgb(235, 118, 32,0.5)','rgb(235, 173, 32,0.5)','rgb(235, 196, 32,0.5)','rgb(235, 219, 32,0.5)','rgb(204, 235, 32,0.5)','rgb(118, 235, 32,0.5)']
  private coloresGraph2Nuevo = ['#5A1002','#902511','#BE3218','#EB3F20','#EB5720','#EB7620', '#EB9520','#EBC420', '#EBDB20', '#CCEB20', '#76EB20'];
  private coloresBW = {Producción : '#B1B1B1', Construccion : '#6A6A6A', Uso : '#686868', FinDeVida : '#969696'};
  private auxColor = [];
  private auxColorBW = [];
  private ElementosEnNiveles = [];
  private banderaImpacto=false;
  private auxColoresProyectos = {};
  private auxColoresBWProyectos = {};

  private lastClick='Ninguno';
  private hovered = null;
  private centrosX = {};
  private proyectos = [];
  private auxElementos = {};
  @Output() lastClickEvent = new EventEmitter<string>();
  @Output() ClickEvent = new EventEmitter<any>();
  private maxValue = 0;

  

  public barChartOptions: ChartOptions = {
    responsive: true,
    title: { display: true },
    legend: { display: false },
    tooltips: {enabled: false,
      mode: 'label',
    },
    events: ['touchstart', 'mousemove', 'click'],
    plugins: {
      datalabels: {
        color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          size: 7,
        }
      }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels, {
    afterDraw: this.agregaTitulosProyectos.bind(this),
    beforeInit: function (chart) {
      chart.data.labels.forEach(function (e, i, a) {
        if (/\n/.test(e)) {
          a[i] = e.split(/\n/);
        }
      });
    }
  }];


  public barChartData: ChartDataSets[];


  constructor() { }

  ngOnInit(): void {

    this.iniciaIndicadores();
    this.iniciaDatos();
    this.ajustaEjeY();
    console.log("Bar");
  }

  ngAfterViewInit() {

      // Ya que se inicializa el componente
      this.canvas = this.chartDir.chart.canvas;
      this.canvas.addEventListener('mousemove', e => { this.onHover(e); });
      this.canvas.addEventListener('mousedown', e => { this.onMouseDown(e); });
  }

  // configuración de datos (lectura de datos de entrada)
  private ajustaEjeY() {
    // se se usan porcentajes, limita el eje y de 0 a 100
    if (this.porcentaje) {
      this.barChartOptions.scales = {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            max: 100,
            fontSize:11,
          }
        }],
        xAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            max: 100,
            fontSize:11,
          }
        }]
      };
    } else {
      this.barChartOptions.scales = {
        yAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            max: this.maxValue,
            fontSize:11
          }
        }],
        xAxes: [{
          display: true,
          ticks: {
            beginAtZero: true,
            max: 100,
            fontSize:11,
          }
        }]
      };
    }
  }

  private iniciaIndicadores() {
    // se obtienen todos los indicadores en los proyectos
    this.barChartLabels = [];
    if(this.Bandera_bar){
      this.inputProyects.forEach(proyecto => {
        Object.keys(proyecto.Datos).forEach(indicador => {
          if (!this.barChartLabels.includes(indicador)){
            this.barChartLabels = [...this.barChartLabels, indicador];
          }
        });
      });
    }else{
      this.inputProyects.forEach(proyecto => {
        Object.keys(proyecto.Datos).forEach(indicador => {
          if (!this.barChartLabels.includes(indicador)){
            this.barChartLabels = [...this.barChartLabels, indicador];
          }
          proyecto.Datos[indicador].total = 0;
          proyecto.Datos[indicador].total = Object.values(proyecto.Datos[indicador]).reduce((a: any, b: any) => a + b, 0);
          this.maxValue = Math.max(this.maxValue, proyecto.Datos[indicador].total);
        });
      });
    }
  }

  private iniciaDatos() {
    // le da el formato necesario a los datos para que se puedan graficar
    let datos = []
    this.barChartData=[];
    this.ElementosEnNiveles=[];
    if(this.Bandera_bar){
      //Sección para la gráfica de barras mostradas en los impactos ambientales por elementos constructivos
      let numElementos = 0;
      this.inputProyects.forEach((proyecto,numProyecto) => {
        const auxData = {};
        const auxDatos = {};
        const auxDataElementos = {};
        const auxDatosElementos = {};
        let niveles_existentes =[];
        this.barChartLabels.forEach(indicador => {
          Object.keys(proyecto.Datos[indicador.toString()]).forEach((element,index) => {
            let helpn='n'.concat(index.toString());
            auxDatos[helpn] = [];
            auxDatosElementos[helpn] = [];
            if(!niveles_existentes.includes(helpn)){
              numElementos = numElementos + 1;
              niveles_existentes.push(helpn);
            }
          });
        });

        this.barChartLabels.forEach(indicador => {
          this.auxElementos[indicador.toString()]=[];
          let suma = 0;
          //creaición de los espacios para guardar los valores por niveles
          Object.keys(proyecto.Datos[indicador.toString()]).forEach((element,index) => {
            suma = suma + proyecto.Datos[indicador.toString()][element]
          });
          //acomodar conforme porcentajes y en orden para niveles
          let auxdatos =[]
          let help = [];
          Object.keys(proyecto.Datos[indicador.toString()]).forEach((element,index) => {
            help = [...help,proyecto.Datos[indicador.toString()][element]]
          });
          auxdatos = help.sort((n1,n2) => {
            if (n1 > n2) {
                return 1;
            }
        
            if (n1 < n2) {
                return -1;
            }
        
            return 0;
          })
          auxdatos = auxdatos.reverse()
          //se guarda el nivel de cada elemento constructivo dependiendo del impacto ambiental
          auxdatos.forEach((datoC,index) => {
            Object.keys(proyecto.Datos[indicador.toString()]).forEach(element => {
              if(datoC == proyecto.Datos[indicador.toString()][element]){
                this.auxElementos[indicador.toString()].push(element)
              }
            });
          })
          //Pasar a porsentaje
          auxdatos.forEach((datoC,index) => {
            let resultado = (datoC * 100 / suma).toFixed(2);
            auxdatos[index] = resultado
          })
          
          //se guardan por niveles dependiendo del impacto ambiental
          auxdatos.forEach((element,index) => {
            let helpn='n'.concat(index.toString());
            auxData[helpn] = element;
            auxDataElementos[helpn] = this.auxElementos[indicador.toString()][index];
          })

          //se llenan los niveles en orden
          Object.keys(auxDatos).forEach(element => {
            Object.keys(auxData).forEach(valor =>{
              if(element === valor){
                auxDatos[element].push(auxData[valor]);
              }
            })
          });
          Object.keys(auxDatosElementos).forEach(element => {
            Object.keys(auxDataElementos).forEach(valor =>{
              if(element === valor){
                auxDatosElementos[element].push(auxDataElementos[valor]);
              }
            })
          });
        });

        this.auxColor=this.coloresGraph2Nuevo
        this.auxColorBW = this.coloresBWGraph2Nuevo

        Object.keys(auxDatosElementos).forEach(etapa => {
          this.ElementosEnNiveles.push(auxDatosElementos[etapa])
        });
        Object.keys(auxDatos).forEach((etapa,index) => {
          datos = [...datos,
          {
            data: auxDatos[etapa],
            label: etapa,
            stack: proyecto,
            backgroundColor: this.coloresGraph2Nuevo[index],
            hoverBackgroundColor: this.coloresGraph2Nuevo[index]
          }];
        });
      });
    }else{
      this.inputProyects.forEach(proyecto => {
        const auxDatos = { Producción : [], Construccion : [], Uso : [], FinDeVida : []};
        this.barChartLabels.forEach(indicador => {
          Object.keys(auxDatos).forEach(etapa => {
            const indicadores = Object.keys(proyecto.Datos);
            if (!indicadores.includes(indicador.toString()) || !Object.keys(proyecto.Datos[indicador.toString()]).includes(etapa)){
              auxDatos[etapa] = [...auxDatos[etapa], 0];
            }else{
              auxDatos[etapa] = [...auxDatos[etapa],
              this.porcentaje?
              (proyecto.Datos[indicador.toString()][etapa ]*100 /proyecto.Datos[indicador.toString()].total ).toFixed(2):
              proyecto.Datos[indicador.toString()][etapa].toExponential(2)
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
    }
    this.barChartData = datos;
    if(this.Bandera_bar){
      if(this.impactoAmbiental != null){
        if(this.elementoConstructivo != ' '){
          this.banderaImpacto=true;
          this.focusColumnas(this.impactoAmbiental);
          this.banderaImpacto=false;
        }
      }else{
        if(this.elementoConstructivo != ' '){
          this.focusSeries(this.elementoConstructivo)
        }
      }
    }
  }

  // configurcion de estilo (Titulos de proyectos)
  private iniciaPosiciones(chart: any) {
    // Se encuentran las posiciones de las barras
    const labels = chart['$datalabels']['_labels'];
    this.centrosX = {};
    this.proyectos = [];
    labels.some(label => {
    if(this.Bandera_bar){
      const proyecto = label['$context']['dataset'].stack.Nombre;
      const elemento = label['_el'];
      const x = elemento['_view'].x;
      if (this.centrosX[proyecto] == undefined) {
        this.centrosX[proyecto] = [];
        this.proyectos = [proyecto, ...this.proyectos];
      }
      if(x!=NaN){
        if (!this.centrosX[proyecto].includes(x)) {
          this.centrosX[proyecto].push(x);
        }
      }

    }else{
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
    if(!this.Bandera_bar){
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
            color.fill(this.colores[ data.label ]);
          }else{
            color.fill(this.coloresBW[ data.label ]);
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
  }

  public focusColumnas(seleccion: any){
    let selec = seleccion;
    if (this.lastClick !== seleccion.label){
      if(this.Bandera_bar){
        if(this.banderaImpacto){
          let nivelesAux = [];
          let count = -1;
          this.barChartData.forEach((datos, index) => {
            let color = new Array(datos.data.length);
            let coloraux = [];
            if(!nivelesAux.includes(datos.label)){
              nivelesAux.push(datos.label);
              count += 1;
            }else{
              nivelesAux = [];
              nivelesAux.push(datos.label);
              count = 0;
            }
            this.ElementosEnNiveles[index].forEach((element,ii) => {
              if(ii == seleccion.index){
                if(element === this.elementoConstructivo){
                  coloraux.push(this.auxColor[count])
                }else{
                  coloraux.push(this.auxColorBW[count])
                }
              }else{
                coloraux.push(this.auxColorBW[count])
              }
            });
            color = coloraux;
  
            this.barChartData[index].backgroundColor = color;
            this.barChartData[index].hoverBackgroundColor = color;
          });
        }else{
          let nivelesAux = [];
          let count = -1;
          this.barChartData.forEach((datos, index) => {
            let color = new Array(datos.data.length);
            if(!nivelesAux.includes(datos.label)){
              nivelesAux.push(datos.label);
              count += 1;
            }else{
              nivelesAux = [];
              nivelesAux.push(datos.label);
              count = 0;
            }
            if(this.elementoConstructivo != ' '){
              let coloraux = [];
              this.ElementosEnNiveles[index].forEach((element,ii) => {
                if(ii == seleccion.index){
                  if(element === this.elementoConstructivo){
                    coloraux.push(this.auxColor[count])
                  }else{
                    coloraux.push(this.auxColorBW[count])
                  }
                }else{
                  coloraux.push(this.auxColorBW[count])
                }
              });
              color = coloraux;
            }else{
              color.fill(this.auxColorBW[count]);
              color[seleccion.index] = this.auxColor[count];
            }

            this.barChartData[index].backgroundColor = color;
            this.barChartData[index].hoverBackgroundColor = color;
          });
          this.chartDir.update();
        }
      }else{
        this.barChartData.forEach( (datos , index) => {
          let color = new Array(datos.data.length);

          color.fill(this.coloresBW[ datos.label ]);
          color[seleccion.index] = this.colores[ datos.label ];

          this.barChartData[index].backgroundColor = color;
          this.barChartData[index].hoverBackgroundColor = color;
        });
        this.chartDir.update();
      }
      this.lastClick = seleccion.label;
      this.showMe=false;
    } else {
      if(this.Bandera_bar){

      }else{
        this.showMe=true;
      }
      this.resetColores();
      this.lastClick = null;
    }
    if(this.Bandera_bar){
      //aqui faltara uno que mande el color de los elementos constructivos
      let aux = {'niveles':this.auxElementos,'seleccion':this.lastClick,'color':this.auxColor,'selec':selec}
      this.ClickEvent.emit(aux);
    }else{
      this.lastClickEvent.emit(this.lastClick);
    }
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
    //console.log(this.showMe);
    if (this.showMe) {
      if (this.hovered !== null) {
        //console.log(this.showMe);
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
    if(this.Bandera_bar){
      let nivelesAux = [];
      let count = -1;
      this.barChartData.forEach((data, index) => {
        if(!nivelesAux.includes(data.label)){
          nivelesAux.push(data.label);
          count += 1;
        }else{
          nivelesAux = [];
          nivelesAux.push(data.label);
          count = 0;
        }
        const color = this.auxColor[count];
        this.barChartData[index].backgroundColor = color;
        this.barChartData[index].hoverBackgroundColor = color;
      });
    }else{
      this.barChartData.forEach( ( data , index) => {
        const color = this.colores[ data.label ];
        this.barChartData[index].backgroundColor = color;
        this.barChartData[index].hoverBackgroundColor = color;
      });
    }

    this.chartDir.update();
  }

  public focusSeries(serie) {
    // Pone la serie seleccionada de color normal, el resto se pone en blanco y negro
    let count = -1;
    let nivelesAux = [];
    this.barChartData.forEach((datos, index) => {
      let color: any;
      if(this.Bandera_bar){
        let coloraux = [];
        if(!nivelesAux.includes(datos.label)){
          nivelesAux.push(datos.label);
          count += 1;
        }else{
          nivelesAux = [];
          nivelesAux.push(datos.label);
          count = 0;
        }
        this.ElementosEnNiveles[index].forEach(element => {
          if(element === serie){
            coloraux.push(this.auxColor[count])
          }else{
            coloraux.push(this.auxColorBW[count])
          }
        });
        color = coloraux;
      }else{
        //console.log(this.banera_enfoqueSerie_externo,serie);
        if (datos.label !== serie){
          color = this.coloresBW[ datos.label ];
        }else{
          color = this.colores[ datos.label];
        }
      }
      this.barChartData[index].backgroundColor = color;
      this.barChartData[index].hoverBackgroundColor = color;

    });
    if(this.Bandera_bar){
    }else{
      this.chartDir.update();
    }

  }

  public onChartHover(e: any): void {
    // Asigna el elemento de la grafica sobre el cual se hace hover
    this.hovered = this.chartDir.chart.getElementAtEvent(event)[0];

    // if(!this.hoverIniciado){
    //   this.hoverIniciado = true;
    //   console.log('hovered')
    // // Ya que se inicializa el componente
    //   this.canvas = this.chartDir.chart.canvas;
    //   this.canvas.addEventListener('mousemove', e => { this.onHover(e); });
    //   this.canvas.addEventListener('mousedown', e => { this.onMouseDown(e); });
    // }
  }

  public onChartClick(e: any): void {
  }

}
