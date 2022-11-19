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
  const [postId, setPostId] = useState();
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

  // const saveRecipe = (e) => {
  //   // e.preventDefault();
  //   axios.post(`https://localhost:7033/${id}`, {
  //     id,
  //   })
  //     .then(() => {
  //       navigate('/saved-recipes');
  //     })
  //     .catch(error => {
  //           console.log(error);
  //       }
  //     )
  // }

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch(`https://localhost:7033/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id));
  }, []);

  return (
    <Container className="mt-5 text-center p-5"
      style={{
        border: '1rem solid #70BA89',
        backgroundColor: 'white',
        maxWidth: '40rem'
      }}>
      <h2 className="mb-3"
        style={{
          fontFamily: 'Vibur, cursive'
        }}
      >{responseData.title}</h2>
      <Row>
        <Col className="">
          <Container className="mb-3">
            {htmlString &&
              parse(htmlString)
            }
          </Container>
        </Col>
      </Row>
      <button
        style={{
          backgroundColor: '#70BA89',
          fontFamily: 'Vibur, cursive',
        }}
        className="m-3 btn btnhover btn-lg text-white"
        onClick={() => navigate('/recipes')}
      >GO BACK</button>
      <button
        style={{
          color: '#70BA89',
          fontFamily: 'Vibur, cursive',
          border: '1px solid #70BA89'
        }}
        className="m-3 btn btnhover btn-lg btn-white" onClick={() => navigate('/collections')}>SAVE</button>
    </Container>
  )
}

export default DisplayRecipe