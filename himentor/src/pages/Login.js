
import React, { Component } from 'react';


class Login extends Component {
    constructor(){
        super();
        this.state = {
                email: ' ' ,
                password: ' '
            };
    }
    

    changeHandlerName = event => {
        this.setState({ 
            email:event.target.email
        });
    }

    changeHandlerPassword = event => {
        this.setState({ 
            password:event.target.password
        });
    }


render () {
    return(
        <div className="Login">
            <form>
                Email 
                <input type="email" 
                 name="email"   
                 value={this.state.email} 
                 onChange={this.changeHandlerName} 
                />

                Password
                <input type="passwordd" 
                 name="password"   
                 value={this.state.password} 
                 onChange={this.changeHandlerPassword} 
                />
                <button type="submit">Log In</button>

            </form>
        </div>

    )

};
}
export default Login;
