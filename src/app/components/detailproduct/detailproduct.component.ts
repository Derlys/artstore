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
  style = {
    source: {
      world: {
        type: 'geojson',
        data:
          'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json ',
      },
    },
    version: 8,
    layers: [
      {
        id: 'countries',
        type: 'fill',
        source: 'world',
        layout: {},
        paint: {
          'fill-color': '#6F788A',
        },
      },
    ],
  };

  constructor(
    private route: ActivatedRoute,
    private productApiClient: ProductApiClient
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.productApiClient.getById(id);
  }
}
