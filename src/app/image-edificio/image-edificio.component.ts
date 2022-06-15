import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-edificio',
  templateUrl: './image-edificio.component.html',
  styleUrls: ['./image-edificio.component.scss']
})
export class ImageEdificioComponent implements OnInit {

  constructor() { }
  @ViewChild('canvasTecho') public canvasTecho!: ElementRef;
  @ViewChild('canvasEntrepiso') public canvasEntrepiso!: ElementRef;
  @ViewChild('canvasCimentacion') public canvasCimentacion!: ElementRef;
  @ViewChild('canvasEstructura') public canvasEstructura!: ElementRef;
  @ViewChild('canvasLosas') public canvasLosas!: ElementRef;
  @ViewChild('canvasMurosExteriores') public canvasMurosExteriores!: ElementRef;
  @ViewChild('canvasMurosInteriores') public canvasMurosInteriores!: ElementRef;
  @ViewChild('canvasPiso') public canvasPiso!: ElementRef;
  @ViewChild('canvasPuertas') public canvasPuertas!: ElementRef;
  @ViewChild('canvasVentanas') public canvasVentanas!: ElementRef;
  @Input() idP:any;
  @Input() idImg:any;
  @Input() inputPtoyect: any;
  @Input() elementoSeleccionado : String;
  @Input() impactoSeleccionado : String;
  @Input() niveles:any;
  @Input() nivelesProyect:any;
  @Output() seleccion= new EventEmitter<any>();
  nivelesLocal = [];

  elementosList = {
    1:'Cimentacion',
    2:'MurosExteriores',
    3:'MurosInteriores',
    4:'Piso',
    5:'Techo',
    6:'Entrepiso',
    7:'Estructura',
    8:'Puertas',
    9:'Ventanas',
    10:'Losas',
  }

  canvasw=300;
  canvash=205;
  elementoCambio = "";
  canvas1: any;
  canvas2: any;
  canvas3: any;
  canvas4: any;
  canvas5: any;
  canvas6: any;
  canvas7: any;
  canvas8: any;
  canvas9: any;
  canvas10: any;
  canvas:{}

  ctx1!: CanvasRenderingContext2D;
  ctx2!: CanvasRenderingContext2D;
  ctx3!: CanvasRenderingContext2D;
  ctx4!: CanvasRenderingContext2D;
  ctx5!: CanvasRenderingContext2D;
  ctx6!: CanvasRenderingContext2D;
  ctx7!: CanvasRenderingContext2D;
  ctx8!: CanvasRenderingContext2D;
  ctx9!: CanvasRenderingContext2D;
  ctx10!: CanvasRenderingContext2D;

  imageObj5 = new Image();
  imageName5 = "../assets/images/elementos-individuales/5_solo.png"
  imageObj6 = new Image();
  imageName6 = "../assets/images/elementos-individuales/6_solo.png";
  imageObj1 = new Image();
  imageName1 = "../assets/images/elementos-individuales/1_solo.png";
  imageObj7= new Image();
  imageName7= "../assets/images/elementos-individuales/7_solo.png";
  imageObj10= new Image();
  imageName10= "../assets/images/elementos-individuales/10_solo.png";
  imageObj2= new Image();
  imageName2= "../assets/images/elementos-individuales/2_solo.png";
  imageObj3= new Image();
  imageName3= "../assets/images/elementos-individuales/3_solo.png";
  imageObj4= new Image();
  imageName4= "../assets/images/elementos-individuales/4_solo.png";
  imageObj8= new Image();
  imageName8= "../assets/images/elementos-individuales/8_solo.png";
  imageObj9= new Image();
  imageName9= "../assets/images/elementos-individuales/9_solo.png";

  ngAfterViewInit(){
    if(this.impactoSeleccionado != null){
      let auximpacto = this.impactoSeleccionado['index'];
      this.nivelesLocal = this.nivelesProyect[auximpacto.toString()];
    }
    this.canvas5 = this.canvasTecho.nativeElement;
    this.ctx5 = this.canvas5.getContext('2d');

    this.canvas5.width = this.canvasw;
    this.canvas5.height = this.canvash;

    this.imageObj5.src = this.imageName5;
    //Entrespiso
    this.canvas6 = this.canvasEntrepiso.nativeElement;
    this.ctx6 = this.canvas6.getContext('2d');

    this.canvas6.width = this.canvasw;
    this.canvas6.height = this.canvash;

    this.imageObj6.src = this.imageName6;

    //cimentación
    this.canvas1 = this.canvasCimentacion.nativeElement;
    this.ctx1 = this.canvas1.getContext('2d');

    this.canvas1.width = this.canvasw;
    this.canvas1.height = this.canvash;

    this.imageObj1.src = this.imageName1;
    //Estructura
    this.canvas7 = this.canvasEstructura.nativeElement;
    this.ctx7 = this.canvas7.getContext('2d');

    this.canvas7.width = this.canvasw;
    this.canvas7.height = this.canvash;

    this.imageObj7.src = this.imageName7;
    //Losas
    this.canvas10 = this.canvasLosas.nativeElement;
    this.ctx10 = this.canvas10.getContext('2d');

    this.canvas10.width = this.canvasw;
    this.canvas10.height = this.canvash;

    this.imageObj10.src = this.imageName10;
    //Muros Ext
    this.canvas2 = this.canvasMurosExteriores.nativeElement;
    this.ctx2 = this.canvas2.getContext('2d');

    this.canvas2.width = this.canvasw;
    this.canvas2.height = this.canvash;

    this.imageObj2.src = this.imageName2;
    //Muros Int
    this.canvas3 = this.canvasMurosInteriores.nativeElement;
    this.ctx3 = this.canvas3.getContext('2d');

    this.canvas3.width = this.canvasw;
    this.canvas3.height = this.canvash;

    this.imageObj3.src = this.imageName3;
    //Piso
    this.canvas4 = this.canvasPiso.nativeElement;
    this.ctx4 = this.canvas4.getContext('2d');

    this.canvas4.width = this.canvasw;
    this.canvas4.height = this.canvash;

    this.imageObj4.src = this.imageName4;
    //Puertas
    this.canvas8 = this.canvasPuertas.nativeElement;
    this.ctx8 = this.canvas8.getContext('2d');

    this.canvas8.width = this.canvasw;
    this.canvas8.height = this.canvash;

    this.imageObj8.src = this.imageName8;
    //Ventanas
    this.canvas9 = this.canvasVentanas.nativeElement;
    this.ctx9 = this.canvas9.getContext('2d');

    this.canvas9.width = this.canvasw;
    this.canvas9.height = this.canvash;

    this.imageObj9.src = this.imageName9;

    setTimeout(() => 
          this.funcionRealizar(),500
    )
  }

  ngOnInit(): void {
    
  }

  draw(){
    //Techo
    this.ctx5.clearRect(0, 0, this.canvas5.width, this.canvas5.height);
    this.ctx5.drawImage(this.imageObj5, 0,0, this.canvas5.width, this.canvas5.height);
    //Entrepiso
    this.ctx6.clearRect(0, 0, this.canvas6.width, this.canvas6.height);
    this.ctx6.drawImage(this.imageObj6, 0, 0, this.canvas6.width, this.canvas6.height);
    //cimentación
    this.ctx1.clearRect(0, 0, this.canvas1.width, this.canvas1.height);
    this.ctx1.drawImage(this.imageObj1, 0, 0, this.canvas1.width, this.canvas1.height);
    //Estructura
    this.ctx7.clearRect(0, 0, this.canvas7.width, this.canvas7.height);
    this.ctx7.drawImage(this.imageObj7, 0,0, this.canvas7.width, this.canvas7.height);
    //Losas
    this.ctx10.clearRect(0, 0, this.canvas10.width, this.canvas10.height);
    this.ctx10.drawImage(this.imageObj10, 0,0, this.canvas10.width, this.canvas10.height);
    //Muros Ext
    this.ctx2.clearRect(0, 0, this.canvas2.width, this.canvas2.height);
    this.ctx2.drawImage(this.imageObj2, 0,0, this.canvas2.width, this.canvas2.height);
    //Muros Int
    this.ctx3.clearRect(0, 0, this.canvas3.width, this.canvas3.height);
    this.ctx3.drawImage(this.imageObj3, 0,0, this.canvas3.width, this.canvas3.height);
    //Piso
    this.ctx4.clearRect(0, 0, this.canvas4.width, this.canvas4.height);
    this.ctx4.drawImage(this.imageObj4, 0,0, this.canvas4.width, this.canvas4.height);
    //Puertas
    this.ctx8.clearRect(0, 0, this.canvas8.width, this.canvas8.height);
    this.ctx8.drawImage(this.imageObj8, 0,0, this.canvas8.width, this.canvas8.height);
    //Ventanas
    this.ctx9.clearRect(0, 0, this.canvas9.width, this.canvas9.height);
    this.ctx9.drawImage(this.imageObj9, 0,0, this.canvas9.width, this.canvas9.height);
  }

  funcionRealizar(){
    this.draw();
    this.edificioSinSeleccion();
    if(this.elementoSeleccionado!=" " && this.impactoSeleccionado != null){
      let colorResaltado = ""
      this.nivelesLocal.forEach((nivel,index) =>{
        if(nivel == Number(this.elementoSeleccionado)){
          colorResaltado = this.inputPtoyect[index]
        }
      })
      this.edificioUnElemento(colorResaltado);
    }else if(this.elementoSeleccionado!=" " && this.impactoSeleccionado === null){
      this.edificioUnElemento("#17202A");
    }else if(this.elementoSeleccionado===" " && this.impactoSeleccionado != null){
      this.edificioVariosElementos();
    }
  }

  //Poner elementos del edificio sin colores resaltados por selección
  edificioSinSeleccion(){
    this.ajusteColorTecho("#B3B6B7");
    this.ajusteColorEntrepiso("#B3B6B7");
    this.ajusteColorCimentación("#B3B6B7");
    this.ajusteColorEstructura("#B3B6B7");
    this.ajusteColorLosas("#FFFFFF")
    this.ajusteColorMurosExt("#FFFFFF");
    this.ajusteColorMurosInt("#FFFFFF");
    this.ajusteColorPiso("#FFFFFF");
    this.ajusteColorPuertas("#B3B6B7");
    this.ajusteColorVentanas("#B3B6B7");
  }

  //Resaltar solo un elemento seleccionado.
  edificioUnElemento(coloraResaltar){
    if(Number(this.elementoSeleccionado) == 1){
      this.ajusteColorCimentación(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 2){
      this.ajusteColorMurosExt(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 3){
      this.ajusteColorMurosInt(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 4){
      this.ajusteColorPiso(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 5){
      this.ajusteColorTecho(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 6){
      this.ajusteColorEntrepiso(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 7){
      this.ajusteColorEstructura(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 8){
      this.ajusteColorPuertas(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 9){
      this.ajusteColorVentanas(coloraResaltar);
    }else if(Number(this.elementoSeleccionado) == 10){
      this.ajusteColorLosas(coloraResaltar)
    }
  }

  //Resaltar todos los elementos del proyecto con sus colores respecto al impacto ambiental
  edificioVariosElementos(){
    let data = {}
    Object.keys(this.elementosList).forEach(element =>{
      data[element] ={
        'color' : '',
        'flag' : false
      }
    })
    this.nivelesLocal.forEach((nivel,index) =>{
      if(nivel<=10){
        data[nivel]['flag'] = true;
        data[nivel]['color'] = this.inputPtoyect[index];
      }
    });

    if(data[1]['flag']){
      this.ajusteColorCimentación(data[1]['color']);
    }
    if(data[2]['flag']){
      this.ajusteColorMurosExt(data[2]['color']);
    }
    if(data[3]['flag']){
      this.ajusteColorMurosInt(data[3]['color']);
    }
    if(data[4]['flag']){
      this.ajusteColorPiso(data[4]['color']);
    }
    if(data[5]['flag']){
      this.ajusteColorTecho(data[5]['color']);
    }
    if(data[6]['flag']){
      this.ajusteColorEntrepiso(data[6]['color']);
    }
    if(data[7]['flag']){
      this.ajusteColorEstructura(data[7]['color']);
    }
    if(data[8]['flag']){
      this.ajusteColorPuertas(data[8]['color']);
    }
    if(data[9]['flag']){
      this.ajusteColorVentanas(data[9]['color']);
    }
    if(data[10]['flag']){
      this.ajusteColorLosas(data[10]['color']);
    }
  }

  //Ajustes de colores 
  ajusteColorTecho(color){
    this.ctx5.globalCompositeOperation = "source-in";
    this.ctx5.fillStyle = color;
    this.ctx5.fillRect(50, 0, this.canvas5.width, this.canvas5.height);
  }

  ajusteColorEntrepiso(color){
    this.ctx6.globalCompositeOperation = "source-in";
    this.ctx6.fillStyle = color;
    this.ctx6.fillRect(50, 0, this.canvas6.width, this.canvas6.height);
  }

  ajusteColorCimentación(color){
    this.ctx1.globalCompositeOperation = "source-in";
    this.ctx1.fillStyle = color;
    this.ctx1.fillRect(50, 0, this.canvas1.width, this.canvas1.height);
  }

  ajusteColorEstructura(color){
    this.ctx7.globalCompositeOperation = "source-in";
    this.ctx7.fillStyle = color;
    this.ctx7.fillRect(50, 0, this.canvas7.width, this.canvas7.height);
  }

  ajusteColorLosas(color){
    this.ctx10.globalCompositeOperation = "source-in";
    this.ctx10.fillStyle = color;
    this.ctx10.fillRect(50, 0, this.canvas10.width, this.canvas10.height);
  }

  ajusteColorMurosExt(color){
    this.ctx2.globalCompositeOperation = "source-in";
    this.ctx2.fillStyle = color;
    this.ctx2.fillRect(50, 0, this.canvas2.width, this.canvas2.height);
  }

  ajusteColorMurosInt(color){
    this.ctx3.globalCompositeOperation = "source-in";
    this.ctx3.fillStyle = color;
    this.ctx3.fillRect(50, 0, this.canvas3.width, this.canvas3.height);
  }

  ajusteColorPiso(color){
    this.ctx4.globalCompositeOperation = "source-in";
    this.ctx4.fillStyle = color;
    this.ctx4.fillRect(50, 0, this.canvas4.width, this.canvas4.height);
  }

  ajusteColorPuertas(color){
    this.ctx8.globalCompositeOperation = "source-in";
    this.ctx8.fillStyle = color;
    this.ctx8.fillRect(50, 0, this.canvas8.width, this.canvas8.height);
  }

  ajusteColorVentanas(color){
    this.ctx9.globalCompositeOperation = "source-in";
    this.ctx9.fillStyle = color;
    this.ctx9.fillRect(50, 0, this.canvas9.width, this.canvas9.height);
  }

  seleccionIMG(){
    let aux = [this.idImg,this.idP];
    this.seleccion.emit(aux);
  }

}
