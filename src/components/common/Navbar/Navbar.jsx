import { useState } from 'react';
import menueIcon from '../../../assets/images/menu.png';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
   const [open,setOpen ] = useState(false);
   return (

         <nav>
            <div className="left">
               <div className="logo">
                  <h2>RealeState</h2>
               </div>
               <ul>
               <NavLink to="/">home</NavLink>
               <NavLink to="">about</NavLink>
               <NavLink to="">contact</NavLink>
               <NavLink to="">agents</NavLink>
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
   )
}
