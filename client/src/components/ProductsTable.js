import React, {useState, useEffect,useContext} from "react";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import {CgSoftwareDownload} from 'react-icons/cg'
import {ProductsContext} from '../Contexts/ProductsContext';
import { ThreeDots } from "react-loading-icons";
import {Link} from 'react-router-dom';
import { CSVLink } from "react-csv";

function ProductsTable(){

   const {products, loading, error, fetchData} =  useContext(ProductsContext);
   const [filterByStatus, setFilterByStatus] = useState('');
   const [sortQuery, setSortQuery] = useState('');
   const [filteredProducts, setFilteredProducts] = useState(products);
    
   const headers = [
      { label: "Product ID", key: "id" },
      { label: "Product Name", key: "product_name" },
      { label: "Category", key: "category_name" },
      // { label: "Status", key: "product_status" },
    ];
  
   useEffect(() => {
     fetchData().catch(console.error);
   }, []);

   useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = products.filter((product) => {
        if(filterByStatus==='In Stock') {
          return product.product_status===true  
        } else if(filterByStatus==='Out of Stock'){
          return product.product_status===false  
        } else{
          return product
        }
      })
      setFilteredProducts(filteredProducts);
    };
    filterProducts();
  }, [filterByStatus]);


  useEffect(() => {
    const sortProducts = ()=>{
      let filteredArray =  [].concat(products).sort((a,b)=>{
        return sortQuery==='product_name'? a.product_name[0].localeCompare(b.product_name[0]):
                sortQuery==='category_name'?a.category_name[0].localeCompare(b.category_name[0]):
                a.id-b.id
      })
      setFilteredProducts(filteredArray)
    }
    sortProducts()
  }, [sortQuery,products]);

  

   const deleteProduct = async (id) => {
      if (window.confirm("Are you sure you want to delete this product?")) {
        const url = `/products/${id}`;
        const postDetails = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        try {
          const response = await fetch(url, postDetails);
          if (response.ok) {
            let jsonResponse = await response.json();
            console.log(jsonResponse);
          } else {
            throw new Error("Request failed!");
          }
        } catch (error) {
          console.log(error);
        }
        fetchData();
      }
    };


    const handleSelectOptionValue=(e)=>{
     setSortQuery(e.target.value)
    }

 
   return(
        <div className="products-table">
          <div className="table-controller">
            <Link to='/add-new-product'><button className="add-btn">Add New Product</button></Link>
            <div className="filter-bar">
              <select className="sort-option" onChange={(e)=> setFilterByStatus(e.target.value)}>
                <option  selected="true" value="All">Filter by Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>             
              </select>
              <select className="sort-option" onChange={handleSelectOptionValue}>
                <option  selected="true" disabled="disabled">Sort by</option>
                <option value="id">Product Id</option>
                <option value="product_name">Product Name</option>
                <option value="category_name">Category Name</option>
                <option value="status">Status</option>
              </select>
              {
                <CSVLink 
                className ="download-btn"
                headers={headers}
                data={filteredProducts}
                filename='products_list.csv'
                >
                  <CgSoftwareDownload/>
                </CSVLink>
              }
           </div>
          </div>
          {loading ? (
            <ThreeDots stroke="#FFE61B" style={{"margin-left":"5rem"}}/>
          ) : error ? (
            <div>
              {" "}
              <img
                src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png"
                width={"50px"}
                alt='error-img'
              />{" "}
              <p className="text-danger">Network response was not ok!</p>
            </div>
            ) : (
            <div className="product-dashboard">
              <table id="products-table">
                <thead>
                  <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts?filteredProducts.map(
                      ({id,product_name,category_name, product_status}, index) => {
                      return (
                        <tr key={id}>       
                          <td>{id}</td>
                          <td>{product_name}</td>
                          <td>{category_name}</td>
                          <td className="instock-row">{product_status?'In Stock':"Out of Stock"}</td>
                          <td className="actions">
                           
                            <Link to={'/edit-product/'+id}> <span className="edit-btn"><FiEdit2/></span></Link>
                            
                            <span className="delete-btn">
                                <RiDeleteBin6Line onClick={()=>deleteProduct(id)}/>
                            </span>
                            </td>
                          </tr>
                      );
                      }
                    )
                  : "Loading..."
                  }
                </tbody>
              </table>
            </div>
          )}
        </div>

                      

   );

}

export default ProductsTable;
