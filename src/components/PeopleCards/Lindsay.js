import React from 'react'
import Placeholder from '../../assets/profilepics/Placeholder3.png'
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle,
  CardText,
  Button,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import Github from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedin.png'


const Lindsay = () => {
  return (
    <div>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img
          src={Placeholder}
          alt="Profile Picture"
        // style={{
        //   borderRadius: '50%',
        // }}
        />
        <CardBody>
          <CardTitle tag="h5">
          Lindsay Rogers
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Backend Developer
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Lindsay