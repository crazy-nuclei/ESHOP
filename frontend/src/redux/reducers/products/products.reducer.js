import productsActionTypes from './products.types';

const initialState = {
    loading: false,
    products: [],
    error: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {

        case (productsActionTypes.PRODUCTS_REQUEST):
            return { loading: true, products: [], error: null }

        case (productsActionTypes.PRODUCTS_SUCCESS):
            return { loading: false, products: action.payload, error: null }

        case (productsActionTypes.PRODUCTS_FAIL):
            return { loading: false, error: action.payload, products: [] }

        default:
            return state;
    }
}

export default productsReducer