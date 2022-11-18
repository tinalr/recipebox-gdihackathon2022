import { Col, Row, Container, Card, CardHeader, CardTitle, CardText, CardBody, CardFooter } from "reactstrap";

const SavedRecipesDetail = () => {
  return (
    <>

      <Card style={{ backgroundColor: 'lightblue', width: '50%', }}>
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
          <CardTitle tag='h2'>Notes</CardTitle>
          <CardText>
            Recipe Notes
          </CardText>
        </CardBody>

      </Card>

    </>
  );
};
export default SavedRecipesDetail;