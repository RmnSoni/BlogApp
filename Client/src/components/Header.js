import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import logo from '../assets/profile32x32.png'

function Header() {
    const [showHam, setShowHam] = useState(false);

    function toggleMenu() {
        setShowHam(!showHam)
    }

    return (
        <header className="App-header" >
            <Link to="/" className='home-button inline-flex'>
                <img src={logo} alt="Kushal's profile" className=''/>
                <h1 className=''> Kushal Soni</h1>
            </Link>
            <button onClick={toggleMenu} className='header-ham'>
                {showHam ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
            {showHam &&
                <div className='smDrop text-center'>
                    <p><Link to="/blogs" onClick={toggleMenu} className='header-button '>Blog</Link></p>
                    <p><Link to="/about" onClick={toggleMenu} className='header-button '>About</Link></p>
                    <p><Link to="/contact" onClick={toggleMenu}  className='header-button'>Contact</Link></p>
                </div>
            }

            <span className='header-nav'>
                <Link to="/blogs" className='header-button'>Blog</Link>
                <Link to="/about" className='header-button'>About</Link>
                <Link to="/contact" className='header-button'>Contact</Link>
            </span>
        </header>
    )
}
export default Header;