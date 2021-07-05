import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { threadId } from 'node:worker_threads';
import { chown } from 'node:fs';

@Component({
  selector: 'app-graficas-tercer-seccion',
  templateUrl: './graficas-tercer-seccion.component.html',
  styleUrls: ['./graficas-tercer-seccion.component.scss']
})
export class GraficasTercerSeccionComponent implements OnInit {

  @ViewChild('MyChart') chartDir: BaseChartDirective;
  @Input() inputProyect: any;
  @Input() impactoAmbientalMostrado: String;
  @Input() ElementosContructivosEliminados:any;
  @Input() FasesEliminadas:any;
  @Input() FaseSeleccionada:String;

  private InfoMostrada=[];
  private CicloColores = { FinDeVida: '#DEA961', Uso : '#8F5091', Construccion: '#148A93', Producción : '#4DBE89'};
  private CicloColoresBW = {Producción : 'rgba(77,190,137,0.2)', Construccion : 'rgba(20,136,147,0.2)', Uso : 'rgba(143,80,145,0.2)', FinDeVida : 'rgba(222,169,97,0.2)'};
  public doughnutChartType = 'doughnut';
  public pieChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
    layout: {
      padding: 0,
    },
    events: ['click'],
    elements: { arc: { borderWidth: 0 } },
    tooltips: { enabled: false },
    hover: { mode: null },
    plugins: {
      datalabels: {
        color: '#FFFFFF',
        font: {
          size: 8,
        },
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartOptions: ChartOptions = {
    responsive: true,
    title: { display: true },
    legend: { display: false },
    tooltips: { enabled: false, mode: 'label' },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
      xAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
    plugins: {
      datalabels: {
        color: 'white',
        anchor: 'center',
        align: 'center',
        font: {
          size: 7,
        },
      },
    },
  };
  
  constructor() { }

  ngOnInit(): void {
    this.AjusteDatos()
  }

  AjusteDatos(){
    this.inputProyect.forEach(proyecto => {
      let aux = {};
      aux['id']=proyecto.idproyecto;
      aux['nombre']=proyecto.nombre;
      aux['CicloGraficaPie']=true;
      aux['CicloGraficaBar']=false;
      aux['ElementosConstructivosGrafica']=false;
      aux['DispercionElementoGrafica']=false;
      if(this.FaseSeleccionada!=' '){
        aux['CicloSeleccionado'] = this.FaseSeleccionada
      }else{
        aux['CicloSeleccionado'] = ' '
      }

      Object.keys(proyecto.datoDispercion).forEach(impacto => {
        if(impacto === this.impactoAmbientalMostrado){
          aux['DispercionElementos'] = proyecto.datoDispercion[impacto];
        }
      });
      Object.keys(proyecto.dataCiclo).forEach(impacto => {
        if(impacto === this.impactoAmbientalMostrado){
          aux['CicloVida'] = proyecto.dataCiclo[impacto];
          aux['DatosCicloVida']=this.GraficaCicloVida(proyecto.dataCiclo[impacto],aux['CicloSeleccionado']);
          aux['LabelsCicloVida'] = this.EncontrarLabels(proyecto.dataCiclo[impacto]);
        }
      });
      this.InfoMostrada.push(aux);
    })
  }

  EncontrarLabels(data){
    let aux = [];
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      if(index<Object.keys(data).length-1){
        this.FasesEliminadas.forEach(element => {
          if(element === etapa){
            bandera=false;
          }
        });
        if(bandera){
          aux.push(etapa);
        }
      }
    })
    return aux;
  }

  GraficaCicloVida(data,flagColor){
    let aux = [];
    let auxdata = [];
    let auxcolor = [];
    //tambien aqui falta quitar en caso de ser necesario quitar las etapas que se hayan seleccionado
    let suma = 0;
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      if(index<Object.keys(data).length-1){
        this.FasesEliminadas.forEach(element => {
          if(element === etapa){
            bandera=false;
          }
        });
        if(bandera){
          suma = suma + data[etapa];
        }
      }
    })
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      if(index<Object.keys(data).length-1){
        this.FasesEliminadas.forEach(element => {
          if(element === etapa){
            bandera=false;
          }
        });
        if(bandera){
          auxdata.push(((data[etapa]/suma)*100).toFixed(2))
        }
      }
    })
    
    if(flagColor != ' '){
      Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
        if(index<Object.keys(data).length-1){
          this.FasesEliminadas.forEach(element => {
            if(element === etapa){
              bandera=false;
            }
          });
          if(bandera){
            if(etapa === flagColor){
              auxcolor.push(this.CicloColores[etapa]);
            }else{
              auxcolor.push(this.CicloColoresBW[etapa]);
            }
          }
        }
      })
    }else{
      Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
        if(index<Object.keys(data).length-1){
          this.FasesEliminadas.forEach(element => {
            if(element === etapa){
              bandera=false;
            }
          });
          if(bandera){
            auxcolor.push(this.CicloColores[etapa])
          }
        }
      })
    }

    aux = [
      {
        data: auxdata,
        backgroundColor: auxcolor,
      },
    ];
    return aux;
  }

  cambioGrafica(flag,idP){
    if(flag==1){
      this.InfoMostrada.forEach((proyecto,index) => {
        if(proyecto.id == idP){
          this.InfoMostrada[index]['CicloGraficaPie']=true;
          this.InfoMostrada[index]['CicloGraficaBar']=false;
        }
      })
    }else{
      this.InfoMostrada.forEach((proyecto,index) => {
        if(proyecto.id == idP){
          this.InfoMostrada[index]['CicloGraficaPie']=false;
          this.InfoMostrada[index]['CicloGraficaBar']=true;
        }
      })
    }
  }
  
  public onChartClick(e: any,idP,flagGrafica): void {
    let aux: any;
    let auxd= [{Materiales: '#4DBE89'} ,  {Construccion: '#148A93'} ,  {Uso: '#8F5091' },  {FinDeVida: '#DEA961'}];
    if (this.chartDir.chart.getElementAtEvent(event)[0] != undefined) {
      Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(element => {
        if (element == '_model') {
          aux = this.chartDir.chart.getElementAtEvent(event)[0][element];
          let auxfase=' ';
          this.InfoMostrada.forEach((proyecto,index) => {
            if(proyecto.id == idP){
              if(flagGrafica ==1){
                Object.keys(this.CicloColores).forEach(etapa =>{
                  if(this.CicloColores[etapa]===aux['backgroundColor']){
                    auxfase = etapa;
                  }
                })
                if(auxfase === ' '){
                  Object.keys(this.CicloColoresBW).forEach(etapa =>{
                    if(this.CicloColores[etapa]===aux['backgroundColor']){
                      auxfase = etapa;
                    }
                  })
                }
              }else{
                auxfase = aux['label'];
              }
              if(proyecto['CicloSeleccionado']=== auxfase){
                this.InfoMostrada[index]['CicloSeleccionado']=' ';
                this.InfoMostrada[index]['DatosCicloVida']=this.GraficaCicloVida(this.InfoMostrada[index]['CicloVida'],this.InfoMostrada[index]['CicloSeleccionado']);
              }else{
                this.InfoMostrada[index]['CicloSeleccionado']=auxfase;
                this.InfoMostrada[index]['DatosCicloVida']=this.GraficaCicloVida(this.InfoMostrada[index]['CicloVida'],this.InfoMostrada[index]['CicloSeleccionado']);
              }
            }
          })
        }
      });
    }
  }
}

