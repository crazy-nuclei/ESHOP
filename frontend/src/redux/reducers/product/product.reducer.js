import productActionTypes from './product.types';

const initialState = {
    product: {},
    error: null,
    loading: false
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case productActionTypes.PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };

        case productActionTypes.PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload, error: null };

        case productActionTypes.PRODUCT_DETAILS_FAIL:
            return { laoding: false, product: {}, error: action.payload };

        default:
            return state;
    }
}

export default productReducer;