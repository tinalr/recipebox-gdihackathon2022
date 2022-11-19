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
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div style={{
                    width: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  >
                    <img alt="Card" src={veggiedip} className={(cardOneSelected) ? "opacity-50 card-img-top" : "card-img-top"}
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        width: 'auto',
                        borderRadius: '0px'
                      }}
                    />
                  </div>
                  <p className={(cardOneSelected) ? "opacity-100 text-center" : "text-center"}>VEGETARIAN</p>
                </Card>
              </Col>

              <Col>
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardTwo()}
                  style={{
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div
                    style={{
                      width: '256px',
                      height: '256px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img alt="Card" src={toast}
                      className={(cardTwoSelected) ? "opacity-50 card-img-top" : "card-img-top"}
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        width: 'auto',
                        borderRadius: '0px'
                      }}
                    />
                  </div>
                  <p className={(cardTwoSelected) ? "opacity-100 text-center" : "text-center"}>VEGAN</p>
                </Card>
              </Col>
            </Row>

            <Row className='my-4 text-center'
              style={{
                fontFamily: 'Vibur, cursive',
              }}>
              <Col>
                <h2>Search Recipes by Intolerances</h2>
                <p
                  style={{
                    color: '#70BA89',
                  }}
                >SELECT ONE OR MORE</p></Col>

            </Row>
            <Row xs="2" className="mb-3" >
              <Col>
                {/* Card 3 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardThree()}
                  style={{
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div
                    style={{
                      width: '256px',
                      height: '256px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img alt="Card" src={eggtoast} className={(cardThreeSelected) ? "opacity-50 card-img-top" : "card-img-top"}
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        width: '100%',
                        borderRadius: '0px'
                      }} />
                  </div>
                  <p className={(cardThreeSelected) ? "opacity-100 text-center" : "text-center"}>SEAFOOD FREE</p>
                </Card>
              </Col>

              <Col>
                {/*Card 4 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardFour()}
                  style={{
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div style={{
                    width: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  >
                    <img alt="Card" src={pie} className={(cardFourSelected) ? "opacity-50 card-img-top" : "card-img-top"}
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: 'auto',
                        width: '100%',
                        borderRadius: '0px'
                      }} />
                  </div>
                  <p className={(cardFourSelected) ? "opacity-100 text-center" : "text-center"}>GLUTEN FREE</p>
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
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div style={{
                    width: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  >
                    <img alt="Card" src={bowl2} className={(cardFiveSelected) ? "opacity-50 card-img-top" : "card-img-top"}
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        width: 'auto',
                        borderRadius: '0px'
                      }} />
                  </div>
                  <p className={(cardFiveSelected) ? "opacity-100 text-center" : "text-center"}>TREENUT FREE</p>
                </Card>
              </Col>

              <Col>
                {/*Card 6 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardSix()}
                  style={{
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div
                    style={{
                      width: '256px',
                      height: '256px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                    <img alt="Card" src={breakfast} className={(cardSixSelected) ? "opacity-50 card-img-top" : "card-img-top"}
                      style={{
                        display: 'inline',
                        margin: '0 auto',
                        height: '100%',
                        width: 'auto',
                        borderRadius: '0px'
                      }} />
                  </div>
                  <p className={(cardSixSelected) ? "opacity-100 text-center" : "text-center"}>SHELLFISH FREE</p>
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
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div style={{
                    width: '256px',
                    height: '256px',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '0.5rem'
                  }}>
                    <img alt="Card" src={bowl} className={(cardSevenSelected) ? "opacity-50 card-img-top" : "card-img-top"} style={{
                      display: 'inline',
                      margin: '0 auto',
                      height: '100%',
                      width: 'auto',
                      borderRadius: '0px'
                    }} />
                  </div>
                  <p className={(cardSevenSelected) ? "opacity-100 text-center" : "text-center"}>DAIRY FREE</p>
                </Card>
              </Col>

              <Col>
                {/*Card 8 */}
                <Card
                  className="text-white"
                  onClick={() => clickHandlerCardEight()}
                  style={{
                    width: '256px',
                    borderWidth: '0px',
                    padding: '0px',
                    fontFamily: 'Vibur, cursive',
                    backgroundColor: '#70BA89'
                  }}>
                  <div
                    style={{
                      width: '256px',
                      height: '256px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                    <img alt="Card" src={pasta} className={(cardEightSelected) ? "opacity-50 card-img-top" : "card-img-top"} style={{
                      display: 'inline',
                      margin: '0 auto',
                      height: 'auto',
                      width: '100%',
                      borderRadius: '0px'
                    }} />
                  </div>
                  <p className={(cardEightSelected) ? "opacity-100 text-center" : "text-center"}>SOY FREE</p>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col className="text-center">
                <Button className="m-3 btn-primary" onClick={() => clearIntolerances()}>Clear</Button>
                <Button className="m-3" styles={{ backgroundColor: '#123B1F' }} onClick={() => handleSubmit()}>Search</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
