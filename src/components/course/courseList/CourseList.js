import Activity from './Activity';
import Packages from './Packages';
import MeetingRoom from './MeetingRoom';

import image1 from '../../../images/hero/package.jpg';
import image2 from '../../../images/hero/meeting.JPG';
import event from '../../../images/logo/event.png';
import meetingIcon from '../../../images/logo/meeting.png';
import meetingRoomIcon from '../../../images/logo/conversation.png';

import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';



function CourseList() {
    return(

<Tab.Container id="left-tabs" defaultActiveKey="activity">
  <Row >
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="activity">  AKTIVITETER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="meeting">MØTEPAKKER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="rooms"> MØTEROM</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="activity">
        <div class="card-title mt-5">
         <h3> Aktiviteter </h3>
         <hr></hr>
         </div>
         <div class="card-body">
      <Activity />
      <a href="">Bestill</a>
      </div>
        </Tab.Pane>
        <Tab.Pane eventKey="meeting">
        <div class="card-title mt-5">
        <h3> Møtepakker  </h3>
        <hr></hr>
        </div>
        <div class="card-body">
          <p>Vi har fler ulike møtepakker på Brenneriet, vi tilpasser også etter dine behov og ønsker,
slik at du får ditt skreddersydde arrangement i våre unike og historiske lokaler

Kontakt oss for planleggingen av ditt møte.</p>
        <Packages />
        <a href="">Bestill</a>
        <div>
        <img src={image1} width="200"/>
        </div>
        </div>
        </Tab.Pane>
        <Tab.Pane eventKey="rooms">
        <div class="card-title mt-5">
        <h3> Møterom </h3>
        <hr></hr>
        </div>
        <div class="card-body">
          <p>Våre møtelokaler</p>
      <MeetingRoom />
      <a href="">Bestill</a>
        <div>
        <img src={image2} width="200"/>
        </div>
        </div>
        </Tab.Pane>
        
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>






    )
}

export default CourseList;