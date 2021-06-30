import productsActionTypes from './products.types';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: productsActionTypes.PRODUCTS_REQUEST });
        const { data } = await axios.get('/api/products');

        dispatch({
            type: productsActionTypes.PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {

        dispatch({
            type: productsActionTypes.PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}