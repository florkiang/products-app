import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Wish } from '../domain/wish';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private dbPath = '/WishList';
  wishesRef: AngularFirestoreCollection<Wish>;

  constructor(private _db: AngularFirestore) {
    this.wishesRef = _db.collection(this.dbPath);
  }

  getAllWishes(): AngularFirestoreCollection<Wish> {
    return this.wishesRef;
  }

  addWish(wish: Wish): any {
    return this.wishesRef.add({ ...wish });
  }


}
