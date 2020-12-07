import { Input } from '@angular/core';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {BaseChartDirective } from 'ng2-charts';

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
  @Input() Bandera_resultado:number;
  @Input() proyecto:number;
  @Input() showMe_elementos:boolean;

  private colores: any[] = [
    ['#4DBE89', '#96e2bd', '#4dba8b', '#1f8253'],
    ['#148A93', '#0da8b6', '#64dee6', '#67c1c9'],
    ['#8F5091', '#d37cd4', '#8c4c90', '#6c1d6c'],
    ['#DEA961', '#d99d1c', '#d59a3d', '#f5e381'],
    ['#4DBE89', '#148A93', '#8F5091', '#DEA961']
  ];

  public pieChartType = 'doughnut';
  public pieChartOptions = {
    elements: { arc: { borderWidth: 0 } },
    plugins: {
      datalabels: {
        display: false
      }
    }
  };
  public pieChartData=[];
  public pieChartLabels = [];
  public pieChartData_elemento;

  constructor() { }

  ngOnInit(): void {
    if (this.Bandera_resultado == 1) {
      this.cargarDatos(' ', this.id);
    }else{
      this.cargarDatos(this.id, ' ');
    }
  }

  cambioIndicadorElementos(ID:string,value:string, bandera:number){
    this.id=ID;
    this.Bandera_resultado=bandera;
    if (this.Bandera_resultado == 1) {
      this.cargarDatos(" ", value);
    } else {
      this.cargarDatos(this.id, value);
    }
  }

  cargarDatos(ID:string, indicador:string){
    let auxdata: ChartDataSets[];
    let color: any[]
    let auxlabel = ['Producción','Construccion','Uso','FinDeVida']
    let auxdataLabel=[]
    let auxdatos = []
    let datos = []
    let aux=[];
    this.pieChartLabels=[]
    //carga datos para sección de resultados "Elementos constructivos por ciclo de vida"
    if (this.Bandera_resultado == 1){
      this.pieChartData =[];
      this.inputProyect.forEach(element => {
        if(element.id==this.proyecto){
          auxlabel.forEach(label=>{
            auxdatos = [...auxdatos, (element.Datos[indicador][label]).toFixed(2)]
          });
          color=this.colores[4];
          auxdata = [{
            data: auxdatos,
            backgroundColor: color
          }];
          this.pieChartData = this.pieChartData = [...this.pieChartData, auxdata];
        }
      });
    //carga datos para sección de resultados "Impactos ambientales por impctos del ciclo de vida"
    }else{
      this.pieChartData = [];
      if(indicador===' '){

      }else{
        this.inputProyect.forEach(proyecto => {
          aux=proyecto.Datos[indicador];
          Object.keys(auxlabel).forEach(element => {
            if (auxlabel[element]===ID) {
              color = this.colores[element];
              auxdatos = aux[auxlabel[element]]
              Object.keys(aux[auxlabel[element]]).forEach(marcador => {
                auxdataLabel=[...auxdataLabel, marcador];
                datos = [...datos, (auxdatos[marcador]*100).toFixed(2)];
              });
            }
          });
          auxdata=[{
            data: datos,
            backgroundColor: color
          }]
          datos=[];
          this.pieChartData = [...this.pieChartData,auxdata];
          this.pieChartLabels=[...this.pieChartLabels,auxdataLabel];
          auxdataLabel = [];
        });
      }
    }
  }
}
