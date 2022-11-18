import { Container, Col, Row, CardTitle, CardBody } from "reactstrap";

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
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>

          {/*Card 2   */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>
        </Row>

        {/*Card 3   */}

        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>

          {/*Card 4   */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>
        </Row>

        {/* Card 5  */}
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>

          {/*Card 6  */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>
        </Row>
        <Row xs="2">
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>

          {/*Card 7  */}
          <Col className="categories-col">
            <img alt="Card" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Card Title</CardTitle>
            </CardBody>
          </Col>
        </Row>
      </Container>
    </>

  );
};

export default Categories;
