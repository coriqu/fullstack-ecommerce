// /client/src/App.js
import React from "react";
import ListItem from './components/listItem';
import ProductDetails from './components/listItemDetails';
import Cart from './components/cart';
import Filter from './components/filter';
// SERVICES
import productService from './services/productService';

import {
  // deleteProdcut,
  createProduct,
  getAllProducts,
 
} from './actions/productActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createBrowserHistory } from "history";
const history = createBrowserHistory()


class App extends React.Component {

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
      
      <ListItem
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
  
  // if(!sortedProducts) sortedProducts = products;
  console.log(products,sortedProducts);
  return (
    <div className="App">
      <Router  history={history}>

        <Switch>
          
         

         
          <Route path="/:id" component={ProductDetails} />
          <Route path="/">
            
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
          </Route>
        </Switch>

      </Router>


      
    </div>
  );
}
  
}

function mapStateToProps(state) {
  //store里需要用的的state
  const {productGetAllReducer,sortProductReducer} = state;
  console.log(productGetAllReducer,sortProductReducer);
  return {
    
    products: productGetAllReducer.products,
    sortedProducts: productGetAllReducer.sortedProducts
  };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators( {createProduct,getAllProducts } , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
