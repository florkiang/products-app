import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/domain/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss']
})
export class ProductsAddComponent {

  productForm = this._builder.group({
    id : [222, Validators.required ],
    title: ['',Validators.minLength(3)],
    unitPrice : [0,Validators.required]
  });

  constructor(private _builder:FormBuilder,
              private _service: ProductsService,
              private _routerService: Router) {}

  addProduct() {
    let product : IProduct = {
      id : this.productForm.value.id!,
      title : this.productForm.value.title!,
      unitPrice : this.productForm.value.unitPrice!
    }
    this._service.addProduct(product );
    this._routerService.navigate(['/products'])
                            }


}
