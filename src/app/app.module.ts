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

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    ProductsListComponent,
    ProductsPromotionsComponent,
    ProductsDetailComponent,
    ProductsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
