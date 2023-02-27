import { useEffect, useState } from "react";
import { useHref } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

export function CreateCustomerPage(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [loyal, setLoyal] = useState(false);

  const listUrl = useHref("/");

  const clear = () => {
    setName("");
    setSurname("");
    setPhoneNumber("");
    setBirthday("");
    setLoyal(false);
  };

  const applyResult = (result) => {
    if (result.ok) {
      clear();
    } else {
      window.alert("Nepavyko sukurt: " + result.status);
    }
  };

  const createCustomer = () => {
    fetch("/api/v1/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        surname,
        phoneNumber,
        birthday,
        loyal,
      }),
    })
      .then(applyResult)
      .then(() => (window.location = listUrl));
  };

  return (
    <fieldset id="create">
      <legend>Sukurti naują vartotoją</legend>

      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="name"
            label="Vardas"
            placeholder="Vardas"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            fluid
            id="surname"
            label="Pavardė"
            placeholder="Pavardė"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <Form.Input
            fluid
            id="phoneNumber"
            label="Telefono numeris"
            placeholder="Telefono numeris"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Form.Input
            fluid
            id="birthday"
            label="Gimimo data"
            placeholder="Gimimo data"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          </Form.Group>
          <Form.Group inline>
          <Form.Radio
            label="Lojalus"
            control='input'
        type='radio'
        name='htmlRadios'
        onChange={() => setLoyal(true)}
          />
          <Form.Radio
            label="Įprastas"
            control='input'
        type='radio'
        name='htmlRadios'
        onChange={() => setLoyal(false)}
          />

        </Form.Group>
      </Form>

      <div>
        <Button onClick={createCustomer}>Create</Button>
      </div>
    </fieldset>
  );
}
