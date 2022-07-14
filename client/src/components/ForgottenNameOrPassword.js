import React from "react";
import { Form } from "./styles/Container.styled";
import { useNavigate } from "react-router-dom";

function ForgottenNameOrPassword() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <Form>
        <h1>Forgotten username or password</h1>
        <label>Email:</label>
        <input type="email" />

        <button
          onClick={() =>
            navigate("/confirm-forgotten-username-or-password", {
              replace: true,
            })
          }
        >
          submit
        </button>
      </Form>
    </>
  );
}

export default ForgottenNameOrPassword;
