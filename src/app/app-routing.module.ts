import { LazyModule } from './lazy-loading/lazy.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CardComponent } from './components/product-list/card/card.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'new',
    loadChildren:()=> import('./lazy-loading/lazy.module').then(mod=>mod.LazyModule)
  }, 
  {
    path: 'shoppingcart',
    component: CartComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
