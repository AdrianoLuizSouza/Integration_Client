import React from 'react';
import {Table} from 'react-bootstrap';
import './CustomerTable.css';
import CustomerAdd from './CustomerAdd';
import CustomerEdit from './CustomerEdit';
import CustomerDelete from './CustomerDelete';

class CustomerTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          clientlist: []
        }
      }

      // componentDidMount() {
      //   api.get('/api/client')
      //   .then(response => response.data)
      //   .then(clientlist => this.setState({ 'clientlist': clientlist}))
      // }

    render() {
      return (

            <Table  striped bordered hover size="sm" responsive="sm">
            <thead>
                <tr>
                <th className="ComandCol"> 
                   <CustomerAdd />  
                </th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th className="NoShowMobile">Endereço</th>
                <th className="NoShowMobile">Cidade</th>
                <th className="NoShowMobile">Estado</th>
                <th className="NoShowMobile">Cep</th>
                </tr>
            </thead>
            <tbody>
                { 
               
                    this.state.clientlist.map((client, _id) => (
                        <tr key={ _id }>
                           <td className="ComandCol">
                               <CustomerEdit/>
                               <CustomerDelete/> 
                            </td>
                            <td>{ client.id }</td>
                            <td>{ client.name }</td>
                            <td>{ client.name }</td>
                            <td className="NoShowMobile">{ client.name }</td>
                            <td className="NoShowMobile">{ client.name }</td>
                            <td className="NoShowMobile">{ client.name }</td>
                            <td className="NoShowMobile">{ client.name }</td>
                        </tr>
                    ))
                }
            </tbody>
            </Table>
        );
      }
    
}

export default CustomerTable;