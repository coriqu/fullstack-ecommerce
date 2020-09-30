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

import Cookie from 'js-cookie';

class Auth extends Component {
	constructor(props) {
        super(props)
        this.state = {
			controls: {
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

				password: {
					elementType: 'input',
					elementConfig: {
						type: 'password',
						placeholder: 'password'
					},
					value: '',
					validation: {
						require: true,
						minLength: 6,
						isPassword: true
					},
					valid: false,
					touched: false

				}
			}
			
		}
       
        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    }
    componentDidMount() {

        const userInfo = Cookie.getJSON('userInfo') || null;
        if(userInfo) {
            console.log(userInfo.email, userInfo.password);
            this.props.authentication( userInfo.email, userInfo.password);
        }

    }
	checkValidity ( value, rules ) {
        let isValid = true;
        value = value.trim();
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const emailReg = /^[\w]+\@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i;
            isValid = emailReg.test( value ) && isValid
        }

        if ( rules.isPassword ) {
            const lenReg = /^.{4,10}$/; 
            isValid = lenReg.test( value ) && isValid
        }
        console.log(isValid);
        return isValid;
    }
	handleChange (event, controlName) {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }
    
    handleLoginSubmit(e) {
    	e.preventDefault();

    	let { email, password } = this.state.controls;
    	console.log(email.valid, password.valid);
    	// if(email.valid && password.valid)
    		this.props.authentication( email.value, password.value);
    	// else {
    		
    	// }
    }


	render() {
		const formElementsLogin = [];

        for ( let key in this.state.controls ) {
            formElementsLogin.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

   
        const formLogin  = formElementsLogin.map(e=> (
        	<Input 
        		//email password
        		key = {e.id}
        		elementType = {e.config.elementType}
                elementConfig = {e.config.elementConfig}
                value = {e.config.value}
                invalid = {!e.config.valid}
                shouldValidate = {e.config.validation}
                touched = {e.config.touched}
                changed = {v=>this.handleChange(v,e.id)}
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
					<form onSubmit={this.handleLoginSubmit}>
	                    {formLogin}
	                    <button type="submit">SUBMIT</button>
	                </form>
	                <p>Don't have an account? <Link to='/register'>Sign up</Link></p>
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









