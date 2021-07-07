import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { threadId } from 'node:worker_threads';
import { chown } from 'node:fs';
import { element } from 'protractor';

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
  @Input() materiales:any;
  @Input() Secciones:any;

  public InfoMostrada=[];
  private CicloColores = { FinDeVida: '#DEA961', Uso : '#8F5091', Construccion: '#148A93', Producción : '#4DBE89'};
  private CicloColoresBW = {Producción : 'rgba(77,190,137,0.2)', Construccion : 'rgba(20,136,147,0.2)', Uso : 'rgba(143,80,145,0.2)', FinDeVida : 'rgba(222,169,97,0.2)'};
  private CicloColoresRGB = { FinDeVida: 'rgb(222, 169, 97)', Uso : 'rgb(143, 80, 145)', Construccion: 'rgb(20, 138, 147)', Producción : 'rgb(77, 190, 137)'};
  public displayedColumnsDispercion: string[] = ['no', 'material', 'porcentaje', 'numero'];
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
  public pieChartOptionsDos = {
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
        formatter: (val, ctx) => {
          return ctx.chart.data.labels[ctx.dataIndex];
        },
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
        aux['DatosElementosConstructivos']=this.GraficaElementosContructivos(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],this.FaseSeleccionada);
        aux['ElementosConstructivosGrafica']=true;
      }else{
        aux['DatosElementosConstructivos']=[];
        aux['CicloSeleccionado'] = ' '
      }
      aux['DispercionElementos'] = proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()];
      aux['DatosCicloVida']=this.GraficaCicloVida(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],aux['CicloSeleccionado']);
      aux['LabelsCicloVida'] = this.EncontrarLabels(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()]);
      aux['LabelsElementos'] = this.EncontrarLabelsElementos(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],aux['CicloSeleccionado'])
      aux['CicloVida'] = proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()];
      aux['ElementoConstructivoSeleccionado'] = ' ';
      aux['Coloreslementos'] = {};
      aux['DatosMateriales'] = proyecto.data['materiales'][this.impactoAmbientalMostrado.toString()];
      aux['DataGraficaMateriales']=[];
      aux['labelsMateriales'] = [];
      aux['infoTabla'] = [];
      aux['nombreSeccionMostrado'] = ' ';
      this.InfoMostrada.push(aux);
    })
  }

  EncontrarLabels(data){
    let aux = [];
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      this.FasesEliminadas.forEach(element => {
        if(element === etapa){
          bandera=false;
        }
      });
      if(bandera){
        aux.push(etapa);
      }
    });
    return aux;
  }

  EncontrarLabelsElementos(data,ciclo){
    let aux = [];
    Object.keys(data).forEach(fase =>{
      if(ciclo===fase){
        Object.keys(data[fase]).forEach(ElementoC =>{
          let banderaElemento = true;
          this.ElementosContructivosEliminados.forEach(ElementoI => {
            if(ElementoI === ElementoC){
              banderaElemento=false;
            }
          });
          if(banderaElemento){
            aux.push(ElementoC);
          }
        })
      }
    })
    return aux;
  }

  GraficaElementosContructivos(data,ciclo){
    let aux = [];
    let auxdata = [];
    let auxcolor = [];
    let help = this.CicloColoresRGB[ciclo].match(/rgb?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    let cambioR= help[1];
    
    Object.keys(data).forEach(fase =>{
      if(ciclo===fase){
        let suma =0;
        Object.keys(data[fase]).forEach(ElementoC =>{
          let banderaElemento = true;
          this.ElementosContructivosEliminados.forEach(ElementoI => {
            if(ElementoI === ElementoC){
              banderaElemento=false;
            }
          });
          if(banderaElemento){
            suma = suma + data[fase][ElementoC];
          }
        })
        Object.keys(data[fase]).forEach(ElementoC =>{
          let banderaElemento = true;
          this.ElementosContructivosEliminados.forEach(ElementoI => {
            if(ElementoI === ElementoC){
              banderaElemento=false;
            }
          });
          if(banderaElemento){
            let auxrgbcolor='rgb(';
            auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(help[2]).concat(',').concat(help[3]).concat(')');
            cambioR = (Number(cambioR) + 50).toString();
            auxcolor.push(auxrgbcolor)
            auxdata.push(((data[fase][ElementoC]/suma)*100).toFixed(2));
          }
        })
      }
    })
    aux = [
      {
        data: auxdata,
        backgroundColor: auxcolor,
      },
    ];
    return aux;
  }

  ColoresElementos(data,ciclo){
    let auxColoresElementos = [];
    let auxcolordos = [];
    let auxcolor = [];
    let valores = [];
    let help = this.CicloColoresRGB[ciclo].match(/rgb?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    let cambioR= help[1];
    Object.keys(data).forEach(fase =>{
      if(ciclo===fase){
        let suma =0;
        Object.keys(data[fase]).forEach(ElementoC =>{
          let banderaElemento = true;
          this.ElementosContructivosEliminados.forEach(ElementoI => {
            if(ElementoI === ElementoC){
              banderaElemento=false;
            }
          });
          if(banderaElemento){
            suma = suma + data[fase][ElementoC];
          }
        })
        Object.keys(data[fase]).forEach(ElementoC =>{
          let banderaElemento = true;
          this.ElementosContructivosEliminados.forEach(ElementoI => {
            if(ElementoI === ElementoC){
              banderaElemento=false;
            }
          });
          if(banderaElemento){
            auxColoresElementos.push(ElementoC);
            let auxrgbcolor='rgb(';
            auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(help[2]).concat(',').concat(help[3]).concat(')');
            let auxrgbacolor='rgba(';
            auxrgbacolor = auxrgbacolor.concat(cambioR.toString()).concat(',').concat(help[2]).concat(',').concat(help[3]).concat(',').concat('0.1').concat(')');
            auxcolor.push(auxrgbcolor);
            auxcolordos.push(auxrgbacolor);
            valores.push(((data[fase][ElementoC]/suma)*100).toFixed(2));
            cambioR = (Number(cambioR) + 50).toString();
          }
        })
      }
    })
    let resultado= {'orden':auxColoresElementos,'colores':auxcolor,'coloresbtw':auxcolordos,'valores':valores}
    return resultado;
  }

  GraficaCicloVida(data,flagColor){
    let aux = [];
    let auxdata = [];
    let auxcolor = [];
    let Data={};
    //tambien aqui falta quitar en caso de ser necesario quitar las etapas que se hayan seleccionado
    let suma = 0;
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      this.FasesEliminadas.forEach(element => {
        if(element === etapa){
          bandera=false;
        }
      });
      if(bandera){
        Data[etapa] = 0;
        Object.keys(data[etapa]).forEach(ElementoC =>{
          let banderaElemento = true;
          this.ElementosContructivosEliminados.forEach(ElementoI => {
            if(ElementoI === ElementoC){
              banderaElemento=false;
            }
          });
          if(banderaElemento){
            Data[etapa] =  Data[etapa] + data[etapa][ElementoC];
            suma = suma + data[etapa][ElementoC];
          }
        })
      }
    });
    Object.keys(Data).forEach((etapa,index) =>{
      auxdata.push(((Data[etapa]/suma)*100).toFixed(2))
    })
    if(flagColor != ' '){
      Object.keys(Data).forEach((etapa,index) =>{
        if(etapa === flagColor){
          auxcolor.push(this.CicloColores[etapa]);
        }else{
          auxcolor.push(this.CicloColoresBW[etapa]);
        }
      })
    }else{
      Object.keys(Data).forEach((etapa,index) =>{
        auxcolor.push(this.CicloColores[etapa])
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
    if (this.chartDir.chart.getElementAtEvent(event)[0] != undefined) {
      Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(element => {
        if (element == '_model') {
          aux = this.chartDir.chart.getElementAtEvent(event)[0][element];
          let auxfase=' ';
          this.InfoMostrada.forEach((proyecto,index) => {
            if(proyecto.id == idP){
              this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=' ';
              this.InfoMostrada[index]['DispercionElementoGrafica']=false;
              if(flagGrafica ==1){
                if(aux['backgroundColor'][0] === '#'){
                  Object.keys(this.CicloColores).forEach(etapa =>{
                    if(this.CicloColores[etapa]===aux['backgroundColor']){
                      auxfase = etapa;
                    }
                  })
                }else{
                  Object.keys(this.CicloColoresBW).forEach(etapa =>{
                    if(this.CicloColoresBW[etapa]===aux['backgroundColor']){
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
                this.InfoMostrada[index]['ElementosConstructivosGrafica'] = false;
              }else{
                this.InfoMostrada[index]['CicloSeleccionado']=auxfase;
                this.InfoMostrada[index]['DatosElementosConstructivos']=this.GraficaElementosContructivos(this.InfoMostrada[index]['DispercionElementos'],this.InfoMostrada[index]['CicloSeleccionado']);
                this.InfoMostrada[index]['Coloreslementos'] = this.ColoresElementos(this.InfoMostrada[index]['DispercionElementos'],this.InfoMostrada[index]['CicloSeleccionado']);;
                this.InfoMostrada[index]['DatosCicloVida']=this.GraficaCicloVida(this.InfoMostrada[index]['CicloVida'],this.InfoMostrada[index]['CicloSeleccionado']);
                this.InfoMostrada[index]['ElementosConstructivosGrafica'] = true;
              }
            }
          })
        }
      });
    }
  }

  public AjustarColoresGraficaElementos(datacolores,elementoSeleccionado){
    let aux = [];
    let auxcolores=[];
    if(elementoSeleccionado===' '){
      datacolores['orden'].forEach((elemento,index) => {
        auxcolores.push(datacolores['colores'][index])
      });
    }else{
      datacolores['orden'].forEach((elemento,index) => {
        if(elementoSeleccionado === elemento){
          auxcolores.push(datacolores['colores'][index])
        }else{
          auxcolores.push(datacolores['coloresbtw'][index])
        }
      });
    }
    aux = [
      {
        data: datacolores['valores'],
        backgroundColor: auxcolores,
      },
    ];
    return(aux);
  }

  public onChartClickElemento(e: any,idP): void {
    let aux: any;
    if (this.chartDir.chart.getElementAtEvent(event)[0] != undefined) {
      Object.keys(this.chartDir.chart.getElementAtEvent(event)[0]).forEach(element => {
        if (element == '_model') {
          let ColoresElementos = this.chartDir.chart.getElementAtEvent(event)[0]['$datalabels'][0]['$context']['dataset']['backgroundColor'];
          aux = this.chartDir.chart.getElementAtEvent(event)[0][element];
          let auxelemento=' ';
          let lugar=0;
          this.InfoMostrada.forEach((proyecto,index) => {
            if(proyecto.id == idP){
              ColoresElementos.forEach((color,ii) => {
                if(color === aux['backgroundColor']){
                  lugar=ii;
                }
              });
            }
            proyecto.Coloreslementos['orden'].forEach((elemento,ii) => {
              if(lugar==ii){
                auxelemento=elemento;
              }
            });
            if(proyecto.ElementoConstructivoSeleccionado === ' '){
              this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=auxelemento;
              this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
              let ciclo=this.InfoMostrada[index]['CicloSeleccionado'];
              let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],ciclo);
              this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
              this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
              this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
              let seccioninfo = this.Secciones.filter((bs)=> bs['id']==auxelemento);
              this.InfoMostrada[index]['nombreSeccionMostrado'] = seccioninfo[0]['name_section'];
              this.InfoMostrada[index]['DispercionElementoGrafica']=true;
            }else{
              if(proyecto.ElementoConstructivoSeleccionado != auxelemento){
                this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=auxelemento;
                this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
                let ciclo=this.InfoMostrada[index]['CicloSeleccionado'];
                let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],ciclo);
                this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
                this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
                this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
                let seccioninfo = this.Secciones.filter((bs)=> bs['id']==auxelemento);
                this.InfoMostrada[index]['nombreSeccionMostrado'] = seccioninfo[0]['name_section'];
                this.InfoMostrada[index]['DispercionElementoGrafica']=true;
              }else{
                this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=' ';
                this.InfoMostrada[index]['nombreSeccionMostrado'] = ' ';
                this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
                this.InfoMostrada[index]['DispercionElementoGrafica']=false;
              }
            }
          })
        }
      });
    }
  }

  IniciarGraficaMateriales(data,elementoSeleccionado,color){
    let aux = [];
    let auxgrafica = [];
    let auxlabel=[];
    let auxdata = [];
    let auxdatos = [];
    let suma=0;
    Object.keys(data).forEach(elemento =>{
      if(elemento === elementoSeleccionado){
        Object.keys(data[elemento]).forEach(material => {
          let resultado_actual = data[elemento][material];
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
            auxlabel=[...auxlabel, (index+1).toString()];
          }else{
            sumaOtros = sumaOtros+element;
          }
        })
        if(sumaOtros>0){
          aux.push(((sumaOtros/suma)*100).toFixed(2));
          auxlabel=[...auxlabel, 'otros'];
        }
      }
    })
    auxgrafica = [
      {
        data: aux,
        backgroundColor: this.CicloColores[color],
      },
    ];

    return {'grafica':auxgrafica,'labels':auxlabel}
  }

  IniciarTablaMateriales(data,elementoSeleccionado){
    let infoTablaDispercion = [];
    let suma = 0;
    let auxdatos = [];
    let auxlabel=[];
    let infomateriales=[];
    let auxidsMateriales = []
    Object.keys(data).forEach(elemento =>{
      if(elemento === elementoSeleccionado){
        Object.keys(data[elemento]).forEach((material,index) => {
          let resultado_actual = data[elemento][material];
          suma=suma+resultado_actual;
          let posicion = 0
          auxdatos.forEach(nivel =>{
            if(resultado_actual<nivel){
              posicion = posicion+1;
            }
          })
          if(posicion == 0){
            auxdatos = [resultado_actual,...auxdatos];
            auxidsMateriales = [material,...auxidsMateriales];
          }else{
            auxdatos.splice(posicion,0,resultado_actual);
            auxidsMateriales.splice(posicion,0,material);
          }
          let materialinfo = this.materiales.filter((bs)=> bs['id']==material);
          infomateriales.push(materialinfo[0]);
        });
        let num=0;
        auxidsMateriales.forEach((material,ii) => {
          let aux = {};
          infomateriales.forEach(infom => {
            if(infom['id'].toString() === material){
              num=num+1;
                aux['no'] = num;
                aux['material'] = infom['name_material'];
                aux['porcentaje'] = ((auxdatos[ii] / suma) * 100).toFixed(2);
                aux['numero'] = auxdatos[ii];
                infoTablaDispercion.push(aux);
            }
          })
        });
      }
    })
    return infoTablaDispercion
  }
}

