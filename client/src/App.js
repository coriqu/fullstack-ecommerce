// /client/src/App.js
import React from "react";

import ProductDetails from './components/productDetails';
import Products from './components/products';
import Auth from './containers/Auth/Auth';



import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {


	render() {

	  	
	 	return (
			<div className="App">
			  <BrowserRouter>
				<Switch>
				 
				 	<Route path="/auth"   component={Auth} />
				  	<Route path="/:id" component={ProductDetails} />
				  	<Route path="/"   component={Products} />
				  	
					
					
				</Switch>
			  </BrowserRouter>
			  
			</div>
	  	);
	}
  
}

export default App;



