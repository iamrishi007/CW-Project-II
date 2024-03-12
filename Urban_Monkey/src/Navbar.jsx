import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import data from '../src/DB Files/HomePageData/navbarItems.json';
import "./navbar.css"
import logo from "../src/assets/logo-news.png"

const Navbar = () => {
     const [navbarData, setNavbarData] = useState([]);

     useEffect(() => {
          setNavbarData(data.products);
     }, []);

     return (
          <div className="bg-black">
               <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '5px' }}>

                    <div id='logo-icon'>

                         <Link to={"/"}>
                              <img src={logo} alt='' id='homeImg'/>

                         </Link>
                    </div>

                    <div id='search'>
                         <input type='text' placeholder='All categories' />
                         <button>search</button>
                    </div>
                    <div className='icons'>
                         <Link to="/sign-up">

                              <FontAwesomeIcon icon={faUser} />
                         </Link>

                         <div>
                              <FontAwesomeIcon icon={faHeart} />
                         </div>
                         <div>
                              <FontAwesomeIcon icon={faShoppingCart} />
                         </div>
                    </div>
               </div>
               <div className='nav-links' style={{ backgroundColor: "#E2E3E5" }}>
                    <div className='nav-ctg' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                         <a href=''>hats & caps</a>
                         <a href=''>Skateboard </a>
                         <a href=''>Bottoms</a>
                         <a href=''>legacy drops</a>
                         <a href=''>mtv x um</a>
                         <a href=''>eyewear</a>
                         <a href=''>apears</a>
                         <a href=''>accessories</a>
                         <a href=''>abou us</a>

                    </div>
               </div>
               <div style={{ width: '100%' }}>
                    <div className='items' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                         {navbarData.map((product) => (
                              <div className='items-img' key={product.id}>
                                   <img src={product.img} alt='' />
                                   <p style={{ fontSize: '10px' }}>{product.title}</p>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
