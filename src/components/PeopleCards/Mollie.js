import React from 'react'
import ProfilePic from '../../assets/profilepics/Placeholder6.png'
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


const Mollie = () => {
  return (
    <div>
      <Card
        style={{
          width: '18rem'
        }}
      >
          <img
            src={ProfilePic}
            alt="Profile Picture"
          />
        <CardBody>
          <CardTitle tag="h5">
            Mollie Whaley
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Frontend Developer
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <a href="https://github.com/molliewhaley"><img src={Github} alt="Github" 
          style={{
            width: '3rem'
          }} /></a>
        </CardBody>
      </Card >
    </div >
  )
}

export default Mollie