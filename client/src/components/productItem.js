import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
  Link
} from "react-router-dom";
import {
	addToCart
} from '../actions/cartActions';


class ProductItem extends React.Component {
    render() {
       	const {product} = this.props;
       	// console.log(product);
    
   			
   			return (
	            <li className="list__item product">
			        <h3 className="product__name">{product.name}</h3>
			        <p className="product__description">{product.description}</p>
			        
			       
			        	<Link to={product._id}>See Details</Link>
			        	<button
							className="button primary"
							onClick={() => (this.props.addToCart(product))}
	                    >
	                      Add To Cart
	                    </button>

		        	

			    </li>

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
    return bindActionCreators( {addToCart} , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

// export default ListItem;





