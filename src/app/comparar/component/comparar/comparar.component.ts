import { Component } from '@angular/core';
import { NgModule, OnInit, Input, ViewChildren, ViewChild, QueryList, ViewContainerRef, ComponentFactoryResolver, ElementRef, ComponentRef} from '@angular/core';
import { element } from 'protractor';
import { BarChartSimpleComponent } from 'src/app/bar-chart-simple/bar-chart-simple.component';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';
import { RadialChartComponent } from 'src/app/radial-chart/radial-chart.component';
import { GraficasTercerSeccionComponent } from '../../component/graficas-tercer-seccion/graficas-tercer-seccion.component';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';
import { concat, forkJoin, observable } from 'rxjs';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Calculos } from '../../../calculos/calculos'
import { CalculosSegundaSeccion } from 'src/app/calculos/calculos-segunda-seccion';
import { CalculosTercerSeccion } from 'src/app/calculos/calculos-tercer-seccion';
import { UserService } from 'src/app/core/services/user/user.service';
import { isEmpty } from 'rxjs-compat/operator/isEmpty';


interface impactos_menu{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

@NgModule({
  entryComponents: [
    BarChartComponent,
    RadialChartComponent,
    PieChartComponent,
    BarChartSimpleComponent,
    GraficasTercerSeccionComponent
  ]
})
export class CompararComponent implements OnInit {
  barChartComponent = BarChartComponent;
  radialChart = RadialChartComponent;
  pieChart = PieChartComponent;
  barChartSimpleComponent = BarChartSimpleComponent;
  graficasTercerSeccionComponent = GraficasTercerSeccionComponent;

  @ViewChild('barContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('barGraphDos', { read: ViewContainerRef }) containerBarGrafica: ViewContainerRef;
  @ViewChild('barGraphTres', {read: ViewContainerRef}) containerGraficaT: ViewContainerRef;
  @ViewChild('GraficasEspecificas', {read: ViewContainerRef}) containerGraficas: ViewContainerRef;
  @ViewChild('GraficasEspecificasDos', {read: ViewContainerRef}) containerGraficasDos: ViewContainerRef;
  @ViewChild('elementosCicloConteiner', {read: ViewContainerRef}) containerElementosCiclo: ViewContainerRef;
  @ViewChild('dispercionImpactoConteiner', {read: ViewContainerRef}) containerDispercionImpacto: ViewContainerRef;


  @ViewChildren(BarChartComponent)
  childBar: QueryList<BarChartComponent>;
  @ViewChildren(PieChartComponent)
  childPie: QueryList<PieChartComponent>;
  @ViewChildren(RadialChartComponent)
  childRadar: QueryList<RadialChartComponent>;
  @ViewChildren(BarChartSimpleComponent)
  childBarSimple: QueryList<BarChartSimpleComponent>;
  selector = 'Ninguno';
  bandera:number;
  showVar: boolean = false;
  showVar_1: boolean = false;
  ID:string=' ';
  proyecto={nombre:' ', num_epic: 0, num_epd: 0};
  banderaGrapg:number=0;
  proyect=[];
  proyect_active=[];
  inputproyect_bar_porcent:any;
  outproyect_bar = [];
  outproyect_radar=[];
  outproyect_pie = [];
  outproyect_bar_elementos = [];
  outproyect_pie_bar_elementos = [];
  indicador_impacto:string;
  hover:boolean=true;
  bandera_porcentaje: boolean = true;
  bandera_num:boolean= false;
  Impactos_menu=[];
  indicador_elegido:boolean=false;
  bandera_resultado:number=0;
  show_elementos:boolean=true;
  Impactos_ambientales:boolean=true;
  Impactos_Elementos:boolean=false;
  Elementos_constructivos:boolean=false;
  show_Dispercion:boolean=false;
  selectedValue: string;
  seleccion_columna:any;
  delete_fase:boolean=true;
  bandera_por_metro:boolean=false;
  projectsList: any;
  materialList: [];
  materialSchemeDataList: [];
  materialSchemeProyectList: [];
  potentialTypesList: any;
  standarsList: [];
  CSEList: [];
  SIDList: [];
  SIList: [];
  ACRList: [];
  ECDList: [];
  TEDList: [];
  TEList: [];
  ULList: [];
  ECDPList: [];
  sectionList: [];
  materiales:[];
  PTList:[];
  conversionList:[];
  click_anterior:'Ninguno';
  labelPosition: 'porcentaje' | 'numero' = 'porcentaje';
  proyectosMostrados_elementos=[];
  bandera_graph_bar=false;
  botones_elementos_constructivos=[];
  impacto_seleccionado=' ';
  serie_Seleccionada:string;
  bandera_serie_Seleccionada:boolean=false;
  resultdosGraficos:boolean=true;
  resultdosTabla: boolean = false;
  DatosTabla=[];
  classBotones ='boton-principal';
  fasesEliminadas = [];
  elementosContructivosEliminados = [];
  elementosContructivosEliminadosElementos = [];
  elementoContructivoSelecionado = ' ';
  iconosElementosConstrucivos = {};
  proyectosMostrados =[];
  idsIconosElementos = {};
  cargaElementos = false;
  imgSeleccionadaElemento = ' ';
  nombreProyectoElegidoSeleccionadoElementos = ' ';
  elementoSeleccionadoMostrado=' ';
  impactoSeleccionadoElementoConstructivo = ' ';
  iconos={'Producción': 'visibility', 'Construccion': 'visibility', 'Uso': 'visibility', 'FinDeVida': 'visibility'}
  iconosCambioElementos = {
    Producción: 'visibility',
    Construccion: 'visibility',
    Uso: 'visibility',
    FinDeVida: 'visibility',
  }
  ciclosDeVidaIgnoradasElementos=[];
  idsImgEdificios = [];
  idProyectoSeleccionadoImagen = ' ';
  banderaTipoGraficaDispercion = true;
  infoTablaDispercion=[];
  displayedColumnsDispercion: string[] = ['no', 'material', 'porcentaje', 'numero'];
  colorGraficaDispercion=' ';
  nivelesExistententesElementosConstructivos = [];
  coloresExistententesElementosConstructivos = [];
  impactoSeleccionadoElementoConstructivoGrafica = null;
  banderaAjusteElememtos=false;
  catologoImpactoAmbiental = [];
  elementosConstructivosMostradosElementos = {};
  cicloVidaSeleccionadoElemento = ' ';
  flagMaterialesDispercion = true;
  flagSinMaterialesDispercion = false;
  estadoTercerSeccion={};
  unidadImpactoAmientalTabla="";
  checkboxes: any[] = [
    { name: 'cb1', value: 'cb1', checked: false },
    { name: 'cb2', value: 'cb2', checked: true },
    { name: 'cb3', value: 'cb3', checked: false },
    { name: 'cb4', value: 'cb4', checked: false },
    { name: 'cb5', value: 'cb5', checked: false },
  ]

  // vars analisis
  idProyectoActivo: number;
  botones_grafica_activos: boolean =false;
  columnsToDisplay = []
  impactoAmbientalSeleccionado: string;

  constructor(
    private materials: MaterialsService,
    private projects: ProjectsService,
    private analisis: AnalisisService,
    private router: Router,
    private users: UserService,
    private calculos:Calculos,
    private calculosSegunaSeccion:CalculosSegundaSeccion,
    private calculosTercerSeccion: CalculosTercerSeccion,
    private componentFactoryResolver: ComponentFactoryResolver
    ){
      this.users
      .searchUser(localStorage.getItem('email-login'))
      .subscribe((data) => {
        localStorage.setItem('email-id', data[0].id);
        this.projectsList = [];
        this.projects.getProjects().subscribe((data) => {
          data.map((item) => {
            if (
              item.user_platform_id ===
              parseInt(localStorage.getItem('email-id'), 10)
            ) {
              this.projectsList.push(item);
            }
          });
        });
      });
    forkJoin([
      this.analisis.getTypeEnergy(),
      this.materials.getMaterials(),
      this.analisis.getMaterialSchemeData(),
      this.analisis.getMaterialSchemeProyect(),
      this.analisis.getPotentialTypes(),
      this.analisis.getStandars(),
      this.analisis.getConstructiveSystemElement(),
      this.analisis.getSourceInformationData(),
      this.analisis.getSourceInformation(),
      this.analisis.getAnnualConsumptionRequired(),
      this.analisis.getElectricityConsumptionData(),
      this.analisis.getTypeEnergyData(),
      this.analisis.getUsefulLife(),
      this.analisis.getECDP(),
      this.analisis.getSectionsList(),
      this.analisis.getMaterials(),
      this.analisis.getPotentialTransport(),
      this.analisis.getConversion()
    ])
    .subscribe(([
      TE,
      materialData,
      materialSchemeData,
      materialSchemeProyect,
      potentialTypes,
      standards,
      CSE,
      SID,
      SI,
      ACR,
      ECD,
      TED,
      UL,
      ECDP,
      sectionsList,
      materiales,
      PT,
      conversions
    ]) => {
      this.materialList = materialData;
      this.materialSchemeDataList = materialSchemeData;
      this.materialSchemeProyectList = materialSchemeProyect;
      this.potentialTypesList = potentialTypes;
      this.catologoImpactoAmbiental = this.calculos.FiltradoDeImpactos(potentialTypes);
      this.selectedValue = this.catologoImpactoAmbiental[0]['name_complete_potential_type'];
      this.impactoAmbientalSeleccionado=this.calculos.ajustarNombre(this.catologoImpactoAmbiental[0]['name_complete_potential_type'])
      this.standarsList = standards;
      this.CSEList = CSE;
      this.SIDList = SID;
      this.SIList = SI;
      this.ACRList = ACR;
      this.ECDList = ECD;
      this.TEDList = TED;
      this.TEList = TE;
      this.ULList = UL;
      this.ECDPList = ECDP;
      this.sectionList = sectionsList;
      this.materiales = materiales;
      this.PTList = PT;
      this.conversionList = conversions;
      this.botones_elementos_constructivos = sectionsList;
      this.llenarIdsBotones(sectionsList);
      this.idProyectoActivo = parseInt(sessionStorage.getItem('projectID'));
      this.columnsToDisplay = this.calculos.ImpactosSeleccionados(this.potentialTypesList);
      this.menu_inicio();
    });

  }

  ngOnInit(): void {
  }

  //Regreso a la página de inicio
  returnHome(){
    this.router.navigateByUrl('home-evamed');
  }

  //eliminar fase de ciclo de visa y redistribución;
  ajusteDeGraficaFASE(fase:string){
    if(this.fasesEliminadas.includes(fase)){
      this.fasesEliminadas.forEach((element,index) => {
        if(element == fase){
          this.fasesEliminadas.splice(index,1)
          document.getElementById(fase.concat("Ojo")).className = 'boton-icono';
          this.iconos[fase] = 'visibility'
        }
      })
    }else{
      this.iconos[fase] = 'visibility_off'
      document.getElementById(fase.concat("Ojo")).className = 'boton-ojito-select';
      this.fasesEliminadas.push(fase);
    }
    this.outproyect_bar=[];
    this.proyect_active.forEach(element => {
      let analisis = this.getAnalisisBarras(element);
      this.outproyect_bar.push(analisis);
    })
    this.fasesEliminadas.forEach(value => {
      this.outproyect_bar.forEach((proyecto, index)=> {
        let indicadores = Object.keys(proyecto.Datos);
        indicadores.forEach(element => {
          delete this.outproyect_bar[index].Datos[element][value];
        })
      })
    })
    if (this.resultdosGraficos){
      this.iniciaBarras();
    }else{
      this.TablaResultados();
    }
  }

  //agregar proyecto a graficas

  iniciar_graficas(id:number){
    if (this.proyect_active.some((item) => item == id) ) {
      return;
    }
    this.proyect_active.push(id);
    this.idsImgEdificios.push(id.toString().concat('imagen'));

    if (this.ID != ' ') {
      document.getElementById(this.ID).className = 'boton-principal';
    }

    if(this.proyect_active.length >1){
      this.banderaAjusteElememtos = true;
    }
    let analisis = this.getAnalisisBarras(id);
    let analisisRad = this.getAnalisisRadial(id);
    let analisisPie = this.getAnalisisPie(id);
    let analisisBarDos = this.getAnalisisBarrasElementosConstructivos(id);
    let analisisPieBarDos = this.getAnalisisPieBarSegunaSeccion(id);
    let analisisPieTres = this.getAnalisisElementos(id);

    this.proyect.forEach((proyecto,index) => {
      if(proyecto.id==id && proyecto.id != this.idProyectoActivo){
        this.proyect[index].num_epic=this.calculos.materiales_EPIC;
        this.proyect[index].num_epd = this.calculos.materiales_EPD;
        this.proyect[index].card = true;
        this.proyectosMostrados=[...this.proyectosMostrados,{
          num:this.proyect_active.length,
          Nombre:this.proyect[index].Nombre,
          id:this.proyect[index].id
        }]
      }
    });

    this.banderaAjusteElememtos = false;
    this.outproyect_bar.push(analisis);
    this.outproyect_radar.push(analisisRad);
    this.outproyect_pie.push(analisisPie);
    this.outproyect_bar_elementos.push(analisisBarDos);
    this.outproyect_pie_bar_elementos.push(analisisPieBarDos);
    if(this.resultdosTabla){
      this.TablaResultados();
    }else{
      this.iniciaBarras();
    }
    if(this.Impactos_Elementos){
      this.iniciaBarrasSeccionDos();
    }
    this.containerGraficas.clear();
    this.receiveSelector(null);
    this.banderaGrapg == 0;
    
    this.proyectosMostrados_elementos = [...this.proyectosMostrados_elementos, {
      idproyecto: id,
      nombre:analisis.Nombre,
      data:analisisPieTres,
    }];
    this.estadoTercerSeccion[id] = {
      'agruparProduccion':false,
      'cicloSeleccionado':" ",
      'flagPie':true,
      'fragBar':false
    }
    if(this.Elementos_constructivos){
      this.iniciarSeccionTres();
    }
    this.showVar = false;
    this.showVar_1 = false;
    this.banderaGrapg = 0;
    return;

  }

  iniciaBarras(){
    if (this.resultdosGraficos){
      this.container.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartComponent);
      const grafica = this.container.createComponent(componentFactory);
      grafica.instance.porcentaje = this.bandera_porcentaje;
      grafica.instance.inputProyects = this.outproyect_bar;
      grafica.instance.showMe = true;
      grafica.instance.Bandera_bar=false;
      grafica.instance.Columna_seleccionada = this.selector;
      grafica.instance.banera_enfoqueSerie_externo = this.bandera_serie_Seleccionada;
      grafica.instance.serie_input = this.serie_Seleccionada;
      grafica.instance.impactos = this.potentialTypesList;
      grafica.instance.lastClickEvent.subscribe(e => this.receiveSelector(e));
    }
  }

  //creación de gráfica de barras para la sección de impactos ambientales por
  //elementos onstructivos
  iniciaBarrasSeccionDos(){
    this.containerBarGrafica.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartComponent);
    const grafica = this.containerBarGrafica.createComponent(componentFactory);
    grafica.instance.inputProyects = this.outproyect_bar_elementos;
    grafica.instance.showMe = false;
    grafica.instance.Bandera_bar = this.bandera_graph_bar;
    grafica.instance.porcentaje=true;
    grafica.instance.elementoConstructivo=this.elementoContructivoSelecionado;
    grafica.instance.impactoAmbiental = this.impactoSeleccionadoElementoConstructivoGrafica;
    grafica.instance.ClickEvent.subscribe(e => this.receiveSelectorDos(e));
  }

  iniciarSeccionTres(){
    this.containerGraficaT.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.graficasTercerSeccionComponent);
    const grafica = this.containerGraficaT.createComponent(componentFactory);
    grafica.instance.impactoAmbientalMostrado=this.impactoAmbientalSeleccionado;
    grafica.instance.ElementosContructivosEliminados = this.elementosContructivosEliminadosElementos;
    grafica.instance.FaseSeleccionada=this.cicloVidaSeleccionadoElemento;
    grafica.instance.FasesEliminadas = this.ciclosDeVidaIgnoradasElementos;
    grafica.instance.inputProyect = this.proyectosMostrados_elementos;
    grafica.instance.materiales = this.materialList;
    grafica.instance.Secciones =  this.sectionList;
    grafica.instance.EstadoSeccion = this.estadoTercerSeccion;
    grafica.instance.unidades = this.potentialTypesList;
    grafica.instance.CambioEstadoTercerSeccion.subscribe(e => this.cambioEstadoTercerSección(e));
  }

  iniciaRadiales(){
    this.containerGraficas.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.radialChart);
    const grafica = this.containerGraficas.createComponent(componentFactory);
    grafica.instance.inputProyect = this.outproyect_radar;
    grafica.instance.showMe = this.showVar_1;
    grafica.instance.id = this.ID;
    grafica.instance.impactos = this.potentialTypesList
  }
  iniciaPie(){
    this.containerGraficas.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.pieChart);
    const grafica = this.containerGraficas.createComponent(componentFactory);
    grafica.instance.inputProyect = this.outproyect_pie;
    grafica.instance.showMePartially = this.showVar;
    grafica.instance.indicador = this.selector;
    grafica.instance.id = this.ID;
    grafica.instance.Bandera_resultado=2;
    grafica.instance.unidades = this.potentialTypesList;
  }

  getAnalisisElementos(idProyecto){

    let DatosCalculos = { 
      'TEList':this.TEList,
      'projectsList':this.projectsList,
      'materialList':this.materialList,
      'materialSchemeDataList':this.materialSchemeDataList,
      'materialSchemeProyectList':this.materialSchemeProyectList,
      'potentialTypesList':this.potentialTypesList,
      'standarsList':this.standarsList,
      'CSEList':this.CSEList,
      'SIDList':this.SIDList,
      'SIList':this.SIList,
      'ACRList':this.ACRList,
      'ECDList':this.ECDList,
      'TEDList':this.TEDList,
      'ULList':this.ULList,
      'ECDPList':this.ECDPList,
      'sectionList':this.sectionList,
      'PTList':this.PTList,
      'conversionList':this.conversionList
    };
    let aux = this.calculosTercerSeccion.OperacionesDeFasePorElementoConstructivoCicloVida(idProyecto,DatosCalculos);
    return aux;
  }

  getAnalisisBarras(idProyecto){

    //Creación de espacio para guardar los datos del proyecto
    let analisisProyectos : Record<string,any> = {
      Nombre: this.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    let DatosCalculos = { 'TEList':this.TEList,
      'projectsList':this.projectsList,
      'materialList':this.materialList,
      'materialSchemeDataList':this.materialSchemeDataList,
      'materialSchemeProyectList':this.materialSchemeProyectList,
      'potentialTypesList':this.potentialTypesList,
      'standarsList':this.standarsList,
      'CSEList':this.CSEList,
      'SIDList':this.SIDList,
      'SIList':this.SIList,
      'ACRList':this.ACRList,
      'ECDList':this.ECDList,
      'TEDList':this.TEDList,
      'ULList':this.ULList,
      'ECDPList':this.ECDPList,
      'sectionList':this.sectionList,
      'PTList':this.PTList,
      'conversionList':this.conversionList
    };

    //Datos[impacto][fase]
    let auxDatos = this.calculos.OperacionesDeFase(idProyecto,DatosCalculos)
    Object.keys(auxDatos).forEach(impacto => {
      analisisProyectos.Datos[impacto] = {}
      Object.keys(auxDatos[impacto]).forEach(fase => {
        analisisProyectos.Datos[impacto][fase] = 0
        Object.keys(auxDatos[impacto][fase]).forEach(subetapa => {
          analisisProyectos.Datos[impacto][fase] = analisisProyectos.Datos[impacto][fase] + auxDatos[impacto][fase][subetapa]
        })
        if(this.bandera_por_metro){
          let superficieConstruida = 0;
          if(fase === 'Uso'){
            superficieConstruida=this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['living_area']
          }else{
            superficieConstruida=this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['builded_surface']
          }
          analisisProyectos.Datos[impacto][fase] = analisisProyectos.Datos[impacto][fase]/superficieConstruida
        }
      })
    })
    return analisisProyectos;
  }


  getAnalisisRadial(idProyecto){
    let analisisProyectos : Record<string,any> = {
      Nombre: this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    let DatosCalculos = { 
      'TEList':this.TEList,
      'projectsList':this.projectsList,
      'materialList':this.materialList,
      'materialSchemeDataList':this.materialSchemeDataList,
      'materialSchemeProyectList':this.materialSchemeProyectList,
      'potentialTypesList':this.potentialTypesList,
      'standarsList':this.standarsList,
      'CSEList':this.CSEList,
      'SIDList':this.SIDList,
      'SIList':this.SIList,
      'ACRList':this.ACRList,
      'ECDList':this.ECDList,
      'TEDList':this.TEDList,
      'ULList':this.ULList,
      'ECDPList':this.ECDPList,
      'sectionList':this.sectionList,
      'PTList':this.PTList,
      'conversionList':this.conversionList
    };

    //Datos[Fase][impacto]
    let auxDatos = this.calculos.OperacionesDeFase(idProyecto,DatosCalculos)
    let auxFases=[]
    Object.keys(auxDatos).forEach(impacto =>{
      Object.keys(auxDatos[impacto]).forEach(fase =>{
        if(!auxFases.includes(fase)){
          auxFases.push(fase);
          analisisProyectos.Datos[fase] = {}
        }
        analisisProyectos.Datos[fase][impacto] = 0
        Object.keys(auxDatos[impacto][fase]).forEach(subetapa => {
          analisisProyectos.Datos[fase][impacto] = analisisProyectos.Datos[fase][impacto] + auxDatos[impacto][fase][subetapa]
        })
        if(this.bandera_por_metro){
          let superficieConstruida = 0;
          if(fase === 'Uso'){
            superficieConstruida=this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['living_area']
          }else{
            superficieConstruida=this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['builded_surface']
          }
          analisisProyectos.Datos[fase][impacto] = analisisProyectos.Datos[fase][impacto] / superficieConstruida
        }
      })
    })
    return analisisProyectos;
  }

  getAnalisisPie(idProyecto){
    let analisisProyectos: Record<string, any> = {
      Nombre: this.calculos.projectsList.filter(p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    let DatosCalculos = { 'TEList':this.TEList,
      'projectsList':this.projectsList,
      'materialList':this.materialList,
      'materialSchemeDataList':this.materialSchemeDataList,
      'materialSchemeProyectList':this.materialSchemeProyectList,
      'potentialTypesList':this.potentialTypesList,
      'standarsList':this.standarsList,
      'CSEList':this.CSEList,
      'SIDList':this.SIDList,
      'SIList':this.SIList,
      'ACRList':this.ACRList,
      'ECDList':this.ECDList,
      'TEDList':this.TEDList,
      'ULList':this.ULList,
      'ECDPList':this.ECDPList,
      'sectionList':this.sectionList,
      'PTList':this.PTList,
      'conversionList':this.conversionList
    };
    //Datos[impacto][fase][subetapa]
    let auxDatos = this.calculos.OperacionesDeFase(idProyecto,DatosCalculos)
    Object.keys(auxDatos).forEach(impacto => {
      let impacto_ambiental = impacto.replace(/\n/g, " ");
      analisisProyectos.Datos[impacto_ambiental] = {}
      Object.keys(auxDatos[impacto]).forEach(fase => {
        analisisProyectos.Datos[impacto_ambiental][fase] = auxDatos[impacto][fase]
        if(this.bandera_por_metro){
          let superficieConstruida = 0;
          if(fase === 'Uso'){
            superficieConstruida=this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['living_area']
          }else{
            superficieConstruida=this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['builded_surface']
          }
          Object.keys(analisisProyectos.Datos[impacto_ambiental][fase]).forEach(subetapa => {
            analisisProyectos.Datos[impacto_ambiental][fase][subetapa] = analisisProyectos.Datos[impacto_ambiental][fase][subetapa]/superficieConstruida
          })          
        }
      })
    })

    return analisisProyectos;
  }

  getAnalisisPieBarSegunaSeccion(idProyecto){
    //Calculos y obtención de datos para crear correctamente las gráficas de barras
    let analisisProyectos : Record<string,any> = {
      Nombre: this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    let DatosCalculos = { 
      'TEList':this.TEList,
      'projectsList':this.projectsList,
      'materialList':this.materialList,
      'materialSchemeDataList':this.materialSchemeDataList,
      'materialSchemeProyectList':this.materialSchemeProyectList,
      'potentialTypesList':this.potentialTypesList,
      'standarsList':this.standarsList,
      'CSEList':this.CSEList,
      'SIDList':this.SIDList,
      'SIList':this.SIList,
      'ACRList':this.ACRList,
      'ECDList':this.ECDList,
      'TEDList':this.TEDList,
      'ULList':this.ULList,
      'ECDPList':this.ECDPList,
      'sectionList':this.sectionList,
      'PTList':this.PTList,
      'conversionList':this.conversionList
    };

    let auxData = {};
    let auxDatosDos=this.calculosTercerSeccion.OperacionesDeFasePorElementoConstructivoCicloVida(idProyecto,DatosCalculos);
    Object.keys(auxDatosDos['materiales']).forEach(impactoAmbiental => {
      auxData[impactoAmbiental]={}
      let seccionesCreadas = [];
      let materialSeccion={}
      Object.keys(auxDatosDos['materiales'][impactoAmbiental]).forEach(cicloVida => {
        Object.keys(auxDatosDos['materiales'][impactoAmbiental][cicloVida]).forEach(subEtapa => {
          Object.keys(auxDatosDos['materiales'][impactoAmbiental][cicloVida][subEtapa]).forEach(seccion => {
            if(!seccionesCreadas.includes(seccion)){
              auxData[impactoAmbiental][seccion]={};
              materialSeccion[seccion]=[]
              seccionesCreadas.push(seccion);
            }
            Object.keys(auxDatosDos['materiales'][impactoAmbiental][cicloVida][subEtapa][seccion]).forEach(material => {
              if(!materialSeccion[seccion].includes(material)){
                auxData[impactoAmbiental][seccion][material]=0;
                materialSeccion[seccion].push(material)
              }
              auxData[impactoAmbiental][seccion][material] += auxDatosDos['materiales'][impactoAmbiental][cicloVida][subEtapa][seccion][material];
            });
          });
        })
      })
    });
    analisisProyectos['Datos']= auxData;
    return analisisProyectos;
  }

  AjustePorMetro(flag){
    this.outproyect_bar = [];
    this.outproyect_pie = [];
    this.outproyect_radar = [];
    this.fasesEliminadas = [];
    this.proyect_active.forEach(id => {
      if(flag==0){
        this.bandera_por_metro = true  
      }else{
        this.bandera_por_metro = false
      }

      let analisis = this.getAnalisisBarras(id);
      let analisisRad = this.getAnalisisRadial(id);
      let analisisPie = this.getAnalisisPie(id);
      
      this.outproyect_bar.push(analisis);
      this.outproyect_radar.push(analisisRad);
      this.outproyect_pie.push(analisisPie);
    })

    if(this.resultdosGraficos){
      this.containerGraficas.clear();
      this.receiveSelector(null);
      this.ID = ' ';
      this.iniciaBarras()
    }else{
      this.TablaResultados()
    }

  }

  //creación de tabla de resultado
  TablaResultados(){
    this.botones_grafica_activos=true;
    this.container.clear();
    let auxL = ['Producción', 'Construccion', 'Uso', 'FinDeVida'];
    let aux_color = ['#4DBE89', '#148A93', '#8F5091','#DEA961',"#767676"];
    //se prepara la información por filas
    let aux=[];
    let flagMasProyectos = false;
    let auxtotal={};
    let auxImpactosTotal = {}
    this.outproyect_bar.forEach((element)=>{
      auxtotal[element.id]={}
      auxImpactosTotal[element.id] = []
      Object.keys(element.Datos).forEach(impacto => {
        let auxNombreImpacto = impacto.replace(/\n/g,'');
        if(!auxImpactosTotal[element.id].includes(auxNombreImpacto)){
          auxtotal[element.id][auxNombreImpacto] = 0
          auxImpactosTotal[element.id].push(auxNombreImpacto)
        }
      });
    });
    auxL.forEach((ciclo,index) => {
      let auxdata = {};
      let auximpactos =[];
      auxdata["ciclo de vida"]=ciclo;
      let flagCiclo = true;
      this.fasesEliminadas.forEach(cicloEliminado=>{
        if(ciclo === cicloEliminado){
          flagCiclo = false;
        }
      });
      if(flagCiclo){
        this.outproyect_bar.forEach((element)=>{
          Object.keys(element.Datos).forEach(impacto => {
            let auxNombreImpacto = impacto.replace(/\n/g,'');
            let resultado = element.Datos[impacto][ciclo];
            let resultadoExponencial = resultado.toExponential(2);
            if(!auximpactos.includes(auxNombreImpacto)){
              auximpactos.push(auxNombreImpacto);
              auxdata[auxNombreImpacto] = resultadoExponencial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              auxtotal[element.id][auxNombreImpacto] += resultado
            }else{
              flagMasProyectos = true;
              let last = auxdata[auxNombreImpacto].toString()
              auxdata[auxNombreImpacto] = last.concat('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')
              auxdata[auxNombreImpacto] = auxdata[auxNombreImpacto].concat(resultadoExponencial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
              auxtotal[element.id][auxNombreImpacto] += resultado
            }
          });
        })
        auximpactos =[];
        aux=[...aux, {data:auxdata,
          color: aux_color[index]}];
      }
      if(ciclo === "FinDeVida"){
        auxdata = {}
        Object.keys(auxtotal).forEach((element, indexproyectos) => {
          if(indexproyectos == 0){
            Object.keys(auxtotal[element]).forEach(impacto => {
              let resultado = auxtotal[element][impacto]
              let resultadoExponencial = resultado.toExponential(2);
              auxdata[impacto] = resultadoExponencial
            })
          }else{
            Object.keys(auxtotal[element]).forEach(impacto => {
              let resultado = auxtotal[element][impacto]
              let resultadoExponencial = resultado.toExponential(2);
              let last = auxdata[impacto].toString()
              auxdata[impacto] = last.concat('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')
              auxdata[impacto] = auxdata[impacto].concat(resultadoExponencial.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
            })
          }
        });
        auxdata["ciclo de vida"]="Total";
        aux=[...aux, {data:auxdata,
        color: aux_color[index+1]}];
      }
      if(ciclo === "FinDeVida" && flagMasProyectos == true){
        auxdata = {};
        let numProyecto = 0;
        this.outproyect_bar.forEach((element)=>{ 
          numProyecto = numProyecto+1;
          Object.keys(element.Datos).forEach(impacto => {
          let auxNombreImpacto = impacto.replace(/\n/g,'');
            if(!auximpactos.includes(auxNombreImpacto)){
              auximpactos.push(auxNombreImpacto);
              auxdata[auxNombreImpacto] = ((numProyecto).toString());
            }else{
              let last = auxdata[auxNombreImpacto].toString()
              auxdata[auxNombreImpacto] = last.concat('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
              auxdata[auxNombreImpacto] = auxdata[auxNombreImpacto].concat((numProyecto).toString());
            }
          });
        });
        aux=[{data:auxdata,
               color: aux_color[index+1]},...aux];
      }
    })
    this.DatosTabla = aux;
    this.resultdosTabla=true;
    this.resultdosGraficos=false;
  }

  //regreso a gráfica
  GraficasResultados(){
    this.botones_grafica_activos = false;
    this.resultdosTabla = false;
    this.resultdosGraficos = true;
    this.iniciaBarras();
  }

  //controlar la activación de elementos en la interacción con los tipos de resultados
  show($event){
    if($event==0){
      this.Impactos_ambientales=true;
      this.Impactos_Elementos=false;
      this.Elementos_constructivos=false;
      this.bandera_graph_bar=false;
      this.impacto_seleccionado = ' ';
    }else if($event==1){
      this.Impactos_ambientales = false;
      this.Impactos_Elementos = true;
      this.Elementos_constructivos = false;
      this.bandera_graph_bar=true;
      this.iniciaBarrasSeccionDos();
    }else{
      this.Impactos_ambientales = false;
      this.Impactos_Elementos = false;
      this.Elementos_constructivos = true;
      this.impacto_seleccionado = ' ';
      this.iniciarSeccionTres();
    }
    this.ResetTabs($event);
  }

  getAnalisisBarrasElementosConstructivos(idProyecto){
    //Calculos y obtención de datos para crear correctamente las gráficas de barras
    let analisisProyectos : Record<string,any> = {
      Nombre: this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    let DatosCalculos = { 
      'TEList':this.TEList,
      'projectsList':this.projectsList,
      'materialList':this.materialList,
      'materialSchemeDataList':this.materialSchemeDataList,
      'materialSchemeProyectList':this.materialSchemeProyectList,
      'potentialTypesList':this.potentialTypesList,
      'standarsList':this.standarsList,
      'CSEList':this.CSEList,
      'SIDList':this.SIDList,
      'SIList':this.SIList,
      'ACRList':this.ACRList,
      'ECDList':this.ECDList,
      'TEDList':this.TEDList,
      'ULList':this.ULList,
      'ECDPList':this.ECDPList,
      'sectionList':this.sectionList,
      'PTList':this.PTList,
      'conversionList':this.conversionList
    };

    let auxDatos = this.calculosSegunaSeccion.OperacionesDeFasePorElementoConstructivo(idProyecto,DatosCalculos);
    this.AjustarElementosMostrados(auxDatos);
    this.AjustarElementosMostradosElemntos(auxDatos);
    analisisProyectos['Datos']= auxDatos;
    return analisisProyectos;
  }

  AjustarElementosMostrados(auxDatos){
    if(this.elementoContructivoSelecionado != ' '){
      document.getElementById("texto".concat(this.elementoContructivoSelecionado)).className = 'espacio-sin-selecciomar';
    }
    this.impactoSeleccionadoElementoConstructivo=' ';
    this.impactoSeleccionadoElementoConstructivoGrafica = null;
    this.elementoContructivoSelecionado = ' ';
    if(Object.keys(this.iconosElementosConstrucivos).length == 0){
      this.sectionList.forEach(element =>{
        //Aqui falta de que en caso de que se otro proyecto y tenga más o menos elementos que no cause problemas y se activen o desactiven bien los botones
        let flag = false
        let auxidelemento : String = element['id'];
        let auximpacto = this.calculosSegunaSeccion.ajustarNombre(this.potentialTypesList[0]['name_complete_potential_type'])
        Object.keys(auxDatos[auximpacto]).forEach(idelemento => {
          if(idelemento==auxidelemento.toString()){
            flag = true
          }
        })
        if(flag){
          this.iconosElementosConstrucivos[auxidelemento.toString()] = {};
          this.iconosElementosConstrucivos[auxidelemento.toString()]['icono'] = 'visibility';
          this.iconosElementosConstrucivos[auxidelemento.toString()]['habilitado'] = false;
        }else{
          this.iconosElementosConstrucivos[auxidelemento.toString()] = {};
          this.iconosElementosConstrucivos[auxidelemento.toString()]['icono'] = 'visibility_off';
          this.iconosElementosConstrucivos[auxidelemento.toString()]['habilitado'] = true;
        }
      })
    }
    if(this.banderaAjusteElememtos){
      this.sectionList.forEach(element =>{
        //Aqui falta de que en caso de que se otro proyecto y tenga más o menos elementos que no cause problemas y se activen o desactiven bien los botones
        let flag = false
        let auxidelemento : String = element['id'];
        let auximpacto = this.calculosSegunaSeccion.ajustarNombre(this.potentialTypesList[0]['name_complete_potential_type'])
        Object.keys(auxDatos[auximpacto]).forEach(idelemento => {
          if(idelemento==auxidelemento.toString()){
            flag = true
          }
        })
        if(flag){
          this.iconosElementosConstrucivos[auxidelemento.toString()] = {};
          this.iconosElementosConstrucivos[auxidelemento.toString()]['icono'] = 'visibility';
          this.iconosElementosConstrucivos[auxidelemento.toString()]['habilitado'] = false;
        }
      })
    }
  }

  AjustarElementosMostradosElemntos(auxDatos){
    
    if(Object.keys(this.elementosConstructivosMostradosElementos).length == 0){
      this.sectionList.forEach(element =>{
        //Aqui falta de que en caso de que se otro proyecto y tenga más o menos elementos que no cause problemas y se activen o desactiven bien los botones
        let flag = false
        let auxidelemento : String = element['id'];
        let auximpacto = this.calculosSegunaSeccion.ajustarNombre(this.potentialTypesList[0]['name_complete_potential_type'])
        Object.keys(auxDatos[auximpacto]).forEach(idelemento => {
          if(idelemento==auxidelemento.toString()){
            flag = true
          }
        })
        if(flag){
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()] = {};
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['nombre'] = element['name_section'];
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['habilitado'] = false;
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['check'] = true;
        }else{
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()] = {};
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['nombre'] = element['name_section'];
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['habilitado'] = true;
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['check'] = false;
        }
      })
    }
    if(this.banderaAjusteElememtos){
      this.sectionList.forEach(element =>{
        let flag = false
        let auxidelemento : String = element['id'];
        let auximpacto = this.calculosSegunaSeccion.ajustarNombre(this.potentialTypesList[0]['name_complete_potential_type'])
        Object.keys(auxDatos[auximpacto]).forEach(idelemento => {
          if(idelemento==auxidelemento.toString()){
            flag = true
          }
        })
        if(flag){
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()] = {};
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['nombre'] = element['name_section'];
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['habilitado'] = false;
          this.elementosConstructivosMostradosElementos[auxidelemento.toString()]['check'] = true;
        }
      })
    }
  }

  //Se cargan los proyetcos existentes y se configura el menu
  menu_inicio(){
    
    this.projectsList.forEach(proyecto => {
      if (proyecto['id'] == this.idProyectoActivo){
        this.proyecto.nombre = proyecto['name_project']
        this.proyecto.num_epic= this.calculos.materiales_EPIC
        this.proyecto.num_epd = this.calculos.materiales_EPD
        return;
      }
      this.proyect = [...this.proyect,
        {
          Nombre: proyecto['name_project'],
          id: proyecto['id'],
          num_epic: 0,
          card: false,
          num_epd:0
        }];
    })

    this.iniciar_graficas(this.idProyectoActivo);
  }

  //activar gráfica de porcentaje
  porcentaje(val:boolean,val2:number){
    if ( val == this.bandera_porcentaje ){ return; }
    this.receiveSelector(null)
    this.bandera_porcentaje = val;
    this.ID=' ';
    this.iniciaBarras();
    this.containerGraficas.clear();
    return;
  }

  //quitar proyecto a las gráficas
  quitarProyecto(ID:number){
    this.proyect.forEach((proyecto, index) => {
      if (proyecto.id == ID) {
        this.proyect[index].card = false;
      }
    });   
    this.proyect_active = this.proyect_active.filter(item => item != ID);
    this.idsImgEdificios = this.idsImgEdificios.filter(item => item.toString().concat('imagen') != ID);
    this.proyectosMostrados = this.proyectosMostrados.filter(({id}) => id != ID);
    let nump=1;
    this.proyect_active.forEach((element,index) =>{
      this.proyectosMostrados.forEach((pr,numproy) =>{
        if(pr.id == element){
          nump=nump+1;
          this.proyectosMostrados[numproy].num = nump;
        }
      })
    })
    this.proyectosMostrados_elementos = this.proyectosMostrados_elementos.filter(({ idproyecto }) => idproyecto != ID);
    this.outproyect_bar = this.outproyect_bar.filter(({id}) => id != ID);
    this.outproyect_radar = this.outproyect_radar.filter(({ id }) => id != ID);
    this.outproyect_pie = this.outproyect_pie.filter(({ id }) => id != ID);
    this.outproyect_bar_elementos = this.outproyect_bar_elementos.filter(({ id }) => id != ID);
    this.iconosElementosConstrucivos={}
    this.elementosConstructivosMostradosElementos={}
    delete this.estadoTercerSeccion[ID]
    this.outproyect_bar_elementos.forEach((element,index)=>{
      if(index < 1){
        this.banderaAjusteElememtos=false;
      }else{
        this.banderaAjusteElememtos=true;
      }
      this.AjustarElementosMostrados(element.Datos);
      this.AjustarElementosMostradosElemntos(element.Datos);
    })
    this.banderaAjusteElememtos=false;

    if (this.resultdosTabla) {
      this.TablaResultados();
    } else {
      this.iniciaBarras();
    }
    if(this.Impactos_ambientales){
      this.containerGraficas.clear();
      this.receiveSelector(null);
      if (this.ID != ' ') {
        document.getElementById(this.ID).className = 'boton-principal';
      }
    }
    if(this.Impactos_Elementos){
      this.iniciaBarrasSeccionDos();
      if(this.imgSeleccionadaElemento!=' '){
        this.DispercionAP(this.imgSeleccionadaElemento,' ');
      }
      if(this.elementoContructivoSelecionado != ' '){
        document.getElementById("texto".concat(this.elementoContructivoSelecionado)).className = 'espacio-sin-selecciomar';
        this.elementoContructivoSelecionado=' ';
      }
    }
    if(this.Elementos_constructivos){
      this.iniciarSeccionTres();
    }
  }

  //interacción con la gráfca de bar
  receiveSelector($event) {
    //cordinate with bar graph
    let aux
    if (Array.isArray($event)){
      let sl
      $event.forEach((element,index) => {
        if(index == 0){
          sl=element
        }else{
          sl = sl.concat(' ',element)
        }
      });
      aux = sl;
    }else{
      aux = $event;
    }

    this.showVar_1 = false;
    this.showVar = false;
    this.selector = aux

    if ($event==null){
      this.bandera = 0;
      this.hover = true;
      if (this.ID != ' ') {
        document.getElementById(this.ID).className = 'boton-principal';
        this.ID = ' ';
      }
    }else{
      this.bandera=1;
      this.hover = false;
      if (this.ID != ' ') {
        document.getElementById(this.ID).className = 'boton-principal';
      }
      this.ID = ' ';
    }
    this.containerGraficas.clear();
  }

  //Despliegue gráficas de pie o radar
  grafica(x: string) {
    //activate graph selectioned
    if(this.ID != ' '){
      //console.log('in');
      document.getElementById(this.ID).className = 'boton-principal';
    }

    if (this.resultdosGraficos){
      this.containerGraficas.clear();
      this.bandera_resultado = 2;
      if (this.banderaGrapg == 0) {
        this.banderaGrapg++;
        this.ID = ' ';
      }
      if(x===this.ID ){
        if (this.bandera == 1) {
          this.showVar = false;
        } else {
          this.showVar_1 = false;
          this.hover = true;
          this.bandera_serie_Seleccionada = false;
        }
        this.banderaGrapg=0;
        this.ID = ' ';
        this.containerGraficas.clear();
      }else{
        this.ID = x;
        if (this.bandera == 1) {
          this.showVar = true;
          this.showVar_1 =false;
          this.iniciaPie();
        } else {
          this.showVar_1 = true;
          this.showVar=false;
          this.hover=false;
          this.serie_Seleccionada=x;
          this.iniciaRadiales();
        }
      }
      if (this.ID != ' ') {
        let boton = document.getElementById(this.ID);
        boton.className = 'boton-select'
      }
    }
  }

  //despliegue gráfica de pie para sección de resultados
  selectImpactoAmbiental(){
    this.impactoAmbientalSeleccionado=this.calculos.ajustarNombre(this.selectedValue);
    this.iniciarSeccionTres();
  }

  selectEtapa(etapa) {
    let flag=true
    this.ciclosDeVidaIgnoradasElementos.forEach(etapaEliminada => {
      if(etapaEliminada === etapa)
        flag = false;
    });
    if(flag){
      let color = {
        Producción: '#4DBE89',
        Construccion: '#0DADBA',
        Uso: '#8F5091',
        FinDeVida: '#DEA961',
      };
      let auxResultado = " ";
      if(this.cicloVidaSeleccionadoElemento === ' '){
        this.cicloVidaSeleccionadoElemento = etapa;
        auxResultado = etapa;
        document.getElementById(etapa.concat('TextoElemento')).className = 'button-info-select';
        Object.keys(color).forEach((element) => {
          if (element === etapa) {
            document.getElementById(etapa.concat('TextoElemento')).style.borderColor = color[element];
          }
        });
      }else{
        if(this.cicloVidaSeleccionadoElemento != etapa){
          document.getElementById(etapa.concat('TextoElemento')).className = 'button-info-select';
          Object.keys(color).forEach((element) => {
            if (element === etapa) {
              document.getElementById(etapa.concat('TextoElemento')).style.borderColor = color[element];
            }
          });
          document.getElementById(this.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
          this.cicloVidaSeleccionadoElemento = etapa;
          auxResultado = etapa
        }else{
          document.getElementById(this.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
          this.cicloVidaSeleccionadoElemento = ' ';
          auxResultado = " "
        }
      }
      Object.keys(this.estadoTercerSeccion).forEach(idP => {
        this.estadoTercerSeccion[idP]['cicloSeleccionado'] = auxResultado
      })
      this.iniciarSeccionTres();
    }
  }

  eliminarEtapa(etapa) {
    if (this.ciclosDeVidaIgnoradasElementos.includes(etapa)) {
      this.ciclosDeVidaIgnoradasElementos.forEach((element, index) => {
        if (element === etapa) {
          this.iconosCambioElementos[etapa] = 'visibility';
          this.ciclosDeVidaIgnoradasElementos.splice(index, 1);
        }
      });
    } else {
      this.iconosCambioElementos[etapa] = 'visibility_off';
      this.ciclosDeVidaIgnoradasElementos.push(etapa);
      if(this.cicloVidaSeleccionadoElemento === etapa){
        document.getElementById(this.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
        this.cicloVidaSeleccionadoElemento = ' ';
      }
      let auxBotonesEtapa = {'A1':'Producción','A2':'Producción','A3':'Producción', 'A4':'Construccion', 'B4':'Uso'}
      Object.keys(this.estadoTercerSeccion).forEach(idP => {
        if(this.estadoTercerSeccion[idP]['cicloSeleccionado'] === etapa){
          this.estadoTercerSeccion[idP]['cicloSeleccionado'] = " ";
        }else if(this.estadoTercerSeccion[idP]['cicloSeleccionado'] === auxBotonesEtapa[etapa]){
          this.estadoTercerSeccion[idP]['cicloSeleccionado'] = " ";
        }
      })
    }
    this.iniciarSeccionTres();
  }

  elementoSeleccionadoElementos(recive){
    if(this.elementosContructivosEliminadosElementos.includes(recive.toString())){
      this.elementosContructivosEliminadosElementos.forEach((element,index) => {
        if(element == recive.toString()){
          this.elementosContructivosEliminadosElementos.splice(index,1)
        }
      })
    }else{
      this.elementosContructivosEliminadosElementos.push(recive.toString());
    }
    this.iniciarSeccionTres();
  }

  //resetear secciones
  ResetTabs(value:number){
    if(value==2){
      this.outproyect_bar_elementos.forEach((element,index)=>{
        if(index < 1){
          this.banderaAjusteElememtos=false;
        }else{
          this.banderaAjusteElememtos=true;
        }
        this.AjustarElementosMostradosElemntos(element.Datos)
      })
      this.banderaAjusteElememtos=false;
    }
  }

  //cambio entre grafica pie y bar en sección elementos contructivos
  change_graph(value:number,IDproyect:number){
    this.proyectosMostrados_elementos.forEach(element=>{
      if(element.idproyecto==IDproyect){
        element.showciclo=false;
        element.showcimenta=false;
        element.ciclo=' ';
        element.elemento=' ';
        //activar pie
        if(value==1){
          element.showbar = false;
          element.showpie = true;
        }else{
          //activar bar
          element.showbar = true;
          element.showpie = false;
        }
      }
    });
  }

  //configuración de la sección dispersión del en fase de ciclo de vida
  configurarDatos($event,IDproyect:number){
    let auxdatos=$event;
    this.proyectosMostrados_elementos.forEach(element => {
      if(element.idproyecto==IDproyect){
        element.showcimenta=false;
        element.showciclo= auxdatos.show;
        element.ciclo= auxdatos.etapa;
        if(element.showciclo){
        this.childPie.forEach(c => c.cambioID(element.ciclo,IDproyect));
        }
      }
    });
  }

  DispercionAP(item,proyectoID){
    let flagMostrarInfo = false;
    if(item != null){
      if(this.impactoSeleccionadoElementoConstructivo != ' ' && this.elementoContructivoSelecionado != ' '){
        if(this.imgSeleccionadaElemento === ' '){
          this.show_Dispercion=true;
          this.imgSeleccionadaElemento = item;
          this.idProyectoSeleccionadoImagen=proyectoID;
          document.getElementById(item).className = 'img-edificio-seleccionado';
          flagMostrarInfo = true;
          this.proyectosMostrados_elementos.forEach(element => {
            if(element.idproyecto == proyectoID){
              this.nombreProyectoElegidoSeleccionadoElementos = element.nombre
            }
          });
          let elemento = this.sectionList.filter(({id}) => id == Number(this.elementoContructivoSelecionado))
          this.elementoSeleccionadoMostrado = elemento[0]['name_section']
        }else{
          if(item != this.imgSeleccionadaElemento){
            document.getElementById(this.imgSeleccionadaElemento).className = 'img-edificio';
            document.getElementById(item).className = 'img-edificio-seleccionado';
            this.imgSeleccionadaElemento = item.toString();
            this.idProyectoSeleccionadoImagen=proyectoID;
            flagMostrarInfo = true;
            this.proyectosMostrados_elementos.forEach(element => {
              if(element.idproyecto == proyectoID){
                this.nombreProyectoElegidoSeleccionadoElementos = element.nombre
              }
            });
            let elemento = this.sectionList.filter(({id}) => id == Number(this.elementoContructivoSelecionado))
            this.elementoSeleccionadoMostrado = elemento[0]['name_section']
          }else{
            this.show_Dispercion=false;
            document.getElementById(item).className = 'img-edificio';
            this.nombreProyectoElegidoSeleccionadoElementos = ' ';
            this.imgSeleccionadaElemento = ' ';
            this.idProyectoSeleccionadoImagen=' ';
            this.banderaTipoGraficaDispercion=true;
          }
        }
      }
    }else{
      flagMostrarInfo = true;
    }
    if(flagMostrarInfo){
      this.iniciarTabaDispercion();
      if(this.containerGraficasDos != undefined){
        this.iniciarGraficaEspecificaDispercion();
      }
    }
  }

  findUnidad(indicador){
    let final_unit;
    let impacto = indicador.replace(/\n/g,'');
    impacto = impacto.replace(/\s/g, '')
    this.potentialTypesList.forEach(element => {
      let aux_element = element['name_complete_potential_type'].replace(/\s/g, '')
      if(impacto === aux_element){
        final_unit=element['unit_potential_type'];
      }
    });
    if(indicador != undefined){
    }
    return final_unit
  }

  iniciarTabaDispercion(){
    this.infoTablaDispercion = [];
    //'color-'no', 'material', 'porcentaje', 'numero'
    //console.log(this.outproyect_pie_bar_elementos)
    this.outproyect_pie_bar_elementos.forEach(element => {
      if(element['id'] == this.idProyectoSeleccionadoImagen){
        let auxhelp = [];
        let suma = 0;
        let auxdatos = [];
        Object.keys(element.Datos).forEach((impacto) => {
          let auxNombre = this.calculosSegunaSeccion.ajustarNombre(this.impactoSeleccionadoElementoConstructivo)
          if(impacto === auxNombre){
            Object.keys(element.Datos[impacto]).forEach(elementoC => {
              if(elementoC==this.elementoContructivoSelecionado){
                //Ordear de mayor a menor
                Object.keys(element.Datos[impacto][elementoC]).forEach((material,index) => {
                  suma += element.Datos[impacto][elementoC][material];
                  auxhelp = [...auxhelp,element.Datos[impacto][elementoC][material]]
                })
                auxdatos = auxhelp.sort((n1,n2) => {
                  if (n1 > n2) {
                      return 1;
                  }
              
                  if (n1 < n2) {
                      return -1;
                  }
              
                  return 0;
                })
              }
            })
          }
        });
        auxdatos=auxdatos.reverse()
        let num=0;
        let auxColor={'#5A1002':'rgb(90,16,2)','#902511':'rgb(144,37,17)','#BE3218':'rgb(190,50,24)','#EB3F20':'rgb(235,63,32)','#EB5720':'rgb(235,87,32)','#EB7620':'rgb(235,118,32)', '#EB9520':'rgb(235,149,32)','#EBC420':'rgb(235,196,32)', '#EBDB20':'rgb(235,219,32)', '#CCEB20':'rgb(204,235,32)', '#76EB20':'rgb(118,235,32)'};
        let colorhelp = auxColor[this.colorGraficaDispercion].match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
        let cambioR= colorhelp[1];
        let cambioG= colorhelp[2];
        let cambioB= colorhelp[3];
        if(auxdatos.length == 0){
          this.flagMaterialesDispercion = false
          this.flagSinMaterialesDispercion = true
        }else{
          this.flagMaterialesDispercion = true
          this.flagSinMaterialesDispercion = false
        }
        auxdatos.forEach((lugar,ii) => {
          Object.keys(element.Datos).forEach((impacto) => {
            let auxNombre = this.calculosSegunaSeccion.ajustarNombre(this.impactoSeleccionadoElementoConstructivo)
            if(impacto === auxNombre){
              this.unidadImpactoAmientalTabla = impacto;
              Object.keys(element.Datos[impacto]).forEach(elementoC => {
                if(elementoC==this.elementoContructivoSelecionado){
                  Object.keys(element.Datos[impacto][elementoC]).forEach((material,index) => {
                    let aux = {};
                    if(lugar==element.Datos[impacto][elementoC][material]){
                      //Sección para determinar el color en la tabla con relación a la gráfica
                      let auxrgbcolor='rgb(';
                      if(ii <= 2){
                        auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(cambioG).concat(',').concat(cambioB).concat(')');
                        if((255 - cambioR) >= 40){
                          cambioR = (Number(cambioR) + 40).toString();
                        }else if((cambioG - 40) >= 0){
                          cambioG = (Number(cambioG) - 40).toString();
                        }else{
                          cambioB = (Number(cambioB) + 40).toString();
                        }
                      }else{
                        auxrgbcolor = auxrgbcolor.concat(cambioR.toString()).concat(',').concat(colorhelp[2]).concat(',').concat(colorhelp[3]).concat(')');
                      }
                      aux['color'] = auxrgbcolor;
                      let helpMaterial = this.materiales.filter(({id}) => id == material);
                      num=num+1;
                      aux['no'] = num;
                      aux['material'] = helpMaterial[0]['name_material'];
                      aux['porcentaje'] = ((element.Datos[impacto][elementoC][material] / suma) * 100).toFixed(2);
                      aux['numero'] = (element.Datos[impacto][elementoC][material]).toExponential(2);
                      this.infoTablaDispercion.push(aux);
                    }
                  })
                }
              })
            }
          });
        });
      }
    })
    if(this.flagMaterialesDispercion){
      this.unidadImpactoAmientalTabla = this.findUnidad(this.unidadImpactoAmientalTabla)
    }
  }

  iniciarGraficaEspecificaDispercion(){
    //true = pie ; false = barras
    let auxDatos
    let aux={}
    this.outproyect_pie_bar_elementos.forEach(element =>{
      if(element['id'] == this.idProyectoSeleccionadoImagen){
        Object.keys(element.Datos).forEach((impacto) => {
          let auxNombre = this.calculosSegunaSeccion.ajustarNombre(this.impactoSeleccionadoElementoConstructivo)
          if(impacto === auxNombre){
            Object.keys(element.Datos[impacto]).forEach(elementoC => {
              if(elementoC==this.elementoContructivoSelecionado){
                Object.keys(element.Datos[impacto][elementoC]).forEach((material,index) => {
                  aux[material]= element.Datos[impacto][elementoC][material];
                })
              }
            })
          }
        });
      }
    })
    this.asignarColorGraficaDispercion();
    if(this.banderaTipoGraficaDispercion){
      this.containerGraficasDos.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.pieChart);
      const grafica = this.containerGraficasDos.createComponent(componentFactory);
      grafica.instance.inputProyect = aux;
      grafica.instance.showMePartially = this.showVar;
      grafica.instance.indicador = this.selector;
      grafica.instance.id = this.ID;
      grafica.instance.Bandera_resultado=1;
      grafica.instance.unidades = this.potentialTypesList;
      grafica.instance.colorDispercion = this.colorGraficaDispercion;
    }else{
      this.containerGraficasDos.clear();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartSimpleComponent);
      const grafica = this.containerGraficasDos.createComponent(componentFactory);
      grafica.instance.banderaDispercion=true;
      grafica.instance.info=aux;
      grafica.instance.showGr = false;
      grafica.instance.showlastGr = true;
      grafica.instance.colorDispercion = this.colorGraficaDispercion;
    }
  }

  cambioDeTipoGraficaDispercion(bandera){
    this.banderaTipoGraficaDispercion = bandera;
    this.DispercionAP(null,this.idProyectoSeleccionadoImagen);
  }

  //configuración de la sección dispersión del impacto en cimentación
  configurarData($event, IDproyect: number) {
    let auxdatos = $event;
    this.proyectosMostrados_elementos.forEach(element => {
      if (element.idproyecto == IDproyect) {
        element.showcimenta = auxdatos.show;
        element.elemento = auxdatos.etapa;
        if (element.showcimenta) {
          this.childBarSimple.forEach(c => c.CargarDatos(element.elemento, element.ciclo));
        }
      }
    });
  }

  receiveSelectorDos($event) {
    //cordinate with bar graph
    let aux = ' ';
    this.impactoSeleccionadoElementoConstructivoGrafica = $event['selec'];
    if($event['seleccion'] != null){
      if (Array.isArray($event['seleccion'])){
        let sl
        $event['seleccion'].forEach((element,index) => {
          if(index == 0){
            sl=element
          }else{
            sl = sl.concat('',element)
          }
        });
        aux = sl;
      }else{
        aux = $event['seleccion'];
      }
      let auxnombre=this.calculos.ajustarNombre(aux);
      this.nivelesExistententesElementosConstructivos=$event['niveles'][auxnombre];
      this.coloresExistententesElementosConstructivos=$event['color'];
      this.graficabar(aux);
      this.asignarColorGraficaDispercion();
    }else{
      this.graficabar(null);
    }

  }

  asignarColorGraficaDispercion(){
    if(this.impactoSeleccionadoElementoConstructivo!=' '){
      if(this.elementoContructivoSelecionado!=' '){
        this.nivelesExistententesElementosConstructivos.forEach((element,index) => {
          if(element==Number(this.elementoContructivoSelecionado)){
            this.colorGraficaDispercion = this.coloresExistententesElementosConstructivos[index];
          }
        });
      }
    }
  }

  graficabar(item){
    if(Number.isInteger(item)){
      //En caso de oprimir un elemento constructivo 
      if(this.elementoContructivoSelecionado === ' '){
        this.elementoContructivoSelecionado = item.toString();
        if(this.impactoSeleccionadoElementoConstructivo === ' '){
          //Opción sin seleccionar ningún impacto ambiental se selecciona un elemento;
          document.getElementById("texto".concat(item.toString())).className = 'espacio-seleccionado';
          this.iniciaBarrasSeccionDos();
        }else{
          //Opción con un impacto elemento seleccionado y todos los botones prendidos
          Object.keys(this.iconosElementosConstrucivos).forEach(element => {
            if(this.iconosElementosConstrucivos[element]['habilitado'] === false){
              if(element === item.toString()){
                document.getElementById(this.idsIconosElementos[element]['idTEXTO']).className = 'espacio-seleccionado';
              }else{
                document.getElementById(this.idsIconosElementos[element]['idTEXTO']).className = 'espacio-sin-selecciomar';
              }
            }
          })
          //Actualizar grafica para que se ilumen el elemento solo del impacto seleccionado
          this.iniciaBarrasSeccionDos();
          if(this.imgSeleccionadaElemento != ' '){
            this.show_Dispercion = true;
          }
        }
      }else{
        //En caso de tener un elemento constructivo ya seleccionado
        if(item != this.elementoContructivoSelecionado){
          //Cambio de elemento seleccionado
          document.getElementById("texto".concat(this.elementoContructivoSelecionado)).className = 'espacio-sin-selecciomar';
          document.getElementById("texto".concat(item.toString())).className = 'espacio-seleccionado';
          this.elementoContructivoSelecionado = item.toString();
          this.iniciaBarrasSeccionDos();
        }else{
          //quitar la selección del elemento constructivo
          document.getElementById("texto".concat(item.toString())).className = 'espacio-sin-selecciomar';
          this.elementoContructivoSelecionado = ' ';
          this.impactoSeleccionadoElementoConstructivo = ' ';
          this.impactoSeleccionadoElementoConstructivoGrafica = null;
          this.iniciaBarrasSeccionDos();
          if(this.imgSeleccionadaElemento != ' '){
            //Quitar la selección dela imagen seleccionado y que se desactiven las graficas de las potencias de impactos
            document.getElementById(this.imgSeleccionadaElemento).className = 'img-edificio';
            this.imgSeleccionadaElemento = ' ';
            this.show_Dispercion=false;
          }
        }
      }
    }else{
      //cuando se presiona un impacto ambiental
      if(item === null){
        //Se elimina la selección del impacto ambiental
        this.impactoSeleccionadoElementoConstructivo = ' ';
        this.impactoSeleccionadoElementoConstructivoGrafica = null;
        Object.keys(this.iconosElementosConstrucivos).forEach(element => {
          if(this.iconosElementosConstrucivos[element]['habilitado'] === false){
            document.getElementById(this.idsIconosElementos[element]['idTEXTO']).className = 'espacio-sin-selecciomar';
          }
        })
        this.elementoContructivoSelecionado = ' ';
        if(this.imgSeleccionadaElemento != ' '){
          //Quitar la selección dela imagen seleccionado y que se desactiven las graficas de las potencias de impactos
          document.getElementById(this.imgSeleccionadaElemento).className = 'img-edificio';
          this.imgSeleccionadaElemento = ' ';
          this.show_Dispercion=false;
        }
      }else{
        //seleccionar un impacto ambiental
        if(this.impactoSeleccionadoElementoConstructivo === ' '){
          this.impactoSeleccionadoElementoConstructivo = item;
          if(this.elementoContructivoSelecionado === ' '){
            //Opción sin seleccionar ningún elemento constructivo se seleccionan todos los elementos;
            Object.keys(this.iconosElementosConstrucivos).forEach(element => {
              if(this.iconosElementosConstrucivos[element]['habilitado'] === false){
                document.getElementById(this.idsIconosElementos[element]['idTEXTO']).className = 'espacio-seleccionado';
              }
            })
          }else{
            //recetear el impacto constructivo seleccionado
            if(this.imgSeleccionadaElemento != ' '){
              this.show_Dispercion = true;
            }
          }
        }else{
          //cambio de selección en el impacto ambiental
          this.impactoSeleccionadoElementoConstructivo = item;
          if(this.elementoContructivoSelecionado != ' '){
            this.asignarColorGraficaDispercion();
            if(this.imgSeleccionadaElemento != ' '){
              this.show_Dispercion = true;
            }
          }
        }
      }
    }
    if(this.show_Dispercion){
      let elemento = this.sectionList.filter(({id}) => id == Number(this.elementoContructivoSelecionado))
      this.elementoSeleccionadoMostrado = elemento[0]['name_section']
      this.DispercionAP(null,this.idProyectoSeleccionadoImagen);
    }
  }

  AjusteGraficaElementosContructivos(item){
    if(this.elementosContructivosEliminados.includes(item.toString())){
      this.elementosContructivosEliminados.forEach((element,index) => {
        if(element == item.toString()){
          this.elementosContructivosEliminados.splice(index,1)
          document.getElementById("ojo".concat(item.toString())).className = 'button-icono';
          this.iconosElementosConstrucivos[item.toString()]['icono'] = 'visibility';
        }
      })
    }else{
      this.iconosElementosConstrucivos[item.toString()]['icono'] = 'visibility_off';
      document.getElementById("ojo".concat(item.toString())).className = 'button-icono-seleccionado';
      this.elementosContructivosEliminados.push(item.toString());
    }

    this.outproyect_bar_elementos=[];
    this.proyect_active.forEach(element => {
      let analisis = this.getAnalisisBarrasElementosConstructivos(element);
      this.outproyect_bar_elementos.push(analisis);
    })
    this.elementosContructivosEliminados.forEach(value => {
      this.outproyect_bar_elementos.forEach((proyecto, index)=> {
        let indicadores = Object.keys(proyecto.Datos);
        indicadores.forEach(element => {
          delete this.outproyect_bar_elementos[index].Datos[element][value];
        })
      })
    })
    this.iniciaBarrasSeccionDos();
  }

  llenarIdsBotones(elementos){
    elementos.forEach(element => {
      this.idsIconosElementos[element.id.toString()] = {};
      this.idsIconosElementos[element.id.toString()]['idOJO']='ojo'.concat(element.id.toString());
      this.idsIconosElementos[element.id.toString()]['idTEXTO']='texto'.concat(element.id.toString());
    });
    this.cargaElementos = true;
  }

  cambioEstadoTercerSección(cambio){
    Object.keys(this.estadoTercerSeccion).forEach(idP => {
      if(cambio['idProyecto'].toString() === idP){
        if(cambio['cambioEn']==="CicloVida"){
          if(this.cicloVidaSeleccionadoElemento != " "){
            document.getElementById(this.cicloVidaSeleccionadoElemento.concat('TextoElemento')).className = 'button-info';
            this.cicloVidaSeleccionadoElemento=" ";
          }
          this.estadoTercerSeccion[idP]['cicloSeleccionado'] = cambio['cambio'];
        }else if(cambio['cambioEn']==="CambioGrafica"){
          //'flagPie':true,
          //'fragBar':false  
          this.estadoTercerSeccion[idP]['flagPie'] = cambio['cambio'].pie;
          this.estadoTercerSeccion[idP]['fragBar'] = cambio['cambio'].bar;
        }else{
          this.estadoTercerSeccion[idP]['agruparProduccion'] = cambio['cambio'];
        }
      }
    })
  }

}
