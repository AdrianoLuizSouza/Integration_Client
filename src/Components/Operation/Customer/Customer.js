import React from 'react';
import CustomerTable from './CustomerTable';
import './Customer.css';

class Customer extends React.Component {
    render() {
      return (
        <div className="container-fluid">
              <div className="row-fluid">
                <div className="span10">
                  <CustomerTable/>
                </div>
              </div>
        </div>
        );
      }
}

export default Customer;