import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class AppNavbar extends Component {



render(){
    return(
        <div className="nav">
            <h2>Mern stack development</h2>
            <Link to='/registor' >Registor </Link>
            <Link to='/' >Home </Link>
            <Link to='/login' >Login </Link>
            
        </div>
    )
    }
}


export default AppNavbar;