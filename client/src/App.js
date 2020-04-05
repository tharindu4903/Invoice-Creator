import React, { Component } from 'react';
import { Navbar, InputGroup, FormControl, Form, Button, Col } from 'react-bootstrap';
import './index.css';
import logo from "./13.png";
import axios from 'axios';
import { saveAs } from 'file-saver';


class App extends Component {
  constructor() {
    super();
    this.state = {
      invoiceNo: 1000001,
      customerName: 'Tharindu',
      des1: 'hello world',
      qty1: 10,
      pr1: 100,
      tot1: 0,
      des2: '',
      qty2: 0,
      pr2: 0,
      tot2: 0,
      des3: '',
      qty3: 0,
      pr3: 0,
      tot3: 0,
      des4: '',
      qty4: 0,
      pr4: 0,
      tot4: 0,
      des5: '',
      qty5: 0,
      pr5: 0,
      tot5: 0,
      des6: '',
      qty6: 0,
      pr6: 0,
      tot6: 0,
      subTot: 0,
      discount: 100,
      total: 0
    }
  }
    handleChange = ({ target: { value, invoiceNo } }) => this.setState({ [invoiceNo]: value });
   
    
    tot1 = () => this.state.pr1 * this.state.qty1;
    tot1=this.tot1;
    tot2 = () => this.state.pr2 * this.state.qty2;
    tot2=this.tot2;
    tot3 = () => this.state.pr3 * this.state.qty3;
    tot3=this.tot3;
    tot4 = () => this.state.pr4 * this.state.qty4;
    tot4=this.tot4;
    tot5 = () => this.state.pr5 * this.state.qty5;
    tot5=this.tot5;
    tot6 = () => this.state.pr6 * this.state.qty6;
    tot6=this.tot6;

    total = () =>(this.state.tot1 + this.state.tot2 + this.state.tot3 + this.state.tot4 + this.state.tot5 + this.state.tot6);
    total=this.total;

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
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="invoice no"
              name="invoiceNo"
              onChange={this.handleChange}
              aria-label="invoiceno"
              aria-describedby="basic-addon1"

            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Customer Name"
              name="customerName"
              onChange={this.handleChange}
              aria-label="CustomerName"
              aria-describedby="basic-addon2"

            />

          </InputGroup>

          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="description" placeholder="Description" name="des1" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Quntity</Form.Label>
                <Form.Control type="quntity" placeholder="Quntity" name="qty1" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="price" placeholder="Price" name="pr1" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="description" placeholder="Description" name="des2" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="quntity" placeholder="Quntity" name="qty2" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="price" placeholder="Price" name="pr2" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="description" placeholder="Description" name="des3" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="quntity" placeholder="Quntity" name="qty3" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="price" placeholder="Price" name="pr3" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="description" placeholder="Description" name="des4" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="quntity" placeholder="Quntity" name="qty4" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="price" placeholder="Price" name="pr4" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="description" placeholder="Description" name="des5" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="quntity" placeholder="Quntity" name="qty5" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="price" placeholder="Price" name="pr5" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="description" placeholder="Description" name="des6" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="quntity" placeholder="Quntity" name="qty6" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="price" placeholder="Price" name="pr6" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Rs.</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Discount"
                name="discount"
                onChange={this.handleChange}
                aria-label="discount"
                aria-describedby="basic-addon1"

              />
            </InputGroup>


            <Button variant="primary" type="submit" onClick={this.createAndDownloadPdf}>
              Create Invoice
            </Button>
          </Form>
        </div>

      );
    }
  }
  export default App;
