import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule as NgRxStoreModule, ActionReducerMap } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ListproductComponent } from './components/listproduct/listproduct.component';
import { DetailproductComponent } from './components/detailproduct/detailproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductformComponent } from './components/productform/productform.component';
import {
  ProductState,
  reducerProduct,
  initializeProductState,
  ProductEffects,
} from './models/product-state.model';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logueado/usuario-logueado.guard';
import { AuthService } from './services/auth.service';

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
    path: 'product/:id',
    component: DetailproductComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [UsuarioLogueadoGuard],
  },
];
// redux init
export interface AppState {
  product: ProductState;
}
const reducers: ActionReducerMap<AppState> = {
  product: reducerProduct,
};

const reducersInitialState = {
  product: initializeProductState(),
};
// redux fin init

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListproductComponent,
    DetailproductComponent,
    ProductformComponent,
    LoginComponent,
    ProtectedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgRxStoreModule.forRoot(reducers, { initialState: reducersInitialState }),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [AuthService, UsuarioLogueadoGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
