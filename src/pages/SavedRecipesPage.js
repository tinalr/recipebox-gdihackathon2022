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

  //Dummy Data, placeholder for fetching data from backend:
  const dummyData = [
    {
      "id": 644387,
      "title": "Garlicky Kale",
      "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 716627,
      "title": "Easy Homemade Rice and Beans",
      "image": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
      "imageType": "jpg"
    },
    {
      "id": 782600,
      "title": "Quinoa Salad with Vegetables and Cashews",
      "image": "https://spoonacular.com/recipeImages/782600-312x231.jpg",
      "imageType": "jpg"
    }
  ];

  return (
    <Container>
      <h1 className="text-center">Saved Recipes</h1>
      <Row xs="2">
        {dummyData.map((data) => { 
        return (
        <Col key='data.id' sm="6">

            <SavedRecipesListCard data={data} />

        </Col>
        )
         })} 
      </Row>
    </Container>
  );
};

export default SavedRecipesPage;