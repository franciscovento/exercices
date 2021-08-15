import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';

const NavigationBar = () => {
  return (
    <div className='navBar'>
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/faq'>F.A.Q</Link>
        <Link to='/store'>Store</Link>
        <Link to='/app'>App</Link>
    </div>
  )
}

export default NavigationBar



