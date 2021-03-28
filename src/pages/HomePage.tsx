import React from 'react';
import {Carousel, Col, Row, Card, Button} from "react-bootstrap";
import pr from '../assets/images/PowerfulReasons_hero.jpg';
import FlightSearchBar from "../components/flights/FlightSearchBar";
//https://content.delta.com/content/www/us/en/plan-your-next-trip/where-we-fly.damAssetRender.20200702T1205197940400.html/content/dam/delta-com/coronavirus/dock-destinations-desktop.png
const HomePage = () => {
  return (
    <>
      <div className='bg-primary' style={{borderTop: "1px solid rgba(255, 255, 255, 0.5)"}}>
        <Carousel className='container pt-4 utopia-carousel' fade>
          <Carousel.Item>
            <img style={{height: "584px"}}
                 className="d-block w-100"
                 src={pr}
                 alt="First slide"
            />
            <div className="mask"/>
            <Carousel.Caption>
              <h2 className='text-light'>READY TO TRAVEL? CHECK WHAT'S OPEN</h2>
              <p>Use our interactive map to help you plan your next trip.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{height: "584px"}}
                 className="d-block w-100"
                 src="https://content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200515T1706342920400.html/content/dam/delta-tnt/homepage/hero/delta/onboard-safety-infographic2-1600.jpg"
                 alt="Second slide"
            />

            <Carousel.Caption>
              <h2 className='text-light'>SAFER TRAVEL AT EVERY STEP.</h2>
              <p>Get ready to experience the Utopia CareStandard℠ at each step of the travel journey.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" style={{height: "584px"}}
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
              alt="Third slide"
            />
            <div className="mask"/>
            <Carousel.Caption>
              <h2 className='text-light'>READY TO TRAVEL? CHECK WHAT'S OPEN</h2>
              <p>Use our interactive map to help you plan your next trip.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container mt-2'>
        <FlightSearchBar/>
      </div>
      <Row className='container m-5 mx-auto justify-content-center'>
        <Col xl={15}>
          <Card style={{width: '22rem', height: "100%"}} className='m-1'>
            <Card.Img variant="top"
                      src="https://content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1219469810400.html/content/dam/delta-tnt/homepage/covid/icon-flight-changes-1000.jpg"/>
            <Card.Body>
              <Card.Title>CAN I CANCEL/CHANGE MY FLIGHT?</Card.Title>
              <Card.Text>
                We understand you have questions. Learn more about our simplified waivers and find out if your
                upcoming flight qualifies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={15}>
          <Card style={{width: '22rem', height: "100%"}} className='m-1'>
            <Card.Img variant="top"
                      src="https://content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1219468950400.html/content/dam/delta-tnt/homepage/covid/icon-ecredit-1000.jpg"/>
            <Card.Body>
              <Card.Title>HOW DO I CHANGE MY FLIGHT AND FIND MY ECREDITS?</Card.Title>
              <Card.Text>
                We understand you have questions. Learn more about our simplified waivers and find out if your
                upcoming flight qualifies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={15}>
          <Card style={{width: '22rem', height: "100%"}} className='m-1'>
            <Card.Img variant="top"
                      src="https://content.delta.com/content/www/en_US/personalization/campaign/homepage/banner-promoquilt/us-carousel.damAssetRender.20200325T1219468420400.html/content/dam/delta-tnt/homepage/covid/icon-bell-1000.jpg"/>
            <Card.Body>
              <Card.Title>WHAT ARE THE LATEST TRAVEL UPDATES?</Card.Title>
              <Card.Text>
                We understand you have questions. Learn more about our simplified waivers and find out if your
                upcoming flight qualifies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;

