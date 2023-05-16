import { Injectable } from '@angular/core';
import { IProduct } from '../domain/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  data : IProduct[] = [
    {id: 10, title: 'Clavier Sans fil', unitPrice: 40.5 },
    {id: 20, title: 'Disque externe SSD 1To', unitPrice: 100 },
    {id: 30, title: 'Ecran LED 22 pouces ', unitPrice: 320 },
    {id: 40, title: 'Souris Optique ergonomique', unitPrice: 190.5 }
  ];

  constructor() { }

  getAppProducts(): IProduct[] {
    return this.data;
  }
  getProductById(id: number): IProduct {
    let result =  this.data.find( p => p.id == id);
    return result!;
  }

  addProduct(product : IProduct){
    this.data.push();
  }
}
