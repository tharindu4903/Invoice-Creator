import React, { Component } from 'react';
import { Navbar, InputGroup, FormControl, Form, Button, Col } from 'react-bootstrap';
import './index.css';
import logo from "./13.png";
import axios from 'axios';
import {saveAs}  from 'file-saver';
var Blob = require('blob');


class App extends Component {
  constructor() {
    super();
    this.state = {
      invoiceNo: 1000000,
      customerName: '',
      des1: '',
      qty1: '',
      pr1: '',
      tot1: '',
      des2: '',
      qty2: '',
      pr2: '',
      tot2: '',
      des3: '',
      qty3: '',
      pr3: '',
      tot3: '',
      des4: '',
      qty4: '',
      pr4: '',
      tot4: '',
      des5: '',
      qty5: '',
      pr5: '',
      tot5: '',
      des6: '',
      qty6: '',
      pr6: '',
      tot6: '',
      total: '',
      discount: 0,


    }
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })

  }



  calculation = () => {
    this.setState({ tot1: this.state.pr1 * this.state.qty1 });
    this.setState({ tot2: this.state.pr2 * this.state.qty2 });
    this.setState({ tot3: this.state.pr3 * this.state.qty3 });
    this.setState({ tot4: this.state.pr4 * this.state.qty4 });
    this.setState({ tot5: this.state.pr5 * this.state.qty5 });
    this.setState({ tot6: this.state.pr6 * this.state.qty6 });
    this.setState({ total: this.state.tot1 + this.state.tot2 + this.state.tot3 + this.state.tot4 + this.state.tot5 + this.state.tot6 });

  }
  all = (event) => {
    this.handleChange(event)
    this.calculation()

  }
  create = () => {
    axios.post('/create-pdf', this.state)
  }
 download =()=>{
  axios.get('fetch-pdf', { responseType: 'blob' })
  .then((res) => {
    const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

    saveAs(pdfBlob, 'newPdf.pdf');
  })

 }
 createAndDownloadPdf = () => {
  axios.post('/create-pdf', this.state)
    .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, 'newPdf.pdf');
    })
}


  render() {
    return (
      <div >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt="fg"
              src={logo}
              width="30"
              height="30"

            />{' '}
        D'Front Creations Invoice Genarator
      </Navbar.Brand>
        </Navbar>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="invoice no"
            name="invoiceNo"
            value={this.state.name}
            onChange={this.handleChange}
            aria-label="invoiceno"
            aria-describedby="basic-addon1"

          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Customer Name"
            name="customerName"
            value={this.state.name}
            onChange={this.handleChange}
            aria-label="CustomerName"
            aria-describedby="basic-addon2"

          />

        </InputGroup>

        <Form>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Label>Description</Form.Label>
              <Form.Control type="description" placeholder="Description" name="des1" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Quntity</Form.Label>
              <Form.Control type="quntity" placeholder="Quntity" name="qty1" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Label>Price</Form.Label>
              <Form.Control type="price" placeholder="Price" name="pr1" value={this.state.name}
                onChange={this.all} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Control type="description" placeholder="Description" name="des2" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="quntity" placeholder="Quntity" name="qty2" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control type="price" placeholder="Price" name="pr2" value={this.state.name}
                onChange={this.all} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Control type="description" placeholder="Description" name="des3" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="quntity" placeholder="Quntity" name="qty3" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="price" placeholder="Price" name="pr3" value={this.state.name}
                onChange={this.all} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control type="description" placeholder="Description" name="des4" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="quntity" placeholder="Quntity" name="qty4" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="price" placeholder="Price" name="pr4" value={this.state.name}
                onChange={this.all} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Control type="description" placeholder="Description" name="des5" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="quntity" placeholder="Quntity" name="qty5" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="price" placeholder="Price" name="pr5" value={this.state.name}
                onChange={this.all} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} >
              <Form.Control type="description" placeholder="Description" name="des6" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="quntity" placeholder="Quntity" name="qty6" value={this.state.name}
                onChange={this.all} />
            </Form.Group>

            <Form.Group as={Col} >
              <Form.Control type="price" placeholder="Price" name="pr6" value={this.state.name}
                onChange={this.all} />
            </Form.Group>
          </Form.Row>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Rs.</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Discount"
              name="discount"
              value={this.state.name}
              onChange={this.all}
              aria-label="discount"
              aria-describedby="basic-addon1"

            />
          </InputGroup>


          <Button variant="primary" type="submit" onClick={this.createAndDownloadPdf} >
            Create Invoice
            </Button>
        </Form>
      </div>

    );
  }

}

export default App;