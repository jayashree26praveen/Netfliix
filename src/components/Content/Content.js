import React from 'react';
import { Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Content.css';
import card1 from '../Assests/card1.jpeg';
import card2 from '../Assests/card2.jpeg';
import card3 from '../Assests/card3.jpeg';
import card4 from '../Assests/card4.jpeg';
import card5 from '../Assests/card5.jpeg';
import card6 from '../Assests/card6.jpeg';
import card7 from '../Assests/card7.jpeg';
import card8 from '../Assests/card8.jpeg';
import card9 from '../Assests/card9.jpeg';
import card10 from '../Assests/card10.jpeg';

const Content = () => {
  return (
   
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-center">
            <img src={card1} alt="Image 1" className="mx-1" />
            <img src={card2} alt="Image 2" className="mx-1" />
            <img src={card3} alt="Image 3" className="mx-1" />
            <img src={card4} alt="Image 4" className="mx-1" />
            <img src={card5} alt="Image 5" className="mx-1" />
          </div>
        </div>
        {/* Add more carousel-item sections if you want to create multiple slides */}
        <div className="carousel-item">
          <div className="d-flex justify-content-center">
            <img src={card6} alt="Image 1" className="mx-1" />
            <img src={card7} alt="Image 2" className="mx-1" />
            <img src={card8} alt="Image 3" className="mx-1" />
            <img src={card9} alt="Image 1" className="mx-1" />
            <img src={card10} alt="Image 2" className="mx-1" />
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <a className="carousel-control-prev previous" href="#myCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
      </>
<br/>
<br/>
      
    </div>
  );
};

export default Content;
