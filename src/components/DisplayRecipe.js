import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import parse from 'html-react-parser';

import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const DisplayRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);
  const [newSummary, setNewSummary] = useState();
  const [htmlString, setHtmlString] = useState("");
  const parse = require('html-react-parser')

  // The API call:
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/summary?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&716268`)
        .then(response => { 
          console.log(response)
          setResponseData(response.data);
          setHtmlString(response.data.summary)
        })
    }, []);

  const saveRecipe = (e) => {
    e.preventDefault();
    axios.post('https://localhost:44402/save', {
      id,
    })
      .then(() => {
        navigate('/saved-recipes');
      })
  }

  return (
      <Container className="mt-5 text-center p-5"
        style={{
          border: '1rem solid #70BA89',
          backgroundColor: 'white'
        }}>
        <h2 className="mb-3">{responseData.title} - ID: {id}</h2>
        <Row>
          {/* <Col>
            <img
              className="col-auto d-flex align-items-center"
              // alt={responseData.data.title}
              // src={responseData.data.title}
              style={{
                width: '25rem'
              }}
            />
          </Col> */}
          <Col className="">
            <Container className="mb-3">
              {htmlString &&
                parse(htmlString)
              }
            </Container>
          </Col>
        </Row>
        <button className="btn btn-primary mx-3" onClick={() => navigate('/recipes')}>Go Back</button>
        <button className="btn btn-dark" onClick={() => saveRecipe()}>Save Recipe</button>
      </Container>
  )
}

export default DisplayRecipe