import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './product.model';

// ESTADO
export interface ProductState {
  items: Product[];
  loading: boolean;
  favorito: Product;
}

export const initializeProductState = function () {
  return {
    items: [],
    loading: false,
    favorito: null,
  };
};

// ACCIONES
export enum ProductActionTypes {
  NUEVO_PRODUCT = '[Product] Nuevo',
  ELEGIDO_FAVORITO = '[Product] Favorito',
}

export class NuevoProductAction implements Action {
  type = ProductActionTypes.NUEVO_PRODUCT;
  constructor(public product: Product) {}
}

export class ElegidoFavoritoAction implements Action {
  type = ProductActionTypes.ELEGIDO_FAVORITO;
  constructor(public product: Product) {}
}

export type ProductActions = NuevoProductAction | ElegidoFavoritoAction;

// REDUCERS
export function reducerProduct(
  state: ProductState,
  action: ProductActions
): ProductState {
  console.log(action);
  switch (action.type) {
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
