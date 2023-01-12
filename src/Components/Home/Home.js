import './Home.css';
import React, { useEffect } from 'react'
import SearchBarAndFilter from './SearchBarAndFilter/SearchBarAndFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry, selectCountry } from '../../features/getCountrySlice';
import CountriesFeed from './CountriesFeed/CountriesFeed';
import { storeCountry } from '../../features/filterCountrySlice';

const Home =  () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountry);
  useEffect(() => {
    dispatch(fetchCountry());
  }, [])
  
  useEffect(() => {
    dispatch(storeCountry(countries));
  }, [countries])

  return (
    <div className='home'>
        <SearchBarAndFilter/>
        <CountriesFeed />
    </div>
  )
}

export default Home