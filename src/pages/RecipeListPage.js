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

const RecipeListPage = (props) => {
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

// The Modal:
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Container>
        <h1 className="text-center"></h1>
        <p>Filters: {props.data}</p>
        <Row xs="2">
          {responseData &&
            responseData.map((responseData) => {
              return (
                <Col key={responseData.id} sm="6">
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
                    <Button onClick={toggle}>View Recipe</Button>

                    <Modal isOpen={modal} toggle={toggle} scrollable='true' fullscreen>
                      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                      <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      </ModalBody>
                      <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                          Do Something
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </Card>
                </Col>
              )
            })}</Row>
      </Container>
    </>
  );
};

export default RecipeListPage;