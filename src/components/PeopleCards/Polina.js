import React from 'react'
import Placeholder from '../../assets/profilepics/Placeholder2.png'
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


const Polina = () => {
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
          Polina Hermans
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
          <a href="https://github.com/ph202"><img src={Github} alt="Github" 
          className="mx-2"
          style={{
            width: '3rem'
          }} /></a>
          <a href="https://www.linkedin.com/in/polina-hermans-2b9838a4/"><img src={LinkedIn} alt="LinkedIn" 
          style={{
            width: '3rem'
          }} /></a>
        </CardBody>
      </Card>
    </div>
  )
}

export default Polina