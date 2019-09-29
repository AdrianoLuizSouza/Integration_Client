import React from 'react';
import { Router , Route,Switch} from "react-router-dom";


import { createBrowserHistory } from "history"
import Master from '../Master/Master';
import About from '../About/About';
import NotFound from '../CustomAppError/NotFound';
import Home from '../Home/Home';


const history = createBrowserHistory();

class AppRoute extends React.Component {
    render() {
        return (
                <Router history={history}> 
                    <Master>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='*' component={NotFound}/>
                        </Switch>
                    </Master>
                </Router>
        )
      }
}

export default AppRoute;

