import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe( product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '7689098',
      title: 'artículo nuevo desde ángular',
      image: 'assets/images/camiseta.png',
      price: 30000,
      description: 'Nuevo produto'
    };
    this.productsService.createProduct(newProduct)
    .subscribe( product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 7778889,
      description: 'Edición título'
    };
    this.productsService.updateProduct('7689098', updateProduct)
    .subscribe( product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('7689098')
    .subscribe( rta => {
      console.log(rta);
    });
  }
}
