import './CountriesFeed.css';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredCountry } from '../../../features/getCountrySlice';
import { selectTheme } from '../../../features/setThemeSlice';
import { useNavigate } from 'react-router-dom';
import { takeACountry } from '../../../features/selectCountrySlice';

const CountriesFeed = () => {
    const country = useSelector(selectFilteredCountry);
    const theme = useSelector(selectTheme);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(country);
    return (
    <div className='countriesFeed'>
        {country?.map((country, index) => (
            <div className='country' key={index} onClick={() => {
                dispatch(takeACountry(country));
                navigate(`/:${country.name.common}`, {replace: true});
            }}>
                <img src={country.flags.png} alt={`Flag of ${country.name.official}`} className="flagImage"/>
                <div className='countryInfo' id={theme}>
                    <h3>{country.name.official}</h3>
                    <p><span className='getBold'>Population:</span> {country.population}</p>
                    <p><span className='getBold'>Region:</span> {country.region}</p>
                    <p><span className='getBold'>Capital:</span> {country.capital}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CountriesFeed