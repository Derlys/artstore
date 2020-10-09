import { Product } from './product.model';
import {
  InitMyDataAction,
  ProductState,
  reducerProduct,
  NuevoProductAction,
  initializeProductState,
} from './product-state.model';

describe('reducerProductViajes', () => {
  it('should reduce init data', () => {
    // setup
    const prevState: ProductState = initializeProductState();
    const action: InitMyDataAction = new InitMyDataAction([
      'product 1',
      'product 2',
    ]);
    // action
    const newState: ProductState = reducerProduct(prevState, action);
    // asserttions
    expect(newState.items.length).toEqual(2);
    expect(newState.items[0].nombre).toEqual('product 1');
  });

  it('should reduce new item added', () => {
    const prevState: ProductState = initializeProductState();
    const action: NuevoProductAction = new NuevoProductAction(
      new Product('barcelona', 'url')
    );
    const newState: ProductState = reducerProduct(prevState, action);
    expect(newState.items.length).toEqual(1);
    expect(newState.items[0].nombre).toEqual('barcelona');
  });
});
