import React from "react";
import { useNavigate } from "react-router-dom";

function ConfirmForgottenNameOrPassword() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <h2>Login to you email to reset your login details</h2>
    </>
  );
}

export default ConfirmForgottenNameOrPassword;
