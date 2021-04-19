import React from 'react';
import ChatBox from "../components/chat/ChatBox";
import PictureCard from "../components/shared/PictureCard";
import Typography from "@material-ui/core/Typography";
import {Col, Row} from "react-bootstrap";

const NeedHelp = () => {

  return (
    <div className='container my-5 mx-auto'>
      <Row className='m-5'>
        <Col className='m-3' xl={15}>
          <PictureCard title='FLIGHT CHANGES & CANCELLATIONS' text='Change or cancel a flight, rebook a delayed or cancelled flight, make same-day travel changes, check-in, get
            your boarding pass, check flight status, or sign up for flight notifications.'
                       image='https://content.delta.com/content/www/us/en/need-help/overview.damAssetRender.20200716T0941037970400.html/content/dam/delta-www/responsive/brand/aircraft-sunset-pink-clouds-945.jpg'/>
        </Col>
        <Col className='m-3' xl={15}>
          <PictureCard title='REFUND REQUESTS & STATUS'
                       text='Apply for a refund for tickets, unused trip purchases, unused Trip Protection, or check refund status.'
                       image='https://content.delta.com/content/www/us/en/need-help/overview.damAssetRender.20180619T1805095210400.html/content/dam/delta-www/responsive/brand/man-cellphone-945.jpg'/>
        </Col>
        <Col className='m-3' xl={15}>
          <PictureCard title='FEEDBACK & COMPLAINTS'
                       text='Click here to give feedback or file a complaint about your travel experience, Delta Vacations, or to make a baggage claim'
                       image='https://content.delta.com/content/www/us/en/need-help/overview.damAssetRender.20190627T1508398560400.html/content/dam/delta-com/products/delta-experiences/comfort-plus/dcp-boarding-man-priority-366.jpg'/>
        </Col>
        <Col className='m-3' xl={15}>
          <PictureCard title='SEATS'
                       text='Select, change or upgrade your seat on an upcoming flight, purchase Preferred Seats, or request special assistance.'
                       image='https://content.delta.com/content/www/us/en/need-help/overview.damAssetRender.20200716T0942071210400.html/content/dam/delta-www/responsive/brand/seats-sunlight-945.jpg'/>
        </Col>
        <Col className='m-3' xl={15}>
          <PictureCard title='CORONAVIRUS TRAVEL FAQS'
                       text='Have questions about how coronavirus may impact your reservation and travel? We have compiled a list of our most commonly asked questions to help you find answers.'
                       image='https://content.delta.com/content/www/us/en/need-help/overview.damAssetRender.20200604T1557116580400.html/content/dam/delta-com/coronavirus/agent-mask-smile-closeup-1200.jpg'/>
        </Col>
      </Row>
     <div className='text-center'>
       <ChatBox/>
     </div>
    </div>
  );
}

export default NeedHelp;
