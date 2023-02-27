import { useEffect, useState } from 'react';
import { useHref } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react'


export function CreateCustomerPage(props) {
    const [name, setName] = useState("");   
    const [surname, setSurname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthday, setBirthday] = useState("");
    const [loyal, setLoyal] = useState(false);



    const listUrl = useHref('/');

    const clear = () => {
        setName("");        
        setSurname("");
        setPhoneNumber("");
        setBirthday("");
        setLoyal(false);
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
            '/api/v1/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    surname,
                    phoneNumber,
                    birthday,
                    loyal
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
            <legend>Sukurti naują vartotoją</legend>

            <div>
                <label htmlFor="name">Vardas</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>            
            <div>
                <label htmlFor="surname">Pavarde</label> 
                <input
                    id="surname" 
                    value={surname} 
                    onChange={(e) => setSurname(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Telefono numeris</label>
                <input id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="birthday">Gimimo data</label>
                <input id="birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
            </div> 
            <div>
                <label htmlFor="loyal">Lojalumas</label>
                <input id="loyal" value={loyal} onChange={(e) => setLoyal(e.target.value)}/>
            </div> 
            <div>
                <Button onClick={createCustomer}>Create</Button>
            </div>
        </fieldset>
    )
}