import userActionTypes from './user.types';

const initialState = {
    loading: false,
    error: null,
    userInfo: null,
    success: false
}


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case userActionTypes.USER_LOGIN_REQUEST:
            return { loading: true, error: null, userInfo: null }

        case userActionTypes.USER_LOGIN_SUCCESS:
            return { loading: false, error: null, userInfo: action.payload }

        case userActionTypes.USER_LOGIN_FAIL:
            return { loading: false, error: action.payload, userInfo: null };

        case userActionTypes.USER_LOGOUT:
            return { loading: false, error: null, userInfo: null };

        case userActionTypes.USER_REGISTER_REQUEST:
            return { loading: true, error: null, userInfo: null };

        case userActionTypes.USER_REGISTER_SUCCESS:
            return { loading: false, error: null, userInfo: action.payload };

        case userActionTypes.USER_REGISTER_FAIL:
            return {
                loading: false, error: action.payload, userInfo: null
            }
        case userActionTypes.DETAILS_UPDATE_REQUEST:
            return {
                ...state, loading: true, error: null, success: false
            }
        case userActionTypes.DETAILS_UPDATE_SUCCESS:
            return {
                loading: false, error: null, userInfo: action.payload, success: true
            }
        case userActionTypes.DETAILS_UPDATE_FAIL:
            return {
                ...state, loading: false, error: action.payload, success: false
            }

        default:
            return state;
    }
}

export default userReducer;