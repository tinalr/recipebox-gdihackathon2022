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
    <Link to={`${props.id}`}>

      <Card
        className="p-3 my-2 text-center"
        style={{
          height: '28rem'
        }}
      >
        <img
          className="align-self-center"
          alt={props.title}
          src={props.img}
          style={{
            width: '25rem'
          }}
        />
        <CardBody>
          <CardTitle tag="h5" >
            {props.title}
          </CardTitle>
        </CardBody>
        <Button>View My Recipe</Button>
      </Card>

    </Link>
  );
};
export default SavedRecipesListCard;