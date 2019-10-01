import React from 'react';
import { Router , Route,Switch} from "react-router-dom";

import { createBrowserHistory } from "history"
import Master from '../Master/Master';
import About from '../About/About';
import NotFound from '../CustomAppError/NotFound';
import Home from '../Home/Home';
import Customer from '../Operation/Customer/Customer';
import Charts from '../Charts/Charts';
import CustomerAdded from '../Reports/CustomerAdded';
import Login from '../Login/Login';

const history = createBrowserHistory();

class AppRoute extends React.Component {
    render() {
        return (
                <Router history={history}> 
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/Login' component={Login}/>
                        <Master>
                            <Switch>
                                    <Route exact path='/' component={Login}/>
                                    <Route exact path='/Login' component={Login}/>
                                    <Route exact path='/home' component={Home}/>
                                    <Route exact path='/Operation/Customer' component={Customer}/>
                                    <Route exact path='/Charts/Charts' component={Charts}/>
                                    <Route exact path='/Reports/Customer' component={CustomerAdded}/>

                                    <Route exact path='/about' component={About}/>
                                    <Route path='*' component={NotFound}/>
                            </Switch>
                        </Master>
                    </Switch>
                </Router>
        )
      }
}

export default AppRoute;

