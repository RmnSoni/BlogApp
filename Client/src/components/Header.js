import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import logo from '../assets/profile32x32.png'
import './Header.css'
function Header() {
    const [showHam, setShowHam] = useState(false);
    function toggleMenu() {
        setShowHam(!showHam)
    }

    function NavButtons() {
        return (
            <>
                <Link to="/blogs" onClick={() => setShowHam(false)} className='header-button '>Blog</Link>
                <Link to="/about" onClick={() => setShowHam(false)} className='header-button '>About</Link>
                <Link to="/contact" onClick={() => setShowHam(false)} className='header-button'>Contact</Link>
            </>
        )
    };

    return (
        <header className="App-header" >
            <Link to="/" onClick={() => setShowHam(false)} className='home-button inline-flex'>
                <img src={logo} alt="Kushal's profile" className='' />
                <h1 className=''> Kushal Soni</h1>
            </Link>
            <button onClick={toggleMenu} className='header-ham'>
                {showHam ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
            {showHam && <div className='smDrop'>{NavButtons()}</div>}
            <span className='header-nav'>{NavButtons()}</span>
        </header>
    )
}
export default Header;