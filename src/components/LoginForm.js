import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle
} from 'reactstrap';
import PastaImg from '../assets/imgs/pasta2.jpg'

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = e => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <Container>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <Card
            style={{
              width: '60rem'
            }}
          >
            <Row>
              <Col>
                <img
                  src={PastaImg}
                  alt="Pasta"
                  style={{
                    width: '30rem'
                  }}
                />
              </Col>
              <Col className="p-5">
              <CardTitle tag="h5" className="text-center">
                Login
              </CardTitle>
              <form onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input
                  className="form-control mb-3"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
                <label htmlFor="password">Password</label>
                <input
                  className="form-control mb-3"
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                />
                <Col className="text-center"><button className="mb-3 btn btn-primary">Submit</button></Col>
              </form>
              <p className="text-center">Don't have an account? <a href="/register">Create one here</a></p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container >
  );
};

export default LoginForm;