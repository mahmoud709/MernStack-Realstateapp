import './slider.scss'
export default function Slider({ images }) {
   return (
      <div className="slider">
         <div className="bigImage">
            <img src={images[0]} alt="banner-Img" />
         </div>
         <div className="smallImages">
            {images.slice(1).map((img, index) => {
               return (
                  <div className="smallImg" key={index}>
                     <img src={img} alt="small-img" />
                  </div>
               );
            })}
         </div>
      </div>
   );
}
