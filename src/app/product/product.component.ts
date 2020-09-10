import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {}

  ngOnInit(): void {}
}
