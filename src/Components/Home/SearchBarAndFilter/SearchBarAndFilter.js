import './SearchBarAndFilter.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../../features/setThemeSlice';
import { fetchCountry, filterRegion } from '../../../features/getCountrySlice';

const SearchBarAndFilter = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  function searching({target}) {
    dispatch(fetchCountry(target.value));
  }

  function filterByRegion({target}) {
    if(target.value !== 'All') {
      dispatch(filterRegion(target.value));
    }else{
      const input = document.querySelector(".searchInput");
      if(!input || input.value === "" || !input.value) {
        dispatch(fetchCountry());
      } else{
        dispatch(fetchCountry(input.value));
      }
    }
    
  }

  return (
    <div className='homeTop'>
        <div className='searchBar' id={theme}>
          <div className='magnificientGlass' id={theme}></div>
          <input onChange={searching} id={theme} type='text' placeholder='Search for a country...' className='searchInput'/>
        </div>
        <div className="filter">
          <select onChange={filterByRegion} name="countrySelector" id={theme} >
            <option value='All'>All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
    </div>
  )
}

export default SearchBarAndFilter