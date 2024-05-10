import './SerchBar.scss';
import searchIcon from '../../../assets/images/search.png'
import { useState } from 'react';
export default function SearchBar() {

  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minprice: 0,
    maxprice: 0
  })
  function switchType(val) {
    setQuery((prev) => ({ ...prev, type: val }))
  }
  return (
    <div className='SearchBar'>
      <div className="type">
        {types.map((btn, index) => {
          return (
            <button key={index} className={query.type === btn ? "activeBtn" : ""} onClick={() => switchType(btn)}>{btn}</button>
          )
        })}
      </div>
      <form>
        <input type="text" name='location' placeholder='City Location' />
        <input type="number" name='minPrice' min={0} max={10000000} placeholder='Min Price' />
        <input type="number" name='maxPrice' min={0} max={10000000} placeholder='Max Price' />
        <button>
          <img src={searchIcon} alt="search-icon" />
        </button>
      </form>
    </div>
  )
}
