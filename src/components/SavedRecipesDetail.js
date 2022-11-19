import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, ListGroup, ListGroupItem, Container, Card, CardHeader, CardTitle, CardText, CardBody, CardFooter } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";

const SavedRecipesDetail = () => {
  const { id } = useParams();
  const [responseData, setResponseData] = useState([]);
  const [stepsArray, setStepsArray] = useState([]);
  const [ingredientsArray, setIngredientsArray] = useState([]);
  const [title, setTitle] = useState("")
  const navigate = useNavigate()

  // The API call:
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&716268`)
      .then(response => {
        console.log(response.data)
        setResponseData(response.data);
        setStepsArray(response.data[0].steps)
        setIngredientsArray(response.data[0].steps[0].ingredients)
      })
  }, []);

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&716268`)
      .then(response => {
        console.log(response.data.extendedIngredients)
        setIngredientsArray(response.data.extendedIngredients)
        setTitle(response.data.title)
      })
  }, []);

  return (

    <>
      <Container style={{
      }}>

        <Row>
          <p>{responseData.name}</p>

          <Col>
            <Card className="card" style={{
              maxWidth: '40rem',
              margin: 'auto'
            }}>
              <CardHeader tag='h1' className="cardheader h1">{title}</CardHeader>
              <CardBody>

                <CardTitle className='h2' tag='h2'>Ingredients</CardTitle>
                <CardText>
                  <ListGroup numbered>
                  {ingredientsArray.map((data, idx) => {
                      return (
                      <ListGroupItem key={idx} sm="6">
                        {data.name}
                      </ListGroupItem>
                      )
                    })}
                    </ListGroup>
                </CardText>

                <CardTitle className='h2' tag='h2'>Steps</CardTitle>
                <CardText>
                  <ListGroup numbered>
                    {stepsArray.map((data, idx) => {
                      return (
                        <ListGroupItem key={idx} sm="6">
                          {data.step}
                        </ListGroupItem>
                      )
                    })}
                  </ListGroup>

                </CardText>

                <CardTitle className='h2' tag='h2'>Notes</CardTitle>
                <CardText>
                  <ListGroup>
                    <ListGroupItem>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </ListGroupItem>
                  </ListGroup>
                </CardText>

              </CardBody>

            </Card>
          </Col>
        </Row>
        <div className="text-center">
          <button
          style={{
            backgroundColor: '#70BA89',
            fontFamily: 'Vibur, cursive',
          }}
          className="m-3 btn btnhover btn-lg text-white"
          onClick={() => navigate('/collections')}
                >GO BACK</button>
        </div>
      </Container>
    </>
  );
};
export default SavedRecipesDetail;