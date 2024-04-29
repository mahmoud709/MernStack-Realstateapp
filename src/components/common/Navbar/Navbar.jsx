import { useState } from 'react';
import menueIcon from '../../../assets/images/menu.png';
export default function Navbar() {
   const [open,setOpen ] = useState(false);
   return (
      <div className="container">
         <nav>
            <div className="left">
               <div className="logo">
                  <h2>RealeState</h2>
               </div>
               <ul>
                  <li>home</li>
                  <li>about</li>
                  <li>contact</li>
                  <li>agents</li>
               </ul>
            </div>
            <div className="right">
               <div className="loginBtn">
                  <button>login</button>
               </div>
               <div className="menueIcon" onClick={()=>setOpen(!open)}>
                  <img src={menueIcon} alt='menue icon' loading='lazy'/>
               </div>
            </div>
            <div className={open ? 'menue active':'menue'}>
               <ul>
                  <li>home</li>
                  <li>about</li>
                  <li>contact</li>
                  <li>agents</li>
                  <li>login</li>
               </ul>
            </div>
         </nav>
      </div>
   )
}
