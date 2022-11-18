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

const SavedRecipesListCard = (props) => {

  return (
    <Link to={`${props.detail.id}`}>

      <Card
        className="p-3 my-2 text-center"
        style={{
          height: '28rem'
        }}
      >
        <img
          className="align-self-center"
          alt={props.detail.title}
          src={props.detail.image}
          style={{
            width: '25rem'
          }}
        />
        <CardBody>
          <CardTitle tag="h5" >
            {props.detail.title}
          </CardTitle>
        </CardBody>
        title
        <Button>View My Recipe</Button>
      </Card>

    </Link>
  );
};
export default SavedRecipesListCard;