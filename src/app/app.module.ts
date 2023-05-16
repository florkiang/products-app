import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsPromotionsComponent } from './components/products-promotions/products-promotions.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AddWishComponent } from './components/add-wish/add-wish.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    ProductsListComponent,
    ProductsPromotionsComponent,
    ProductsDetailComponent,
    ProductsAddComponent,
    WishListComponent,
    AddWishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
