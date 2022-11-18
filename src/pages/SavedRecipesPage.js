import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SavedRecipesListCard from '../components/SavedRecipesListCard';
import { Outlet } from 'react-router-dom';



const SavedRecipesPage = () => {
  // Set up a call/fetch to the backend for saved recipe ids & notes
  const backendData = [];

  return (
    <>
      <Container>
        <h1 className="text-center">Saved Recipes</h1>
        <Row xs="2">
          <SavedRecipesListCard detail={backendData} />
        </Row>
      </Container>

      <Outlet/>
    </>
  );
};

export default SavedRecipesPage;