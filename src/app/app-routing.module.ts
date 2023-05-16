import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsPromotionsComponent } from './components/products-promotions/products-promotions.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ProductsAddComponent } from './components/products-add/products-add.component';

const routes: Routes = [
  {path: "", redirectTo:"products", pathMatch:'full'},
  {path: "products", component: ProductsListComponent},
  {path: "products/:id", component: ProductsDetailComponent},
  {path: "promotions", component: ProductsPromotionsComponent},
  {path: "addProduct", component: ProductsAddComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
