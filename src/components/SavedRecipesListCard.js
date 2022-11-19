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
import SavedRecipesDetail from './SavedRecipesDetail';

const SavedRecipesListCard = (props) => {

  return (
    // <Link to={`${props.data.id}`}>
    <Link to={`/collections/${props.data.id}`}>
      <Card
        className="p-3 my-2 text-center"
        style={{
          height: '28rem'
        }}
      >
        <img
          className="align-self-center"
          alt={props.data.title}
          src={props.data.image}
          style={{
            width: '25rem'
          }}
        />
        <CardBody>
          <CardTitle tag="h5" >
            {props.data.title}
          </CardTitle>
        </CardBody>
        <Button>View My Recipe</Button>
      </Card>

    </Link>
  );
};
export default SavedRecipesListCard;