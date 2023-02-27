import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Comment,
  Button,
  Checkbox,
  Form,
  TextArea,
  Card,
    Segment,
    Divider
  
} from "semantic-ui-react";

export function ViewCustomer() {
  const params = useParams();
  const [customer, setCustomer] = useState({});
  const [items, setItems] = useState([]);
  
  
  const fetchItems = () => {
    fetch(`/api/v1/items/${params.id}/items`)
      .then((response) => response.json())
      .then(setItems);
  };

  // const createItem = () => {
  //   fetch(`/api/v1/items/${params.id}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       author,
  //       text,
  //     }),
  //   })
  //     .then(applyResult)
  //     .then(fetchComments);
  // };

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
      <div>{customer.name}</div>

      <div>
        <b>{customer.surname}</b>
      </div>

      <div>{customer.phoneNumber}</div>
      <div>{customer.birthday}</div>
      <div>{customer.loyal}</div>
      

      <div>
        {/* <Divider hidden></Divider>
      <Segment inverted style={{width: "200px"}}>
        <Form >
          <Form.Field>
            <label>Autorius</label>
            <input
              placeholder="Autorius"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Komentaras</label>
            <TextArea
              placeholder="Last Name"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Field>
          <Button onClick={createComment}>Paskelbti</Button>
        </Form>
        </Segment> */}
      </div>
      <Comment.Group>
        {items.map((item, index) => (
          <Comment>
            <Comment.Content key={index}>
              <Comment.Author>{item.name}</Comment.Author>
              <Comment.Metadata>
                <span>{item.createdDate}</span>
              </Comment.Metadata>
              <Comment.Text>{item.weight}</Comment.Text>
              <Comment.Text>{item.sector}</Comment.Text>
            </Comment.Content>
          </Comment>

          // <p key={index}>
          //     <p>{comment.createdDate}</p>
          //     <p>Autorius: {comment.author}</p>
          //     <p>Komentaras: {comment.text}</p>

          // </p>
        ))}
      </Comment.Group>
      <Divider></Divider>
    </div>
  );
}
