import productActionTypes from './product.types';
import axios from 'axios';


export const productDetailFetch = (id) => async (dispatch) => {

    try {
        dispatch({ type: productActionTypes.PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/products/${id}`)

        dispatch({ type: productActionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {

        dispatch({ type: productActionTypes.PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }

}

