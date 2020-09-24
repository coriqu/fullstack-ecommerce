
function cartReducer(state = {cartItems: []}, action) {
  switch(action.type) {
    case "CART_ADD_ITEM":
      return { cartItems: [...state.cartItems,action.payload] };
    case "CART_REMOVE_ITEM":
      return { cartItems: state.cartItems.filter(x => x !== action.payload) };
    case "CART_REMOVEALL_ITEM":
      return { cartItems: [] };
    default:
      return state;

  }
}


export {
    cartReducer
}