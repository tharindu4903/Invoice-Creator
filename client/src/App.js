import React, { Component } from 'react';
import {Navbar,InputGroup,FormControl,Form,Button,Col} from 'react-bootstrap';
import './index.css';
import logo from "./13.png";
 

class App extends Component {
render() {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="fg"
          src={logo}
          width="50"
          height="30"
         
        />{' '}
        D'Front Creations Invoice Genarator
      </Navbar.Brand>
    </Navbar>
    <div>
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="invoice no"
        aria-label="invoice no"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Customer Name"
        aria-label="Customer Name"
        aria-describedby="basic-addon2"
      />
    
    </InputGroup>
    </div>
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Description</Form.Label>
      <Form.Control type="description" placeholder="Description" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Quntity</Form.Label>
      <Form.Control type="quntity" placeholder="Quntity" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Price</Form.Label>
      <Form.Control type="price" placeholder="Price" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Create Invoice
  </Button>
</Form>
    </div>

  );
}
}
export default App;
