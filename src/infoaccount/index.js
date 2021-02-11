import React, { Component } from 'react';
class InfoAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="info">
                <div className="value-info">Nama </div>
                <div className="value-info prop-info">: asdasd</div><br />
                <div className="value-info">Role </div>
                <div className="value-info prop-info">: asdasd</div><br />
         
                <input type="button" value="Logout"/>
            </div>
         );
    }
}
 
export default InfoAccount;