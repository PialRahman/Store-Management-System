import React, { createContext, useState } from 'react';
export const ProductContext= createContext();
export const ProductContextinformations=(props)=>{
 const [products,setProducts] = useState([
{
    id:1,
    name:"Kit kat Chocolate",
    image:"./images/kitkatchocolate.jpeg",
    price:80,
},
{
    id:2,
    name:"Potato Chips",
    image:"./images/potatochips.jpg",
    price:20,
},
{
    id:3,
    name:"Mango Juice",
    image:"./images/magojuice.jpg",
    price:30,
},
{
    id:4,
    name:"Biscuit",
    image:"./images/energybiscuits.jpg",
    price:100,
}
 ]);


return (
    <ProductContext.Provider value={[products,setProducts]}>
        {props.children}

    </ProductContext.Provider>
)
};