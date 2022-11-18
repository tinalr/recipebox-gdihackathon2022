import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

const RecipeListPage = (props) => {

  const [responseData, setResponseData] = useState([]);

  const foodDiet = props.diet
  // vegan, vegetarian, ketogenic
  // &diet=${foodDiet}
  // https://spoonacular.com/food-api/docs#Diets

  const foodIntolerances = ""
  // peanut, dairy, seafood, soy, wheat
  // &intolerances=${foodIntolerances}
  // https://spoonacular.com/food-api/docs#Intolerances
  // for each intolerance selected, send to this page "&intolerances=*intoleranceselected*"
  // concatenate all selections together into one variable
  // user can select 1 diet and as many intolerances as are available as buttons on previous page

  // API call retrieves 10 recipes with diet/intolerance selections
  // Only provides Image and Title and ID
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&diet=${foodDiet}&intolerances=${foodIntolerances}`)
      .then(response => { setResponseData(response.data.results) })
  }, []);
  console.log(responseData);
  return (
    <>
      <Container>
        <h1 className="text-center"></h1>
        <Row xs="2">
          {responseData &&
            responseData.map((responseData) => {
              return (
                <Col key={responseData.id}  sm="6">
                  <Card 
                    className="p-3 my-2 text-center"
                    style={{
                      height: '28rem'
                    }}
                  >
                    <img
                      className="align-self-center"
                      alt={responseData.title}
                      src={responseData.image}
                      style={{
                        width: '25rem'
                      }}
                    />
                    <CardBody>
                      <CardTitle tag="h5" >
                        {responseData.title}
                      </CardTitle>
                    </CardBody>
                    <Button>View Recipe</Button>
                    </Card>
                  </Col>
              )
            })}</Row>
      </Container>
    </>
  );
};

export default RecipeListPage;