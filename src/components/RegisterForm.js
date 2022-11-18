import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Col,
  Row,
  Card,
  CardTitle
} from 'reactstrap';
import PastaImg from '../assets/imgs/pasta.jpg'


const RegisterForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const onSubmitHandler = e => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <Container >
      <Row >
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
                  Register
                </CardTitle>
                <form onSubmit={onSubmitHandler}>
                  <label htmlFor="name">Name</label>
                  <input
                    className="form-control mb-3"
                    type="name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                  />
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
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    className="form-control mb-3"
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                  />
                  <Col className="text-center"><button className="mb-3 btn btn-primary">Submit</button></Col>
                </form>
                <p className="text-center">Already have an account? <a href="/login">Sign in</a></p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;