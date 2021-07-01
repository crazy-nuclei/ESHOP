import axios from 'axios';
import cartActionTypes from './cart.types';


export const addToCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type: cartActionTypes.CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

}


export const deleteFromCart = (id) => async (dispatch) => {

    dispatch({
        type: cartActionTypes.CART_DELETE_ITEM,
        payload: id
    })
}