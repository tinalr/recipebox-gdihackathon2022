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
    <Card
      className="p-3 my-2 text-center"
      style={{
        maxWidth: '18rem',
        height: '24rem',
        backgroundColor: '#70BA89',
        border: 'none',
        fontFamily: 'Vibur, cursive'
      }}
    >
      <div style={{
        maxWidth: '256px',
        height: '256px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
        alt={props.data.title}
        src={props.data.image}
          style={{
            display: 'inline',
            margin: '0 auto',
            height: 'auto',
            maxWidth: '100%',
            borderRadius: '0.5rem'
          }}
        />
        <CardTitle tag="h4" className="text-white mt-3" >
          {props.data.title}
        </CardTitle>
      </div>
      <CardBody>
      </CardBody>
      <Button
        onClick={() => navigate(`/collections/${props.data.id}`)}
        className="btn btn-light"
      >View My Recipe</Button>
    </Card>
  );
};
export default SavedRecipesListCard;