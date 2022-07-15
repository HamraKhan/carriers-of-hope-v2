import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>back</button>
      <div>
        <p>All Products</p>
        <input type="search" placeholder="search products" />
        {/* <Link to="/filtered-products">
          <div>
            <p>Filter</p>
          </div>
        </Link> */}
        <Link to="/all-products/:productId">
          {" "}
          <div>
            <p>Product 1</p>
          </div>
        </Link>
        <Link to="/all-products/:productId">
          {" "}
          <div>
            <p>Product 2</p>
          </div>
        </Link>
        <Link to="/all-products/:productId">
          {" "}
          <div>
            <p>Product 3</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AllProducts;
