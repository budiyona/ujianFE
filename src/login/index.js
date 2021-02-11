import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button} from '../input';
import Label from '../label';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: ""
         }
    }
    setValue = (el) =>{
        console.log("SET");
        this.setState(
            {
                [el.target.name]: el.target.value
            }
        )
    }
    doLogin = () => {
        console.log("Login");
        this.props.doLogin(this.state.username)
    }
    render() { 
        return ( 
            <div className="Form">
                <Label>username</Label>
                <input type="text" name="username" onChange={this.setValue} />
                <Button onClick={this.doLogin} value={"LOGIN"}></Button>
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (user) => dispatch({type: "LOGIN"
        ,user: user 
    })}
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);