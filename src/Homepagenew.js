import React from 'react';
import {Link} from 'react-router-dom';

export default function Homepagenew() {
  return (
    <div>
       <div className="navbardsns">
       <h2>Store Management System</h2>
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
<div className="webbnrdsns"><img src="./images/storewebbannerspicss.jpg" height="500px" width="1400px">
    </img></div>
    <div className="mdltxtbtndsns">

        <h1>Manage Products according to your choice and plans</h1>
        <h1>to manage the products</h1>
        </div>
        <Link to="/products"><button className="btndsns">Click Here</button></Link>
    

    </div>
  )
}
