import './slider.scss'
import arrow from '../../assets/images/arrow.png'
import { useState } from 'react';
export default function Slider({ images }) {
   const [imgIndex, setImgIndex] = useState(null);
   const changeSlide = (dir) => {
      if (dir === 'left') {
         if (imgIndex === 0) {
            setImgIndex(images.length - 1);
         }
         else {
            setImgIndex(imgIndex - 1);
         }
      }
      else {
         if (imgIndex === images.length - 1) {
            setImgIndex(0)
         }
         else {
            setImgIndex(imgIndex + 1);
         }
      }
   }
   return (
      <div className="slider">
         {imgIndex !== null && <div className="fullSlider">
            <div className="arrow">
               <img src={arrow} alt="left-arrow" onClick={() => changeSlide('left')} />
            </div>
            <div className="imgContainer">
               <img src={images[imgIndex]} alt="banner-Img" />
            </div>
            <div className="arrow">
               <img src={arrow} className='right-arrow' alt="right-arrow" onClick={() => changeSlide('right')} />
            </div>
            <div className="close" onClick={() => setImgIndex(null)}>X</div>
         </div>}
         <div className="bigImage">
            <img src={images[0]} alt="banner-Img" onClick={() => setImgIndex(0)} />
         </div>
         <div className="smallImages">
            {images.slice(1).map((img, index) => {
               return (
                  <img src={img} key={index} alt="small-img" onClick={() => setImgIndex(index + 1)} />
               );
            })}
         </div>
      </div>
   );
}
