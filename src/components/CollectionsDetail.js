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


  return (

    <>
      <Container style={{
      }}>

        <Row>
          <p></p>

          <Col>
            <Card className="card" style={{
              maxWidth: '40rem',
              margin: 'auto'
            }}>
              <CardHeader tag='h1' className="cardheader h1">Thanksgiving 2022</CardHeader>
              {/* <img src="chrome://branding/content/about-logo@2x.png" alt="" className="img-thumbnail" /> */}
              <CardBody>
              <p
                style={{
                  fontFamily: 'Vibur, cursive',
                }}
              >VEGAN, SOY-FREE</p>

                <CardTitle className='h2' tag='h2'>Appetizers</CardTitle>
                <CardText>
                  <ListGroup>
                      <ListGroupItem sm="6">Cheez-y Potato Balls</ListGroupItem>
                    </ListGroup>
                </CardText>

                <CardTitle className='h2' tag='h2'>Entrees</CardTitle>
                <CardText>
                  <ListGroup>
                    <ListGroupItem sm="6">Garlic and Butter Mashed Potatoes</ListGroupItem>
                    <ListGroupItem sm="6">Beyond MeatLoaf</ListGroupItem>
                    <ListGroupItem sm="6">Vegan Rosemary Stuffing</ListGroupItem>
                    <ListGroupItem sm="6">Grandma's Gravy</ListGroupItem>
                  </ListGroup>

                </CardText>

                <CardTitle className='h2' tag='h2'>Deserts</CardTitle>
                <CardText>
                  <ListGroup>
                    <ListGroupItem sm="6">Layered Apple Cinnamon Pie</ListGroupItem>
                    <ListGroupItem sm="6">Pumpkin Cheesecake</ListGroupItem>
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