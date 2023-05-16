import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsPromotionsComponent } from './components/products-promotions/products-promotions.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { AddWishComponent } from './components/add-wish/add-wish.component';

const routes: Routes = [
  {path: "", redirectTo:"products", pathMatch:'full'},
  {path: "products", component: ProductsListComponent},
  {path: "products/:id", component: ProductsDetailComponent},
  {path: "promotions", component: ProductsPromotionsComponent},
  {path: "addProduct", component: ProductsAddComponent},
  {path: "wishes", component: WishListComponent},
  {path: "addWish", component: AddWishComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
