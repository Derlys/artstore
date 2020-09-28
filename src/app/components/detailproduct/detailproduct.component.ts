import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductsApiClient } from '../../models/products-api-client.model';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss'],
})
export class DetailproductComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productApiClient: ProductsApiClient
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.product = null;
  }
}
