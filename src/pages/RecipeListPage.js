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
        <h1 className="text-center h1">Your Recipe Selection</h1>
        <Row sm="2" lg='3'>
          {responseData &&
            responseData.map((responseData) => {
              return (
                <Col key={responseData.id} className='d-flex flex-column align-items-center justify-content-center'>
                  <Card
                    className="my-2 text-center"
                    style={{
                      width: '256px',
                      borderWidth: '0px',
                      padding: '0px',
                      backgroundColor: '#70BA89'
                    }}
                  >
                    <div style={{
                      width: '256px',
                      height: '256px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      <img
                        className="align-self-center card-img-top"
                        alt={responseData.title}
                        src={responseData.image}
                        style={{
                          display: 'inline',
                          margin: '0 auto',
                          height: '100%',
                          width: 'auto',
                          borderRadius: '0px'
                        }}
                      />
                    </div>
                    <CardBody>
                      <CardTitle tag="h4" className="text-white h4" >
                        {responseData.title.toUpperCase()}
                      </CardTitle>
                    </CardBody>
                    
                    <Button className="h5 btn btn-light col-8 mx-auto m-2" href={`/show/${responseData.id}`}>View Recipe</Button>
                    
                  </Card>
                </Col>
              )
            })}
        </Row>
      </Container>
    </>
  );
};

export default RecipeListPage;