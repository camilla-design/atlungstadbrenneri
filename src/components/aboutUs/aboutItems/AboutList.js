import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";

import WorkStaff from './WorkStaff';
import ContactUs from './ContactUs';
import Sustainability from './Sustainability';
import History from './History';
import FacebookNews from './FacebookNews';


import image1 from '../../../images/hero/sustainability.png';

import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';





function AboutList() {
    const API = API_URL + "/spiseriets";

    const [info, setInfo] = useState(null)
    
    useEffect(() => {
        axios.get(API)
        .then(response => {
            setInfo(response.data)
            console.log(response.data)
        })
    }, [API])
        

    if(info) {
        return (
            <>
<Tab.Container id="left-tabs" defaultActiveKey="staff">
  <Row >
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="staff">  KONTAKT PERSONER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="contact"> KONTAKT OSS</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sustaninability"> BÆREKRAFT</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="history"> HISTORIE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="news"> NYHETER</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="staff">
        <div class="card-title mt-5">
         <h3> Kontakt personer </h3>
         <hr></hr>
         </div>
         <div class="card-body">
        <p>Ønsker du å komme i kontakt med noen av våre ledere? Da finner du all kontakt informasjon her!</p>
        </div>
      <WorkStaff />

        </Tab.Pane>
        <Tab.Pane eventKey="contact">
        <div class="card-title mt-5">
         <h3> Kontakt oss </h3>
         <hr></hr>
         </div>
         <div class="card-body">
        Har du noen spørsmål, eller ønsker å komme i kontakt med oss?
        <ContactUs />
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="sustaninability">
        <div class="card-title mt-5">
         <h3> Bærekraft </h3>
         <hr></hr>
         </div>
         <div class="card-body">
        <img src={image1} width="200"/>
      <Sustainability />
      </div>
        </Tab.Pane>
        <Tab.Pane eventKey="history">
        <div class="card-title mt-5">
         <h3> Historie </h3>
         <hr></hr>
         </div>
         <div class="card-body">
        <History />
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="news">
        <div class="card-title mt-5">
         <h3> Facebook Nyheter </h3>
         <hr></hr>
         </div>
         <div class="card-body">
        <FacebookNews />
        </div>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>





           
        

        </>

        )
    }
    return(
        <div>
            
        </div>
    )
}

export default AboutList;