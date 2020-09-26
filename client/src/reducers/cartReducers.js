let initialCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]")

function cartReducer(state = {cartItems: initialCartItems}, action) {
  let newCartItems;
  switch(action.type) {
    case "CART_ADD_ITEM":
      newCartItems = [...state.cartItems,action.payload];
      localStorage.setItem("cartItems",JSON.stringify(newCartItems));
      return { cartItems: newCartItems };
    case "CART_REMOVE_ITEM":
      newCartItems = state.cartItems.filter(x => x !== action.payload);
      localStorage.setItem("cartItems",JSON.stringify(newCartItems));
      return { cartItems: newCartItems };
    case "CART_REMOVEALL_ITEM":
      localStorage.clear("cartItems")
      return { cartItems: [] };
    default:
      return state;

  }
}


export {
    cartReducer
}