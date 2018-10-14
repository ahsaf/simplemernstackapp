
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Reg extends Component{


    render(){


        return(
            <div>
                
                    <label>Full Name:</label><br />
                    <input type="text" ref= "fullname" /><br /><br />
                    <label>Email:</label><br />
                    <input type="text" ref= "email" /><br /><br />
                    <label>Password:</label><br />
                    <input type="password" ref= "password" /><br /><br />
                    <label>Conform password:</label><br />
                    <input type="password" ref= "password2" /><br /><br />
                    <Link to='/'>
                    <button onClick={
                        () => {
                            fetch('/api/users/registor',{
                                method: "POST",
                                headers: {
                                    'content-type':'application/json'
                                },
                                body: JSON.stringify({fullname:this.refs.fullname.value,email:this.refs.email.value,password:this.refs.password.value})
                                
                            }).then(res => res.json()).then(data => console.log(data));
                        }
                    } >Submit</button></Link>
                
            </div>
        )
    }
}

export default Reg;