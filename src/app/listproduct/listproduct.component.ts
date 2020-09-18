import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsApiClient } from '../models/products-api-client.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss'],
  providers: [ProductsApiClient],
})
export class ListproductComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<Product>;

  constructor(public productsApiClient: ProductsApiClient) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {}

  add(d: Product) {
    this.productsApiClient.add(d);
    this.onItemAdded.emit(d);
  }

  elegido(e: Product): void {
    this.productsApiClient.getAll().forEach((x) => x.setSelected(false));
    {
      e.setSelected(true);
    }
  }
}
