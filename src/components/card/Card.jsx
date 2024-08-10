import { Link } from 'react-router-dom'
import './card.scss'
import pin from '../../assets/images/pin.png';
import bed from '../../assets/images/bed.png';
import bathroom from '../../assets/images/bath.png';
import saveIcon from '../../assets/images/save.png';
import chatIcon from '../../assets/images/chat.png';
export default function Card({ item }) {
   return (
      <div className="item-card">
         <div className="card-image">
            <Link to={`/${item.id}`}>
               <img src={item.img} alt={item.title} />
            </Link>
         </div>
         <div className="card-body">
            <h3>{item.title}</h3>
            <div className="k">
               <div className="address">
                  <img src={pin} alt='pin-location' width={20} />
                  <p>{item.address}</p>
               </div>
               <div className="price">
                  <span>$ {item.price}</span>
               </div>
               <div className="bottom">
                  <div className="features">
                     <div className="feature">
                        <img src={bed} alt="bed-img" width={16} height={16} />
                        <span>{item.bedroom} bedroom</span>
                     </div>
                     <div className="feature">
                        <img src={bathroom} alt="bed-img" width={16} height={16} />
                        <span>{item.bathroom} bathroom </span>
                     </div>
                  </div>
                  <div className="icons">
                     <div className="icon">
                        <img src={saveIcon} alt="save-icon" width={16} height={16} />
                     </div>
                     <div className="icon">
                        <img src={chatIcon} alt="chat-icon" width={16} height={16} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
