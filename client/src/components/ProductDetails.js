import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
  const params = useParams();
  const productId = params.productId;
  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>back</button>
        <p>Product name</p>
        <p>Product id {productId}</p>
        <p>Product description</p>
        <img alt="" />

        <button onClick={() => navigate("/user-login")}>place request</button>
      </div>
    </>
  );
}

export default ProductDetails;
