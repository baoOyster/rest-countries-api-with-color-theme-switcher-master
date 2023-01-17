import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { selectTheme } from '../../features/setThemeSlice';
import Country from '../Country/Country';
import Header from '../Header/Header'
import Home from '../Home/Home';
import './App.css';


const App = () => {
  const theme = useSelector(selectTheme);

  return (
    <div className='app' id={theme}>
      <Header/>
      <div className='main paddingSides'>
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace={true}/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path='/:countryName' element={<Country />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
