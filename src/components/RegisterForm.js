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
              width: '60rem',
              fontFamily: 'Vibur, cursive',
              border: '1rem solid #70BA89'
            }}
          >
            <Row>
              <Col className="d-flex flex-column align-items-center justify-content-center">
              <div 
              style={{
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
                  REGISTER
                </CardTitle>
                <form onSubmit={onSubmitHandler}>
                  <label htmlFor="name">NAME</label>
                  <input
                    className="form-control mb-3"
                    type="name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                  />
                  <label htmlFor="email">EMAIL</label>
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
                  <label htmlFor="confirm_password">CONFIRM PASSWORD</label>
                  <input
                    className="form-control mb-3"
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                  />
                  <Col className="text-center">
                    <div className="text-center mb-3">
                      <button
                        style={{
                          backgroundColor: '#70BA89',
                          fontFamily: 'Vibur, cursive',
                        }}
                        className="btn btnhover text-white">SUBMIT</button>
                    </div>
                  </Col>
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