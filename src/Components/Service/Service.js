import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
  

 
    const{serviceName,description,serviceFee,img}= props.service
    return (
        <div>
            <Card>
    <Card.Img className="flued" variant="top" src={img} />
    <Card.Body>
      <Card.Title className="fs-4 text">{serviceName}</Card.Title>
      <Card.Text>
          <p> {description}</p>
          
          <p>Service Fee : {serviceFee}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="bg-primary text-center">
      <h3 className="text-light ">Enroll Now</h3>
    </Card.Footer>
  </Card>
   {props.children} 
        </div>
    );
};

export default Service;