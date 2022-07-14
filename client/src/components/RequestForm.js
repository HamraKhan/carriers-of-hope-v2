import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./styles/Container.styled";

function RequestForm() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>

      <Form>
        <h1>Request Form</h1>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Address Line 1</label>
        <input type="text" />
        <label>Address Line 2</label>
        <input type="text" />
        <label>email</label>
        <input type="email" />
        <label>telephone</label>

        <button onClick={() => navigate("/order-summary", { replace: true })}>
          submit
        </button>
      </Form>
    </>
  );
}

export default RequestForm;
