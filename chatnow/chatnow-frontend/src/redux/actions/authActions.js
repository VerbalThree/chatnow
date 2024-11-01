import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types.js';
import axios from 'axios';

export const registerUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('http://0.0.0.0:8000/api/register', userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAILURE', payload: error.response.data });
    }
};

export const loginUser = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('http://0.0.0.0:8000/api/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.response.data });
    }
};

/*
export const logoutUser = () => (dispatch) => {
    dispatch({type: LOGOUT});  
}; */