import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { AppState } from '../app.module';
import { Store } from '@ngrx/store';
import {
  ElegidoFavoritoAction,
  NuevoProductAction,
} from './product-state.model';

@Injectable()
export class ProductsApiClient {
  constructor(private store: Store<AppState>) {}
  add(d: Product) {
    this.store.dispatch(new NuevoProductAction(d));
  }

  elegir(d: Product) {
    this.store.dispatch(new ElegidoFavoritoAction(d));
  }
}
