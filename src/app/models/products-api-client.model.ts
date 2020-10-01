import { Product } from './product.model';
import { forwardRef, Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig, AppState } from '../app.module';
import { Store } from '@ngrx/store';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import {
  ElegidoFavoritoAction,
  NuevoProductAction,
} from './product-state.model';

@Injectable()
export class ProductApiClient {
  productos: Product[] = [];

  constructor(
    private store: Store<AppState>,
    @Inject(forwardRef(() => APP_CONFIG)) private config: AppConfig,
    private http: HttpClient
  ) {
    this.store
      .select((state) => state.product)
      .subscribe((data) => {
        console.log('productos sub store');
        console.log(data);
      });
    this.store.subscribe((data) => {
      console.log('all store');
      console.log(data);
    });
  }
  add(d: Product) {
    const headers: HttpHeaders = new HttpHeaders({
      'X-API-TOKEN': 'token- seguridad',
    });
    const req = new HttpRequest(
      'POST',
      this.config.apiEndpoint + '/my',
      { nuevo: d.nombre },
      { headers: headers }
    );
    this.http.request(req).subscribe((data: HttpResponse<{ any }>) => {
      if (data.status === 200) {
        this.store.dispatch(new NuevoProductAction(d));
      }
    });
  }
  getById(id: String): Product {
    return this.productos.filter(function (d) {
      return d.id.toString() === id;
    })[0];
  }

  getAll(): Product[] {
    return this.productos;
  }
  elegir(d: Product) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }
}
