import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';
import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

// ESTADO
export interface ProductState {
  items: Product[];
  loading: boolean;
  favorito: Product;
}

export function initializeProductState() {
  return {
    items: [],
    loading: false,
    favorito: null,
  };
}

// ACCIONES
export enum ProductActionTypes {
  NUEVO_PRODUCT = '[Product] Nuevo',
  ELEGIDO_FAVORITO = '[Product] Favorito',
  VOTE_UP = '[Product] Vote Up',
  VOTE_DOWN = '[Product] Vote Down',
  INIT_MY_DATA = '[Product] Init My Data',
}

export class NuevoProductAction implements Action {
  type = ProductActionTypes.NUEVO_PRODUCT;
  constructor(public product: Product) {}
}
export class VoteUpAction implements Action {
  type = ProductActionTypes.VOTE_UP;
  constructor(public product: Product) {}
}
export class VoteDownAction implements Action {
  type = ProductActionTypes.VOTE_DOWN;
  constructor(public product: Product) {}
}

export class ElegidoFavoritoAction implements Action {
  type = ProductActionTypes.ELEGIDO_FAVORITO;
  constructor(public product: Product) {}
}
export class InitMyDataAction implements Action {
  type = ProductActionTypes.INIT_MY_DATA;
  constructor(public productos: string[]) {}
}

export type ProductActions =
  | NuevoProductAction
  | ElegidoFavoritoAction
  | VoteUpAction
  | VoteDownAction
  | InitMyDataAction;

// REDUCERS
export function reducerProduct(
  state: ProductState,
  action: ProductActions
): ProductState {
  console.log(action);
  switch (action.type) {
    case ProductActionTypes.INIT_MY_DATA: {
      const productos: string[] = (action as InitMyDataAction).productos;
      return {
        ...state,
        items: productos.map((d) => new Product(d, '')),
      };
    }
    case ProductActionTypes.NUEVO_PRODUCT: {
      return {
        ...state,
        items: [...state.items, (action as NuevoProductAction).product],
      };
    }
    case ProductActionTypes.ELEGIDO_FAVORITO: {
      state.items.forEach((x) => x.setSelected(false));
      const fav: Product = (action as ElegidoFavoritoAction).product;
      fav.setSelected(true);
      return {
        ...state,
        favorito: fav,
      };
    }
    case ProductActionTypes.VOTE_UP: {
      state.items.forEach((x) => x.setSelected(false));
      const d: Product = (action as VoteUpAction).product;
      d.voteUp();
      return {
        ...state,
      };
    }
    case ProductActionTypes.VOTE_DOWN: {
      state.items.forEach((x) => x.setSelected(false));
      const d: Product = (action as VoteDownAction).product;
      d.voteDown();
      return {
        ...state,
      };
    }
  }
  return state;
}

// EFFECTS
@Injectable()
export class ProductEffects {
  @Effect()
  nuevoAgregado$: Observable<Action> = this.actions$.pipe(
    ofType(ProductActionTypes.NUEVO_PRODUCT),
    map(
      (action: NuevoProductAction) => new ElegidoFavoritoAction(action.product)
    )
  );

  constructor(private actions$: Actions) {}
}
