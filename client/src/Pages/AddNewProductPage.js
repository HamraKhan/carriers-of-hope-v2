import React, { useState, useContext} from "react";
import {Navigate} from 'react-router-dom';
import { RiAddCircleFill } from 'react-icons/ri';
import {ProductsContext} from '../Contexts/ProductsContext';
import {addProduct} from '../services/productsService';

export default function AddNewProductPage() {

  const [formProduct, setFormProduct] = useState({});
  const [redirect, setRedirect] = useState(false);
  const {setProductsTable} =  useContext(ProductsContext);


  const handleInputValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
   
    if(value==='true'){
      value = true;
    } else if(value==='false'){
      value =false;
    }
 
    setFormProduct({...formProduct,[name]: value });
  };


  const submitAddProduct = async (e) => {
    e.preventDefault();
    if ( formProduct.product_name== null || 
         formProduct.category_name== null||
         formProduct.product_status==null ||
         formProduct.product_status==='Select Status' ||
         formProduct.description==null) {
      alert("Please Fill All Required Fields!");
      return false;
    }

    addProduct(formProduct);
    setRedirect(true);
    setProductsTable(true);
  };


  const cancelAddProduct=()=>{
    setRedirect(true);
    setProductsTable(true);
  }
  
  if (redirect) {
    return <Navigate to={'/admin/dashboard'}/>
  }

  return (
      <div className="form-container-products">  
      <h3>Add a new product</h3>
      <div className="form-wrapper">
        <form className="product-form">
          <div  className="product-name">
            <label for="product_name">
              Product Name
            </label>
            <input
              required
              onChange={handleInputValue}
              type="text"
              name="product_name"
              id="product_name"              
            />
          </div>
          <div className="add-image">
            <span className="addImage-icon"><RiAddCircleFill/></span>
            <span className="addImage-icon middle-img"><RiAddCircleFill/></span>
            <span className="addImage-icon"><RiAddCircleFill/></span>
          </div>
          <div className="status">
            <label for="status">
              Status
            </label>
            <select id='status'
                    required
                    onChange={handleInputValue} 
                    name='product_status' 
                    value={formProduct.product_status}  
                    className="select-option ">
              <option value='Status'>Select Status</option>
              <option value={true}>In Stock</option>
              <option value={false}>Out of Stock</option>
            </select>
          </div>
          <div  className="category">
            <label for="category_name">
              Category Name
            </label>
            <select required onChange={handleInputValue} name='category_name' className="select-option">
              <option selected="true" value='category' disabled>Select Category </option>
              <option value='Furniture'>Furniture </option>
              <option value="Electrical items">Electrical items</option>
              <option  value='Household'>Household</option>
              <option  value='Toiletries'>Toiletries</option>
              <option  value='Baby'>Baby</option>
              <option  value='Other'>Other</option>
            </select>
          </div>
          <div className="description" >
            <label>Description</label>
            <textarea name="description" onChange={handleInputValue} required  placeholder=""></textarea>
          </div>
            <button
              type="submit"
              className="submit-btn"
              onClick={submitAddProduct}
            >
              Upload
            </button>
            <button className="cancel-btn" onClick={cancelAddProduct}>
              Cancel
            </button>
        </form>
        </div>
      </div>
  );
}
