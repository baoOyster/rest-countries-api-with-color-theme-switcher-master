import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { selectTheme } from '../../features/setThemeSlice';
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
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
