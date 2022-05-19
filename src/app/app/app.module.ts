import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { SalespersonsComponent } from './views/salespersons/salespersons.component';
import { SalesComponent } from './views/sales/sales.component';
import { ProductsComponent } from './views/products/products.component';
import { CustomersComponent } from './views/customers/customers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SalespersonsComponent,
    SalesComponent,
    ProductsComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
