import Github from '../assets/icons/github.png'
import LinkedIn from '../assets/icons/linkedin.png'
import Lucie from '../components/PeopleCards/Lucie'
import Christine from '../components/PeopleCards/Christine'
import Polina from '../components/PeopleCards/Polina'
import Lindsay from '../components/PeopleCards/Lindsay'
import Christina from '../components/PeopleCards/Christina'
import Kimberly from '../components/PeopleCards/Kimberly'
import Gauri from '../components/PeopleCards/Gauri'
import Mollie from '../components/PeopleCards/Mollie'
import Carlisha from '../components/PeopleCards/Carlisha'
import Bowl from '../assets/imgs/bowl.jpg'
import Pie from '../assets/imgs/toast.jpg'
import { useNavigate } from 'react-router-dom';


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

const AboutUsPage = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Card className="mb-3"
        style={{
          border: '1rem solid #70BA89'
        }}
      >
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5"
            >
              <h2
                style={{
                  fontFamily: 'Vibur, cursive',
                }}
              >Our Mission</h2>
              <p>"Note to Chef" makes adjusting for dietary accommodations simple by bringing common restrictions to the forefront of the recipe search experience. From the home page, select any number of overlapping dietary restrictions and a curated list of 10 top recipes will populate!</p>
              <p>
                If you find a recipe you enjoy, you can register for an account and save them to your profile for future use. You can also store recipes in a collection to make it easy to account for diverse dietary needs when planning for large gatherings. Additionally, a notes feature for saved recipes provides the ability to list adaptations to the recipe, and track details on each attempt. </p>
              <p>"Note to Chef" makes it easy to take into consideration the unique dietary needs of yourself, and your guests!</p>
            </div>
          </Col>
          <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <div>
              <img
                src={Bowl}
                alt="Bowl"
                style={{
                  maxWidth: '30rem'
                }}
              />
            </div>
          </Col>
        </Row>
      </Card>
      <Row className="d-flex align-items-center justify-content-center">
        <h2 
          className="text-center mt-5 mb-3"
          style={{
            fontFamily: 'Vibur, cursive',
          }}
        >Our Team</h2>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Christine /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Carlisha /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Lucie /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Christina /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Kimberly /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Gauri /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Mollie /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Polina /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Lindsay /></Col>
      </Row>
      <Card className="mb-3"
        style={{
          border: '1rem solid #70BA89',
          borderBottom: 'none'
        }}
      >
        <Row>
          <Col className="col-auto d-flex flex-column justify-content-center align-items-center">
            <img
              src={Pie}
              alt="Pie"
              style={{
                maxWidth: '30rem'
              }}
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5">
              <h2
                style={{
                  fontFamily: 'Vibur, cursive',
                }}
              >About Us</h2>
              <p>Our team came together around a passion for nutrition and inclusion for diverse dietary needs during the GirlDevelopIt 2nd Annual Virtual Hackathon 2022.</p>
              <p> Over the course of three days, we developed our application idea, coordinated teams for the frontend and backend, met in daily stand-ups, designed in Figma, worked asynchronously across timezones, thought through the user experience and built a close-knit community. </p>
              <p>All of us contributed to the success of this project, and we're pleased to present to you "Note to Chef"!</p>
            </div>
          </Col>
        </Row>
        <div
          className="text-end"
          style={{
            backgroundColor: '#70BA89'
          }}
        >
          <a  href="https://github.com/tinalr/recipebox-gdihackathon2022">
            <button
              className="btn text-white hover-dark"
              style={{
                fontFamily: 'Vibur, cursive',
                backgroundColor: '#70BA89'
              }}
            >GITHUB REPOSITORY</button>
          </a>
        </div>
      </Card>
    </Container>

  );
};

export default AboutUsPage;