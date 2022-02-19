import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import  {ProductContextinformations}  from './ProductContext';
import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function CreateProduct() {
    const [products,setProducts]= useContext(ProductContext);
    const [admsg,setAdmsg]= useState();
    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [image,setImage]=useState("");
    const [price,setPrice]=useState("");
    const admsgss=()=>{
        if(id!="" && name!="" && image!="" && price!=""){
        setAdmsg("Product has been added!");
        }
    };
    const addpid=(e)=>{
        setId(e.target.value);

    };
    const addpname=(e)=>{
        setName(e.target.value);
        

    };
    const addpimage=(e)=>{
        setImage(e.target.file);

    };
    const addpprice=(e)=>{
        setPrice(e.target.value);

    };
    const addProducts=(e)=>{
        e.preventDefault(); 
         if(id!="" && name!="" && image!="" && price!=""){
        setProducts([...products,{id:id,name:name,image:image,price:price}])
        }
    };

  return (
    <div>
        
         <div className="navbardsns">
    <ul>   
    <Link to='/'> <li>Home</li></Link>
      <Link to="/products"><li>Products</li></Link>
      <Link to="/createproducts"><li>Add Product</li></Link>
      <div className="srchbrdsns">
     <form action="/action_page.php">
      <input type="text" placeholder="Search Product.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
    </div>
    </ul>
    </div>
    <div>
    <div className="crtdsns">
           <div className="w3-container">
           <div className="crtdsn w3-card-4">
               <h2>Create Product</h2>
        <form onSubmit={addProducts} encType="multipart/form-data">
  <label for="id">ID: </label>
  <input type="number" id="id" name="id" value={id} onChange={addpid}></input><br></br><br></br>
  
  <label for="name">Name: </label>
  <input type="text" id="name" name="name" value={name} onChange={addpname}></input><br></br><br></br>
  <label for="image">Image: </label>
  <input type="file" id="image" name="image" value={image} onChange={addpimage}></input><br></br><br></br>
  <label for="price">Price:</label>
  <input type="text" id="price" name="price" value={price} onChange={addpprice}></input><br></br><br></br>
  <button onClick={admsgss} className="btndsnscrt">Create Product</button><br></br>
  {admsg}
</form>
</div></div></div>
</div>
    </div>
  )
}
