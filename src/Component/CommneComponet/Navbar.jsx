import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const location = useLocation();
    console.log("locatino : ", location.pathname)
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"'>
            <nav className='text-[1.4rem] py-5 flex justify-center align-middle border-b border-[#9F9F9F] leading-relaxed'>
                <div className='flex justify-between items-center w-11/12 mx-auto'>
                    <div className='cursor-pointer' onClick={() => navigate("/")}>
                    Gulhane Properties
                    </div>
                    <div className='lg:hidden cursor-pointer' onClick={handleToggleMenu}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>
                    <div className={`lg:flex lg:gap-32 gap-5 items-center justify-center ${menuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row`}>
                        <ul className='flex flex-col lg:flex-row lg:gap-12 gap-5'>
                            <li className={`cursor-pointer ${location.pathname === "/" ? "text-white" : "text-gray-300 hover:text-gray-100 duration-200"}`} onClick={() => { navigate("/"); setMenuOpen(false); }}>
                                Home
                            </li>
                            <li className={`cursor-pointer ${location.pathname === "/services" ? "text-white" : "text-gray-300 hover:text-gray-100 duration-200"}`} onClick={() => { navigate("/services"); setMenuOpen(false); }}>
                                Services
                            </li>
                            <li className={`cursor-pointer ${location.pathname === "/project" ? "text-white" : "text-gray-300 hover:text-gray-100 duration-200"}`} onClick={() => { navigate("/#projects"); setMenuOpen(false); }}>
                                Project
                            </li>
                            <li className={`cursor-pointer ${location.pathname === "/about" ? "text-white" : "text-gray-300 hover:text-gray-100 duration-200"}`} onClick={() => { navigate("/about"); setMenuOpen(false); }}>
                                About Us
                            </li>
                        </ul>
                        <div className=' lg:mt-0'>
                            <button onClick={() => { navigate("/contactUs"); setMenuOpen(false); }} className={`border border-[#9F9F9F] px-3 py-1 rounded-md ${location.pathname === "/contactUs" ? "text-white hover:text-gray-100" : "text-gray-300 hover:text-gray-100 duration-200"}`}>Contact us</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
