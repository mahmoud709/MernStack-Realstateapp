import { MapContainer, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './map.scss';
import Pin from '../pin/Pin';
export default function Map({ items }) {
   const position = [51.505, -0.09]
   return (
      <MapContainer center={position} zoom={7} scrollWheelZoom={false} className='map'>
         <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         {items.map(item => {
            return (
               <Pin item={item} key={item.id} />
            )

         })}
      </MapContainer>
   )
}
