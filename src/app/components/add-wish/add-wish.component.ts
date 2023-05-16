import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Wish } from 'src/app/domain/wish';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-add-wish',
  templateUrl: './add-wish.component.html',
  styleUrls: ['./add-wish.component.scss']
})
export class AddWishComponent implements OnInit{

  wishForm = this._formBuider.group({
    title:['',Validators.required] ,
    marque:[''],
    lien:[''],
    image:[''],

  })

  constructor(private _wishService: WishlistService,
              private _formBuider: FormBuilder,
              private _routerService: Router) { }

  ngOnInit(): void {
    ;
  }

  addWish(): void {


    let wish : Wish = {
       title : this.wishForm.value.title!,
       marque : this.wishForm.value.marque!,
       lien : this.wishForm.value.lien!,
       image : this.wishForm.value.image!,
    }
     this._wishService.addWish( wish );
     this._routerService.navigate(['/wishes'])

  }

}
