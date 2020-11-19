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

  private colores: any[] = [
    ['#4DBE89', '#96e2bd', '#4dba8b', '#1f8253'],
    ['#148A93', '#0da8b6', '#64dee6', '#67c1c9'],
    ['#8F5091', '#d37cd4', '#8c4c90', '#6c1d6c'],
    ['#DEA961', '#d99d1c', '#d59a3d', '#f5e381']];

  public pieChartType = 'doughnut';
  public pieChartOptions = {
    segmentShowStroke: false
  };
  public pieChartData=[];
  public pieChartLabels = [];

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos(this.id,' ')
  }

  cargarDatos(ID:string, indicador:string){
    let auxdata: ChartDataSets[];
    let color: any[]
    let auxlabel = ['Producción','Construcción','Uso','FindeVida']
    let auxdataLabel=[]
    let auxdatos = []
    let datos = []
    let aux=[];
    this.pieChartData =[]
    this.pieChartLabels=[]

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
