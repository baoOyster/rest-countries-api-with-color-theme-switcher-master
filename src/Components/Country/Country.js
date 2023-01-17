import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectACountry } from '../../features/selectCountrySlice'
import { selectTheme } from '../../features/setThemeSlice'

const Country = () => {
    const theme = useSelector(selectTheme);
    const navigate = useNavigate();
    const countryInfo = useSelector(selectACountry);
    console.log(countryInfo)
    function getCurrencies() {
        const currenciesObj = Object.values(countryInfo.currencies);
        const currenciesName = currenciesObj.map(currency => currency.name);
        return currenciesName;
    }

    function getLanguages() {
        const languagesArray = Object.values(countryInfo.languages);
        const htmlLangArray = languagesArray.map(language => (<span className='countryLang'>{`${language}`}</span>));
        return htmlLangArray; 
    }

    function getNativeName(){
        const nativeNameObj = Object.values(countryInfo.name.nativeName);
        const aNativeName =  nativeNameObj[0].official;
        return aNativeName;
    }

    function getBorders() {
        return (
            <div className="borderCountries">
                {countryInfo.borders.map(country => (<div className="borderCountry">{country}</div>))}
            </div>
        )
    }
    return (
    <div className="countryDes">
        <div className='backButton' onClick={() => {navigate('/home', {replace: true})}}>
            <div id={theme}></div>
            <p>Back</p>
        </div>
        <img src={countryInfo.flags.png} alt="flag" />
        <h1>{countryInfo.name.common}</h1>
        <div className="informations">
            <p><span className='getBold'>Native Name:</span> {getNativeName()}</p>
            <p><span className='getBold'>Population:</span> {countryInfo.population}</p>
            <p><span className='getBold'>Region:</span> {countryInfo.region}</p>
            <p><span className='getBold'>Sub Region:</span> {countryInfo.subregion}</p>
            <p><span className='getBold'>Capital:</span> {countryInfo.capital}</p>
            <p><span className='getBold'>Currencies:</span> {getCurrencies()}</p>
            <p><span className='getBold'>Languages:</span> {getLanguages()}</p>
            <p><span className='getBold'>Border Countries:</span> {getBorders()}</p>
        </div>
    </div>
  )
}

export default Country