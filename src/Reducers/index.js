import { combineReducers } from 'redux';
import AuthReducer from '../Features/Authentication/reducers/authenticationReducer'

export default combineReducers({
    auth: AuthReducer
});
