import React, { useState, useMemo } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import pl from "date-fns/locale/pl";

registerLocale("pl", pl);

const AddForm = props => {
  let defaultDate = new Date();
  const [identifier, setIdentifier] = useState("");
  const [gender, setGender] = useState("Samiec");
  const [shoppingDate, setShoppingDate] = useState(defaultDate);
  const [price, setPrice] = useState("0");

  const data = useMemo(
    () => ({
      idPen: props.id,
      id: identifier,
      pigGender: gender === "Samiec" ? "m" : "f",
      pigShoppingDate: shoppingDate,
      pigShoppingPrice: price
    }),
    [props.id, identifier, gender, shoppingDate, price]
  );

  const submitHandler = event => {
    event.preventDefault();
    console.log(data);

    fetch("http://obb-api.herokuapp.com/add-pig", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
      })
      .then(props.showAddUnitHandler())
      .catch(error => {
        console.error("Error:", error);
      });

    setTimeout(() => {
      props.reloadHandler()
    }, 500)
  };

  return (
    <div className="AddUnitForm">
      <Button
        className="hide-selection"
        variant="dark"
        onClick={props.showAddUnitHandler}
      >
        Ukryj
      </Button>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1" className="add-input">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Wpisz ID jednostki"
            onChange={event => setIdentifier(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1" className="add-input">
          <Form.Label>Płeć</Form.Label>
          <Form.Control
            as="select"
            onChange={event => setGender(event.target.value)}
          >
            <option>Samiec</option>
            <option>Samica</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1" className="add-input">
          <Form.Label>Cena</Form.Label>
          <Form.Control
            type="text"
            placeholder="0"
            onChange={event => setPrice(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1" className="add-input">
          <Form.Label>Data zakupu</Form.Label>
          <DatePicker
            className="date-picker"
            locale="pl"
            selected={shoppingDate}
            onChange={date => setShoppingDate(date)}
          />
        </Form.Group>
      </Form>

      <Button variant="success" onClick={submitHandler}>
        POTWIERDŹ
      </Button>
    </div>
  );
};

export default AddForm;
