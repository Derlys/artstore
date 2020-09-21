import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ProductsApiClient {
  products: Product[];
  current: Subject<Product> = new BehaviorSubject<Product>(null);
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
  elegir(d: Product) {
    this.products.forEach((x) => x.setSelected(false));
    d.setSelected(true);
    this.current.next(d);
  }
  subscribeOnChange(fn) {
    this.current.subscribe(fn);
  }
}
