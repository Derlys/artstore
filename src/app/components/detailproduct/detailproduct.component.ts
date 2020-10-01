import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductApiClient } from '../../models/products-api-client.model';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss'],
  providers: [ProductApiClient],
})
export class DetailproductComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productApiClient: ProductApiClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productApiClient.getById(id);
  }
}
