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
}
