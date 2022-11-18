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

// Set up a call/fetch to the saved recipe ids & notes

// set up an api call for each recipe id


const SavedRecipesPage = () => {
  
  
  // const [responseData, setResponseData] = useState([]);
  // useEffect(() => {
  //   axios.get(`https://api.spoonacular.com/recipes/716429/information?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&includeNutrition=false`)
  //     .then(res => {
  //       setResponseData(res.data); console.log(res.data);
  //     })
  // }, []);



  return (
    <Container>
      <h1 className="text-center">Saved Recipes</h1>
      <Row xs="2">
        {/* {responseData &&
          responseData.map((responseData) => { */}
            return (
              <Col key={responseData.id} sm="6">
                {responseData.title}
                <SavedRecipesListCard detail={responseData} />

              </Col>
            )
          {/* })} */}
      </Row>
    </Container>
  );
};

export default SavedRecipesPage;