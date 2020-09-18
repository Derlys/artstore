import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsApiClient {
  products: Product[];
  constructor() {
    this.products = [];
  }
  add(d: Product) {
    this.products.push(d);
  }
  getAll(): Product[] {
    return this.products;
  }
  getById(id: string): Product {
    return this.products.filter((d) => {
      return d.id.toString() === id;
    })[0];
  }
}
