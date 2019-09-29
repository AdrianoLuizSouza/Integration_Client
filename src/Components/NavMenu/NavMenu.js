import React from 'react';
import { Link } from "react-router-dom";

class NavMenu extends React.Component {
    render() {
      return (
           <div> 
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
            </ul>
           </div>
        );
      }
}

export default NavMenu;


