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

const SavedRecipesListCard = (props) => {

  // set up an api call for recipe info based on id
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${backendData.id}/information?apiKey=a5c113f14a144ce89576d7bcbc7f3dca&includeNutrition=false`)
      .then(res => {
        setResponseData(res.data); console.log(res.data);
      })
  }, []);

  return (
    <>

      {props.detail &&
        props.detail.map((data) => {

          return (
            <Container>
              <Row xs='2'>
                <Col key={data.id} sm="6">
                  {data.title}
                  <Link to={`${data.id}`}>

                    <Card
                      className="p-3 my-2 text-center"
                      style={{
                        height: '28rem'
                      }}
                    >

                      <CardBody>
                        <img
                          className="align-self-center"
                          alt={data.title}
                          src={data.image}
                          style={{
                            width: '25rem'
                          }}
                        />
                        <CardTitle tag="h5" >
                          {data.title}
                        </CardTitle>
                      </CardBody>
                      
                      <Button>View My Recipe</Button>
                    </Card>

                  </Link>
                </Col>
              </Row>
            </Container>
          )
        })}

    </>
  );
};
export default SavedRecipesListCard;