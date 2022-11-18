import React, { useEffect, useState } from 'react';
import { Container, Col, Button, Row, CardBody } from "reactstrap";

const Categories = (props) => {

  return (
    <>
      <div class="catergories-header">
        <h1 class="categories-header">Select a Category</h1>
        <button onClick={()=>props.func('It works?')}>CLICK ME</button>
      </div>
      <Container class="cards-container">
        {/* Card 1  */}
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/vegetarian"> <Button color="success">VEGETARIAN</Button></a>
            </CardBody>
          </Col>

          {/*Card 2   */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/peanutfree"> <Button color="success">PEANUT FREE</Button></a>
            </CardBody>
          </Col>
        </Row>

        {/*Card 3   */}

        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/glutenfree"><Button color="success">GLUTEN FREE</Button></a>
            </CardBody>
          </Col>

          {/*Card 4   */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/saefoodfree"><Button color="success">SEAFOOD FREE</Button></a>
            </CardBody>
          </Col>
        </Row>

        {/* Card 5  */}
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/vegan"><Button color="success">VEGAN</Button></a>
            </CardBody>
          </Col>

          {/*Card 6  */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/dairyfree"><Button color="success">DAIRY FREE </Button></a>
            </CardBody>
          </Col>
        </Row>

        {/*Card 7  */}
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/treenutfree"><Button color="success">TREENUT FREE</Button></a>
            </CardBody>
          </Col>

          {/*Card 8 */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
            <a href="/soyfree"> <Button color="success">SOY FREE</Button></a>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
