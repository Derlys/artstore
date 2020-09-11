import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss'],
})
export class ListproductComponent implements OnInit {
  product: Product[];

  constructor() {
    this.product = [];
  }

  ngOnInit(): void {}

  guardar(nombre: string, url: string): boolean {
    this.product.push(new Product(nombre, url));
    console.log(this.product);
    return false;
  }

  agregado(d: Product): void {
    // tslint:disable-next-line:only-arrow-functions
    this.product.forEach(function (x) {
      x.setSelected(false);
    });
    d.setSelected(true);
  }
}
