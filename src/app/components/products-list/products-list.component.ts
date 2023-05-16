import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/domain/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  data: IProduct[] = [];

  constructor(private _service: ProductsService) {}

  ngOnInit(): void {
    this.data = this._service.getAppProducts();
  }



}
