import { combineReducers } from 'redux';
import productsReducer from './reducers/products/products.reducer';
import productReducer from './reducers/product/product.reducer';
import cartReducer from './reducers/cart/cart.reducer';
import userReducer from './reducers/user/user.reducer';


export default combineReducers({
    productsList: productsReducer,
    productDetail: productReducer,
    cart: cartReducer,
    user: userReducer
});