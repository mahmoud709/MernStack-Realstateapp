import { singlePostData, userData } from '../../lib/dummydata'
import Slider from '../slider/Slider'
import './singlepage.scss'
import pin from '../../assets/images/pin.png'
export default function SinglePage() {
   return (
      <div className='singlePage'>
         <div className='details'>
            <div className="wrapper">
               <Slider images={singlePostData.images} />
               <div className="info">
                  <div className="top">
                     <div className="post">
                        <h1>{singlePostData.title}</h1>
                        <div className="address">
                           <img src={pin} alt="location-pin" width={18} />
                           <span>{singlePostData.address}</span>
                        </div>
                        <div className="price">
                           <span>{singlePostData.price} $</span>
                        </div>
                     </div>
                     <div className="user">
                        <div className="user-img">
                           <img src={userData.img} alt="" width={50} height={50} />
                           <p>{userData.name}</p>
                        </div>
                     </div>
                  </div>
                  <div className="bottom">
                     <p>{singlePostData.description}</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="features">
            <div className="wrapper"></div>
         </div>
      </div>
   )
}
