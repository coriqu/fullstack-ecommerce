import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	authentication
} from '../../actions/authActions';


const Input = (props) => {
	let element = null;

	switch(props.elementType) {
		case 'input':
			element = <input 
					// className = {classes.InputElement} 
					{...props.elementConfig}
					value = {props.value}
					onChange={props.changed}

				/>
			return element;
		default:
            element = <input
                // className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} 
            />;
    }
}
class Auth extends Component {
	state = {
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

			possword: {
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

			}
		}
		,
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

			possword: {
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
	checkValidity(value, rules) {

	}
	handleChange (event, controlName) {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                // valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({controls: updatedControls});
    }
    handleSubmit(e) {
    	e.preventDefault();

    	let { email, password } = this.state.controls;
    	this.props.authentication( email.value, password.value);
    }

	render() {
		const formElementsArray = [];

        for ( let key in this.state.controls ) {
            formElementsArray.push( {
                id: key,
                config: this.state.controls[key]
            } );
        }

        // console.log(formElementsArray);
        const form  = formElementsArray.map(e=> (
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
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
                    {form}
                    
                </form>
			</div>
		)
	}
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators( {authentication } , dispatch);
};

export default connect()(Auth);









