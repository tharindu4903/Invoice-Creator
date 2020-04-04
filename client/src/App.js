import React, { Component } from 'react';
import {Navbar,InputGroup,FormControl,Form,Button,Col} from 'react-bootstrap';
import './index.css';
import logo from "./13.png";
import axios from 'axios';
import { saveAs } from 'file-saver';
 

class App extends Component { 
   state = {
  invoiceNo :1000000,
  customerName : "unknown",
  des1 :'',
  qty1 :0,
  pr1 :0,
  des2 :'',
  qty2 :0,
  pr2 :0,
  des3 :'',
  qty3 :0,
  pr3 :0,
  des4 :'',
  qty4 :0,
  pr4 :0,
  des5 :'',
  qty5 :0,
  pr5 :0,
  des6 :'',
  qty6 :0,
  pr6 :0,

  
}
handleChange = ({ target: { value, invoiceNo }}) => this.setState({ [invoiceNo]: value })

createAndDownloadPdf = () => {
  axios.post('/create-pdf', this.state)
    .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, 'newPdf.pdf');
    })
}


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
        name="invoiceNo"
        onChange={this.handleChange}
        aria-label="invoice no"
        aria-describedby="basic-addon1"
        
      />
    </InputGroup>
  
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Customer Name"
        name="customerName"
        onChange={this.handleChange}
        aria-label="Customer Name"
        aria-describedby="basic-addon2"
        
      />
    
    </InputGroup>
    </div>
    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Description</Form.Label>
      <Form.Control type="description" placeholder="Description" name="des1"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Quntity</Form.Label>
      <Form.Control type="quntity" placeholder="Quntity" name="qty1"onChange={this.handleChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Price</Form.Label>
      <Form.Control type="price" placeholder="Price" name="pr1"onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" name="des2"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" name="qty2"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" name="pr2"onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" name="des3"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" name="qty3"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" name="pr3"onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" name="des4"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" name="qty4"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" name="pr4"onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" name="des5"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" name="qty5"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" name="pr5"onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="description" placeholder="Description" name="des6"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="quntity" placeholder="Quntity" name="qty6"onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Control type="price" placeholder="Price" name="pr6"onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>


  <Button variant="primary" type="submit"onClick={this.createAndDownloadPdf}>
    Create Invoice
  </Button>
</Form>
    </div>

  );
}
}
export default App;
