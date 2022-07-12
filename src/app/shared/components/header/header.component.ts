import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;

  constructor(private cartService: CartService, private router: Router) {
    this.total$ = this.cartService.cart$.pipe(
      map((products) => products.length)
    );
  }

  ngOnInit(): void {}

  goToHome() {
    this.router.navigateByUrl('/');
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  goToProjects() {
    this.router.navigateByUrl('/');
  }

  goToUserManual() {
    this.router.navigateByUrl('/user-manual');
  }
}
