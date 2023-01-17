import './Home.css';
import React, { useEffect } from 'react'
import SearchBarAndFilter from './SearchBarAndFilter/SearchBarAndFilter';
import { useDispatch } from 'react-redux';
import { fetchCountry } from '../../features/getCountrySlice';
import CountriesFeed from './CountriesFeed/CountriesFeed';

const Home =  () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountry());
  }, [])
  

  return (
    <div className='home'>
        <SearchBarAndFilter/>
        <CountriesFeed />
    </div>
  )
}

export default Home