import userActionTypes from './user.types';
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {

    dispatch({
        type: userActionTypes.USER_LOGIN_REQUEST
    });

    const config = {
        headers: {
            "Content-Type": "application/JSON"
        }
    }
    try {
        const { data } = await axios.post('/api/users/login', { email, password }, config);

        dispatch({
            type: userActionTypes.USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: userActionTypes.USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }


}


export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo');

    dispatch({
        type: userActionTypes.USER_LOGOUT
    })
}

export const register = (email, password, name) => async (dispatch) => {
    dispatch({
        type: userActionTypes.USER_REGISTER_REQUEST
    })

    const config = {
        headers: {
            "Content-Type": "application/JSON",
        }
    }
    try {
        const { data } = await axios.post('/api/users', { email, password, name }, config);
        dispatch({
            type: userActionTypes.USER_REGISTER_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: userActionTypes.USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateProfile = (name, email, password) => async (dispatch, getState) => {

    dispatch({
        type: userActionTypes.DETAILS_UPDATE_REQUEST
    })
    try {
        const config = {
            headers: {
                Authorization: `Bearer ${getState().user.userInfo.token}`,
                "Content-Type": "application/JSON"
            }
        }
        const { data } = await axios.put('/api/users', { name, email, password }, config);

        dispatch({
            type: userActionTypes.DETAILS_UPDATE_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data));

    } catch (error) {
        dispatch({
            type: userActionTypes.DETAILS_UPDATE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}