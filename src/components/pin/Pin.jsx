import { Marker, Popup } from 'react-leaflet';
import './pin.scss';
import { Link } from 'react-router-dom';
export default function Pin({ item }) {
   return (
      <Marker position={[item.latitude, item.longitude]}>
         <Popup>
         <div className="popContainer">
            <img src={item.img} alt=''/>
            <div className="textConatiner">
               <Link to={`/${item.id}`}>{item.title}</Link>
               <span>{item.bedroom} beedroom</span>
               <b>$ {item.price}</b>
            </div>
         </div>
         </Popup>
      </Marker>)
}
