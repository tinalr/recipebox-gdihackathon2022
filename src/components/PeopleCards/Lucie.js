import React from 'react'
import LuciePic from '../../assets/profilepics/Lucie.png'
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
import useCollapse from 'react-collapsed';


const Lucie = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <Card
        style={{
          width: '18rem',
          border:'1rem solid #70BA89'
        }}
      >
        <div style={{
          width: '256px',
          height: '256px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '50%'
        }}>
          <img
            src={LuciePic}
            alt="Profile Picture"
            style={{
              display: 'inline',
              margin: '0 auto',
              height: 'auto',
              width: '100%'
            }}
          />
        </div>
        <CardBody>
          <CardTitle 
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            tag="h3">
            Lucie Chevreuil
          </CardTitle>
          <CardSubtitle
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            className="mb-2 text-muted"
            tag="h5"
          >
            Fullstack Developer
          </CardSubtitle>
          <div 
            className="collapsible"
          >
            <div 
              style={{
                fontFamily: 'Vibur, cursive',
              }}
              className="header text-primary mb-3" {...getToggleProps()}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </div>
            <div {...getCollapseProps()}>
              <div className="content">
                <CardText className="mb-3">
                  Lucie graduated from Coding Dojo's bootcamp where she studied React, Java, Python and Javascript. She enjoys working on the frontend, especially with React. If she's not coding, she's outside running or enjoying the company of her two cats Mango and Wesley.
                </CardText>
              </div>
            </div>
          </div>
          <a href="https://github.com/sasszz?tab=repositories"><img src={Github} alt="Github" 
          className="mx-2"
          style={{
            width: '3rem'
          }} /></a>
          <a href="https://www.linkedin.com/in/lucie-c-sasszz/"><img src={LinkedIn} alt="LinkedIn" 
          style={{
            width: '3rem'
          }} /></a>
        </CardBody>
      </Card>
    </div>
  )
}

export default Lucie