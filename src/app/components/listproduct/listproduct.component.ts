import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductApiClient } from '../../models/products-api-client.model';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.module';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss'],
  providers: [ProductApiClient],
})
export class ListproductComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Product>;
  updates: string[];
  all;

  constructor(
    public productsApiClient: ProductApiClient,
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
    this.all = store
      .select((state) => state.product.items)
      .subscribe((items) => (this.all = items));
  }

  ngOnInit(): void {}

  add(d: Product) {
    this.productsApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: Product): void {
    this.productsApiClient.elegir(e);
    {
      e.setSelected(true);
    }
  }
  getAll() {}
}
