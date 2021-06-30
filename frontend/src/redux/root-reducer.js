import { combineReducers } from 'redux';
import productsReducer from './reducers/products/products.reducer';
import productReducer from './reducers/product/product.reducer';

export default combineReducers({
    productsList: productsReducer,
    productDetail: productReducer
});