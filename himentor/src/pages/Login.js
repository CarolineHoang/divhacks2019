
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const DivContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FED2F8;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;



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
        <DivContainer>
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
                <Link to= "/dashboard"><button type="submit"> Login</button></Link>

            </form>
        </div>
        </DivContainer>

    )

};
}
export default Login;
