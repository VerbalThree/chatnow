import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
}; 

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
            token: action.payload.token,
            error: null,
        };
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                error: action.payload.error,
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;