import './home.scss';
import homeBg from '../../assets/images/bg.png';
import SearchBar from '../../components/common/SearchBar/SearchBar';
export default function Home() {
   return (
      <div className='container home'>
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
   )
}
