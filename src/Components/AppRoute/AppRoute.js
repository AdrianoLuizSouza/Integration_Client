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

const history = createBrowserHistory();

class AppRoute extends React.Component {
    render() {
        return (
                <Router history={history}> 
                    <Master>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/Operation/Customer' component={Customer}/>
                            <Route exact path='/Charts/Charts' component={Charts}/>
                            <Route exact path='/Reports/Customer' component={CustomerAdded}/>

                            <Route path='/about' component={About}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </Master>
                </Router>
        )
      }
}

export default AppRoute;

