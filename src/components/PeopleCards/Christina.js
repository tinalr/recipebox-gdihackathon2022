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
import useCollapse from 'react-collapsed';


const Christina = () => {
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
          <CardTitle 
            style={{
              fontFamily: 'Vibur, cursive',
            }}
            tag="h3">
            Christina Rontell
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
                Christina is a design-minded Frontend Developer and a higher education professional who holds a Master of Science in Higher Education Administration and Policy from Northwestern University. She is passionate about building beautiful and intuitive tools that meet users’ real needs. When she’s away from her computer, you will find her reading science fiction, crocheting, or walking with her dog, Satchel.
                </CardText>
              </div>
            </div>
          </div>
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