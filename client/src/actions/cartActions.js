export const addToCart = (product) => async (dispatch, getState) => {
	dispatch({ type: 'CART_ADD_ITEM', payload: product });
};


export const removeFromCart = (product) => async (dispatch, getState) => {
	dispatch({ type: 'CART_REMOVE_ITEM', payload: product });
};


export const emptyCart = () => async (dispatch, getState) => {
	dispatch({ type: 'CART_REMOVEALL_ITEM'  });
};