import { Col, Row, ListGroup, ListGroupItem, Container, Card, CardHeader, CardTitle, CardText, CardBody, CardFooter } from "reactstrap";

const SavedRecipesDetail = (props) => {
  return (
    <>
      <Container style={{
      }}>

        <Row>
         
          <Col>
            <Card style={{
              maxWidth: '50rem',
              margin: 'auto'
            }}>
              <CardHeader tag='h1' className="cardheader h1">Title</CardHeader>
              <img src="chrome://branding/content/about-logo@2x.png" alt="" className="img-thumbnail" />

              <CardBody>

                <CardTitle className='h2' tag='h2'>Ingredients</CardTitle>
                <CardText>
                  <ListGroup>
                    <ListGroupItem>Ingredients</ListGroupItem>
                  </ListGroup>
                </CardText>

                <CardTitle className='h2' tag='h2'>Steps</CardTitle>
                <CardText>
                  <ListGroup numbered>
                    <ListGroupItem>Steps</ListGroupItem>
                  </ListGroup>
                </CardText>

                <CardTitle className='h2' tag='h2'>Notes</CardTitle>
                <CardText>
                  recipe notes
                </CardText>

              </CardBody>

            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};
export default SavedRecipesDetail;