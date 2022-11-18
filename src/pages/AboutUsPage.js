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
  return (
    <Container>
      <Card className="mb-3"
      >
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5">
              <h1>About</h1>
              <p>"Note to Chef" makes adjusting for dietary accommodations simple by bringing common restrictions to the front page of the app. From the home page, select any number of overlapping dietary restrictions and a curated list of 10 top recipes will populate!</p>
              <p>
                If you find a recipe you enjoy, you can save it to your profile for future use. A notes feature  on saved recipes provides the ability to list adaptations to the recipe, track the success and struggles with each attempt, and rank the recipe difficulty. You can also store recipes to a collection when planning large family gatherings.</p>
              <p>"Note to Chef" makes it easy to take into consideration the unique dietary needs of yourself, and your guests!</p>
            </div>
          </Col>
          <Col className="col-auto - variable width content">
            <img
              src={Bowl}
              alt="Bowl"
              style={{
                width: '30rem'
              }}
            />
          </Col>
        </Row>
      </Card>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="d-flex align-items-center justify-content-center mb-3"><Christine /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Polina /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Lucie /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Christina /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Kimberly /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Gauri /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Mollie /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Carlisha /></Col>
        <Col className="d-flex align-items-center justify-content-center mb-3"><Lindsay /></Col>
      </Row>
      <Card className="mb-3"
      >
        <Row>
          <Col className="col-auto - variable width content">
            <img
              src={Pie}
              alt="Pie"
              style={{
                width: '30rem'
              }}
            />
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div className="p-5">
              <p>Our team came together around a passion for nutrition and inclusion for diverse dietary needs during the GirlDevelopIt 2nd Annual Virtual Hackathon 2022. Over the course of three days, we developed our application idea, coordinated teams for the frontend and backend, met in daily stand-ups, designed in Figma, worked asynchronously across timezones, thought through the user experience and built a close-knit community. All of us contributed to the success of this project, and we're pleased to present to you "Note to Chef"!</p>
              <a href="https://github.com/tinalr/recipebox-gdihackathon2022"><img src={Github} alt="Github"
                className="mx-2"
                style={{
                  width: '3rem'
                }} /></a>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>

  );
};

export default AboutUsPage;