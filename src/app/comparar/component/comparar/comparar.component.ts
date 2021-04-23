import { Component } from '@angular/core';
import { NgModule, OnInit, Input, ViewChildren, ViewChild, QueryList, ViewContainerRef, ComponentFactoryResolver, ElementRef, ComponentRef} from '@angular/core';
import { element } from 'protractor';
import { BarChartSimpleComponent } from 'src/app/bar-chart-simple/bar-chart-simple.component';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';
import { RadialChartComponent } from 'src/app/radial-chart/radial-chart.component';
import { ProjectsService } from './../../../core/services/projects/projects.service';
import { MaterialsService } from './../../../core/services/materials/materials.service';
import { AnalisisService } from './../../../core/services/analisis/analisis.service';
import { concat, forkJoin, observable } from 'rxjs';
import { Router } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Calculos } from '../../../calculos/calculos'
import { threadId } from 'node:worker_threads';

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
    PieChartComponent
  ]
})
export class CompararComponent implements OnInit {
  barChartComponent = BarChartComponent;
  radialChart = RadialChartComponent;
  pieChart = PieChartComponent;

  @ViewChild('barContainer', { read: ViewContainerRef }) container: ViewContainerRef;
  @ViewChild('barGraphDos', { read: ViewContainerRef }) containerBarGrafica: ViewContainerRef;
  @ViewChild('GraficasEspecificas', {read: ViewContainerRef}) containerGraficas: ViewContainerRef;
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
  click_anterior:'Ninguno';
  labelPosition: 'porcentaje' | 'numero' = 'porcentaje';
  proyectosMostrados_elementos=[{
    idproyecto:0,
    showpie:true,
    showbar:false,
    showciclo:false,
    ciclo:' ',
    showcimenta:false,
    elemento:' '
  }];
  bandera_graph_bar=false;
  botones_elementos_constructivos=[
    { Nombre: 'Cimentación', nivel: 'n1' }, { Nombre: 'Pisos', nivel: 'n2' }, { Nombre: 'Muros Int.', nivel: 'n3' },
    { Nombre: 'Muros ext.', nivel: 'n4' }, { Nombre: 'Ventanas', nivel: 'n5' }, { Nombre: 'Ins Especiales', nivel: 'n6' },
    { Nombre: 'Otros', nivel: 'n7' }, { Nombre: 'Techo cubierta', nivel: 'n8' }, { Nombre: 'Entrepiso', nivel: 'n9' },
    { Nombre: 'Estructura', nivel: 'n10' }, { Nombre: 'Puertas', nivel: 'n11' }];
  impacto_seleccionado=' ';
  serie_Seleccionada:string;
  bandera_serie_Seleccionada:boolean=false;
  resultdosGraficos:boolean=true;
  resultdosTabla: boolean = false;
  DatosTabla=[];
  classBotones ='boton-principal';
  fasesEliminadas = [];


  // vars analisis
  idProyectoActivo: number;
  botones_grafica_activos: boolean =false;
  columnsToDisplay = []

  constructor(
    private materials: MaterialsService,
    private projects: ProjectsService,
    private analisis: AnalisisService,
    private router: Router,
    private calculos:Calculos,
    private componentFactoryResolver: ComponentFactoryResolver
    ){
    forkJoin([
      this.analisis.getTypeEnergy(),
      this.projects.getProjects(),
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
      this.analisis.getSectionsList()
    ])
    .subscribe(([
    ]) => {
      this.idProyectoActivo = parseInt(sessionStorage.getItem('projectID'));
      this.columnsToDisplay = this.calculos.ImpactosSeleccionados();
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
    if (this.resultdosGraficos){
      if(this.fasesEliminadas.includes(fase)){
        this.fasesEliminadas.forEach((element,index) => {
          if(element == fase){
            this.fasesEliminadas.splice(index,1)
          }
        })
      }else{
        this.fasesEliminadas.push(fase);
      }

      this.proyect_active.forEach(element => {
        this.outproyect_bar=[];
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
      this.iniciaBarras();
    }
  }

  //agregar proyecto a graficas

  iniciar_graficas(id:number){
    // return;
    if (this.proyect_active.some((item) => item == id) ) {
      return;
    }
    this.proyect_active.push(id);

    let analisis = this.getAnalisisBarras(id);
    //let analisisRad = this.getAnalisisRadial(id);
    //let analisisPie = this.getAnalisisPie(id);

    this.proyect.forEach((proyecto,index) => {
      if(proyecto.id==id && proyecto.id != this.idProyectoActivo){
        this.proyect[index].card = true;
        this.proyect[index].num = this.proyect_active.length;
        this.proyect[index].num_epic=this.calculos.materiales_EPIC;
        this.proyect[index].num_epd = this.calculos.materiales_EPD;
      }
    });

    this.outproyect_bar.push(analisis);
    //this.outproyect_radar.push(analisisRad);
    //this.outproyect_pie.push(analisisPie);
    // this.childBar.forEach(c => c.agregarProyecto(this.outproyect_bar));
    if(this.resultdosTabla){
      this.TablaResultados();
    }else{
      this.iniciaBarras();
    }
    this.containerGraficas.clear();
    this.banderaGrapg == 0;
    //this.iniciaBarrasSeccionDos();
    this.proyectosMostrados_elementos = [...this.proyectosMostrados_elementos, {
      idproyecto: id,
      showpie: true,
      showbar: false,
      showciclo: false,
      ciclo: ' ',
      showcimenta: false,
      elemento: ' '
    }];
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
      grafica.instance.lastClickEvent.subscribe(e => this.receiveSelector(e));
    }
  }

  //creación de gráfica de barras para la sección de impactos ambientales por
  //elementos onstructivos
  iniciaBarrasSeccionDos(){
    this.containerBarGrafica.clear();
    /*const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.barChartComponent);
    const grafica = this.containerBarGrafica.createComponent(componentFactory);
    grafica.instance.inputProyects = this.proyect_active;
    grafica.instance.showMe = false;
    grafica.instance.Bandera_bar = this.bandera_graph_bar;
    grafica.instance.porcentaje=true;*/
  }

  iniciaRadiales(){
    this.containerGraficas.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.radialChart);
    const grafica = this.containerGraficas.createComponent(componentFactory);
    grafica.instance.inputProyect = this.outproyect_radar;
    grafica.instance.showMe = this.showVar_1;
    grafica.instance.id = this.ID;
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
  }

  getAnalisisBarras(idProyecto){

    //Creación de espacio para guardar los datos del proyecto
    let analisisProyectos : Record<string,any> = {
      Nombre: this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    //Datos[impacto][fase]
    let auxDatos = this.calculos.OperacionesDeFase(idProyecto)
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
    //console.log(analisisProyectos)
    return analisisProyectos;
  }

  getAnalisisRadial(idProyecto){
    let analisisProyectos : Record<string,any> = {
      Nombre: this.calculos.projectsList.filter( p => p['id'] == idProyecto)[0]['name_project'],
      id: idProyecto,
      Datos: {}
    };

    //Datos[Fase][impacto]
    let auxDatos = this.calculos.OperacionesDeFase(idProyecto)
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
    //Datos[impacto][fase][subetapa]
    let auxDatos = this.calculos.OperacionesDeFase(idProyecto)
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

    console.log(analisisProyectos)
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
    let aux_color = ['#4DBE89', '#148A93', '#8F5091','#DEA961']
    //se prepara la información por filas
    let aux=[]
    auxL.forEach((ciclo,index) => {
      let auxdata = {}
      let auximpactos =[]
      this.outproyect_bar.forEach((element)=>{
        Object.keys(element.Datos).forEach(impacto => {
          if(!auximpactos.includes(impacto)){
            auximpactos.push(impacto)
            auxdata[impacto] = (element.Datos[impacto][ciclo]).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }else{
            let last = auxdata[impacto].toString()
            auxdata[impacto] = last.concat('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0')
            auxdata[impacto] = auxdata[impacto].concat((element.Datos[impacto][ciclo]).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
          }
        });
      })
      aux=[...aux, {data:auxdata,
                    color: aux_color[index]}];
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
    }
    this.ResetTabs($event);
  }

  analisisSeccionDos(){
    //Calculos y obtención de datos para crear correctamente las gráficas de barras
  }

  //Se cargan los proyetcos existentes y se configura el menu
  menu_inicio(){
    this.calculos.projectsList.forEach(proyecto => {
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
          card: false,
          num:0,
          num_epic: 0,
          num_epd:0
        }];
    })

    this.iniciar_graficas(this.idProyectoActivo);
  }

  //activar gráfica de porcentaje
  porcentaje(val:boolean,val2:number){
    if ( val == this.bandera_porcentaje ){ return; }

    this.bandera_porcentaje = val;
    this.iniciaBarras();
    this.containerGraficas.clear();
    return;
  }

  //quitar proyecto a las gráficas
  quitarProyecto(ID:number){
    this.proyect.forEach((proyecto, index) => {
      if (proyecto.id == ID) {
        this.proyect[index].card = false;
        this.proyect[index].num = 0;
      }
    });
    this.proyect_active = this.proyect_active.filter(item => item != ID);
    this.proyect_active.forEach((element,index) =>{
      this.proyect.forEach(pr =>{
        if(pr.id == element.id){
          this.proyect[index].num = index+1;
        }
      })
    })
    this.proyectosMostrados_elementos = this.proyectosMostrados_elementos.filter(({ idproyecto }) => idproyecto != ID);
    this.outproyect_bar = this.outproyect_bar.filter(({id}) => id != ID);
    this.outproyect_radar = this.outproyect_radar.filter(({ id }) => id != ID);
    this.outproyect_pie = this.outproyect_pie.filter(({ id }) => id != ID);

    if (this.resultdosTabla) {
      this.TablaResultados();
    } else {
      this.iniciaBarras();
    }
    this.iniciaRadiales();
    this.iniciaPie();

    //this.porcentaje(this.bandera_porcentaje, 2);
  }

  //interacción con la gráfca de bar
  receiveSelector($event) {
    //cordinate with bar graph
    this.showVar_1 = false;
    this.showVar = false;
    if (Array.isArray($event)){
      let sl
      $event.forEach((element,index) => {
        if(index == 0){
          sl=element
        }else{
          sl = sl.concat(' ',element)
        }
      });
      this.selector = sl;
    }else{
      this.selector = $event;
    }

    if ($event==null){
      this.bandera = 0;
      this.hover = true;
    }else{
      this.bandera=1;
      this.hover = false;
      this.ID = ' ';
    }

    this.containerGraficas.clear();
  }

  receiveSelect($event){
    this.click_anterior=$event.label;
    this.seleccion_columna=$event;
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
          //this.childBar.forEach(c => c.resetColores());
        }
        this.banderaGrapg=0;
        this.ID = ' ';
        this.containerGraficas.clear();
        //this.iniciaBarras();
      }else{
        this.ID = x;
        if (this.bandera == 1) {
          this.showVar = true;
          this.showVar_1 =false;
          //this.bandera_serie_Seleccionada = false;
          this.iniciaPie();
        } else {
          this.showVar_1 = true;
          this.showVar=false;
          this.hover=false;
          //this.bandera_serie_Seleccionada = true;
          this.serie_Seleccionada=x;
          this.iniciaRadiales();
          //this.iniciaBarras();
        }
      }
      if (this.ID != ' ') {
        let boton = document.getElementById(this.ID);
        boton.className = 'boton-select'
      }
    }
  }

  //despliegue gráfica de pie para sección de resultados
  grafica_pie_elementos(indicador:string){
    this.bandera_resultado = 1;
    this.indicador_elegido = true;
    this.indicador_impacto=indicador;
    this.childPie.forEach(c => c.cambioIndicadorElementos(' ',indicador, this.bandera_resultado));
  }

  //resetear secciones
  ResetTabs(value:number){
    if(value==2){
      this.bandera_resultado=1;
      this.showVar=false;
      this.show_elementos=false;
      this.ID ='Producción';
      this.receiveSelector(null);
    }else if(value==0){
      this.indicador_elegido =false;
      this.show_elementos = true;
      this.proyectosMostrados_elementos.forEach(element=>{
        element.showpie= true;
        element.showbar= false;
        element.showciclo= false;
        element.ciclo= ' ';
        element.showcimenta= false;
        element.elemento= ' ';
      });
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

  DispercionAP(){
    this.show_Dispercion=true;
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
  graficabar(item:string,n:string){
    if (this.impacto_seleccionado===item){
      this.impacto_seleccionado=' ';
      this.childBar.forEach(c => c.resetColores());
    }else{
      this.impacto_seleccionado=item;
      this.childBar.forEach(c => c.focusSeries(n));
    }
  }

}
