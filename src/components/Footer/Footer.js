import React from 'react'
import './Footer.css';
import { Row, Col,Form } from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

const Footer = () => {
  return (
    <>
     <div className="footer">
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <Row className="padding">
      <Col md={10}>
      <input className='input'
        type="text"
        placeholder="Email Address" 
      />
      </Col>
      <Col md={2}>
      <button className='submit'>Get Started   </button>
      </Col>
      </Row>
    <div>
    <p className="footer1">Questions? Call 000-800-919-1694</p>
    </div>
    <Row className="footer3 ">
      <Col md={3}>
      <p className="ul">FAQ</p>
      <p className="ul">Investor Relations</p>
      <p className="ul">Privacy</p>
      <p className="ul">Speed Test</p>
      </Col>
      <Col md={3}>
      <p className="ul">Help Centre</p>
      <p className="ul">Jobs</p>
      <p className="ul">Cookie Preferences</p>
      <p className="ul">Legal Notices</p>
      </Col>
      <Col md={3}>
      <p className="ul">Account</p>
      <p className="ul">Ways to Watch</p>
      <p className="ul">Corporate Information</p>
      <p className="ul">Only on Netflix</p>
      </Col>     
      <Col md={3}>
      <p className="ul">Media Centre</p>
      <p className="ul">Terms of Use</p>
      <p className="ul">Contact Us</p>
      </Col>
      </Row>
      <Row className="padding">
      <Col md={3} className='language'>
      <Form.Select as="select">
       <option value="1">English</option>
       <option value="2">Hindi</option>
       </Form.Select>
       </Col>
      </Row>
      <Row className="padding">
        <p className="footer4">
        Netflix India
        </p>
      </Row>
      </div>
    </>
    
  )
}

export default Footer