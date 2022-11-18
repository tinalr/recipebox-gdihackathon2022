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
import SavedRecipesListCard from '../components/SavedRecipesListCard';

const SavedRecipesPage = () => {
  return (
    <Container>
      <h1 className="text-center">Saved Recipes</h1>
      <Row xs="2">
        {/* {responseData &&
          responseData.map((responseData) => { */}
        return (
        <Col key='' sm="6">

          <SavedRecipesListCard />

        </Col>
        )
        {/* })} */}
      </Row>
    </Container>
  );
};

export default SavedRecipesPage;