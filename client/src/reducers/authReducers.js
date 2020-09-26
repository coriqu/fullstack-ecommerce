


function userLoginReducer(state = {} , action) {
	switch(action.type) {
		case 'USER_LOGIN_REQUEST':
			return { loading: true, isLogined: false };
		case 'USER_LOGIN_SUCCESS':
			return { loading: false, user: action.payload, success: true, isLogined:true };
		case 'USER_LOGIN_FAIL':
			return { loading: false, error: action.payload, isLogined: false};
		case 'USER_LOGOUT':
			return state;
		default:
			return state;
		
	}
}



function userUpdateReducer(state = {} , action) {
	switch(action.type) {
		case 'USER_UPDATE_REQUEST':
			return state;
		case 'USER_UPDATE_SUCCESS':
			return state;
		case 'USER_UPDATE_FAIL':
			return state;
		default:
			return state;
		
	}
}


function userRegisterReducer(state = {} , action) {
	switch(action.type) {
		case 'USER_REGISTER_REQUEST':
			return state;
		case 'USER_REGISTER_SUCCESS':
			return state;
		case 'USER_REGISTER_FAIL':
			return state;
		default:
			return state;
		
	}
}

export {
	userLoginReducer,
	userUpdateReducer,
	userRegisterReducer
}