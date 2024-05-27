import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaTimes, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleLinkClick = () => {
        setShowNavbar(false);
    };

    return (
        <nav className='xl:px-28 p-4 py-4 bg-[#262626] flex justify-between items-center'>
            <ul className='lg:flex hidden items-center cursor-pointer gap-4'>
                <Link to="/" >
                    <li className='w-24 p-3.5 text-center rounded-md font-light tracking-widest text-sm text-white bg-[#1A1A1A]'>
                        Home
                    </li>
                </Link>
                <Link to="/products" >
                    <li className='w-24 p-3  text-center rounded-md font-light tracking-widest text-sm border-2 border-dashed border-[#81807E] text-white bg-[#262626] hover:bg-[#81807E]'>
                        Products
                    </li>
                </Link>
            </ul>
            <img src="./img/Logo (9).png" alt="" />
            <ul className='lg:flex hidden items-center cursor-pointer gap-4'>
                <li className='w-12 py-3 text-center rounded-md font-light tracking-widest text-sm text-white bg-[#1A1A1A]'><button><FaShoppingCart /></button></li>
                <Link to='/contact'>
                    <li className='w-24 py-3 text-center rounded-md font-light tracking-widest text-sm  bg-[#AE9B84] text-white'><button>Contact</button></li>
                </Link>
            </ul>
            <button onClick={() => setShowNavbar(true)} className='lg:hidden block'>
                <FaBars className='text-2xl text-white' />
            </button>
            {
                showNavbar && (
                    <div className='lg:hidden fixed top-0 left-0 w-96 h-screen bg-black bg-opacity-90 z-50'>
                        <div className='flex justify-end p-7'>
                            <button className='text-white text-2xl cursor-pointer' onClick={() => setShowNavbar(false)}>
                                <FaTimes />
                            </button>
                        </div>
                        <div className='mt-4 p-2'>
                            <img src="./img/Logo (9).png" alt="" />
                            <hr className='border-[#63B597] p-2 mt-2' />
                            <ul className='text-white flex  flex-col cursor-pointer items-start text-lg  font-semibold text-center'>
                                <Link to='/' onClick={handleLinkClick}>
                                    <li>Home</li>
                                </Link>
                                <hr className='border-[#63B597]  w-full p-2 mt-2' />
                                <Link to='/products' onClick={handleLinkClick}>
                                    <li>Products</li>
                                </Link>
                                <hr className='border-[#63B597] w-full p-2 mt-2' />
                                <Link to='/contact' onClick={handleLinkClick}>
                                    <li>Contact</li>
                                </Link>
                                <hr className='border-[#63B597]  w-full p-2 mt-2' />
                            </ul>
                        </div>
                    </div>
                )
            }
        </nav >
    )
}

export default Navbar;
