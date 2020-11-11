import { Component, OnInit, Input, ViewChildren, QueryList} from '@angular/core';
import { element } from 'protractor';
import { BarChartComponent } from 'src/app/bar-chart/bar-chart.component';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
})
export class CompararComponent implements OnInit {

  @Input('Inproyectos') inputproyect: any;
  @Input('Inporcentaje') Porcentaje: any;
  @ViewChildren(BarChartComponent)
  childGames: QueryList<BarChartComponent>;
  selector: string;
  bandera:number;
  showVar: boolean = false;
  showVar_1: boolean = false;
  ID:number;
  proyecto:string;
  proyect=[];
  proyect_active=[];
  outproyect_bar=[];


  constructor(){ }

  ngOnInit(): void {
    this.proyecto="Hospital infantil Lomas Altas";
    this.menu_inicio();
  }

  //Se cargan los proyetcos existentes y se configura el menu
  menu_inicio(){
    this.inputproyect.forEach(proyecto => {
      this.proyect = [...this.proyect,
        {
          Nombre: proyecto.Nombre,
          id: proyecto.id,
          card:false
        }]
    });
    this.proyect_active.push(0);
    //carga de datos inicial en graficas
    this.outproyect_bar.push(this.inputproyect[0]);
  }

  //agregar proyecto a graficas
  iniciar_graficas(id:number){
    if (!this.proyect_active.some((item) => item == id)) {
      this.proyect_active.push(id);
      this.outproyect_bar.push(this.inputproyect[id]);
      this.proyect.forEach((proyecto,index) => {
        if(proyecto.id==id){
          this.proyect[index].card = true;
        }
      });
      this.childGames.forEach(c => c.agregarProyecto(this.outproyect_bar));
    }
  }
  //quitar proyecto a las gráficas
  quitarProyecto(ID:number){
    this.proyect.forEach((proyecto, index) => {
      if (proyecto.id == ID) {
        this.proyect[index].card = false;
      }
    });
    this.proyect_active = this.proyect_active.filter(item => item != ID);
    this.outproyect_bar = this.outproyect_bar.filter(({id}) => id != ID);
    console.log(this.outproyect_bar);
    this.childGames.forEach(c => c.agregarProyecto(this.outproyect_bar));
  }

  receiveSelector($event) {
    //cordinate with bar graph
    this.selector = $event;
    if (this.selector==null){
      this.bandera = 0;
    }else{
      this.bandera=1;
    }
  }

  grafica(x: number) {
    //activate graph selectioned
    this.ID = x;
    if (this.bandera == 1) {
      this.showVar = !this.showVar;
      this.showVar_1 =false;
    } else {
      this.showVar_1 = !this.showVar_1;
      this.showVar=false;
    }
  }

}
