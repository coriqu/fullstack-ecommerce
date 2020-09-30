// /client/src/App.js
import React from "react";

import ProductDetails from './components/productDetails';
import Products from './components/products';
import Register from './containers/Auth/Register';
import Login from './containers/Auth/Login';
import Home from './containers/Home';



import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';

import { logout } from './actions/authActions';


// class App extends React.Component
function App() {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLoginReducer);
  	const { isLogined , user } = userLogin;




	// render() {

	  	
	 	return (
			<div className="App">
			  <BrowserRouter>
			  	{isLogined? (<div>
			  		<p>Hello {user.username}!</p>
			  		<Link to='/' onClick ={e=>{console.log('haha'); return dispatch(logout());}}>Logout</Link>
			  	</div>):
			  		(<Link to='/login' >Login</Link>)
			  	}
			  	
				<Switch>
				 	<Route path="/register"   component={Register} />
				 	<Route path="/login"   component={Login} />
				  	<Route path="/product/:id" component={ProductDetails} />
				  	<Route path="/product"   component={Products} />
            		<Route path="/" component={Home} />
				  	
					
					
				</Switch>
			  </BrowserRouter>
			  
			</div>
	  	);
	// }
  
}

export default App;



