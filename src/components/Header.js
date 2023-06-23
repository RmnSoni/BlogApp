import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';



function Header() {
    const [showHam, setShowHam] = useState(false);

    function toggleMenu() {
        setShowHam(!showHam)
    }

    return (
        <header className=" bg-gray-800 text-white pt-2 sm:pb-1 item-center text-2xl" >
            <Link to="/" className='inline-flex'>
                <img src='https://picsum.photos/30' alt="Kushal's profile" className=' rounded-full inline mx-2'/>
                <h1 className='inline font-semibold '> Kushal Soni</h1>
            </Link>

            <button onClick={toggleMenu} className='sm:hidden absolute right-0 mx-2 my-1 inline'>
                {showHam ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>

            {showHam &&
                <div className=' text-center'>

                    <p><Link to="/blogs" className='m-2 px-1 hover:bg-gray-200 hover:bg-opacity-20 rounded-md '>
                        Blogs</Link></p>

                    <p><Link to="/about" className='m-2 px-1 hover:bg-gray-200 hover:bg-opacity-20 rounded-md '>
                        About</Link></p>

                    <p><Link to="/contact" className='m-2 px-1 hover:bg-gray-200 hover:bg-opacity-20 rounded-md '>
                        Contact</Link></p>
                </div>}


            <span className='absolute right-0 sm:inline hidden'>

                <Link to="/blogs" className='mx-2 px-1 hover:bg-gray-200 hover:bg-opacity-20 rounded-md '>Blogs</Link>

                <Link to="/about" className='mx-2 px-1 hover:bg-gray-200 hover:bg-opacity-20 rounded-md '>About</Link>

                <Link to="/contact" className='mx-2 px-1 hover:bg-gray-200 hover:bg-opacity-20 rounded-md '>Contact</Link>
            </span>



        </header>
    )
}
export default Header;