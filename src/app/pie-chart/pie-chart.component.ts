import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartDataSets } from 'chart.js';
import {BaseChartDirective } from 'ng2-charts';
import { couldStartTrivia } from 'typescript';
import subetapasInfo from 'src/app/calculos/Subetapas.json';
import { element } from 'protractor';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @ViewChild('MyChart') chartDir: BaseChartDirective;
  @Input() inputProyect: any;
  @Input() showMePartially: boolean;
  @Input() id:string;
  @Input() indicador:string;
  @Input() Bandera_resultado:number;
  @Input() proyecto:number;
  @Input() showMe_elementos:boolean;
  @Input() bandera_click:number;
  @Input() unidades:any;
  @Input() colorDispercion:string;
  @Output() ClickEvent = new EventEmitter<any>();

  subetapas_list: any = subetapasInfo;

  private colores: any[] = [
    ['#2E9A67', '#4DBE89', '#60E3A6', '#1f8253'],
    ['#148A93', '#0da8b6', '#64dee6', '#67c1c9'],
    ['#8F5091', '#d37cd4', '#8c4c90', '#6c1d6c'],
    ['#DEA961', '#d99d1c', '#d59a3d', '#f5e381'],
    ['#4DBE89', '#148A93', '#8F5091', '#DEA961']
  ];

  private colores_elementos:any[]=[
    ['#4DBE89', 'rgb(77, 170, 137)', 'rgb(77, 160, 137)', 'rgb(77, 150, 137)', 'rgb(77, 140, 137)', 'rgb(77, 130, 137)', 'rgb(77, 120, 137)', 'rgb(77, 110, 137)'],
    ['#148A93', 'rgb(20, 128, 147)', 'rgb(20, 118, 147)', 'rgb(20, 108, 147)', 'rgb(20, 98, 147)', 'rgb(20, 88, 147)', 'rgb(20, 78, 147)', 'rgb(20, 68, 147)', 'rgb(20, 58, 147)'],
    ['#8F5091', 'rgb(143, 70, 145)', 'rgb(143, 60, 145)', 'rgb(143, 50, 145)', 'rgb(143, 40, 145)', 'rgb(143, 30, 145)', 'rgb(143, 20, 145)', 'rgb(143, 10, 145)', 'rgb(143, 0, 145)'],
    ['#DEA961', 'rgb(222, 179, 97)', 'rgb(222, 169, 97)', 'rgb(222, 159, 97)', 'rgb(222, 149, 97)', 'rgb(222, 139, 97)', 'rgb(222, 129, 97)', 'rgb(222, 119, 97)', 'rgb(222, 109, 97)']
  ];

  public pieChartType = 'doughnut';
  public pieChartOptions = {
    elements: { arc: { borderWidth: 0 } },
    hover: { mode: null },
    tooltips: { enabled: false },
    plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          size: 7,
        }
      },
      legend:{
        position:'bottom',
      },
    }
  };
  public pieChartOptions_elementos={
    events: ['click'],
    elements: { arc: { borderWidth: 0 } },
    tooltips: { enabled: false },
    hover: { mode: null },
    plugins: {
      datalabels: {
        color:'#FFFFFF',
        font: {
          size: 7,
        },
      }
    }
  }
  public pieChartData=[];
  public pieChartLabels = [];
  public pieChartColor = [];
  public pieChartData_elemento;
  etapa: string = '';
  showngraph=false;
  elemento_seleccionado=' ';
  showlast=false;
  subetapas=[];
  totales=[];

  constructor() { }

  ngOnInit(): void {
    if (this.Bandera_resultado == 1) {
      this.cargarDatos(' ', this.id);
    }else{
      this.cargarDatos(this.id, this.indicador);
      this.inputProyect.forEach(proyecto => {
        this.subetapas = [... this.subetapas,{
          idProyecto: proyecto.id,
          eliminadas:[]
        }]
      });
    }
    console.log("Pie");
  }

  //cambio en la carga de gráficas dependiendo de la sección de resultados
  cambioIndicadorElementos(ID:string,value:string, bandera:number){
    this.id=ID;
    this.Bandera_resultado=bandera;
    if (this.Bandera_resultado == 1) {
      this.cargarDatos(" ", value);
    } else {
      this.cargarDatos(this.id, value);
    }
  }

  //cambio de ID en la gráfica de pie sección 3 de resutados
  cambioID(Id:string,IDproyecto:number){
    if(IDproyecto==this.proyecto){
      if(this.Bandera_resultado==3){
        this.cargarDatos(Id, ' ');
      }
    }
  }

  findSubetapa(etapa) {
    let aux = this.subetapas_list.filter((s) => s['abreviacion'] == etapa);
    return aux[0].nombre_subeatapa;
  }

  findUnidad(){
    let final_unit;
    let impacto = this.indicador.replace(/\n/g,'');
    impacto = impacto.replace(/\s/g, '')
    this.unidades.forEach(element => {
      let aux_element = element['name_complete_potential_type'].replace(/\s/g, '')
      if(impacto === aux_element){
        final_unit=element['unit_potential_type'];
      }
    });
    return final_unit
  }

  cargarDatos(ID:string, indicador:string){
    let auxdata: ChartDataSets[];
    let color: any[]
    let auxlabel = ['Producción','Construccion','Uso','FinDeVida']
    let auxlabel_dos = ['Materiales', 'Construccion', 'Uso', 'FinDeVida']
    let auxdataLabel=[]
    let auxdatos = []
    let datos = []
    let aux=[];
    this.pieChartLabels=[]
    //carga datos para sección de resultados "Elementos constructivos por ciclo de vida"
    if (this.Bandera_resultado == 1){
      this.pieChartData =[];
      let auxColor={'#5A1002':'rgb(90,16,2)','#902511':'rgb(144,37,17)','#BE3218':'rgb(190,50,24)','#EB3F20':'rgb(235,63,32)','#EB5720':'rgb(235,87,32)','#EB7620':'rgb(235,118,32)', '#EB9520':'rgb(235,149,32)','#EBC420':'rgb(235,196,32)', '#EBDB20':'rgb(235,219,32)', '#CCEB20':'rgb(204,235,32)', '#76EB20':'rgb(118,235,32)'};
      let suma=0;
      let auxhelp = []
      Object.keys(this.inputProyect).forEach((element,index) => {
        let resultado_actual = this.inputProyect[element];
        suma=suma+resultado_actual;
        auxhelp = [...auxhelp, resultado_actual]
      });
      auxdatos = auxhelp.sort((n1,n2) => {
        if (n1 > n2) {
            return 1;
        }
    
        if (n1 < n2) {
            return -1;
        }
    
        return 0;
      })
      auxdatos = auxdatos.reverse()
      let sumaOtros = 0;
      let ColorDesplegado = [];
      let help = auxColor[this.colorDispercion].match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
      let cambioR= help[1];
      let cambioG= help[2];
      let cambioB= help[3];
      auxdatos.forEach((element, index) =>{
        if(index <= 2){
          aux.push(((element/suma)*100).toFixed(2));
          let auxrgbcolor='rgb(';
          auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');
          if((255 - cambioR) >= 40){
            cambioR = (Number(cambioR) + 40).toString();
          }else if((cambioG - 40) >= 0){
            cambioG = (Number(cambioG) - 40).toString();
          }else{
            cambioB = (Number(cambioB) + 40).toString();
          }
          ColorDesplegado.push(auxrgbcolor);
        }else{
          sumaOtros = sumaOtros+element;
        }
      })
      if(auxdatos.length>3){
        aux.push(((sumaOtros/suma)*100).toFixed(2));
        let auxrgbcolor='rgb(';
        auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');
        if((255 - cambioR) >= 40){
          cambioR = (Number(cambioR) + 40).toString();
        }else if((cambioG - 40) >= 0){
          cambioG = (Number(cambioG) - 40).toString();
        }else{
          cambioB = (Number(cambioB) + 40).toString();
        }
        ColorDesplegado.push(auxrgbcolor);
      }
      auxdata = [{
        data: aux,
        backgroundColor: ColorDesplegado
      }];
      this.pieChartData = [...this.pieChartData, auxdata];
      this.showMe_elementos = true;
    }else if(this.Bandera_resultado == 2){
      this.pieChartData = [];
      if(indicador===' '){

      }else{
        this.inputProyect.forEach((proyecto,numProyect) => {
          aux=proyecto.Datos[indicador];
          Object.keys(auxlabel).forEach(element => {
            if (auxlabel[element]===ID) {
              color = this.colores[element];
              auxdatos = aux[auxlabel[element]]
              let auxSuma=0;
              Object.keys(aux[auxlabel[element]]).forEach((marcador,index) => {
                auxSuma =  auxSuma + auxdatos[marcador];
              });
              this.totales.push(auxSuma.toExponential(2).toString().concat(this.findUnidad()));
              Object.keys(aux[auxlabel[element]]).forEach((marcador,index) => {
                let abreviacion = marcador.concat(" - ");
                let auxnamelabel = abreviacion.concat(this.findSubetapa(marcador)).concat(" : ");
                auxnamelabel = auxnamelabel.concat((auxdatos[marcador]).toExponential(2).toString());
                auxdataLabel = [...auxdataLabel, auxnamelabel.concat(this.findUnidad())];
                datos = [...datos, ((auxdatos[marcador] / auxSuma)*100).toFixed(2).toString()];
              });
            }
          });
          auxdata=[{
            data: datos,
            backgroundColor: color
          }]
    
          this.pieChartColor = color;
          this.pieChartData = [...this.pieChartData,auxdata];
          this.pieChartLabels=[...this.pieChartLabels,auxdataLabel];
          datos=[];
          auxdataLabel = [];
        });

      }

    }else{
      this.pieChartData =[];
      Object.keys(auxlabel_dos).forEach(element => {
        if(auxlabel_dos[element]===ID){
          color = this.colores_elementos[element];
        }
      });
      auxdata = [{
        data: [4,6,6,10,10,4,3,4,4],
        backgroundColor: color
      }];
      this.pieChartData = [...this.pieChartData, auxdata];
    }
  }
  public onChartClick(e: any): void {
    let aux: any;
    let auxd= [{Materiales: '#4DBE89'} ,  {Construccion: '#148A93'} ,  {Uso: '#8F5091' },  {FinDeVida: '#DEA961'}];
    if (this.chartDir.chart.getElementAtEvent(event)[0] != undefined) {
      if (this.bandera_click==0){
        Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(element => {
          if (element == '_model') {
            aux = this.chartDir.chart.getElementAtEvent(event)[0][element];
            Object.keys(aux).forEach(item => {
              if (item == 'backgroundColor') {
                auxd.forEach(label => {
                  Object.keys(label).forEach(select=>{
                    if(label[select]==aux[item]){
                      this.acomodoDatos(select);
                    }
                  });
                });
              }
            });
          }
        });
      }else{
        Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(element => {
          if (element == '_model') {
            aux = this.chartDir.chart.getElementAtEvent(event)[0][element];
            this.acomodoDatos(aux.backgroundColor)
          }
        });
      }
    }
  }

  DeleteSubetapa(subetapa,id){
    let subselect=(subetapa[0].concat(subetapa[1]))
    if(this.subetapas[id].eliminadas.includes(subselect)){
      this.subetapas[id].eliminadas.forEach((datos,index) => {
        if (datos === subselect){
          document.getElementById(subetapa).className = 'quitartachado';
          this.subetapas[id].eliminadas.splice(index, 1)
        }
      })
    }else{
      document.getElementById(subetapa).className = 'tachar';
      this.subetapas[id].eliminadas.push(subselect)
    }
    this.RedistribucionGrafica(this.id, this.indicador);
  }

  RedistribucionGrafica(ID:string, indicador:string){
    let auxdata: ChartDataSets[];
    let color: any[];
    let auxlabel = ['Producción','Construccion','Uso','FinDeVida'];
    let auxdatos = [];
    let datos = [];
    let aux=[];
    this.pieChartData = [];
    this.inputProyect.forEach((proyecto,numProyect) => {
      aux=proyecto.Datos[indicador];
      Object.keys(auxlabel).forEach(element => {
        if (auxlabel[element]===ID) {
          color = this.colores[element];
          auxdatos = aux[auxlabel[element]]
          let auxSuma=0;
          let flag = true;
          Object.keys(aux[auxlabel[element]]).forEach((marcador,index) => {
            this.subetapas[numProyect].eliminadas.forEach(element => {
              if (element==marcador){
                flag=false;
              }
            });
            if(flag){
              auxSuma =  auxSuma + auxdatos[marcador];
            }
            flag=true;
          });
          Object.keys(aux[auxlabel[element]]).forEach((marcador,index) => {
            this.subetapas[numProyect].eliminadas.forEach(element => {
              if (element==marcador){
                flag=false;
              }
            });
            if(flag){
              datos = [...datos, ((auxdatos[marcador] / auxSuma)*100).toFixed(2).toString()];
            }else{
              datos = [...datos,0];
            }
            flag=true;
          });
        }
      });
      auxdata=[{
        data: datos,
        backgroundColor: color
      }]

      this.pieChartData = [...this.pieChartData,auxdata];
      datos=[];
    });
  }

  //Acomoda datos para mandar a llamar la siguiente gráfica
  acomodoDatos(value: string) {
    let data;
    if(this.bandera_click==0){
      if (value == this.etapa) {
        this.etapa = ' ';
        this.showngraph = false;
      } else {
        this.etapa = value;
        this.showngraph = true;
      }
      data = {
        etapa: this.etapa,
        show: this.showngraph,
      }
    }else{
      if(this.elemento_seleccionado==value){
        this.elemento_seleccionado=' ';
        this.showlast=false;
      }else{
        this.elemento_seleccionado = value;
        this.showlast = true;
      }
      data = {
        etapa: this.elemento_seleccionado,
        show: this.showlast,
      }
    }
    // console.log('pie',this.pieChartData)
    this.ClickEvent.emit(data);
  }
}
