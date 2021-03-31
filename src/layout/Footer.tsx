import React from 'react';
import IconButton from "../components/shared/IconButton";
import {Col, Row} from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary text-lg-start">
      <div style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        <Row className="text-light p-5">
          <Col className='my-1 mx-5'>
            <h5 className='text-secondary '>About Utopia</h5>
            <a className="white-link" href="/#">About Us</a>
            <a className="white-link" href="/#">Careers</a>
            <a className="white-link" href="/#">News Hub</a>
            <a className="white-link" href="/#">Investor Relations</a>
            <a className="white-link" href="/#">Investor Relations</a>
            <a className="white-link" href="/#">Investor Relations</a>
            <a className="white-link" href="/#">Travel Agents</a>
            <a className="white-link" href="/#">Mobile App</a>
          </Col>
          <Col className='my-1 mx-5'>
            <h5 className='text-secondary '>CUSTOMER SERVICE</h5>
            <a className="white-link" href="/#">Need Help?</a>
            <a className="white-link" href="/#">Careers</a>
            <a className="white-link" href="/#">Message Us</a>
          </Col>
          <Col className='my-1 mx-5'>
            <h5 className='text-secondary'>SITE SUPPORT</h5>
            <a className="white-link" href="/#">Login Help</a>
            <a className="white-link" href="/#">Site Map</a>
            <a className="white-link" href="/#">Browser Compatibility</a>
            <a className="white-link" href="/#">Accessibility</a>
            <a className="white-link" href="/#">Booking Information</a>
          </Col>
          <Col className='my-1 mx-5'>
            <h5 className='text-secondary'>POLICIES</h5>
            <a className="white-link" href="/#">Customer Commitment</a>
            <a className="white-link" href="/#">Tarmac Delay Plan</a>
            <a className="white-link" href="/#">Legal</a>
            <a className="white-link" href="/#">Sustainability</a>
            <a className="white-link" href="/#">Contract of Carriage</a>
            <a className="white-link" href="/#">Cookies, Privacy & Security</a>
            <a className="white-link" href="/#">Human Trafficking Statement</a>
          </Col>
        </Row>
        <div className="text-light text-center p-3">
          <Row className="d-flex m-2 pb-5 list-unstyled justify-content-center">
            <Col className='m-3'>
              <a href="https://apex.aero/pastpcawinners" target="" data-id="footer_nav_ext_icon"
                 data-link="https://apex.aero/pastpcawinners">
                <img
                  data-src="https://c.ekstatic.net/ecl/logos/awards/apex-passenger-entertainment-award-2020.svg?h=noF4fcnMnSMQ4SQDXeFPBg"
                  alt="APEX Awards Best Entertainment Winner 2020" style={{width: "240px", height: "80px"}}
                  src="https://c.ekstatic.net/ecl/logos/awards/apex-passenger-entertainment-award-2020.svg?h=noF4fcnMnSMQ4SQDXeFPBg"
                  data-was-processed="true"/>
              </a>
            </Col>
            <Col className='m-3'>
              <a href="https://apex.aero/awards/official-airline-ratings/2021-official-airline-ratings-recipients/"
                 target="_blank" rel="noreferrer" data-id="footer_nav_ext_icon"
                 data-link="https://apex.aero/awards/official-airline-ratings/2021-official-airline-ratings-recipients/">
                <img
                  data-src="https://c.ekstatic.net/ecl/logos/awards/fgfa-star.svg?h=Za6v2MGXyMZnknGkPgla4Q"
                  alt="2021 APEX official airline ratings" style={{width: "240px", height: "80px"}}
                  src="https://c.ekstatic.net/ecl/logos/awards/fgfa-star.svg?h=Za6v2MGXyMZnknGkPgla4Q"
                  data-was-processed="true"/></a>
            </Col>
            <Col className='m-3'>
              <a href="https://www.worldairlineawards.com/worlds-best-inflight-entertainment-2018/" target="_blank"
                 rel="noreferrer" data-id="footer_nav_ext_icon"
                 data-link="https://www.worldairlineawards.com/worlds-best-inflight-entertainment-2018/">
                <img
                  data-src="https://c.ekstatic.net/ecl/logos/awards/skytrax-badge-2019.svg?h=1fb76e074d973bfc22470adad6d5cae0"
                  alt="Skytrax Awards 2019" style={{width: "240px", height: "80px"}}
                  src="https://c.ekstatic.net/ecl/logos/awards/skytrax-badge-2019.svg?h=1fb76e074d973bfc22470adad6d5cae0"
                  data-was-processed="true"/></a>
            </Col>
          </Row>
          <div className='small m-2 text-secondary '>
            © 2020 Copyright: utopia | Travel may be on other airlines.
          </div>
          <div className='small m-2 text-secondary'>Terms and conditions apply to all offers and SkyMiles benefits. See
            specific offer for details, and visit
            SkyMiles Membership Guide & Program Rules
          </div>
          <IconButton className='fab fa-facebook-square m-2' size='lg' secondary/>
          <IconButton className='fab fa-twitter-square m-2' size='lg' secondary/>
          <div style={{marginBottom: 75}}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


