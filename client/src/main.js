import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './components/shoppinglist';
import Reg from './components/registor';
import Login from './components/login';

const Main = props => (

    <Switch>
        <Route exact path ='/' component={List} />
        <Route exact path ='/registor' component={Reg} />
        <Route exact path ='/login' component={Login} />


    </Switch>
);

export default Main;