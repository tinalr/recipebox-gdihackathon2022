import React from 'react'
import ChristinaPic from '../../assets/profilepics/ChristinaRontell.jpg'
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


const Christina = () => {
  return (
    <div>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <div style={{
            width: '285px',
            height: '285px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '50%'
        }}>
          <img
            src={ChristinaPic}
            alt="Profile Picture"
            style={{
              display: 'inline',
              margin: '0 auto',
              height: 'AUTO',
              width: '100%'
            }}
          />
        </div>
        <CardBody>
          <CardTitle tag="h5">
            Christina Rontell
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
          <a href="https://github.com/tinalr"><img src={Github} alt="Github" 
          className="mx-2"
          style={{
            width: '3rem'
          }} /></a>
          <a href="https://www.linkedin.com/in/christina-rontell/"><img src={LinkedIn} alt="LinkedIn" 
          style={{
            width: '3rem'
          }} /></a>
        </CardBody>
      </Card >
    </div >
  )
}

export default Christina