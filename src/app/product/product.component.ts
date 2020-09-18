import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input('index') position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<Product>;

  constructor() {
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {}

  agregarcarrito(): boolean {
    this.clicked.emit(this.product);
    return false;
  }
}
