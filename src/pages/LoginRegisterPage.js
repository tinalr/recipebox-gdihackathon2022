import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginRegisterPage = () => {
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
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={(e) => { setName(e.target.value) }}
          />
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirm_password"
            id="confirm_password"
            value={confirmPassword}
            onChange={(e) => { setConfirmPassword(e.target.value) }}
          />
          <button>Submit</button>
        </form>
      </div>
      <div>
        <h1>Login</h1>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegisterPage;