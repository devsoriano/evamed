import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-radial-chart',
  templateUrl: './radial-chart.component.html',
  styleUrls: ['./radial-chart.component.scss']
})
export class RadialChartComponent implements OnInit {
  @ViewChild('MyChart') chartDir: BaseChartDirective;
  @Input() inputProyect:any;
  @Input() showMe: boolean;
  @Input() id:string;
  subtitulo: string;


  private backcolores: any[] = [
     'rgba(0,0,200,0.2)',
     'rgba(20,136,147,0.2)',
     'rgba(143,80,145,0.2)',
     'rgba(222,169,97,0.2)'];

  private pointcolores: any[] = [
    '#4DBE89',
    '#148A93',
    '#8F5091',
    '#DEA961'
  ];

  public radarChartOptions = {
    responsive: true,
    legend:{display:false},
    tooltips: { enabled: false },
    plugins: {
      datalabels: {
        display: false
      }
    }
  };
  public radarChartLabels=[];
  //public radarChartLabels = ['Indicador 1', 'Indicador 2', 'Indicador 3', 'Indicador 4', 'Indicador 5', 'Indicador 6'
  // , 'Indicador 7', 'Indicador 8'];

  public radarChartData = [];
 /*public radarChartData = [
    {
      data: [80, 75, 80, 80, 75, 80, 70, 75],
      backgroundColor: 'rgba(0,0,200,0.2)',
      pointBackgroundColor:'#4DBE89',
      borderColor:"transparent",
      borderWidth:0.1
    }
  ];*/
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
    this.cargarLabels(this.id);
    this.cargarDatos(this.id);
  }

  cargarLabels(ID:string){
    this.radarChartLabels = [];
    this.subtitulo=ID;
    this.inputProyect.forEach(proyecto => {
      Object.keys(proyecto.Datos).forEach(indicador => {
        if (indicador === ID){
          Object.keys(proyecto.Datos[indicador]).forEach(element => {
            if (!this.radarChartLabels.includes(element)) {
              this.radarChartLabels = [...this.radarChartLabels, element];
            }
          });
        }
      });
    });
  }

  cargarDatos(ID:string){
    this.radarChartData = [];
    let auxlabel = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];
    let auxdata=[];
    let auxdatos=[]
    let datos=[]
    let bcolor='';
    let pcolor='';
    this.subtitulo=ID;

    Object.keys(auxlabel).forEach(indicador => {
      if (auxlabel[indicador] === ID) {
        bcolor = this.backcolores[indicador];
        pcolor = this.pointcolores[indicador];
      }
    });
    this.inputProyect.forEach(proyecto => {
      Object.keys(auxlabel).forEach(indicador => {
        if (auxlabel[indicador] === ID) {
          auxdatos = proyecto.Datos[auxlabel[indicador]]
          Object.keys(proyecto.Datos[auxlabel[indicador]]).forEach(element => {
            datos = [...datos, (auxdatos[element]).toFixed(2)];
          });
        }
      });
      auxdata = [
        {
          data: datos,
          backgroundColor: bcolor,
          pointBackgroundColor: pcolor,
          borderColor: "transparent",
          borderWidth: 0.1
        }
      ];
      this.radarChartData=[...this.radarChartData,auxdata]
      datos=[];
      auxdata=[];
      auxdatos=[];
    });
    console.log(this.radarChartData)

  }

}
