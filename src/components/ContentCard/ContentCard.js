import React from 'react'
import { Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './ContentCard.css';
const ContentCard = () => {
  return (
    <div className='about'>
    <Row className='padding'>
    <h1>More reasons to join</h1>
    <Col md={3}>
    <div className="card mx-1 d-flex flex-column">
    <div className="card-body d-flex flex-column justify-content-between">
   <h5 className="card-title">Enjoy on your TV</h5>
    <p className="card-text">Watch on smart TVs, PlayStation, Xbox, Chromecast, 
      Apple TV, Blu-ray players and more.</p>
   </div>
   </div>
   </Col>
   <Col md={3}>
    <div className="card mx-1 d-flex flex-column">
    <div className="card-body d-flex flex-column justify-content-between">
   <h5 className="card-title">Download your shows to watch offline</h5>
    <p className="card-text">Save your favourites easily and always have something to watch.</p>
   </div>
   </div>
   </Col>
   <Col md={3}>
    <div className="card mx-1 d-flex flex-column">
    <div className="card-body d-flex flex-column justify-content-between">
   <h5 className="card-title">Watch everywhere</h5>
    <p className="card-text">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
   </div>
   </div>
   </Col>
   <Col md={3}>
    <div className="card mx-1 d-flex flex-column">
    <div className="card-body d-flex flex-column justify-content-between">
   <h5 className="card-title">Create profiles for kids</h5>
    <p className="card-text">Watch on smart TVs, PlayStation, Xbox, Chromecast, 
      Apple TV, Blu-ray players and more.</p>
   </div>
   </div>
   </Col>
    </Row>
    <Row>

        <h1>Frequently Asked Questions</h1>
     <div className="accordion" id="accordionExample">
     <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Netflix?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, 
      documentaries and more – on thousands of internet-connected devices.
You can watch as much as you want, whenever you want, without a single ad – a
ll for one low monthly price. There's always something new to discover,
 and new TV shows and movies are added every week!      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       How much does Netflix cost?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Where can i Watch?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       How do i Cancel?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.   </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       What can i watch on Netflix?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals,
       and more. Watch as much as you want, anytime you want.  </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Is Netflix Good for kids?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.  </div>
    </div>
  </div>



</div>

    </Row>
  </div>
  )
}

export default ContentCard