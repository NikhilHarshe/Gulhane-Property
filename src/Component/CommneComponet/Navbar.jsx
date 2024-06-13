import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const Navigate = useNavigate();
    const [tab, setTab] = useState("/");
    // console.log("tab ", tab);
    return (
        <div>
            <nav className='  text-[1.4rem] py-5 flex justify-center align-middle  border-b border-[#9F9F9F] leading-relaxed'>
                <div className='flex justify-between items-center w-11/12 mx-auto  '>
                    <div className='cursor-pointer' onClick={() => Navigate("/")}>
                        logo
                    </div>
                    <div className=' flex gap-32 items-center justify-center'>
                        <ul className=' flex gap-12'>
                            <li className={`cursor-pointer  ${tab === "/" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { Navigate("/"); setTab("/") }}>
                                Home
                            </li>
                            <li className={`cursor-pointer  ${tab === "/servises" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { Navigate("/services"); setTab("/servises") }}>
                                Services
                            </li>
                            <li className={`cursor-pointer  ${tab === "/project" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { Navigate("/"); setTab("/project") }}>
                                Project
                            </li>
                            <li className={`cursor-pointer  ${tab === "/aboutUs" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { Navigate("/about"); setTab("/aboutUs") }}>
                                About Us
                            </li>
                        </ul>

                        <div>
                            <button onClick={() => { Navigate("/contactUs"); setTab("/contactUs") }} className={`border border-[#9F9F9F] px-3 py-1 rounded-md ${tab === "/contactUs" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`}>Contact us</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
