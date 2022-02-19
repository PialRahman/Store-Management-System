import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from './ProductContext';
import {Link} from 'react-router-dom';

export default function 
() {
    const [products,setProducts]= useContext(ProductContext);
    const {id}=useParams();
    const [updtmsg,setUpdtmsg]= useState();
    const [name,setName]=useState(products[id-1].name);
    const [image,setImage]=useState(products[id-1].image);
    const [price,setPrice]=useState(products[id-1].price);
    const updtmsgss=()=>{
        setUpdtmsg("Product has been updated!");
       
    };

    const updtpname=(e)=>{
        setName(e.target.value);
        const updtname=name;
        products[id-1].name=updtname;

    };
    const updtpimage=(e)=>{
        setImage(e.target.value);
        const updtimage=image;
        products[id-1].image=updtimage;

    };
    const updtpprice=(e)=>{
        setPrice(e.target.value);
        const updtprice=price;
        products[id-1].price=updtprice;

    };
    const updtProducts=(e)=>{
        e.preventDefault();
        setProducts([...products]);
    };
    
    
  return (
      <div>
          <h2>ID:{products[id-1].id}</h2>
    <div>
        <form onSubmit={updtProducts} encType="multipart/form-data">
   <label for="name">Name: </label>
  <input type="text" id="name" name="name" value={name} onChange={updtpname}></input><br></br><br></br>
  <label for="price">Price:</label>
  <input type="number" id="price" name="price" value={price} onChange={updtpprice}></input><br></br><br></br>
  <button onClick={updtmsgss} className="btndsnscrt">Update Product</button><Link to="/products"><button onClick={updtmsgss} className="bckthmbtnsdsns">Back to home</button></Link><br></br>
  
  </form>
  </div>{updtmsg}</div>
  )
}
