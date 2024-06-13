import React from 'react'
import { BiLogoFacebookCircle, BiLogoYoutube } from 'react-icons/bi'
import { BsDot, BsInstagram, BsTelephoneFill, BsTwitter } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
    return (
        <div className=' border-t border-[#B8B8B8]'>
            <div className=' w-10/12 mx-auto pt-9'>
                <div className=' flex justify-between gap-10 w-full '>
                    <div className=' w-[30%] flex gap-4 flex-col'>
                        <h2 className='text-[#F130A2] text-[1.5rem] flex items-center'>
                            <BsDot className=' text-white text-4xl mr-[-10px]' />
                            Gulhane Properties
                            <BsDot className=' text-white text-4xl ml-[-10px]' />
                        </h2>

                        <p className=' '>Gulhane Properties, founded in 2020 was built on the core values of trust, satisfaction and innovation. We offer beautiful homes with quality construction. After years and over projects in the city, we have cemented our place in the industry.</p>

                        <div className=' flex gap-5 items-center'>
                            <BiLogoFacebookCircle className='text-[#F130A2] text-3xl' />
                            <BsInstagram className='text-[#F130A2] text-xl' />
                            <BsTwitter className='text-[#F130A2] text-2xl' />
                            <BiLogoYoutube className='text-[#F130A2] text-3xl' />
                        </div>
                    </div>
                    <div className=' w-[30%] flex gap-4 flex-col'>
                        <div className='text-[#F130A2] text-[1.5rem] flex'>
                            <BsDot className=' text-white text-4xl mr-[-10px]' />
                            Information
                            <BsDot className=' text-white text-4xl ml-[-10px]' />
                        </div>
                        <div className='flex gap-4'><BsTelephoneFill className='text-[#F130A2] text-xl' /> 9420063897, 9922824688</div>
                        <div className='flex gap-4'><MdEmail className='text-[#F130A2] text-2xl ' /> pranjaligulhane04@gmail.com </div>
                        <div className='flex gap-4'><FaLocationDot className='text-[#F130A2] text-3xl' /> 403, “Sai Omkar”, Plot No. 3, Sadbhavna Nagar, Omkar Nagar Main Road, Nagpur -27</div>
                    </div>
                    <div className=' w-[35%] flex gap-4 flex-col'>
                        <h2 className='text-[#F130A2] text-[1.5rem] flex'>
                            <BsDot className=' text-white text-4xl mr-[-10px]' />
                            Data
                            <BsDot className=' text-white text-4xl ml-[-10px]' /></h2>
                        <div className=' flex justify-between'>
                            <p>Gulhane Properties Brochure pdf</p>
                            <button className=' border rounded-lg px-2 py-1 text-center'>Download Now</button>
                        </div>
                        <div className=' flex justify-between'>
                            <p>Project Spruha Pdf</p>
                            <button className=' border rounded-lg px-2 py-1 text-center'>Download Now</button>
                        </div>

                    </div>
                </div>
                <div className=' text-[#F130A2] flex pb-12 pt-7 justify-end w-full'>2024Gulhane properties @ all right reserved.</div>
            </div>
        </div>
    )
}

export default Footer