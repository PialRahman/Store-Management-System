import React, { useContext } from 'react'
import { ProductContext } from './ProductContext';
import  {ProductContextinformations}  from './ProductContext';
import './App.css';
import {Link, useParams} from 'react-router-dom';

 function Products() {
    const [products,setProducts]= useContext(ProductContext);
    const {id}=useParams();
    const deleteproducts=(productToDelete)=>{
     
      setProducts(products.filter(product=>product!==productToDelete))
    }
  return (
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
 
  
        {
            products.map(product=>(
                <div className="crtdsns">
           <div className="w3-container">
           <div className="crtdsn w3-card-4">
                <h2>{product.name}</h2>
                <h2><img src={product.image} height="200px" width="300px"></img></h2>
                <h2>Price:{product.price} tk</h2>
                <Link to={"/editproducts/"+product.id}><button className="btnedtdsnss">Edit</button></Link>
                <h4><button className={"btndsnsn"} onClick={()=>deleteproducts(product)} src="/products">Delete</button></h4>
               </div>
            </div>
            </div>
             ))
 }
</div>
             
     )
};
export default Products