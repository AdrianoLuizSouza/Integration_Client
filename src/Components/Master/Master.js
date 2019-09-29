import React from 'react';
import Navbar from '../NavMenu/NavMenu';

class Master extends React.Component {
    render() {
        const { children } = this.props;
        return (
          <div>
            <Navbar/>
            <hr />
            {children}
          </div>
        );
      }
}

export default Master;

