import React from "react";
import Form from 'react-bootstrap/Form'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import DialogForm from "./DialogForm";
import PlotOSA from "./PlotOSA";


var startButton = 'N';
var stopButton = 'N';
var singleButton = 'N';


function App() {

  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
{/*
            <Navbar.Brand>
              <Link to={"/create-student"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>

               <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav>

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>

         </Nav>

     */}
     </Container>
        </Navbar>
      </header>
      <Container>

     <div>
      <PlotOSA />
      </div>
	  </Container>

       <div>
	                <DialogForm />
       </div>


    </div>
  </Router>);
}

export default App;