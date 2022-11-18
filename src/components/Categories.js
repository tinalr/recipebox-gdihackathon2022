import { Container, Col, Button, Row, CardBody } from "reactstrap";

const Categories = () => {
  return (
    <>
      <div class="catergories-header">
        <h1 class="categories-header">Select a Category</h1>
      </div>
      <Container class="cards-container">
        {/* Card 1  */}
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <Button color="success">VEGETARIAN</Button>
            </CardBody>
          </Col>

          {/*Card 2   */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <Button color="success">PEANUT FREE</Button>
            </CardBody>
          </Col>
        </Row>

        {/*Card 3   */}

        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
          
              <Button color="success">GLUTEN FREE</Button>
            </CardBody>
          </Col>

          {/*Card 4   */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <Button color="success">SEAFOOD FREE</Button>
            </CardBody>
          </Col>
        </Row>

        {/* Card 5  */}
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <Button color="success">VEGAN</Button>
            </CardBody>
          </Col>

          {/*Card 6  */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <Button color="success">DAIRY FREE </Button>
            </CardBody>
          </Col>
        </Row>

        {/*Card 7  */}
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <Button color="success">TREENUT FREE</Button>
            </CardBody>
          </Col>

          {/*Card 8 */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <Button color="success">SOY FREE</Button>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
