import {
  Component,
  OnInit,
  HostBinding,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product } from '../../models/product.model';
import { AppState } from '../../app.module';
import { Store } from '@ngrx/store';
import { VoteDownAction, VoteUpAction } from '../../models/product-state.model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('esFavorito', [
      state(
        'estadoFavorito',
        style({
          backgroundColor: 'PaleTurquoise',
        })
      ),
      state(
        'estadoNoFavorito',
        style({
          backgroundColor: 'WhiteSmoke',
        })
      ),
      transition('estadoNoFavorito => estadoFavorito', [animate('3s')]),
      transition('estadoFavorito => estadoNoFavorito', [animate('1s')]),
    ]),
  ],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input('index') position: number;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() onClicked: EventEmitter<Product>;

  constructor(private store: Store<AppState>) {
    this.onClicked = new EventEmitter();
  }

  ngOnInit(): void {}

  agregarcarrito(): boolean {
    this.onClicked.emit(this.product);
    return false;
  }
  voteUp() {
    this.store.dispatch(new VoteUpAction(this.product));
    return false;
  }

  voteDown() {
    this.store.dispatch(new VoteDownAction(this.product));
    return false;
  }
}
