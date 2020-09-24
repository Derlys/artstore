import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsApiClient } from '../models/products-api-client.model';
import { Product } from '../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import {
  ElegidoFavoritoAction,
  NuevoProductAction,
} from '../models/product-state.model';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss'],
  providers: [ProductsApiClient],
})
export class ListproductComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Product>;
  updates: string[];

  constructor(
    public productsApiClient: ProductsApiClient,
    private store: Store<AppState>
  ) {
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.store
      .select((state) => state.product.favorito)
      .subscribe((d) => {
        if (d != null) {
          this.updates.push('se ha elegido a' + d.nombre);
        }
      });
  }

  ngOnInit(): void {}

  add(d: Product) {
    this.productsApiClient.add(d);
    this.onItemAdded.emit(d);
    this.store.dispatch(new NuevoProductAction(d));
  }

  elegido(e: Product): void {
    this.productsApiClient.elegir(e);
    this.store.dispatch(new ElegidoFavoritoAction(e));
    {
      e.setSelected(true);
    }
  }
}
