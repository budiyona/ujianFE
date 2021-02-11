import React, { Component } from 'react';
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {onChange} = this.props
        return (
            <select name="zatKimia" onChange={onChange} defaultValue="">
                <option disabled value="">Pilih Zat</option>
                <option value="Cuka">Cuka</option>
                <option value="Garam">Garam</option>
                <option value="Mineral">Mineral</option>
                <option value="Oksigen">Oksigen</option>
            </select>
        );
    }
}

export default Select;