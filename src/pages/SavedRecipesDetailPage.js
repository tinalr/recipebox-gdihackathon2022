import { Col, Row, ListGroup, ListGroupItem, Container, Card, CardHeader, CardTitle, CardText, CardBody, CardFooter } from "reactstrap";

const SavedRecipesDetailPage = () => {
  return (
    <>
      <Container>

        <Row xl='3'>
          <Col></Col>
          <Col>
            <Card>
              <CardHeader tag='h1'>RecipeName</CardHeader>
              <img src="chrome://branding/content/about-logo@2x.png" alt="" />

              <CardBody>

                <CardTitle tag='h2'>Ingredients</CardTitle>
                <CardText>
                  <ListGroup>
                    <ListGroupItem>Ingredients</ListGroupItem>
                  </ListGroup>
                </CardText>

                <CardTitle tag='h2'>Steps</CardTitle>
                <CardText>
                  <ListGroup numbered>
                    <ListGroupItem>Ingredients</ListGroupItem>
                  </ListGroup>
                </CardText>
                
                <CardTitle tag='h2'>Notes</CardTitle>
                <CardText>
                  recipe notes
                </CardText>
                
              </CardBody>

            </Card>
          </Col>
          <Col></Col>
        </Row>

      </Container>
    </>
  );
};
export default SavedRecipesDetailPage;