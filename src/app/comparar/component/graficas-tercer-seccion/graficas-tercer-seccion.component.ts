import { Component, NgModule, OnInit, QueryList, ViewChild, ComponentFactoryResolver,ViewContainerRef } from '@angular/core';
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
  @ViewChild('GraphCicloVida', { read: ViewContainerRef }) containerCicloVida: ViewContainerRef;
  @Input() inputProyect: any;
  @Input() impactoAmbientalMostrado: String;
  @Input() ElementosContructivosEliminados:any;
  @Input() FasesEliminadas:any;
  @Input() FaseSeleccionada:String;
  @Input() materiales:any;
  @Input() Secciones:any;
  @Input() flagSubCompleto:Boolean;

  public InfoMostrada=[];
  botones_elementos_constructivos=[];
  botones_ciclo_vida=[];
  elementoContructivoSelecionado = " ";
  private CicloColores = { Subetapas: '#4DBE89', Uso : '#8F5091', Construccion: '#148A93', Producción : '#4DBE89', General : '#767676',A1:'#4DBE89', A2:'#319F6B',A3:'#368460'};
  private CicloColoresBW = {Producción : 'rgba(77,190,137,0.2)', Construccion : 'rgba(20,136,147,0.2)', Uso : 'rgba(143,80,145,0.2)', Subetapas : 'rgba(77,190,137,0.2)'};
  private CicloColoresRGB = { Subetapas: 'rgb(77, 190, 137)', Uso : 'rgb(143, 80, 145)', Construccion: 'rgb(20, 138, 147)', Producción : 'rgb(77, 190, 137)'};
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
    this.botones_elementos_constructivos = this.Secciones;
    if(this.FaseSeleccionada==='Subetapas'){
      this.botones_ciclo_vida=['A1','A2','A3','A4','B4']
    }else{
      this.botones_ciclo_vida=['A1 - A3','A4','B4']
    }
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
      aux['DatosMateriales'] = proyecto.data['materiales'][this.impactoAmbientalMostrado.toString()];
      aux['DispercionElementos'] = proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()];
      if(this.FaseSeleccionada!=' '){
        aux['CicloSeleccionado'] = this.FaseSeleccionada
        aux['Coloreslementos'] = this.ColoresElementos(aux['DispercionElementos'],aux['CicloSeleccionado']);;
        aux['DatosElementosConstructivos']=this.GraficaElementosContructivos(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],this.FaseSeleccionada);
        aux['ElementosConstructivosGrafica']=true;
        aux['infoTabla'] = this.IniciarTablaMateriales(aux['DatosMateriales'][this.FaseSeleccionada.toString()], aux['CicloSeleccionado'],1);
        let auxgrafica = this.IniciarGraficaMateriales(aux['DatosMateriales'][this.FaseSeleccionada.toString()], aux['CicloSeleccionado'], aux['CicloSeleccionado'],1);
        aux['DataGraficaMateriales']=auxgrafica['grafica'];
        aux['labelsMateriales'] = auxgrafica['labels'];
        aux['iconosElementosConstrucivos']=this.AjustarElementosMostrados(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()][this.FaseSeleccionada.toString()])
      }else{
        aux['DatosElementosConstructivos']=[];
        aux['CicloSeleccionado'] = ' '
        aux['iconosElementosConstrucivos']={};
        aux['infoTabla'] = this.IniciarTablaMateriales(aux['DatosMateriales'],"",0);
        let auxgrafica = this.IniciarGraficaMateriales(aux['DatosMateriales'],"","General",0);
        aux['DataGraficaMateriales']=auxgrafica['grafica'];
        aux['labelsMateriales'] = auxgrafica['labels'];
        aux['Coloreslementos'] = {};
      }
      /*if(this.flagSubCompleto){
        aux['DatosCicloVida']=this.GraficaCicloVida(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],"Subetapas");
      }else{
      }*/
      aux['DatosCicloVida']=this.GraficaCicloVida(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],aux['CicloSeleccionado']);
      aux['LabelsCicloVida'] = this.EncontrarLabels(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()]);
      aux['LabelsElementos'] = this.EncontrarLabelsElementos(proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()],aux['CicloSeleccionado'])
      aux['CicloVida'] = proyecto.data['Calculos'][this.impactoAmbientalMostrado.toString()];
      aux['ElementoConstructivoSeleccionado'] = ' ';
      aux['nombreSeccionMostrado'] = ' ';
      aux['idsIconosElementos']=this.llenarIdsBotones(this.Secciones,proyecto.idproyecto);
      aux['idsIconoCiclo']=this.llenarIdsBotonesCiclo(this.botones_ciclo_vida, proyecto.idproyecto);
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
        Object.keys(data[fase]).forEach(subetapa => {
          Object.keys(data[fase][subetapa]).forEach(ElementoC =>{
            let banderaElemento = true;
            this.ElementosContructivosEliminados.forEach(ElementoI => {
              if(ElementoI === ElementoC){
                banderaElemento=false;
              }
            });
            if(banderaElemento){
              suma = suma + data[fase][subetapa][ElementoC];
            }
          })
        })
        Object.keys(data[fase]).forEach(subetapa => {
          Object.keys(data[fase][subetapa]).forEach(ElementoC =>{
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
              auxdata.push(((data[fase][subetapa][ElementoC]/suma)*100).toFixed(2));
            }
          })
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
        Object.keys(data[fase]).forEach(subetapa => {
          Object.keys(data[fase][subetapa]).forEach(ElementoC =>{
            let banderaElemento = true;
            this.ElementosContructivosEliminados.forEach(ElementoI => {
              if(ElementoI === ElementoC){
                banderaElemento=false;
              }
            });
            if(banderaElemento){
              suma = suma + data[fase][subetapa][ElementoC];
            }
          })
        });
        Object.keys(data[fase]).forEach(subetapa => {
          Object.keys(data[fase][subetapa]).forEach(ElementoC =>{
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
              valores.push(((data[fase][subetapa][ElementoC]/suma)*100).toFixed(2));
              cambioR = (Number(cambioR) + 50).toString();
            }
          })
        });
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
    let suma = 0;
    let auxsubetapas = []
    Object.keys(data).forEach((etapa,index) =>{
      let bandera = true;
      this.FasesEliminadas.forEach(element => {
        //Asegurar que el ciclo de vida no este eliminado
        if(element === etapa){
          bandera=false;
        }
      });
      if(bandera){
        if(this.flagSubCompleto){
          if(etapa != 'Producción'){
            Data[etapa] = 0;
          }
        }else{
          Data[etapa] = 0;
        }
        Object.keys(data[etapa]).forEach(subetapa => {
          Object.keys(data[etapa][subetapa]).forEach(ElementoC =>{
            let banderaElemento = true;
            this.ElementosContructivosEliminados.forEach(ElementoI => {
              //Para asegurar que el elemento constructivo no este eliminado
              if(ElementoI === ElementoC){
                banderaElemento=false;
              }
            });
            if(banderaElemento){
              if(this.flagSubCompleto){
                if(etapa === 'Producción'){
                  if(!auxsubetapas.includes(subetapa)){
                    Data[subetapa] = 0
                    auxsubetapas.push(subetapa)
                  }
                  Data[subetapa] =  Data[subetapa] + data[etapa][subetapa][ElementoC];
                }else{
                  Data[etapa] =  Data[etapa] + data[etapa][subetapa][ElementoC];
                }
                suma = suma + data[etapa][subetapa][ElementoC];
              }else{
                Data[etapa] =  Data[etapa] + data[etapa][subetapa][ElementoC];
                suma = suma + data[etapa][subetapa][ElementoC];
              }
            }
          })
        })
      }
    });
    console.log(Data)
    Object.keys(Data).forEach((etapa,index) =>{
      auxdata.push(((Data[etapa]/suma)*100).toFixed(2))
    })
    if(flagColor === 'Subetapas'){
      Object.keys(Data).forEach((etapa,index) =>{
        auxcolor.push(this.CicloColores[etapa]);
      })
    }else{
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
                this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'],"",0);
                let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'],"","General",0);
                this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
                this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
                this.InfoMostrada[index]['iconosElementosConstrucivos'] = {}
              }else{
                this.InfoMostrada[index]['CicloSeleccionado']=auxfase;
                this.InfoMostrada[index]['iconosElementosConstrucivos']=this.AjustarElementosMostrados(this.InfoMostrada[index]['DispercionElementos'][auxfase])
                this.InfoMostrada[index]['DatosElementosConstructivos']=this.GraficaElementosContructivos(this.InfoMostrada[index]['DispercionElementos'],this.InfoMostrada[index]['CicloSeleccionado']);
                this.InfoMostrada[index]['Coloreslementos'] = this.ColoresElementos(this.InfoMostrada[index]['DispercionElementos'],this.InfoMostrada[index]['CicloSeleccionado']);;
                this.InfoMostrada[index]['DatosCicloVida']=this.GraficaCicloVida(this.InfoMostrada[index]['CicloVida'],this.InfoMostrada[index]['CicloSeleccionado']);
                this.InfoMostrada[index]['ElementosConstructivosGrafica'] = true;
                this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'][auxfase], this.InfoMostrada[index]['CicloSeleccionado'],1);
                let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'][auxfase], this.InfoMostrada[index]['CicloSeleccionado'], this.InfoMostrada[index]['CicloSeleccionado'],1);
                this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
                this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
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
    if(elementoSeleccionado.toString()===' '){
      datacolores['orden'].forEach((elemento,index) => {
        auxcolores.push(datacolores['colores'][index])
      });
    }else{
      datacolores['orden'].forEach((elemento,index) => {
        if(elementoSeleccionado.toString() === elemento){
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

  //public onChartClickElemento(e: any,idP): void {
  public onChartClickElemento(idelemento,idP): void {
    let aux: any;
    this.InfoMostrada.forEach((proyecto,index) => {
      if(proyecto.id == idP){
        if(proyecto.ElementoConstructivoSeleccionado === ' '){
          this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=idelemento;
          this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
          let ciclo=this.InfoMostrada[index]['CicloSeleccionado'];
          let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],ciclo,2);
          this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
          this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
          this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],2);
          let seccioninfo = this.Secciones.filter((bs)=> bs['id']==idelemento);
          this.InfoMostrada[index]['nombreSeccionMostrado'] = seccioninfo[0]['name_section'];
          this.InfoMostrada[index]['DispercionElementoGrafica']=true;
          document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(idelemento.toString()))).className = 'espacio-seleccionado';
        }else{
          if(proyecto.ElementoConstructivoSeleccionado != idelemento){
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(this.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
            this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=idelemento;
            this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
            let ciclo=this.InfoMostrada[index]['CicloSeleccionado'];
            let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],ciclo,2);
            this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
            this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
            this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo],this.InfoMostrada[index]['ElementoConstructivoSeleccionado'],2);
            let seccioninfo = this.Secciones.filter((bs)=> bs['id']==idelemento);
            this.InfoMostrada[index]['nombreSeccionMostrado'] = seccioninfo[0]['name_section'];
            this.InfoMostrada[index]['DispercionElementoGrafica']=true;
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(idelemento.toString()))).className = 'espacio-seleccionado';
          }else{
            document.getElementById(this.InfoMostrada[index]['id'].toString().concat('texto'.concat(this.InfoMostrada[index]['ElementoConstructivoSeleccionado'].toString()))).className = 'espacio-sin-selecciomar';
            this.InfoMostrada[index]['ElementoConstructivoSeleccionado']=' ';
            this.InfoMostrada[index]['nombreSeccionMostrado'] = ' ';
            this.InfoMostrada[index]['DatosElementosConstructivos'] = this.AjustarColoresGraficaElementos(proyecto.Coloreslementos,this.InfoMostrada[index]['ElementoConstructivoSeleccionado']);
            this.InfoMostrada[index]['DispercionElementoGrafica']=false;
            let ciclo = this.InfoMostrada[index]['CicloSeleccionado']
            this.InfoMostrada[index]['infoTabla'] = this.IniciarTablaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo], this.InfoMostrada[index]['CicloSeleccionado'],1);
            let auxgrafica = this.IniciarGraficaMateriales(this.InfoMostrada[index]['DatosMateriales'][ciclo], this.InfoMostrada[index]['CicloSeleccionado'], this.InfoMostrada[index]['CicloSeleccionado'],1);
            this.InfoMostrada[index]['DataGraficaMateriales']=auxgrafica['grafica'];
            this.InfoMostrada[index]['labelsMateriales'] = auxgrafica['labels'];
          }
        }

      }
    });
  }

  sumadatos(data){
    let res = 0
    Object.keys(data).forEach(material => {
      let resultado_actual = data[material];
      res=res+resultado_actual;
    });
    return res;
  }

  acomodaMayoraMenor(data){
    let auxhelp = [];
    let auxdatos = [];
    Object.keys(data).forEach(material => {
      auxhelp = [...auxhelp,data[material]]
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

    return auxdatos.reverse()
  }

  IniciarGraficaMateriales(data,elementoSeleccionado,color,filtro){
    let aux = [];
    let auxgrafica = [];
    let auxlabel=[];
    let auxdata = [];
    let auxdatos = [];
    let suma=0;
    let materialesExistentes = []
    let auxmateriales = {}
    Object.keys(data).forEach(elemento =>{
      if(filtro == 0){
        //Sin seleccionar algun filtro
        Object.keys(data[elemento]).forEach(subetapa =>{
          Object.keys(data[elemento][subetapa]).forEach(elementoC => {
            Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
              if(!materialesExistentes.includes(material)){
                materialesExistentes.push(material)
                auxmateriales[material] = 0;
              }
              auxmateriales[material] += data[elemento][subetapa][elementoC][material]
            })
          });
        })
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else if(filtro == 1){
        //Si se selecciona una fase del ciclo de vida
        Object.keys(data[elemento]).forEach(elementoC =>{
          Object.keys(data[elemento][elementoC]).forEach(material => {
            if(!materialesExistentes.includes(material)){
              materialesExistentes.push(material)
              auxmateriales[material] = 0;
            }
            auxmateriales[material] += data[elemento][elementoC][material]
          })
        })
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else{
        //Si se selecciona un elemento constructivo
        Object.keys(data[elemento]).forEach(subetapa => {
          if(subetapa === elementoSeleccionado.toString()){
            suma = this.sumadatos(data[elemento][subetapa]);
            auxdatos = this.acomodaMayoraMenor(data[elemento][subetapa]);
          }
        })
      }
    })
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
    auxgrafica = [
      {
        data: aux,
        backgroundColor: this.CicloColores[color],
      },
    ];

    return {'grafica':auxgrafica,'labels':auxlabel}
  }

  IniciarTablaMateriales(data,elementoSeleccionado,filtro){
    let infoTablaDispercion = [];
    let suma = 0;
    let auxdatos = [];
    let auxidsMateriales = []
    let materialesExistentes = []
    let auxmateriales = {}
    Object.keys(data).forEach(elemento =>{
      if(filtro == 0){
        //Sin seleccionar algun filtro
        Object.keys(data[elemento]).forEach(subetapa =>{
          Object.keys(data[elemento][subetapa]).forEach(elementoC => {
            Object.keys(data[elemento][subetapa][elementoC]).forEach(material => {
              if(!materialesExistentes.includes(material)){
                materialesExistentes.push(material)
                auxmateriales[material] = 0;
              }
              auxmateriales[material] += data[elemento][subetapa][elementoC][material]
            })
          });
        })
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else if(filtro == 1){
        //Si se selecciona una fase del ciclo de vida
        Object.keys(data[elemento]).forEach(elementoC =>{
          Object.keys(data[elemento][elementoC]).forEach(material => {
            if(!materialesExistentes.includes(material)){
              materialesExistentes.push(material)
              auxmateriales[material] = 0;
            }
            auxmateriales[material] += data[elemento][elementoC][material]
          })
        })
        suma = this.sumadatos(auxmateriales)
        auxdatos = this.acomodaMayoraMenor(auxmateriales);
      }else{
        auxidsMateriales = []
        Object.keys(data[elemento]).forEach(subetapa => {
          if(subetapa === elementoSeleccionado.toString()){
            suma = this.sumadatos(data[elemento][subetapa])
            auxdatos = this.acomodaMayoraMenor(data[elemento][subetapa]);
            Object.keys(data[elemento][subetapa]).forEach((material,index) => {
              auxdatos.forEach(num =>{
                if(num == data[elemento][subetapa][material]){
                  auxidsMateriales.push(material)
                }
              })
            });
          }
        })
      }
    })
    if(filtro == 0){
      Object.keys(auxmateriales).forEach((material,index) => {
        auxdatos.forEach(num =>{
          if(num == auxmateriales[material]){
            auxidsMateriales.push(material)
          }
        })
      });
    }else if(filtro ==1){
      Object.keys(auxmateriales).forEach((material,index) => {
        auxdatos.forEach(num =>{
          if(!auxidsMateriales.includes(material)){
            if(num == auxmateriales[material]){
              auxidsMateriales.push(material)
            }
          }
        })
      });
    }
    let num=0;
    auxidsMateriales.forEach((material,ii) => {
      let aux = {};
      let helpMaterial = this.materiales.filter(({id}) => id == material);
      num=num+1;
      aux['no'] = num;
      aux['material'] = helpMaterial[0]['name_material'];
      aux['porcentaje'] = ((auxdatos[ii] / suma) * 100).toFixed(2);
      aux['numero'] = auxdatos[ii].toExponential(2);
      infoTablaDispercion.push(aux);
    });
    return infoTablaDispercion
  }

  llenarIdsBotones(elementos,idProyecto){
    let iconos = {}
    elementos.forEach(element => {
      iconos[element.id.toString()] = {};
      iconos[element.id.toString()]['idTEXTO']= idProyecto.toString().concat('texto'.concat(element.id.toString()));
    });
    return iconos;
  }
  llenarIdsBotonesCiclo(elementos,idProyecto){
    let iconos = {}
    for(let ciclo of elementos){
      iconos[ciclo.toString()] = {};
      iconos[ciclo.toString()]['idTEXTO']= idProyecto.toString().concat('texto'.concat(ciclo.toString()));
    }
    return iconos;
  }

  AjustarElementosMostrados(auxDatos){
    let iconos = {}
    this.Secciones.forEach(element =>{
      let flag = false
      let auxidelemento : String = element['id'];
      Object.keys(auxDatos).forEach(subetapa => {
        Object.keys(auxDatos[subetapa]).forEach(idelemento => {
          if(idelemento==auxidelemento.toString()){
            flag = true
            this.ElementosContructivosEliminados.forEach(elementoEliminado => {
              if(elementoEliminado === idelemento){
                flag = false
              }
            });
          }
        })
      });
      if(flag){
        iconos[auxidelemento.toString()] = {};
        iconos[auxidelemento.toString()]['habilitado'] = false;
      }else{
        iconos[auxidelemento.toString()] = {};
        iconos[auxidelemento.toString()]['habilitado'] = true;
      }
    })
    return iconos;
  }
}

