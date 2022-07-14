import React from "react";
import { Form } from "./styles/Container.styled";

function GuestLogin() {
  return (
    <>
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
