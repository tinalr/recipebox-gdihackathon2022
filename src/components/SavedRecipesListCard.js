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
import { useNavigate } from 'react-router-dom';

const SavedRecipesListCard = (props) => {
  const navigate = useNavigate();

  return (
    // <Link to={`${props.data.id}`}>
      <Card
        className="p-3 my-2 text-center"
        style={{
          width: '18rem',
          height: '24rem',
          backgroundColor: '#70BA89',
          border: 'none',
          fontFamily: 'Vibur, cursive'
        }}
      >
        <img
          className="align-self-center"
          alt={props.data.title}
          src={props.data.image}
          style={{
            width: '16rem',
            borderRadius: '0.5rem'
          }}
        />
        <CardBody>
          <CardTitle tag="h4" className="text-white">
            {props.data.title}
          </CardTitle>
        </CardBody>
        <Button 
          onClick={()=> navigate(`/collections/${props.data.id}`)}
          className="btn btn-light"
          >View My Recipe</Button>
      </Card>
  );
};
export default SavedRecipesListCard;