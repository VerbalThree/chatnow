import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';
import axios from 'axios';

export const loginUser = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post('/api/login', {username, password});
        const {token, user} = response.data;
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {token, user},
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: {error: error.response.data.error || 'Login failed' },
        });
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch({type: LOGOUT});  
};