import React, { useState, useEffect } from 'react';
import "../src/DB Files/HomePageData/allProducts.json"
import "./all-products.css"
import Navbar from './Navbar';
import "./navbar.css"
import Footer from './Footer';
const AllProducts = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {

          fetch('../src/DB Files/HomePageData/allProducts.json')
               .then((response) => response.json())
               .then((data) => setProducts(data.data));
     }, []);

     return (
          <>
               <Navbar />
               <div id='all-products'>
                    {products.map((product, index) => (
                         <div key={index}>
                              <img src={product.productImage} alt={product.productName} />
                              <h3>{product.productName}</h3>
                              <p>Type: {product.productType}</p>
                              <p>Price: {product.productPrice}</p>
                              <button style={{backgroundColor:"black"}}>Add To Card</button>
                         </div>
                    ))}
               </div>
               <Footer/>
          </>
     );
};

export default AllProducts;
