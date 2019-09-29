import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";


import { createBrowserHistory } from "history"
import Master from '../Master/Master';
import About from '../About/About';
import NotFound from '../CustomAppError/NotFound';


const history = createBrowserHistory();

class AppRoute extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                        <Route exact path='/' component={Master}>
                            <Route path='/about' component={About}/>
                            <Route path='*' component={NotFound}/>
                        </Route>
                </Router>
            </div>
        )
      }
}

export default AppRoute;

