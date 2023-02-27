import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Comment,
  Button,
  Table,
    Divider
  
} from "semantic-ui-react";

const JSON_HEADERS = {
  'Content-Type': 'application/json'
};

export function ViewCustomer() {
  const params = useParams();
  const [customer, setCustomer] = useState({});
  const [items, setItems] = useState([]);
  
  
  const fetchItems = () => {
    fetch(`/api/v1/items/${params.id}/items`)
      .then((response) => response.json())
      .then(setItems);
  };

  const removeItem = (id) => {
        fetch('/api/v1/items/' + id, {
            method: 'DELETE',
            headers: JSON_HEADERS
        }).then(fetchItems)            
    }

  console.log(params);

  useEffect(() => {
    fetch("/api/v1/customers/" + params.id)
      .then((response) => response.json())
      .then(setCustomer);
  }, [params.id]);


  useEffect(() => {
    fetch(`/api/v1/items/${params.id}/items`)
      .then((response) => response.json())
      .then(setItems);
  }, [params.id]);

  return (
    <div>
      {console.log(customer)}

      <div>{customer.createdDate}</div>
      <div>Vardas: {customer.name}</div>

      <div>
        <b>Pavarde: {customer.surname}</b>
      </div>

      <div>Tel. Nr.: {customer.phoneNumber}</div>
      <div>Gimimo data: {customer.birthday}</div>
      <div>Lojalumas: {customer.loyal}</div>
      

      <div>
      
      </div>
      <Table selectable >
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Pavadinimas</Table.HeaderCell>
                                        <Table.HeaderCell>Svoris</Table.HeaderCell>
                                        <Table.HeaderCell>Sektorius</Table.HeaderCell>
                                        <Table.HeaderCell>Pridėjimo data</Table.HeaderCell>    
                                        <Table.HeaderCell>Veiksmai</Table.HeaderCell>                                       
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {items.map(item => (
                                        <Table.Row key={item.id}>
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>{item.weight}</Table.Cell>
                                            <Table.Cell>{item.sector}</Table.Cell>                                            
                                            <Table.Cell>{item.createdDate}</Table.Cell>
                                            <Button basic compact title='Ištrinti' icon='trash alternate' onClick={() => removeItem(item.id)}></Button>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>     
      
      <Link to={'/create/items/' + params.id}><Button>Pridėti naują</Button></Link>
      <Divider></Divider>
    </div>
  );
}
