import React from 'react';
import "./Master.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Menu/Menu';
class Master extends React.Component {
    render() {
        const { children } = this.props;
        return (
                <div>
                     <Menu/>
                    <div className="BodyChildren">
                        {children}
                    </div>
                </div>
        );
      }
}

export default Master;

