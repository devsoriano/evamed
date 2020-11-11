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
  @Input() showMe: boolean;
  @Input() id:number;

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
  public radarChartLabels = ['Indicador 1', 'Indicador 2', 'Indicador 3', 'Indicador 4', 'Indicador 5', 'Indicador 6'
    , 'Indicador 7', 'Indicador 8'];

  public radarChartData = [
    {
      data: [80, 75, 80, 80, 75, 80,70,75],
      backgroundColor: 'rgba(0,0,200,0.2)',
      pointBackgroundColor:'#4DBE89',
      borderColor:"transparent",
      borderWidth:0.1
    }
  ];
  public radarChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    //determinar color de la gráfica}
    switch (this.id) {
      case 1: {
        this.radarChartData[0].backgroundColor = 'rgba(77,190,136,0.2)';
        this.radarChartData[0].pointBackgroundColor = '#4DBE89';
        break;
      }
      case 2: {
        this.radarChartData[0].backgroundColor = 'rgba(20,136,147,0.2)';
        this.radarChartData[0].pointBackgroundColor ='#148A93';
        break;
      }
      case 3: {
        this.radarChartData[0].backgroundColor = 'rgba(143,80,145,0.2)';
        this.radarChartData[0].pointBackgroundColor = '#8F5091';
        break;
      }
      case 4: {
        this.radarChartData[0].backgroundColor = 'rgba(222,169,97,0.2)';
        this.radarChartData[0].pointBackgroundColor = '#DEA961';
        break;
      }
      default: {
        break;
      }
    }
  }

}
