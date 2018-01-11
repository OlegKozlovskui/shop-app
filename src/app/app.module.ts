import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './admin/auth/auth.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ShopModule } from './shop/shop.module';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  // { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    AdminModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
