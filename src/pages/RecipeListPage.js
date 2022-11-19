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
      <Container
        style={{
          maxWidth: '40rem'
        }}
      >
        <Row>
          <Col>
            <Row
              className="text-center"
              style={{
                fontFamily: 'Vibur, cursive',
              }}
            >
              <Col>
                <h2 className="text-center">Your Recipe Selection</h2>
              </Col>
            </Row>
            <Row xs="2" >
              {responseData &&
                responseData.map((responseData) => {
                  return (
                    <Col>
                      <Card
                        key={responseData.id}
                        className="p-3 my-2 text-center"
                        style={{
                          maxWidth: '18rem',
                          maxHeight: '24rem',
                          backgroundColor: '#70BA89',
                          border: 'none',
                          fontFamily: 'Vibur, cursive'
                        }}
                      >
                        <div style={{
                          maxWidth: '256px',
                          height: '256px',
                          position: 'relative',
                          overflow: 'hidden',
                        }}>
                          <img
                            alt={responseData.title}
                            src={responseData.image}
                            style={{
                              display: 'inline',
                              margin: '0 auto',
                              height: 'auto',
                              maxWidth: '100%',
                              borderRadius: '0.5rem'
                            }}
                          />
                          <CardTitle tag="h4" className="text-white mt-3" >
                            {responseData.title}
                          </CardTitle>
                        </div>
                        <CardBody>
                        </CardBody>
                        <a className="btn btn-light" href={`/show/${responseData.id}`}>View Recipe</a>
                      </Card>
                    </Col>
                  )
                })}
            </Row>
            <div className="text-center">
              <button
                style={{
                  backgroundColor: '#70BA89',
                  fontFamily: 'Vibur, cursive',
                }}
                className="m-3 btn btnhover btn-lg text-white" onClick={() => navigate('/')}>BACK</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RecipeListPage;