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

  barChartOptions: ChartOptions = {
    responsive: true,
    events: ['click'],
    tooltips: { enabled: false },
    hover: { mode: null },
    legend: { display: false },
    plugins: {
      datalabels: {
        display: false
      }
    },
  };
  barChartLabels: Label[] = ['Materiales', 'Construccion', 'Uso', 'FinDeVida'];
  barChartLabelsSecond: Label[] = ['Grava', 'Arena', 'Varilla', 'Cemento', 'Cal','Ladrillo'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  showngraph = false;
  ColorMomento = ['#EB3F20','#F45538','#F7755D','#F88A76'];

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
    let aux = [];
    let auxdata = [];
    this.barChartDataSecond = [];
    this.barChartLabelsSecond = [];
    Object.keys(this.info).forEach((element,index) => {
      let resultado_actual = this.info[element];
      suma=suma+resultado_actual;
      let posicion = 0
      auxdatos.forEach(nivel =>{
        if(resultado_actual<nivel){
          posicion = posicion+1;
        }
      })
      if(posicion == 0){
        auxdatos = [resultado_actual,...auxdatos];
      }else{
        auxdatos.splice(posicion,0,resultado_actual);
      }
    });
    let sumaOtros = 0;
    auxdatos.forEach((element, index) =>{
      if(index <= 2){
        aux.push(((element/suma)*100).toFixed(2))
        this.barChartLabelsSecond=[...this.barChartLabelsSecond, (index+1).toString()];
      }else{
        sumaOtros = sumaOtros+element;
      }
    })
    this.barChartLabelsSecond=[...this.barChartLabelsSecond, 'otros'];
    aux.push(((sumaOtros/suma)*100).toFixed(2));
    auxdata = [{
      data: aux,
      backgroundColor: this.ColorMomento
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
