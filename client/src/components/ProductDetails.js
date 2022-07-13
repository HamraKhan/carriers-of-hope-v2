import React from "react";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>back</button>
        <p>Product name</p>
        <p>Product description</p>
        <img alt="" />

        <button onClick={() => navigate("/request-form")}>place request</button>
      </div>
    </>
  );
}

export default ProductDetails;
