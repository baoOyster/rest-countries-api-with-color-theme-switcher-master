import React from 'react';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../features/setThemeSlice';
import { changeBackgroundColor } from '../../features/setThemeSlice';

const Header = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
    <header className='paddingSides' id={theme}>
        <h1>Where in the world?</h1>
        <div className='theme-btn' onClick={() => {dispatch(changeBackgroundColor())}}>
            <div id={theme}></div>
            <h3>Dark Mode</h3>
        </div>
    </header>
  )
}

export default Header