import Filter from '../common/Filter/Filter'
import './listPage.scss'
import { listData } from './../../lib/dummydata';
import Card from '../card/Card';
import Map from '../map/Map';
export default function ListPage() {
   const data = listData;
   return (
      <div className='listPage'>
         <div className="listContainer">
            <div className="wrapper">
               <Filter />
               {data.map(item => {
                  return (
                     <Card item={item} key={item.id} />
                  )
               })}
            </div>
         </div>
         <div className="mapContainer">
            <Map items={data} />
         </div>
      </div>
   )
}
