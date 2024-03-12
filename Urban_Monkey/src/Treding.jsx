import React, { useEffect, useState } from 'react'
import data from '../src/DB Files/HomePageData/Trending.json'
import '../src/trending.css'
import '../src/AllProducts'

function Treding() {

     const [showImg, setShowImg] = useState([])

     useEffect(() => {
          setShowImg(data.products)
     }, [])
     return (
          <>
               <div id='trend'>
                    <h1>TRENDING</h1>
                    <div className='pro-img'>
                         {showImg.map((products) => (
                              <div className='img' key={products.div}>
                                   <img src={products.img} alt={products.title} />
                                   <p>{products.title}</p>
                                   <h4>{products.price}</h4>
                                   <div>
                                        <button className='btn'>Add To Card</button>
                                   </div>
                              </div>
                         ))}
                    </div>
                    <div className='view-all'>
                         <button onClick={()=>window.open('/allproducts')}>VIEW ALL</button>
                    </div>
                    <div className='group-img'>
                         <div className='boys-img'>
                              <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/home-banner-playboy-d.jpg?v=1675512633&width=1000' />
                              <p>SINCE 2013</p>
                              <h4>HELPING OUR COMMUNITY EXPLORE THEIR INNER STREET ARTIST</h4>
                              <br />
                              <span>Our aim is to build the biggest self-sustaining Underground community by empowering vari0.us artists and athletes.</span>
                         </div>
                    </div>
                    <div id='collaboratoin'>
                         <h1>OUR COLLABORATIONS</h1>
                         <div className='collaboratoin-img'>
                              <div>
                                   <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/6c-umxpb_720x.svg?v=1680343468' alt='' />
                              </div>
                              <div>
                                   <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/raftaar_720x.svg?v=1678959828' alt='' />

                              </div>
                              <div>
                                   <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/rv_720x.svg?v=1678959828' alt='' />

                              </div>
                              <div>
                                   <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/gully-gang_720x.svg?v=1678959828' alt='' />

                              </div>
                              <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/bhuvan-bham_720x.svg?v=1678959828' alt='' />

                         </div>
                    </div>
               </div>

          </>
     )
}

export default Treding
