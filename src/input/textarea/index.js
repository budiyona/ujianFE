import React, { Component } from 'react';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {onChange} = this.props
        return (
            <textarea
                className="text-area"
                name="efek" 
                onChange={onChange}
            />);
    }
}

export default TextArea;