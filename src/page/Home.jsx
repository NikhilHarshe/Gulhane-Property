import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import homImg1 from "../Component/Acets/srusha_cover 2.jpg"
import homImg2 from "../Component/Acets/spruha_cover[1] 1.jpg"
import img3 from "../Component/Acets/Screenshot 2024-06-08 194811.png"
import slider1 from "../Component/Acets/spruha_cover[1] 1.jpg"
import slider2 from "../Component/Acets/srusha_cover.jpg"
import slider3 from "../Component/Acets/image 6.jpg"
import slider4 from "../Component/Acets/gulhane brocher 1-4 2.jpg"
import slider5 from "../Component/Acets/image 6.jpg"
import planingImg1 from "../Component/Acets/spruha_inner[1] 4.jpg"
import planingImg2 from "../Component/Acets/spruha_inner[1] 6.jpg"
import planingImg3 from "../Component/Acets/spruha_inner[1] 5.jpg"
import projectimg3 from "../Component/Acets/cover_page-0001 15 1.jpg"
import projectimg2 from "../Component/Acets/cover_page-0001 17 1.jpg"
import ServisesImg from "../Component/Acets/gulhane brocher 1-images-1111.jpg"
import arrow from "../Component/Acets/Arrow 1.png"
import { MdOutlineArrowCircleLeft, MdOutlineArrowCircleRight } from 'react-icons/md'
import { IoIosArrowUp } from 'react-icons/io'

const Home = () => {
    const location = useLocation();
    const targetRef = useRef(null);
    const homeRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (location.hash === '#projects' && targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    const homehandler = () => {
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const sliderimg = [slider1, slider2, slider3, slider4, slider5];
    const [sliderIndex, setSliderIndex] = useState(0);

    return (
        <div className='w-11/12 mx-auto relative'>
            {/* section 1 */}
            <section className='mt-4' ref={homeRef}>
                <div className='flex flex-col lg:flex-row lg:justify-between'>
                    <p className='text-3xl lg:text-5xl w-full lg:w-1/2 py-6 lg:py-12 leading-tight lg:leading-[70px]'>Gulhane Properties -<span className='text-[#F130A2]'> A Trusted Name</span></p>

                    <div className='flex w-full lg:w-[50rem] '>
                        <img src={homImg1} alt="img1" className='w-full lg:w-auto' />
                        <img src={homImg2} alt="img2" className='w-full lg:w-auto hidden lg:flex' />
                    </div>

                    {/* <div className='flex flex-col lg:flex-row w-full lg:w-[97rem]'>
                        <div className='flex w-full lg:w-[130rem]'>
                            <img src={homImg1} alt="img1" className='w-full lg:w-auto' />
                            <img src={homImg2} alt="img2" className='w-full lg:w-auto' />
                        </div>

                        <div className='w-full text-lg lg:text-2xl p-0 gap-4 lg:gap-52 flex flex-col h-full lg:h-[100%] justify-between'>
                            <div className='h-1/2'>Notifications</div>
                            <div className='h-1/2'>Guidelines</div>
                        </div>
                    </div> */}
                </div>

                <div className='flex flex-col lg:flex-row'>
                    <div className='border-y border-r flex items-center gap-4 lg:gap-[3.8rem] pr-4 lg:pr-10 w-full lg:w-[55rem] py-8 lg:py-16 pl-0'>
                        <p className='text-lg lg:text-[2.7rem] text-center w-full'>About Us</p>
                        <p className='text-[#C1C1C1] text-sm lg:text-base w-full lg:w-[89rem]'>Gulhane Properties, founded in 2020 was built on the core values of trust, satisfaction and innovation. We offer beautiful homes with quality construction. After years and over projects in the city, we have cemented our place in the industry</p>
                    </div>
                    <div className='text-base lg:text-[2.1rem] py-6 pl-4 lg:pl-16 font-thin flex w-full lg:w-[65rem] gap-4 lg:gap-12 justify-center items-center text-center border-y'>
                        <p className='cursor-pointer' onClick={() => navigate("/about")}>Learn More</p>
                        <img src={arrow} alt="arrow" className='w-4 lg:w-auto' />
                    </div>
                </div>
            </section >

            {/* About Project section 2 */}
            <section className='border-b mt-8 lg:mt-16'>
                <p className='py-4 lg:py-9 text-lg lg:text-[2rem] font-thin'>About Project</p>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div>
                        <div className='text-lg lg:text-[2.2rem] leading-relaxed tracking-wider font-semibold'>
                            <p>Traditional Value</p>
                            <p className='text-[#F130A2]'>Contemporary Living</p>
                        </div>
                        <p className='pl-6 lg:pl-24 py-8 lg:py-16 text-lg lg:text-[2.3rem] font-thin tracking-wider flex items-center gap-4 lg:gap-6'>View more <img src={arrow} alt="arrow" className='w-4 lg:w-auto' /></p>
                        <div className='pl-6 lg:pl-24 flex gap-4 lg:gap-6'>
                            <button onClick={() => setSliderIndex((sliderIndex > 0) ? (sliderIndex - 1) : (4))}>
                                <MdOutlineArrowCircleLeft className='text-3xl lg:text-[5rem] text-gray-400 hover:text-gray-300 duration-100' />
                            </button>

                            <button onClick={() => setSliderIndex((sliderIndex < 4) ? (sliderIndex + 1) : (0))}>
                                <MdOutlineArrowCircleRight className='text-3xl lg:text-[5rem] text-gray-400 hover:text-gray-300 duration-100' />
                            </button>
                        </div>
                        <div className='pt-8 lg:pt-16 hidden lg:flex '>
                            <img src={img3} className='w-[40rem] lg:w-auto' width={550} alt="" />
                        </div>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <img src={sliderimg[sliderIndex]} className='w-full lg:w-[550px] md:w-[350px]' width={580} alt="" />
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className='w-full border-b mt-8 lg:mt-16'>
                <div className='text-center text-2xl lg:text-[2.7rem] lg:leading-[4rem] tracking-wide w-full lg:w-[50rem] mx-auto pt-6 lg:pt-1 pb-10 lg:pb-20'>Our Key of Construction Planing, and <span className='text-[#F130A2]'>business Goal.</span></div>
                <div className='flex flex-col lg:flex-row  gap-4 lg:gap-10 lg:flex-wrap lg:mb-32 mb-10'>
                    <img src={planingImg1} className='w-full lg:w-auto brightness-75 hover:brightness-100 duration-100' alt="" />
                    <img src={planingImg2} className='w-full lg:w-auto brightness-75 hover:brightness-100 duration-100' alt="" />
                    <img src={planingImg3} className='w-full lg:w-auto brightness-75 hover:brightness-100 duration-100' alt="" />
                </div>
                {/* <div className='my-10 lg:my-20 flex justify-end w-full'>
                    <button className='border rounded-lg px-3 text-sm lg:text-lg py-1'>Read More</button>
                </div> */}
            </section>

            {/* Our Projects section 4 */}
            <section className='pb-14 lg:pb-28 border-b' id='target-element' ref={targetRef}>
                <p className='text-center text-2xl lg:text-[2.7rem] py-6 lg:py-10'>Our Projects</p>

                <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-10'>
                    <div>
                        <img src={slider2} className='w-full lg:w-auto  brightness-75 hover:brightness-100 duration-100' alt="" />
                        <div className='rounded-tl-full bg-[#D9D9D933] border border-[#F130A2] rounded-br-full flex flex-col justify-center items-center align-middle py-6 mt-4 lg:mt-10 text-lg lg:text-3xl'>
                            <p className='text-[#F130A2]'>Spruha Kusum </p>
                            <p>@Omkar Nagar</p>
                        </div>
                    </div>
                    <div>
                        <img src={projectimg2} className='w-full lg:w-auto  brightness-75 hover:brightness-100 duration-100' alt="" />
                        <div className='rounded-tl-full bg-[#D9D9D933] border border-[#F130A2] rounded-br-full flex flex-col justify-center items-center align-middle py-6 mt-4 lg:mt-10 text-lg lg:text-3xl'>
                            <p className='text-[#F130A2]'>Spruha Enclave </p>
                            <p>@Shivshakti Nagar</p>
                        </div>
                    </div>
                    <div>
                        <img src={projectimg3} className='w-full lg:w-auto  brightness-75 hover:brightness-100 duration-100' alt="" />
                        <div className='rounded-tl-full bg-[#D9D9D933] border border-[#F130A2] rounded-br-full flex flex-col justify-center items-center align-middle py-6 mt-4 lg:mt-10 text-lg lg:text-3xl'>
                            <p className='text-[#F130A2]'>Spruha Sindhu </p>
                            <p>@Gurukunj Nagar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 5 */}
            <section className='mb-10 lg:mb-20'>
                <h2 className='text-center text-lg lg:text-[2.7rem] mt-8 lg:mt-16 mb-4 lg:mb-6'>Services</h2>
                <div className='flex flex-col lg:flex-row text-lg lg:text-[2.7rem] gap-6 lg:gap-24 justify-between'>
                    <div className='w-full lg:w-[50%] flex flex-col gap-4 lg:gap-9'>
                        <div>
                            <div className='flex items-center gap-2 lg:gap-9 lg:leading-[4rem]'><img src={arrow} alt="arrow" className='w-4 lg:w-auto' /> <p>Interior Designer</p></div>
                            <div className='flex items-center gap-2 lg:gap-9 lg:leading-[4rem]'><img src={arrow} alt="arrow" className='w-4 lg:w-auto' /><p>Planning</p></div>
                        </div>

                        <div>
                            <p className=' pb-8'><span className='text-[#F130A2] '>Upcoming</span> Project -</p>
                            <img src={ServisesImg} alt="" className='w-full lg:w-auto brightness-75 hover:brightness-100 duration-100' />
                        </div>
                    </div>

                    <div className='w-full lg:w-[50%] flex flex-col gap-4 lg:gap-24'>
                        <div className='pl-6 lg:pl-28'>
                            <div className='flex items-center gap-2 lg:gap-9 lg:leading-[4rem]'><img src={arrow} alt="arrow" className='w-4 lg:w-auto' /> <p>Landscape</p></div>
                            <div className='flex items-center gap-2 lg:gap-9 lg:leading-[4rem]'><img src={arrow} alt="arrow" className='w-4 lg:w-auto' /> <p>Visualization</p></div>
                            <div className='flex items-center gap-2 lg:gap-9 lg:leading-[4rem]'><img src={arrow} alt="arrow" className='w-4 lg:w-auto' /> <p>Presentation</p></div>
                        </div>
                        <div>
                            <div className='mb-4 lg:mb-10'>
                                <h2>Why Choose us</h2>
                                <p className='text-sm lg:text-base w-full lg:w-[33rem] my-2 lg:my-5 text-[#C1C1C1]'>Crafted for the exclusive few, Gulhane Properties offers an elevated lifestyle that redefines luxury in the heart of Nagpur Indulge yourself in this oasis of calm nestled away from the busy streets of Nagpur surrounded by trees and gardens.</p>
                            </div>
                            <div>
                                <ul className='list-disc list-inside leading-tight'>
                                    <li>Good Experiance</li>
                                    <li>Our Best Confidence</li>
                                    <li>Good Services</li>
                                </ul>
                            </div>
                            <div>
                                <button onClick={() => { navigate("/services") }} className='text-sm lg:text-lg border rounded-md px-2 py-1 mt-6 lg:mt-20 border-gray-300 hover:border-white text-gray-300 hover:text-white duration-100'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='relative'>
                <button className='bg-blue-600 p-3 rounded-2xl fixed bottom-5 right-3' onClick={homehandler}><IoIosArrowUp className='text-2xl lg:text-5xl' /></button>
            </div>
        </div >
    )
}

export default Home
