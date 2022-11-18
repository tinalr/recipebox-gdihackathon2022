import { Container, Card, CardHeader, CardTitle, CardText, CardBody, CardFooter } from "reactstrap";

const SavedRecipesDetail = () => {
  return (
    <Container >
      <Card>
        <CardHeader tag='h1'>RecipeName</CardHeader>
        <img src="chrome://branding/content/about-logo@2x.png" alt="" />
        <CardBody>
          <CardTitle tag='h2'>Ingredients</CardTitle>
          <CardText>
            ingredients list
          </CardText>
          <CardTitle tag='h2'>Steps</CardTitle>
          <CardText>
            Steps List
          </CardText>
        </CardBody>
        
        <CardFooter>
          Notes
        </CardFooter>
      </Card>
    </Container>
  );
};
export default SavedRecipesDetail;