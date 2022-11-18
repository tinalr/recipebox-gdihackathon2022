import React from 'react'
import Placeholder from '../../assets/profilepics/Placeholder.png'
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

const Christine = () => {
  return (
    <div>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img src={Placeholder} alt="Profile Picture"/>
        <CardBody>
          <CardTitle tag="h5">
            Christine Boegemann
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
          <a href="https://github.com/cboegemann"><img 
            src={Github} 
            alt="Github" 
            style={{
              width: '3rem'
            }}
          /></a>
        </CardBody>
      </Card>
    </div>
  )
}

export default Christine