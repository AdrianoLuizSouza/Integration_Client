import React from 'react';
import "./Login.css";
import {Link} from 'react-router-dom';

class Login extends React.Component{
    render(){
        return(
           <>
                
                <Link to="/Home">Login</Link>
           </>
        )
    }
}
export default Login;