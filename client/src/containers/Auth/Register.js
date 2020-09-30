import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {
	authentication,
	register
} from '../../actions/authActions';
import {
	Input
} from '../../components/dynamicForm';

import {
	  Redirect,
	  Link
} from "react-router-dom";

class Auth extends Component {
	constructor(props) {
        super(props)
        this.state = {
			signup: {

				email: {
					elementType: 'input',
					elementConfig: {
						type: 'email',
						placeholder: 'email'
					},
					value: '',
					validation: {
						require: true,
						isEmail: true
					},
					valid: false,
					touched: false
				},
				username: {
					elementType: 'input',
					elementConfig: {
						type: 'text',
						placeholder: 'username'
					},
					value: '',
					validation: {
						require: true,
						isEmail: true
					},
					valid: false,
					touched: false
				},
				password: {
					elementType: 'input',
					elementConfig: {
						type: 'password',
						placeholder: 'password'
					},
					value: '',
					validation: {
						require: true,
						minLength: 6
					},
					valid: false,
					touched: false

				},
				confirmPossword: {
					elementType: 'input',
					elementConfig: {
						type: 'password',
						placeholder: 'Confirm password'
					},
					value: '',
					validation: {
						require: true,
						minLength: 6
					},
					valid: false,
					touched: false

				}
			}
		}
       
        
        this.handleSignupChange = this.handleSignupChange.bind(this);
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this);

    }
	checkValidity(value, rules) {

	}
	handleSignupChange (event, controlName) {
        const updatedControls = {
            ...this.state.signup,
            [controlName]: {
                ...this.state.signup[controlName],
                value: event.target.value,
                // valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({signup: updatedControls});
    }
    handleSignupSubmit(e) {
    	e.preventDefault();
    	console.log(this.state);
    	let { email, username, password } = this.state.signup;
    	
    	let user = {
	      	email: email.value,
	      	username: username.value,
	      	password: password.value
	    }

    	
    	this.props.register( user );

    }

	render() {
		const formElementsSignup= [];


        for ( let key in this.state.signup ) {
            formElementsSignup.push( {
                id: key,
                config: this.state.signup[key]
            } );
        }


        const formSignup  = formElementsSignup.map(e=> (
        	<Input 
        		//email password
        		key = {e.id}
        		elementType = {e.config.elementType}
                elementConfig = {e.config.elementConfig}
                value = {e.config.value}
                invalid = {!e.config.valid}
                shouldValidate = {e.config.validation}
                touched = {e.config.touched}
                changed = {v=>this.handleSignupChange(v,e.id)}
        	/>
        ))

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to='/'/>
        }
		return (
			<div>
				{authRedirect}
				<div>
	                <form onSubmit={this.handleSignupSubmit}>
	                    {formSignup}
	                     <button type="submit">SUBMIT</button>
	                     <p>Have an account?  <Link to='/login'>Log in</Link></p>
	                     
	                </form>
                </div>
			</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.userLoginReducer.isLogined
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators( {authentication, register } , dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);









