import { BrowserModule } from '@angular/platform-browser';
import {
  APP_INITIALIZER,
  InjectionToken,
  NgModule,
  Injectable,
} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  StoreModule as NgRxStoreModule,
  ActionReducerMap,
  Store,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';

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
  InitMyDataAction,
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
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app config
export interface AppConfig {
  apiEndpoint: String;
}
const APP_CONFIG_VALUE: AppConfig = {
  apiEndpoint: 'http://localhost:3000',
};
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
//fin  app config

// routing
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
// fin routing
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

// app init
export function init_app(appLoadService: AppLoadService): () => Promise<any> {
  return () => appLoadService.initializeProductState();
}
@Injectable()
class AppLoadService {
  constructor(private store: Store<AppState>, private http: HttpClient) {}
  async initializeProductState(): Promise<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'token-seguridad',
    });
    const req = new HttpRequest('GET', APP_CONFIG_VALUE.apiEndpoint + '/my', {
      headers: headers,
    });
    const response: any = await this.http.request(req).toPromise();
    this.store.dispatch(new InitMyDataAction(response.body));
  }
}

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
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken:
        'pk.eyJ1IjoiZGVybHlzIiwiYSI6ImNrZnlpOWVvcjAydDcyc28xYnp3MWlhNXgifQ.dm2hkZ6WjGBW7hNA5RnA4g', // Optional, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken:
        'pk.eyJ1IjoiZGVybHlzIiwiYSI6ImNrZnlpOWVvcjAydDcyc28xYnp3MWlhNXgifQ.dm2hkZ6WjGBW7hNA5RnA4g', // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    UsuarioLogueadoGuard,
    {
      provide: APP_CONFIG,
      useValue: APP_CONFIG_VALUE,
    },
    AppLoadService,
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [AppLoadService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
