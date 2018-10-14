
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component{


    render(){


        return(
            <div>

                <label>Email:</label><br />
                <input typr="text" ref='email' /><br />
                <label>Password:</label><br />
                <input typr="password" ref='password' /><br />
                <Link to='/'><button   >Login</button></Link>
            </div>




        );}}

export default Login



