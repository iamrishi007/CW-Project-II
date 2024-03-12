import { useEffect, useState } from 'react'
import data from '../src/DB Files/HomePageData/NewDrops.json'
import './newDrop.css'

function NewDrop() {

     const [productData, setProductData] = useState([])

     useEffect(() => {
          setProductData(data.products)
     }, [])

     return (
          <>
               <div id='pro-cont' style={{ border: '1 px solid red' }}>
                    <h1 style={{ textAlign: 'center' }}>NEW DROPS</h1>
                    <div className='pro-img'>
                         {productData.map((products) => (
                              <div key={products.id} className='img'>
                                   <img src={products.img} alt='' />
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
                    <div className='new'>
                         <div className='new-ctg'>
                              <div>
                                   <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/um-steals-category.jpg?v=1679735943&width=400' alt='' />
                              </div>
                              <div>
                                   <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/top-sellers-category.jpg?v=1679735920&width=400' alt='' />

                              </div>
                              <div>
                                   <img src='https://cdn.shopify.com/s/files/1/0661/7423/files/new-arrival-category_42fc9137-d126-4c82-84f5-01407da56f01.jpg?v=1705921088&width=400' alt='' />

                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default NewDrop