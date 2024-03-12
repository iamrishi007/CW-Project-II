import React from 'react'
import AllProducts from './AllProducts'
import Celebrities from './Celebrities'
import Footer from './Footer'
import Navbar from './Navbar'
import NewDrop from './NewDrop'
import SliderImg from './SliderImg'
import Treding from './Treding'

const Home = () => {
     return (
          <>
               <Navbar />
               <SliderImg />
               <NewDrop />
               <Treding />
               <Celebrities />
               <Footer />
          </>
     )
}

export default Home