import React from "react";
import { Form } from "./styles/Container.styled";
import { useNavigate } from "react-router-dom";

function GuestLogin() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <Form>
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
        <button>submit</button>
      </Form>
    </>
  );
}

export default GuestLogin;
