import Github from '../assets/icons/github.png'
import LinkedIn from '../assets/icons/linkedin.png'
import Lucie from '../assets/profilepics/LucieChevreuil.png'
import Christina from '../assets/profilepics/ChristinaRontell.jpg'
import Placeholder from '../assets/profilepics/Placeholder.png'
import Placeholder2 from '../assets/profilepics/Placeholder2.png'
import Placeholder3 from '../assets/profilepics/Placeholder3.png'
import Placeholder4 from '../assets/profilepics/Placeholder4.png'
import Placeholder5 from '../assets/profilepics/Placeholder5.png'
import Placeholder6 from '../assets/profilepics/Placeholder6.png'

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
      <Card>
        <CardTitle tag="h5" className="text-center">
          About Us
        </CardTitle>
        <p>GirlDevelopIt (GDI) is a an organization with a mission to create welcoming, supportive opportunities for women and non-binary adults to learn software development skills. On Wednesday, November 16, 2022, GDI kicked off their 2nd Annual Virtual Hackathon with a theme of "Hack for Health". Developers from all over the world came together to pitch app ideas and form teams in order to present a finished product by Saturday, November 19, 2022.</p>

        <p>Our team came together around a passion for nutrition and inclusion for diverse dietary needs. Over the course of three days, we developed our application idea, coordinated teams for the frontend and backend, met in daily stand-ups, designed in Figma, worked asynchronously across timezones, thought through the user experience and built a close-knit community. All of us contributed to the success of this project, and we're pleased to present to you "Note to Chef"!</p>
        <p>"Note to Chef" makes adjusting for dietary accommodations simple by bringing common restrictions to the front page of the app. From the home page, select any number of overlapping dietary restrictions and a curated list of 10 top recipes will populate!
          If you find a recipe you enjoy, you can save it to your profile for future use. A notes feature  on saved recipes provides the ability to list adaptations to the recipe, track the success and struggles with each attempt, and rank the recipe difficulty. You can also store recipes to a collection when planning large family gatherings.
          "Chef it Up" makes it easy to take into consideration the unique dietary needs of yourself, and your guests!</p>
      </Card>
      <Card
        style={{
          width: '18rem'
        }}
      >
        <img src={Placeholder} alt="Profile Picture"/>
        <CardBody>
          <CardTitle tag="h5">
            Christine Boegemann
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Backend Developer
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
          </CardText>
          <a href="https://github.com/cboegemann"><img 
            src={Github} 
            alt="Github" 
            style={{
              width: '3rem'
            }}
          /></a>
        </CardBody>
      </Card>
    </Container>

  );
};

export default AboutUsPage;

// <div>
// {/* Profile Information */}
// <img src={PlaceHolder} alt="Profile Picture"/>
// <p>Christine Boegemann</p>
// <p>Role: Backend Developer</p>


// <img src={Lucie} alt="Profile Picture"/>
// <p>Lucie Chevreuil</p>
// <p>Role: Fullstack Developer</p>
// <a href="https://github.com/sasszz?tab=repositories"><img src={Github} alt="Github" /></a>
// <a href="https://www.linkedin.com/in/lucie-c-sasszz/"><img src={LinkedIn} alt="LinkedIn" /></a>

// <img src={PlaceHolder} alt="Profile Picture"/>
// <p>Polina Hermans</p>
// <p>Role: Frontend Developer</p>
// <a href="https://github.com/ph202"><img src={Github} alt="Github" /></a>
// <a href="https://www.linkedin.com/in/polina-hermans-2b9838a4/"><img src={LinkedIn} alt="LinkedIn" /></a>

// <img src={PlaceHolder} alt="Profile Picture"/>
// <p>Lindsay Rogers</p>
// <a href=""><img src={Github} alt="Github" /></a>
// <a href=""><img src={LinkedIn} alt="LinkedIn" /></a>

// <img src={Christina} alt="Profile Picture"/>
// <p>Christina Rontell</p>
// <p>Role: Frontend Developer</p>
// <a href="https://github.com/tinalr"><img src={Github} alt="Github" /></a>
// <a href="https://www.linkedin.com/in/christina-rontell/"><img src={LinkedIn} alt="LinkedIn" /></a>

// <img src={PlaceHolder} alt="Profile Picture"/>
// <p>Kimberly Suares</p>
// <p>Role: Frontend Developer</p>
// <a href="https://github.com/ksuares1"><img src={Github} alt="Github" /></a>
// <a href="https://www.linkedin.com/in/kimberlysuares/"><img src={LinkedIn} alt="LinkedIn" /></a>

// <img src={PlaceHolder} alt="Profile Picture"/>
// <p>Gauri Tilloo</p>
// <p>Role: Project Manager</p>
// <a href="www.linkedin.com/in/gtilloo"><img src={LinkedIn} alt="LinkedIn" /></a>

// <img src={PlaceHolder} alt="Profile Picture"/>
// <p>Mollie Whaley</p>
// <p>Role: Frontend Developer</p>
// <a href="https://github.com/molliewhaley"><img src={Github} alt="Github" /></a>
// <a href=""><img src={LinkedIn} alt="LinkedIn" /></a>

// <img src={PlaceHolder} alt="Profile Picture"/>
// <p>Carlisha Wilson</p>
// <p>Role: UX/UI, Design</p>
// <a href=""><img src={Github} alt="Github" /></a>
// <a href=""><img src={LinkedIn} alt="LinkedIn" /></a>

// </div>