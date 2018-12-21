import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    SIGN_USER_SUCCESS,
    SIGN_USER_FAIL,
    SIGN_USER
} from '../types';

const INITIAL_STATE = {
    email: 'test@test.com',
    password: '123455',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case SIGN_USER:
            return { ...state, loading: true, error: '' };
        case SIGN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, loading: false };
        case SIGN_USER_FAIL:
            return { ...state, error: action.payload, password: '', loading: false };
        default:
            return state;
    }
};
