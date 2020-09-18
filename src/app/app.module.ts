import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { DetailproductComponent } from './detailproduct/detailproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductformComponent } from './productform/productform.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ListproductComponent,
  },
  {
    path: 'product',
    component: DetailproductComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListproductComponent,
    DetailproductComponent,
    ProductformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
