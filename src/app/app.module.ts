import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
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
import { CamisetasComponent } from './components/recuerdos/camisetas/camisetas.component';
import { CamisetasMainComponent } from './components/recuerdos/camisetas-main/camisetas-main.component';
import { CamisetasMasInfoComponent } from './components/recuerdos/camisetas-mas-info/camisetas-mas-info.component';
import { CamisetasDetailComponent } from './components/recuerdos/camisetas-detail/camisetas-detail.component';
import { CommentsModule } from './comments/comments.module';

// app config
export interface AppConfig {
  apiEndpoint: String;
}
const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'http://localhost:3000',
};
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
//fin  app config

export const childrenRoutesRecuerdos: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },

  {
    path: 'main',
    component: CamisetasMainComponent,
  },
  {
    path: 'mas-info',
    component: CamisetasMasInfoComponent,
  },
  {
    path: ':id',
    component: CamisetasDetailComponent,
  },
];
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
  {
    path: 'recuerdos',
    component: CamisetasComponent,
    canActivate: [UsuarioLogueadoGuard],
    children: childrenRoutesRecuerdos,
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
    CamisetasComponent,
    CamisetasMainComponent,
    CamisetasMasInfoComponent,
    CamisetasDetailComponent,
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
    CommentsModule,
  ],
  providers: [
    AuthService,
    UsuarioLogueadoGuard,
    {
      provide: APP_CONFIG,
      useValue: APP_CONFIG_VALUE,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
