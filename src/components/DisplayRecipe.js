import React from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
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

  const saveRecipe = (e) => {
    e.preventDefault();
    axios.post('https://localhost:44402/', {
      id,
    })
      .then(() => {
        navigate('/saved-recipes');
      })
  }

  return (
    <Container>
      <div>{id}</div>
      <button onClick={() => saveRecipe()}>Save Recipe</button>
    </Container>
  )
}

export default DisplayRecipe