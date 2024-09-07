import { useEffect } from 'react';
import './home.scss';
import homeBg from '../../assets/images/bg.png';
import SearchBar from '../../components/common/SearchBar/SearchBar';

export default function Home() {
   useEffect(() => {
      // Dynamically inject the Tawk.to script
      const script = document.createElement("script");
      script.async = true;
      script.src = 'https://embed.tawk.to/66dccc5fea492f34bc0f2703/1i777sltp';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);

      return () => {
         // Clean up the script if the component unmounts
         document.body.removeChild(script);
      };
   }, []);

   return (
      <div className='home'>
         <div className='content'>
            <div className="textContainer">
               <div className="wrapper">
                  <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                  <p>Explore Your Dream Home with Us your ultimate destination for finding the perfect home.
                     Our website offers a comprehensive collection of properties, from cozy apartments to luxurious estates, ensuring you find exactly what you’re looking for.
                     With detailed neighborhood insights, high-quality images, and up-to-date listings, we make your home search effortless and enjoyable.</p>
                  <SearchBar />
                  <div className="boxs">
                     <div className="box">
                        <h2>16+</h2>
                        <h3>year of experience</h3>
                     </div>
                     <div className="box">
                        <h2>120+</h2>
                        <h3>Award Gained</h3>
                     </div>
                     <div className="box">
                        <h2>1500+</h2>
                        <h3>property ready</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="imgContainer">
               <img src={homeBg} alt='home-page' loading='lazy' />
            </div>
         </div>
      </div>
   );
}

