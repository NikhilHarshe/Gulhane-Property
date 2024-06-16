import React from 'react'
import { BiLogoFacebookCircle, BiLogoYoutube } from 'react-icons/bi'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import img1 from "../Component/Acets/cover_page-0001 15 1.jpg"
import img2 from "../Component/Acets/srusha_cover 3.jpg"
import img3 from "../Component/Acets/spruha_cover 4.jpg"
import aboutlogo from "../Component/Acets/About logo.png"
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=' w-11/12 mx-auto flex lg:flex-row flex-col-reverse'>
      <div className=' lg:w-[71%] w-auto mt-5 lg:h-[56rem] '>
        <div>
          <p className=' text-4xl leading-[3rem] lg:w-[25rem]'>Completed <span className=' text-[#F130A2]'>Projects</span>  Here</p>
          <div className=' flex lg:flex-col flex-row gap-5 mt-8 lg:w-[30px] items-center'>
            <BiLogoFacebookCircle className='text-[#F130A2] hover:text-pink-600 duration-100 text-3xl' />
            <BsInstagram className='text-[#F130A2] text-xl hover:text-pink-600 duration-100' />
            <BsTwitter className='text-[#F130A2] text-2xl hover:text-pink-600 duration-100' />
            <BiLogoYoutube className='text-[#F130A2] text-3xl hover:text-pink-600 duration-100' />
          </div>
        </div>
        <div className=' flex lg:flex-row flex-wrap gap-5 lg:relative lg:mt-[-5rem] mt-[2rem] justify-between'>
          <div className=' lg:w-[19em] w-auto lg:absolute top-[10rem] '>
            <img src={img1} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
            <div className=' mx-[5.7rem] lg:ml-0'>
              <p className=' text-[#F130A2] text-lg font-semibold pt-3'>Spruha Kusum</p>
              <p className=' text-lg'>@Omkar Nagar</p>
            </div>
          </div>
          <div className=' lg:w-[19em] w-auto lg:absolute left-[20rem]'>
            <img src={img2} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
            <div className=' mx-[5.7rem] lg:ml-0'>
              <p className=' text-[#F130A2] text-lg font-semibold pt-3'>Spruha Enclave</p>
              <p className=' text-lg'>@Shivshakti Nagar</p>
            </div>
          </div>
          <div className=' lg:w-[19em] w-auto lg:absolute left-[40rem] top-[-10rem]'>
            <img src={img3} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
            <div className=' mx-[5.7rem] lg:ml-0'>
              <p className=' text-[#F130A2] text-lg font-semibold pt-3'>Spruha Sindhu</p>
              <p className=' text-lg'>@Gurukunj Nagar</p>
            </div>
          </div>
          <div className=' lg:absolute my-9 right-4 top-[25rem] mx-[2rem] lg:ml-0'>
            <p className=' text-xl pb-3 text-[#F130A2] lg:text-white'>Key Features :-</p>
            <ul className=' list-disc list-inside leading-tight'>
              <li>CCTV Camera in Parking </li>
              <li>Anti-termite Waterproofing</li>
              <li>Branded Elevator</li>
              <li>Pop</li>
              <li>Modular Kitchen</li>
              <li>B secure Door</li>
            </ul>
          </div>
        </div>
        {/* <div className=' lg:relative'>
          
        </div> */}
      </div>
      <div className=' lg:w-[29%] w-auto mt-6 bg-black flex flex-col gap-11'>
        <h1 className=' text-4xl text-center mt-4'>About us </h1>
        <div className=' lg:w-[19rem] md:w-[30rem] sm:mx-auto mx-8 flex gap-7 flex-col'>
          <p className=' text-sm'>Gulhane Properties, founded in 2020 was built on the core values of trust, satisfaction and innovation. We offer beautiful homes with quality construction. After years and over projects in the city, we have cemented our place in the industry.</p>
          <img src={aboutlogo} alt="" />
        </div>
        <div className=' text-center flex flex-col gap-4'>
          <p className=' text-2xl text-[#F130A2]'>GET IN TOUCH</p>
          <p className=' lg:w-[18rem] md:w-[25rem] w-auto text-sm sm:mx-auto mx-8'>
            If you are interested in our interior design, architecture or planning services send us a message and we will get back to you shortly.
          </p>
        </div>
        <div className=' left-[35%] lg:bottom-[-2%] w-[9rem] mx-auto lg:relative text-gray-300 hover:text-white duration-100 mb-10'>
          <button className=' border border-gray-300 hover:border-white rounded-lg px-6 py-3' onClick={() => navigate("/contactUs")}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default About
