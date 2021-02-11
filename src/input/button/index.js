import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {onClick, value} = this.props
        return ( 
            <input 
            type="button" 
            className="button" 
            value={value}
            onClick={onClick}
            />
         );
    }
}
 
export default Button;