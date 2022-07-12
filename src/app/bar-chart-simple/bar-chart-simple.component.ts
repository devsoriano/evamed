import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart-simple',
  templateUrl: './bar-chart-simple.component.html',
  styleUrls: ['./bar-chart-simple.component.scss']
})
export class BarChartSimpleComponent implements OnInit {

  @ViewChild('MyChart') chartDir: BaseChartDirective;
  private canvas: any;
  @Input() showGr: boolean;
  @Output() ClickEvent = new EventEmitter<any>();
  @Input() idProyect:number;
  @Input() showlastGr:boolean;
  @Input() ciclo:string;
  @Input() elemento:string;
  @Input() info:any;
  @Input() banderaDispercion:boolean;
  @Input() colorDispercion:string;

  barChartOptions: ChartOptions = {
    responsive: true,
    events: ['click'],
    tooltips: { enabled: false },
    hover: { mode: null },
    legend: { display: false },
    plugins: {
      datalabels: {
        color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          size: 7,
        }
      }
    },
  };
  barChartLabels: Label[] = ['Materiales', 'Construccion', 'Uso', 'FinDeVida'];
  barChartLabelsSecond: Label[] = ['Grava', 'Arena', 'Varilla', 'Cemento', 'Cal','Ladrillo'];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins = [];
  showngraph = false;

  etapa:string='';

  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70],
      backgroundColor: ['#4DBE89', '#148A93', '#8F5091','#DEA961']
    }
  ];
  color_select:any[]=[
    ['#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89', '#4DBE89'],
    ['#148A93', '#148A93', '#148A93', '#148A93', '#148A93', '#148A93'],
    ['#8F5091', '#8F5091', '#8F5091', '#8F5091', '#8F5091', '#8F5091'],
    ['#DEA961', '#DEA961', '#DEA961', '#DEA961', '#DEA961', '#DEA961']
  ];
  barChartDataSecond=[];

  constructor() { }

  ngOnInit(): void {
    if(this.showlastGr){
      if(this.banderaDispercion){
        this.CargarDatosDispercion();
      }else{
        this.CargarDatos(this.elemento,this.ciclo);
      }
    }
  }

  //Carga de datos, dependiendo de la sección mostrada
  CargarDatos(elemento:string,ciclo:string){
    let auxlabel = ['Materiales', 'Construccion', 'Uso', 'FinDeVida']
    let auxdatos = [28, 20, 12, 40, 25, 5];
    let auxdata: ChartDataSets[];
    let color:any[];

    Object.keys(auxlabel).forEach(element => {
      if (auxlabel[element] === ciclo) {
        color = this.color_select[element]
      }
    });
    auxdata=[{
      data: auxdatos,
      backgroundColor: color
    }]
    this.barChartDataSecond = [...this.barChartDataSecond, auxdata];
  }

  CargarDatosDispercion(){
    let suma=0;
    let auxdatos = [];
    let auxhelp = []
    let aux = [];
    let auxdata = [];
    this.barChartDataSecond = [];
    this.barChartLabelsSecond = [];
    let auxColor={'#5A1002':'rgb(90,16,2)','#902511':'rgb(144,37,17)','#BE3218':'rgb(190,50,24)','#EB3F20':'rgb(235,63,32)','#EB5720':'rgb(235,87,32)','#EB7620':'rgb(235,118,32)', '#EB9520':'rgb(235,149,32)','#EBC420':'rgb(235,196,32)', '#EBDB20':'rgb(235,219,32)', '#CCEB20':'rgb(204,235,32)', '#76EB20':'rgb(118,235,32)'};
    Object.keys(this.info).forEach((element,index) => {
      let resultado_actual = this.info[element];
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
        aux.push(((element/suma)*100).toFixed(2))
        this.barChartLabelsSecond=[...this.barChartLabelsSecond, (index+1).toString()];
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
      this.barChartLabelsSecond=[...this.barChartLabelsSecond, 'otros'];
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
    this.barChartDataSecond = [...this.barChartDataSecond, auxdata];
  }

  //Acomoda datos para mandar a llamar la siguiente gráfica
  acomodoDatos(value:string){
    if(value==this.etapa){
      this.etapa= ' ';
      this.showngraph=false;
    }else{
      this.etapa=value;
      this.showngraph=true;
    }
    let data={
      etapa:this.etapa,
      show:this.showngraph,
    }
    this.ClickEvent.emit(data);
  }

  //detección de click
  public onChartClick(e: any): void {
    let aux: any;
    if (this.chartDir.chart.getElementAtEvent(event)[0]!=undefined){
      Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(element => {
        if(element=='_model'){
          aux=this.chartDir.chart.getElementAtEvent(event)[0][element];
          Object.keys(aux).forEach(item=>{
            if(item=='label'){
              this.acomodoDatos(aux[item]);
            }
          });
        }
      });
    }
  }


}
