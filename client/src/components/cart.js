import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
	removeFromCart,
	emptyCart
} from '../actions/cartActions';
class Cart extends React.Component {
	render() {
		const {items} = this.props;
		return (
			<div>
				<button type="button" onClick={this.props.emptyCart}>
					Empty Cart
				</button>
				{(items.length === 0) ? (<h1>No item in the cart</h1>):
					(items.map(item => (
						<div key={item._id}>
							<h1>{item._id}</h1>
							<p>{item.name}</p>
							<p>{item.description}</p>
							<button type="button" onClick={()=>this.props.removeFromCart(item)}>
								Remove From Cart
							</button>
						</div>
					)))
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
  //store里需要用的的state
  const {cartReducer} = state;
  const items = cartReducer.cartItems
  // console.log(cartReducer);
  return {
    items

  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( {removeFromCart,emptyCart} , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
// export default Cart;