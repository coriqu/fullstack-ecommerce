import { combineReducers } from 'redux'
import {
    productDeleteReducer,
    productCreateReducer,
    productGetAllReducer,
    productGetByIdReducer,
    productUpdateReducer
    // sortProductReducer
} from './productReducers';
import {
	cartReducer
} from './cartReducers';

import {
    userLoginReducer,
    userUpdateReducer,
    userRegisterReducer
} from './authReducers';


export default combineReducers({
	productDeleteReducer,
    productCreateReducer,
    productGetAllReducer,
    productGetByIdReducer,
    productUpdateReducer,
    // sortProductReducer,
    

    cartReducer,

    userLoginReducer,
    userUpdateReducer,
    userRegisterReducer

})