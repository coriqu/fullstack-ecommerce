

import userService from '../services/userService';
import Cookie from 'js-cookie';

export const authentication = (email, password) => async(dispatch,getState)=> {
	console.log('authAction');
	try {
		dispatch({ type: 'USER_LOGIN_REQUEST'});
		const {user} = await userService.login(email,password);
		console.log(user);
		dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user });

		Cookie.set('userInfo', JSON.stringify(user))

	} catch (error) {
		console.log(error);
		//customize error
		console.log(error.response.data);   
		// console.log(getState());
		dispatch({ type: 'USER_LOGIN_FAIL', payload: error.message});
	}
}

//email,username, password
export const register = (user) => async(dispatch)=> {
	console.log('registerAction');
	try {
		dispatch({ type: 'USER_REGISTER_REQUEST'});
		const newUser = await userService.register(user);
		
		dispatch({ type: 'USER_REGISTER_SUCCESS', payload: newUser });
		

	} catch (error) {
		dispatch({ type: 'USER_REGISTER_FAIL', payload: error.message});
	}
}

export const logout = () => async(dispatch)=> {
	console.log('logout');
	
	dispatch({ type: 'USER_LOGOUT'});

	Cookie.remove('userInfo')

	
}