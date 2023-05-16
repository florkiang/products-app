import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Wish } from 'src/app/domain/wish';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  wishes?: Wish[];

constructor(private _wishService: WishlistService){}

  ngOnInit(): void {
    this.retrieveWishes();
  }

  retrieveWishes(): void {
    this._wishService.getAllWishes().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.wishes = data;
    });
  }
}
