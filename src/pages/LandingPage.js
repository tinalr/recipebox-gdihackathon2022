import React, { useEffect, useState } from 'react';
import { Container, Col, Button, Row, CardBody, Card } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

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
    if(cardOneSelected === false){
      setDietType('vegetarian')
      setCardTwoSelected(false)
    }
    else{
      setDietType('')
    }
  }

  const clickHandlerCardTwo = (e) => {
    setCardTwoSelected(!cardTwoSelected)
    if(cardTwoSelected === false){
      setDietType("vegan")
      setCardOneSelected(false)
    }
    else{
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
            <h4 className="">Select a Diet</h4>
            <p>Select 0-1</p>
            <Row xs="2" className="mb-3">
              <Col>
                <Card
                  className={(cardOneSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardOne()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardOneSelected) ? "opacity-75" : ""}/>
                  <p className={(cardOneSelected) ? "opacity-75 text-center" : "text-center"}>VEGETARIAN</p>
                </Card>
              </Col>
              <Col>
                <Card
                  className={(cardTwoSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardTwo()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardTwoSelected) ? "opacity-75" : ""}/>
                  <p className={(cardTwoSelected) ? "opacity-75 text-center" : "text-center"}>VEGAN</p>
                </Card>
              </Col>
            </Row>
            <h4 className="">Select Any Intolerances</h4>
            <p>Select 0-6</p>
            <Row xs="2" className="mb-3" >
              <Col>
                {/* Card 3 */}
                <Card
                  className={(cardThreeSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardThree()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardThreeSelected) ? "opacity-75" : ""}/>
                  <p className={(cardThreeSelected) ? "opacity-75 text-center" : "text-center"}>SEAFOOD FREE</p>
                </Card>
              </Col>
              <Col>
                {/*Card 4 */}
                <Card
                  className={(cardFourSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardFour()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardFourSelected) ? "opacity-75" : ""}/>
                  <p className={(cardFourSelected) ? "opacity-75 text-center" : "text-center"}>GLUTEN FREE</p>
                </Card>
              </Col>
            </Row>
            <Row xs="2" className="mb-3">
              <Col>
                {/* Card 5 */}
                <Card
                  className={(cardFiveSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardFive()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardFiveSelected) ? "opacity-75" : ""}/>
                  <p className={(cardFiveSelected) ? "opacity-75 text-center" : "text-center"}>TREENUT FREE</p>
                </Card>
              </Col>
              <Col>
                {/*Card 6 */}
                <Card
                  className={(cardSixSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardSix()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardSixSelected) ? "opacity-75" : ""}/>
                  <p className={(cardSixSelected) ? "opacity-75 text-center" : "text-center"}>SHELLFISH FREE</p>
                </Card>
              </Col>
            </Row>
            <Row xs="2" className="mb-3">
              <Col>
                {/* Card 7 */}
                <Card
                  className={(cardSevenSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardSeven()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardSevenSelected) ? "opacity-75" : ""}/>
                  <p className={(cardSevenSelected) ? "opacity-75 text-center" : "text-center"}>DAIRY FREE</p>
                </Card>
              </Col>
              <Col>
                {/*Card 8 */}
                <Card
                  className={(cardEightSelected) ? "opacity-75" : ""}
                  onClick={() => clickHandlerCardEight()}
                  style={{
                    width: '18rem'
                  }}>
                  <img alt="Card" src="https://picsum.photos/300/200" className={(cardEightSelected) ? "opacity-75" : ""}/>
                  <p className={(cardEightSelected) ? "opacity-75 text-center" : "text-center"}>SOY FREE</p>
                </Card>
              </Col>
            </Row>
            
            <Col className="text-center">
              <button className="m-3 btn btn-danger" onClick={() => clearIntolerances()}>Clear</button>
              <button className="m-3 btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LandingPage;
