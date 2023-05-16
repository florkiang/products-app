import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.scss']
})
export class NabvarComponent  implements OnInit{

  length: number = 0;
  constructor(private _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.countObservable.subscribe({
      next: l => this.length = l,
      error: err => console.log("ATTENTION, erreur : "+err)
    });
  }
}
