// import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../src/sliderImg.css'
import 'react-slideshow-image/dist/styles.css'
const SliderImg = () => {
     const images = [
          "https://www.urbanmonkey.com/cdn/shop/files/UM23_September_Caps_WEB_DESK_2023_1_1b0b191b-4b68-4b8b-b8bd-e88f7b8d3176.jpg?v=1708599852&width=2000",
          "https://www.urbanmonkey.com/cdn/shop/files/1708671434-a9420f0a435caa02.png?v=1708671397&width=2000",
          "https://www.urbanmonkey.com/cdn/shop/files/1708172859-ae62a8d3c7b626c8.png?v=1708172861&width=2000",
          "https://www.urbanmonkey.com/cdn/shop/files/UM23_Ghost-Drop_Skateboard_Web-Banner-DESK.jpg?v=1704177743&width=2000",
          "https://www.urbanmonkey.com/cdn/shop/files/UM24_Restock-Template_Wallets-DESK.jpg?v=1705034616&width=2000",
          "https://www.urbanmonkey.com/cdn/shop/files/Core_Web-Desk-Catalog_260923.jpg?v=1695811237&width=2000"
     ];

     return (
          <Slide>
               <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[0]})` }}>

                    </div>
               </div>
               <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[1]})` }}>

                    </div>
               </div>
               <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[2]})` }}>

                    </div>
               </div>
               <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[3]})` }}>

                    </div>
               </div>
               <div className="each-slide-effect">
                    <div style={{ 'backgroundImage': `url(${images[4]})` }}>

                    </div>
               </div>
          </Slide>
     );
};

export default SliderImg;