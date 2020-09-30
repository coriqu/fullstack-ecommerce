import React from 'react';

export const Input = (props) => {
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