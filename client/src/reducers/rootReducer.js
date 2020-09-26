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


export default combineReducers({
	productDeleteReducer,
    productCreateReducer,
    productGetAllReducer,
    productGetByIdReducer,
    productUpdateReducer,
    // sortProductReducer,
    

    cartReducer

})