import React from 'react'
import Placeholder from '../../assets/profilepics/Placeholder4.png'
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
          width: '18rem',
          border: '1rem solid #70BA89'
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
          <CardTitle 
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            tag="h3">
            Lindsay Rogers
          </CardTitle>
          <CardSubtitle
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            className="mb-2 text-muted"
            tag="h5"
          >
            Backend Developer
          </CardSubtitle>
          <CardText 
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            className="text-white">
            Read More
          </CardText>
          <a href="https://github.com/lindsRogers"><img src={Github} alt="Github"
            className="mx-2"
            style={{
              width: '3rem'
            }} /></a>
          <a href="https://www.linkedin.com/in/lindsay-rogers-/"><img src={LinkedIn} alt="LinkedIn"
            style={{
              width: '3rem'
            }} /></a>
        </CardBody>
      </Card>
    </div>
  )
}

export default Lindsay