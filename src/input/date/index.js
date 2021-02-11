import React, { Component } from 'react';

class Date extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {onChange} = this.props
        return ( <input 
            type="date" 
            name="tanggal" onChange={onChange}
        /> );
    }
}
 
export default Date;