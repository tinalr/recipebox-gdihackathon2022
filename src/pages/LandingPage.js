import React, { useEffect, useState } from 'react';
import { Container, Col, Button, Row, CardBody, Card } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';
import veggiedip from '../assets/imgs/veggiedip.jpg';
import bowl from '../assets/imgs/bowl.jpg';
import bowl2 from '../assets/imgs/bowl2.jpg';
import breakfast from '../assets/imgs/breakfast.jpg';
import eggplant from '../assets/imgs/eggplant.jpg';
import eggtoast from '../assets/imgs/eggtoast.jpg';
import meat from '../assets/imgs/meat.jpg';
import noodles from '../assets/imgs/noodles.jpg';
import pasta from '../assets/imgs/pasta.jpg';
import pasta2 from '../assets/imgs/pasta2.jpg';
import pie from '../assets/imgs/pie.jpg';
import soup from '../assets/imgs/soup.jpg';
import steak from '../assets/imgs/steak.jpg';
import tacoscheese from '../assets/imgs/tacoscheese.jpg';
import toast from '../assets/imgs/toast.jpg';


const LandingPage = (props) => {
  const navigate = useNavigate();

  const [dietType, setDietType] = useState('');
  const [foodIntolerances, setIntolerances] = useState([]);

  const [cardOneSelected, setCardOneSelected] = useState(false);
  const [cardTwoSelected, setCardTwoSelected] = useState(false);
  const [cardThreeSelected, setCardThreeSelected] = useState(false);
  const [cardFourSelected, setCardFourSelected] = useState(false);
  const [cardFiveSelected, setCardFiveSelected] = useState(false);
  const [cardSixSelected, setCardSixSelected] = useState(false);
  const [cardSevenSelected, setCardSevenSelected] = useState(false);
  const [cardEightSelected, setCardEightSelected] = useState(false);

  console.log(dietType);
  console.log(foodIntolerances)

  const clickHandlerCardOne = (e) => {
    setCardOneSelected(!cardOneSelected)
    if (cardOneSelected === false) {
      setDietType('vegetarian')
      setCardTwoSelected(false)
    }
    else {
      setDietType('')
    }
  }

  const clickHandlerCardTwo = (e) => {
    setCardTwoSelected(!cardTwoSelected)
    if (cardTwoSelected === false) {
      setDietType("vegan")
      setCardOneSelected(false)
    }
    else {
      setDietType('')
    }
  }

  const clickHandlerCardThree = (e) => {
    setCardThreeSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'seafood'])
  }

  const clickHandlerCardFour = (e) => {
    setCardFourSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'gluten'])
  }

  const clickHandlerCardFive = (e) => {
    setCardFiveSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'treenut'])
  }

  const clickHandlerCardSix = (e) => {
    setCardSixSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'shellfish'])
  }

  const clickHandlerCardSeven = (e) => {
    setCardSevenSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'dairy'])
  }

  const clickHandlerCardEight = (e) => {
    setCardEightSelected(true)
    setIntolerances((intolerance) => [...intolerance, 'soy'])
  }

  const clearIntolerances = (e) => {
    setCardOneSelected(false)
    setCardTwoSelected(false)
    setCardThreeSelected(false)
    setCardFourSelected(false)
    setCardFiveSelected(false)
    setCardSixSelected(false)
    setCardSevenSelected(false)
    setCardEightSelected(false)
    setIntolerances([])
  }

  const handleSubmit = (e) => {
    props.func(foodIntolerances)
    props.func2(dietType)
    navigate('/recipes')
  }


  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <Row
              className="text-center"
              style={{
                fontFamily: 'Vibur, cursive',
              }}
            >
              <Col>
                <h2>Search Recipes by Diet</h2>
                <p
                  style={{
                    color: '#70BA89',
                  }}
                >SELECT ONE OR NONE</p>
              </Col>
            </Row>
            <Row xs="2" className="mb-3">
              <Col>
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardOne()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardOneSelected) ? "opacity-25" : ""}
                      src={veggiedip}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardOneSelected) ? "text-center mt-3 text-black" : "text-center mt-3"}>VEGETARIAN</h3>
                </Card>
              </Col>
              <Col>
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardTwo()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardTwoSelected) ? "opacity-25" : ""}
                      src={toast}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardTwoSelected) ? "text-center mt-3 text-black" : "text-center mt-3"}>VEGAN</h3>
                </Card>
              </Col>
            </Row>
            <Row
              className="text-center"
              style={{
                fontFamily: 'Vibur, cursive',
              }}
            >
              <Col>
                <h2 className="mt-3">Search Recipes by Intolerances</h2>
                <p
                  style={{
                    color: '#70BA89',
                  }}
                >SELECT UP TO SIX</p>
              </Col>
            </Row>
            <Row xs="2" className="mb-3" >
              <Col>
                {/* Card 3 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardThree()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardThreeSelected) ? "opacity-25" : ""}
                      src={eggtoast}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                  <h3 className={(cardThreeSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>SEAFOOD</h3>
                </Card>
              </Col>
              <Col>
                {/*Card 4 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardFour()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                    borderRadius: '0.5rem'
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <img
                      className={(cardFourSelected) ? "opacity-25" : ""}
                      src={pie}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        maxWidth: '100%',
                        borderRadius: '0.5rem'
                      }}
                    />
                  </div>
                  <h3 className={(cardFourSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>GLUTEN</h3>
                </Card>
              </Col>
            </Row>
            <Row xs="2" className="mb-3">
              <Col>
                {/* Card 5 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardFive()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardFiveSelected) ? "opacity-25" : ""}
                      src={bowl2}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardFiveSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>TREE NUTS</h3>
                </Card>
              </Col>
              <Col>
                {/*Card 6 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardSix()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardSixSelected) ? "opacity-25" : ""}
                      src={breakfast}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardSixSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>SHELLFISH</h3>
                </Card>
              </Col>
            </Row>
            <Row xs="2" className="mb-3">
              <Col>
                {/* Card 7 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardSeven()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardSevenSelected) ? "opacity-25" : ""}
                      src={bowl}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        maxWidth: 'auto'
                      }}
                    />
                  </div>
                  <h3 className={(cardSevenSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>DAIRY</h3>
                </Card>
              </Col>
              <Col>
                {/*Card 8 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardEight()}
                  style={{
                    maxWidth: '18rem',
                    border: '1rem solid #70BA89',
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}>
                  <div style={{
                    maxWidth: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img
                      className={(cardEightSelected) ? "opacity-25" : ""}
                      src={pasta}
                      alt="Food Picture"
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        maxWidth: '100%'
                      }}
                    />
                  </div>
                  <h3 className={(cardEightSelected) ? "text-black text-center mt-3" : "text-center mt-3"}>SOY</h3>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="text-center">
                <button 
                  style={{
                    backgroundColor: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                  }}
                  className="m-3 btn btnhover btn-lg text-white greenbtn" onClick={() => clearIntolerances()}>CLEAR</button>
                <button 
                  style={{
                    color: '#70BA89',
                    fontFamily: 'Vibur, cursive',
                    border: '1px solid #70BA89'
                  }}
                  className="m-3 btn btnhover btn-lg btn-white" onClick={() => handleSubmit()}>SUBMIT</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
