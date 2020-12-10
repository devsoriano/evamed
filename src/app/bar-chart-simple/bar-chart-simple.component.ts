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
      this.CargarDatos(this.elemento,this.ciclo)
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
