import React from 'react'
import './Header.css';
 import logo2 from '../Assests/logo2.png'
import { Row, Col,Form } from "react-bootstrap";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
const Header = () => {
  return (
    <>
    <div className='header'>
    
      <Row className="padding1">
        <Col md={4}><img src={logo2} alt='' className='image' /></Col>
      <Col md={4} className='language'>
      <Form.Select as="select">
       <option value="1">English</option>
       <option value="2">Hindi</option>
       </Form.Select>
       </Col>
       <Col md={4}>
      <button  className='signup'>&nbsp;Sign In </button>
      </Col>
      </Row>
        <div className='header2'>
           <h1> Unlimited movies, <br />
           TV  Shows and More</h1>
           <p>Starts at ₹149. Cancel at any time.</p>
        </div>
            <Row className="padding">
             <p className='header3'>Ready to watch? Enter your email to create or restart your membership.</p>
              <Col md={10}>
             <input className='input'
             type="text"
              placeholder="Email Address" 
             />
       </Col>
      <Col md={2}>
      <button className='submit'>&nbsp;&nbsp;&nbsp;&nbsp;Get Started &gt;  </button>
      </Col>
      </Row>
    </div>
    </>
  )
}

export default Header