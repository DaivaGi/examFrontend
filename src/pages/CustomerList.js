import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Table, Divider, Segment} from 'semantic-ui-react'

const JSON_HEADERS = {
    'Content-Type': 'application/json'
};

export function CustomerListPage() {
    const [customers, setCustomer] = useState([]);

    const fetchCustomers = async () => {
        fetch('/api/v1/customers')
            .then(response => response.json())
            .then(jsonResponse => setCustomer(jsonResponse));
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    const removePost = (id) => {
        fetch('/api/v1/customers/' + id, {
            method: 'DELETE',
            headers: JSON_HEADERS
        }).then(fetchCustomers);
    
 
       
    }

    return (<div>
         
        <h2>Klientai</h2> 

        <Table selectable >
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Vardas</Table.HeaderCell>
                                        <Table.HeaderCell>Pavarde</Table.HeaderCell>
                                        <Table.HeaderCell>Telefono numeris</Table.HeaderCell>
                                        <Table.HeaderCell>Gimimo data</Table.HeaderCell>
                                        <Table.HeaderCell>Lojalumas</Table.HeaderCell>
                                        <Table.HeaderCell>Sukūrimo data</Table.HeaderCell>
                                        <Table.HeaderCell>Veiksmai</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {customers.map(customer => (
                                        <Table.Row key={customer.id}>
                                            <Table.Cell>{customer.name}</Table.Cell>
                                            <Table.Cell>{customer.surname}</Table.Cell>
                                            <Table.Cell>{customer.phoneNumber}</Table.Cell>
                                            <Table.Cell>{customer.birthday}</Table.Cell>
                                            <Table.Cell>{customer.loyal ? "Lojalus" : " "}</Table.Cell>
                                            <Table.Cell>{customer.createdDate}</Table.Cell>

                                            <Table.Cell collapsing>
                                            <Link to={'/customers/view/' + customer.id}><Button basic compact icon='eye' title='Peržiūrėti' ></Button></Link>
                                                
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table> 
                            <Divider></Divider> 
                              
        
    </div>);
}