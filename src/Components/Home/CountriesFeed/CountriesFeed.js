import './CountriesFeed.css';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectFilteredCountry } from '../../../features/filterCountrySlice';

const CountriesFeed = () => {
    const country = useSelector(selectFilteredCountry);
    console.log(country);
    return (
    <div className='countriesFeed'>
        {country?.map((country, index) => (
            <div className='country' key={index}>
                <p>{country.name.official}</p>
            </div>
        ))}
    </div>
  )
}

export default CountriesFeed