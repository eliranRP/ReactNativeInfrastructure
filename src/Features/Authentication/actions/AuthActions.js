
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    SIGN_USER,
    SIGN_USER_SUCCESS,
    SIGN_USER_FAIL
} from '../types';
import AuthRepository from '../../../Repository/AuthRepository'


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const signInOrLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: SIGN_USER });
        AuthRepository.signInOrLogin(email, password)
            .then(user => {
                dispatch({ type: SIGN_USER_SUCCESS, payload: user });
            })
            .catch(error => {
                dispatch({ type: SIGN_USER_FAIL, payload: error.message })
            });
    }
}
