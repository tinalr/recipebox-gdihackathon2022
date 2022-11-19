import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
// import ModalRecipeListDetail from '../components/ModalRecipeListDetail';
import { useNavigate } from 'react-router-dom';


const RecipeListPage = (props) => {
  const navigate = useNavigate();
  const [responseData, setResponseData] = useState([]);

  // The API call:
  useEffect(() => {
    const apiBeginningI = "&intolerances="
    const apiBeginningD = "&diet="
    const diet = props.diet
    const newVarD = apiBeginningD.concat(diet)
    const arr = props.intolerances;
    console.log(arr)
    let endOfApi = newVarD
    for (let i = 0; i < arr.length; i++) {
      let newVarI = apiBeginningI.concat(arr[i])
      endOfApi += newVarI
      console.log(endOfApi)
    }
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&${endOfApi}`)
      .then(response => { setResponseData(response.data.results) })
  }, []);
  console.log(responseData);

  return (
    <>
      <Container>
        <h1 className="text-center">Your Recipe Selection</h1>
        <Row xs="2">
          {responseData &&
            responseData.map((responseData) => {
              return (
                <Col key={responseData.id} sm="6">
                  <Card
                    className="p-3 my-2 text-center"
                    style={{
                      // height: '28rem',
                      backgroundColor: '#70BA89'
                    }}
                  >
                    <img
                      className="align-self-center"
                      alt={responseData.title}
                      src={responseData.image}
                      style={{
                        width: '25rem',
                        border: '1rem solid #70BA89',
                        borderRadius: '1.5rem'
                      }}
                    />
                    <CardBody>
                      <CardTitle tag="h5" className="text-white" >
                        {responseData.title}
                      </CardTitle>
                    </CardBody>
                    
                    <a className="btn btn-light" href={`/show/${responseData.id}`}>View Recipe</a>
                    
                  </Card>
                </Col>
              )
            })}</Row>
      </Container>
    </>
  );
};

export default RecipeListPage;