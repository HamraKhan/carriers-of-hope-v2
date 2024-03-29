import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
   const [products, setProducts]=useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);
   const [productsTable, setProductsTable] = useState(false);
    
    const fetchData = async () => {
    const response = await fetch(
     "/products"
   );
   if (response.ok) {
     const jsonData = await response.json();
     setProducts(jsonData);
     setLoading(false);
   } else {
     setLoading(false);
     setError(true);
     throw new Error("Network response was not ok.");
   }
  };
  
  return (
    <ProductsContext.Provider value={{ products, loading, error, fetchData, productsTable, setProductsTable}}>
      {" "}
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsProvider;
