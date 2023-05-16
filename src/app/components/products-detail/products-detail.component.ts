import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/domain/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})
export class ProductsDetailComponent implements OnInit {
  product!: IProduct;

  constructor(
    private _activated_route: ActivatedRoute,
    private _service: ProductsService,
    private _cartSrervice: CartService
  ) {}

  ngOnInit(): void {
    // let id: number = Number(this._activated_route.snapshot.paramMap.get('id'));

    this._activated_route.paramMap.subscribe({
      next: (param) => {
        let id = Number(param.get('id'));
        this.product = this._service.getProductById(id);
      },
      error: (err) => console.log("ATTENTION, erreur lors de l'invocation du service" +err),
    });
  }

  addProductToCart() {
    this._cartSrervice.addProductToCart();
  }
}
