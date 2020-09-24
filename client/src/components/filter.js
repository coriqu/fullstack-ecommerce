import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
	sortProduct,
	filterProducts
} from '../actions/productActions';

class Filter extends React.Component {
	
	render() {
		const {filteredProducts,filterProducts,products} = this.props;
		
		return (
			<div>
				<input onChange={e =>{console.log(products,e.target.value);filterProducts(products,e.target.value)}} placeholder='Search' type='text'/>
				<button onClick = {e=>this.props.sortProduct(filteredProducts,'SORT_BY_NAME')}>
                	Sort By Name
              	</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
  //store里需要用的的state
  const {productGetAllReducer,sortProductReducer} = state;

  return {
    products: productGetAllReducer.products,
    filteredProducts: productGetAllReducer.sortedProducts,

  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( {sortProduct,filterProducts} , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);