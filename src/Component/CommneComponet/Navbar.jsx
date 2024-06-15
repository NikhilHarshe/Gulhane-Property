import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const location  = useLocation();
    const navigate = useNavigate();
    // const [tab, setTab] = useState("/");

    return (
        <div>
            <nav className='  text-[1.4rem] py-5 flex justify-center align-middle  border-b border-[#9F9F9F] leading-relaxed'>
                <div className='flex justify-between items-center w-11/12 mx-auto  '>
                    <div className='cursor-pointer' onClick={() => navigate("/")}>
                        logo
                    </div>
                    <div className=' flex gap-32 items-center justify-center'>
                        <ul className=' flex gap-12'>
                            <li className={`cursor-pointer  ${location.pathname.slice(1)  === "" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { navigate("/");  }}>
                                Home
                            </li>
                            <li className={`cursor-pointer  ${location.pathname.slice(1) === "services" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { navigate("/services") }}>
                                Services
                            </li>
                            <li className={`cursor-pointer  ${location.pathname.slice(1) === "project" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { navigate("/#projects") }}>
                                Project
                            </li>
                            <li className={`cursor-pointer  ${location.pathname.slice(1) === "about" ? ("text-white") : ("text-gray-300 hover:text-gray-100 duration-200")}`} onClick={() => { navigate("/about")}}>
                                About Us
                            </li>
                        </ul>

                        <div>
                            <button onClick={() => { navigate("/contactUs")}} className={`border border-[#9F9F9F] px-3 py-1 rounded-md ${location.pathname.slice(1) === "contactUs" ? ("text-white hover:text-gray-100") : ("text-gray-300 hover:text-gray-100 duration-200")}`}>Contact us</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
