import React from "react";
import Cart from './cart';
import Filter from './filter';
import ProductItem from './productItem';


import {
  // deleteProdcut,
  createProduct,
  getAllProducts,
 
} from '../actions/productActions';
import {
	getProducts,
	getSortedProducts
} from '../selectors/selectors';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { createBrowserHistory } from "history";
const history = createBrowserHistory()




class Products extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
            products: null,
            name: '',
            description: '',
            product: ''
        }
        this.handleCreateProduct = this.handleCreateProduct.bind(this);
        // this.deleteProduct = this.deleteProduct.bind(this);
        this.renderProduct = this.renderProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount(){
	// if(!this.state.products) {
	  this.props.getAllProducts();
	// }
  	}

	async handleCreateProduct ()  {
	    let product = {
	      	name: this.state.name,
	      	description: this.state.description
	    }


	    this.props.createProduct(product);

	    this.setState({
	        name: '',
	        description: ''
	    });
	    history.go();

  }

  	renderProduct (product) {
    
	    return (
	      
	      	<ProductItem
		        key={product._id}
		        product = {product}
	      	/>

	    );
 	};


  	handleChange (e)  {
	    const {value} = e.target;
	    console.log(e.target.name, value);
	    if(e.target.name === 'name') {
	      	this.setState({
	        	name: value
	      	});
	      	// setName(value);
	    }
	    if(e.target.name === 'description') {
	      	// setDescription(value);
	      	this.setState({
	       		description: value
	      	});
	    }
  	}
	render() {
		const {sortedProducts,products} = this.props;
	  	console.log('products', products,'sortedProducts', sortedProducts);
		return (
			<div>
				<ul className="list">
				<Filter></Filter>
					{(sortedProducts && sortedProducts.length > 0) ? (
					sortedProducts.map(product => this.renderProduct(product))
					) : (
					<p>No products found</p>
					)}
		        </ul>
		        <input
					name = "name"
					type="text"
					value={this.state.name}
					onChange={e=>this.handleChange(e)}
		        />
		         <input
					name = "description"
					type="text"
					value={this.state.description}
					onChange={e=>this.handleChange(e)}
		        />
		        <button type="button" onClick={this.handleCreateProduct}>
		          Add
		        </button>

		        <Cart />
	        </div>
		)
		
	}
}


function mapStateToProps(state) {
  	//store里需要用的的state
	// const {productGetAllReducer,sortProductReducer} = state;
	// console.log(productGetAllReducer,sortProductReducer);
	// return {

	// 	products: productGetAllReducer.products,
	// 	sortedProducts: productGetAllReducer.sortedProducts
	// };
	return {

		products: getProducts(state),
		sortedProducts: getSortedProducts(state)
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( {createProduct,getAllProducts } , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);





