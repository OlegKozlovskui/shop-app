import { NgModule } from '@angular/core';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    ShopComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
  ],
  providers: [],
})
export class ShopModule { }
