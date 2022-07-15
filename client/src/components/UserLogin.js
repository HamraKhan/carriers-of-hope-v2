import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./styles/Container.styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./auth";

function UserLogin() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const auth = useAuth();
  const handleLogin = () => {
    auth.login(user);
    navigate("/profile", { replace: true });
  };
  return (
    <>
      {" "}
      <button onClick={() => navigate(-1)}>back</button>
      <Form>
        <h1>User Login</h1>

        <>
          <label>
            Username or email:{" "}
            <input type="text" onChange={(e) => setUser(e.target.value)} />
          </label>
          <label>
            Password: <input type="password" />
          </label>
          <button onClick={handleLogin}>Login</button>
        </>
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
        <p>
          or login as a Guest{" "}
          <Link to="/guest-login">
            <span style={{ color: "blue" }}>here</span>
          </Link>
        </p>
      </nav>
    </>
  );
}

export default UserLogin;
