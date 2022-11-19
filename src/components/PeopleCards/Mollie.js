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
          width: '18rem',
          border:'1rem solid #70BA89'
        }}
      >
          <img
            src={ProfilePic}
            alt="Profile Picture"
          />
        <CardBody>
          <CardTitle 
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            tag="h3">
            Mollie Whaley
          </CardTitle>
          <CardSubtitle
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            className="mb-2 text-muted"
            tag="h5"
          >
            Frontend Developer
          </CardSubtitle>
          <CardText 
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            className="text-white">
            Read More
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