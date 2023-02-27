import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react'


export function CreateCustomerPage(props) {
    const [name, setName] = useState("");   
    const [weight, setWeight] = useState("");
    const [sector, setSector] = useState("");

    const listUrl = useHref('/customers/view/' + params.id);

    const clear = () => {
        setName("");        
        setWeight("");
        setSector("");        
    }

    const applyResult = (result) => {
        if (result.ok) {
            clear();
        } else {
            window.alert("Nepavyko sukurt: " + result.status);
        }
    };

    const createCustomer = () => {
        fetch(
            `/api/v1/customers/${params.id}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    weight,
                    sector,                    
                })
        }).then(applyResult)
        .then(() => window.location = listUrl);
    };

    // useEffect(() => {
    //     if (title === "") {
    //         document.getElementById('title').style.background = 'red';
    //     } else {
    //         document.getElementById('title').style.background = 'green';
    //     }
    // });

    return (
        <fieldset id="create">
            <legend>Pridėti naują inventorių</legend>

            <div>
                <label htmlFor="name">Pavadinimas</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>            
            <div>
                <label htmlFor="weight">Svoris</label> 
                <input
                    id="weight" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="sector">Sektorius</label>
                <input id="sector" value={sector} onChange={(e) => setLoyal(e.target.value)}/>
            </div> 
            <div>
                <Button onClick={createItem}>Pridėti</Button>
            </div>
        </fieldset>
    )
}