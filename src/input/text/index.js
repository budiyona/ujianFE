import React, { Component } from 'react';
import { connect } from 'react-redux';

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            namainpur: ""
         }
    }
    setValue = (el) =>{
        console.log(el.target.value);
        this.setState({
            namainput: el.target.value
        })
    }
    render() { 
        const {onChange, value} = this.props
        return ( 
           <input value={value} type="text" name="nama" onChange={onChange} />
         );
    }
}
const mapStateToProps = (state) => {
    return {
        nama: state.nama
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setNama: () => dispatch({type: "SET_NAMA_ACTION"
        ,nama: this.state.namainput
        }),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Text);