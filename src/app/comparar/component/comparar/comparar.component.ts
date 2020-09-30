import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-comparar',
  templateUrl: './comparar.component.html',
  styleUrls: ['./comparar.component.scss'],
})
export class CompararComponent implements OnInit {

  bandera:number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){ }

  ngOnInit(): void {  }

  flag(x:number) {
  this.bandera = x;
  }

  grafica(x: number) {
    if (this.bandera == 1) {
        this.router.navigate(['pie'], { relativeTo: this.route });
    } else {
      this.router.navigate(['radial'], { relativeTo: this.route });
    }
  }

}
