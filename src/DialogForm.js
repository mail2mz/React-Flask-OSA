import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const options = [
  'cmd', 'cmd/IDN', 'cmd/LIM', 'cmd/LIM[min, max]', 'cmd/ECHO/string', 'cmd/PING', 'cmd/START', 'cmd/STOP', 'cmd/SINGLE', 'cmd/STATE', 'cmd/TRACE'
];


const defaultOption = options[0];

export default class DiaglogForm extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCommand = this.onChangeCommand.bind(this);
    this.onChangeResponse = this.onChangeResponse.bind(this);
    this.onChangeLogs = this.onChangeLogs.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      command: '',
      response: '',
      logs: ''
    }

  }

  onChangeCommand(e) {
    this.setState({ command: e.target.value })
  }

  onChangeResponse(e) {
    this.setState({ response: e.target.value })
  }

  onChangeLogs(e) {
    this.setState({ logs: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      command: this.state.command,
      response: this.state.response,
      logs: this.state.logs
    };

    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      command: '',
      response: '',
      logs: ''
    });
  }

  render() {
    return (<div className="form-wrapper">

     <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Command List" />

      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Command">
          <Form.Label>Command</Form.Label>
          <Form.Control type="text" value={this.state.command} onChange={this.onChangeCommand} />
        </Form.Group>

        <Form.Group controlId="Response">
          <Form.Label>Response</Form.Label>
          <Form.Control type="email" value={this.state.response} onChange={this.onChangeResponse} />
        </Form.Group>

        <Form.Group controlId="Logs">
          <Form.Label>Logs</Form.Label>
          <Form.Control type="text" value={this.state.logs} onChange={this.onChangeLogs} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Config
        </Button>
        <Button variant="danger" size="lg" block="block" type="submit">
		  Query
        </Button>
      </Form>
    </div>);
  }
}
