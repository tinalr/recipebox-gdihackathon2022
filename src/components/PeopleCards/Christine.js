import React from 'react'
import ChristineB from '../../assets/profilepics/ChristineBoegemann.jpeg'
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


const Christine = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <Card
        style={{
          width: '18rem',
          border: '1rem solid #70BA89'
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
            src={ChristineB}
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
            Christine Boegemann
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
                  Christine studied C# and .NET in a coding bootcamp, and she utilized those skills by coding server-side logic for this app. She is currently studying Blazor in her spare time, and she is looking to pivot into a role as a .NET developer. She is passionate about learning about accessibility, watching silly cartoons, and creating new recipes.
                </CardText>
              </div>
            </div>
          </div>
          <a href="https://github.com/cboegemann"><img
            src={Github}
            alt="Github"
            className="mx-2"
            style={{
              width: '3rem'
            }}
          /></a>
          <a href="https://www.linkedin.com/in/christineboegemann/"><img src={LinkedIn} alt="LinkedIn"
            style={{
              width: '3rem'
            }} /></a>
        </CardBody>
      </Card>
    </div>
  )
}

export default Christine