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
              width: '60rem',
              fontFamily: 'Vibur, cursive',
              border: '1rem solid #70BA89'
            }}
          >
            <Row>
              <Col className="d-flex flex-column align-items-center justify-content-center">
                <div style={{
                  width: '30rem',
                  height: '40rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  <img
                    src={PastaImg}
                    alt="Profile Picture"
                    style={{
                      display: 'inline',
                      margin: '0 auto',
                      height: 'auto',
                      width: '100%'
                    }}
                  />
                </div>
              </Col>
              <Col className="p-5">
                <CardTitle tag="h2" className="text-center">
                  LOGIN
                </CardTitle>
                <form onSubmit={onSubmitHandler}>
                  <label htmlFor="email" className="text-start">EMAIL</label>
                  <input
                    className="form-control mb-3"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    className="form-control mb-3"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                  />
                  <div className="text-center mb-3">
                    <button
                      style={{
                        backgroundColor: '#70BA89',
                        fontFamily: 'Vibur, cursive',
                      }}
                      className="btn btnhover text-white">SUBMIT</button>
                  </div>
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