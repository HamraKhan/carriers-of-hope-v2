import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./styles/Container.styled";
import { Link } from "react-router-dom";

function UserLogin() {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <button onClick={() => navigate(-1)}>back</button>
      <Form>
        <h1>User Login</h1>

        <label>Username or Email:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button>Login</button>
      </Form>
      <nav>
        <p>
          Forgotten username or password? Click{" "}
          <Link to="/forgotten-name-or-password">
            <span style={{ color: "blue" }}>here</span>
          </Link>
        </p>
        <p>
          Don't have an account? Sign up{" "}
          <Link to="/sign-up">
            <span style={{ color: "blue" }}>here</span>
          </Link>
        </p>
      </nav>
    </>
  );
}

export default UserLogin;
