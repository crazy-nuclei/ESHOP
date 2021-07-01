import cartActionTypes from './cart.types';

const initialState = { cartItems: [] };

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartActionTypes.CART_ADD_ITEM:
            const item = action.payload;

            const existItem = state.cartItems.find(x => x.product === item.product);

            if (existItem) {
                return { cartItems: state.cartItems.map(x => (x.product === existItem.product) ? item : x) };
            } else {
                return { cartItems: [...state.cartItems, item] }
            }

        case cartActionTypes.CART_DELETE_ITEM:
            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) }
        default:
            return state
    }
}

export default cartReducer