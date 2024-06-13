import React, { useState } from 'react'
import homImg1 from "../Component/Acets/srusha_cover 2.jpg"
import homImg2 from "../Component/Acets/spruha_cover[1] 1.jpg"
import img3 from "../Component/Acets/Screenshot 2024-06-08 194811.png"
import slider1 from "../Component/Acets/spruha_cover[1] 1.jpg"
import slider2 from "../Component/Acets/srusha_cover 2 1.jpg"
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

const Home = () => {
    const sliderimg = [slider1, slider2, slider3, slider4, slider5];
    const [sliderIndex, setSliderIndex] = useState(0);
    console.log("sliderIndex ", sliderIndex);

    return (
        <div className=' w-11/12 mx-auto'>

            {/* section 1 */}
            <section className=' '>
                <div className=' flex justify-between flex-col'>
                    <p className=' text-[40px] w-[50%] py-12 leading-[50px]'>Gulhane Properties -<span className=' text-[#F130A2]'> A Trusted Name</span></p>

                    <div className=' flex justify-between w-[97rem]'>
                        <div className=' flex w-[130rem]'>
                            <img src={homImg1} alt="img1" />
                            <img src={homImg2} alt="img2" />
                        </div>

                        <div className=' w-full text-[25px] p-0 gap-52 flex flex-col h-[100%] justify-between'>
                            <div className=' h-[50%]'>Notifications </div>
                            <div className=' h-[50%]'>Guidelines</div>
                        </div>
                    </div>
                </div>

                <div className=' flex '>
                    <div className=' border-y border-r flex items-center gap-[3.8rem] pr-10 w-[55rem] py-16 pl-0'>
                        <p className=' w-[50rem] text-[2.7rem] text-center'>About Us</p>
                        <p className=' text-[#C1C1C1] w-[89rem]'>Gulhane Properties, founded in 2020 was built on the core values of trust, satisfaction and innovation. We offer beautiful homes with quality construction. After years and over projects in the city, we have cemented our place in the industry</p>
                    </div>
                    <div className='text-[2.1rem] pl-16 font-thin flex w-[65rem] gap-12 justify-center items-center align-baseline text-center border-y'>
                        <p className=' '>Learn More</p>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>

            </section >

            {/* About Project section 2 */}
            <section className=' border-b'>
                <p className=' py-9 text-[2rem] font-thin'>About Project</p>
                <div className=' flex justify-between'>
                    <div>
                        <div className=' text-[2.2rem] leading-relaxed tracking-wider font-semibold'>
                            <p>Traditional Value</p>
                            <p className=' text-[#F130A2]'>Contemporary Living</p>
                        </div>
                        <p className=' pl-24 py-16 text-[2.3rem] font-thin tracking-wider flex items-center gap-6'>View more <img src={arrow} alt="arrow" /></p>
                        <div className=' pl-24 flex gap-6'>
                            <button onClick={() => setSliderIndex((sliderIndex > 0) ? (sliderIndex - 1) : (4))}>
                                <MdOutlineArrowCircleLeft className=' text-[5rem] text-gray-400 hover:text-gray-300 duration-100' />
                            </button>

                            <button onClick={() => setSliderIndex((sliderIndex < 4) ? (sliderIndex + 1) : (0))}>
                                <MdOutlineArrowCircleRight className=' text-[5rem] text-gray-400 hover:text-gray-300 duration-100' />
                            </button>
                        </div>
                        <div className=' pt-16'>
                            <img src={img3} width={550} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={sliderimg[sliderIndex]} width={580} alt="" />
                    </div>
                </div>
            </section>

            {/* section 3 */}
            <section className=' w-full border-b'>
                <div className=' text-[2.7rem] text-center tracking-wide w-[45rem] mx-auto pt-12 pb-20 '>Our Key of Construction Planing, and <span className='text-[#F130A2]'>business Goal.</span></div>
                <div className=' flex justify-between'>
                    <img src={planingImg1} width={425} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
                    <img src={planingImg2} width={425} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
                    <img src={planingImg3} width={425} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
                </div>
                <div className='my-20 flex justify-end w-full'>
                    <button className=' border rounded-lg px-3 text-lg py-1'>Read More</button>
                </div>
            </section>

            {/* section 4 */}
            <section className=' pb-28 border-b'>
                <p className=' text-center text-[2.7rem] py-10'>Our Projects</p>

                <div className=' flex justify-between'>
                    <div>
                        <img src={slider2} className=' h-[32rem] brightness-75 hover:brightness-100 duration-100' alt="" />
                        <div className='rounded-tl-full bg-[#D9D9D933] border border-[#F130A2] rounded-br-full flex flex-col justify-center items-center align-middle py-6 mt-10 text-3xl'>
                            <p className='text-[#F130A2]'>Spruha Kusum </p>
                            <p>@Omkar Nagar</p>
                        </div>
                    </div>
                    <div >
                        <img src={projectimg2} className=' h-[32rem] brightness-75 hover:brightness-100 duration-100' alt="" />
                        <div className='rounded-tl-full bg-[#D9D9D933] border border-[#F130A2] rounded-br-full flex flex-col justify-center items-center align-middle py-6 mt-10 text-3xl'>
                            <p className='text-[#F130A2]'>Spruha Enclave </p>
                            <p>@Shivshakti Nagar</p>
                        </div>
                    </div>
                    <div>
                        <img src={projectimg3} className=' h-[32rem] brightness-75 hover:brightness-100 duration-100' alt="" />
                        <div className='rounded-tl-full bg-[#D9D9D933] border border-[#F130A2] rounded-br-full flex flex-col justify-center items-center align-middle p-6 mt-10 text-3xl'>
                            <p className='text-[#F130A2]'>Spruha Sindhu </p>
                            <p>@Gurukunj Nagar</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* section 5 */}
            <section className=' mb-20'>
                <h2 className=' text-center text-[2.7rem] mt-16 mb-6'>Services</h2>
                <div className=' flex text-[2.7rem] gap-24 justify-between'>
                    <div className=' w-[50%] flex gap-9 flex-col'>
                        <div>
                            <div className=' flex items-center gap-9'><img src={arrow} alt="arrow" /> <p>Interior Designer</p></div>
                            <div className=' flex items-center gap-9'><img src={arrow} alt="arrow" /><p>Planning</p></div>
                        </div>

                        <div>
                            <p><span className='text-[#F130A2]'>Upcoming</span> Project -</p>
                            <img src={ServisesImg} alt="" className=' brightness-75 hover:brightness-100 duration-100' />
                        </div>
                    </div>

                    <div className=' w-[50%] flex flex-col gap-24'>
                        <div className=' pl-28 '>
                            <div className=' flex items-center gap-9'><img src={arrow} alt="arrow" /> <p>Landscape</p></div>
                            <div className=' flex items-center gap-9'><img src={arrow} alt="arrow" /> <p>Visualization</p></div>
                            <div className=' flex items-center gap-9'><img src={arrow} alt="arrow" /> <p>Presentation</p></div>
                        </div>
                        <div>
                            <div className=' mb-10'>
                                <h2>Why Choose us</h2>
                                <p className=' text-[1rem] w-[33rem] my-5 text-[#C1C1C1]'>Crafted for the exclusive few, Gulhane Properties offers an elevated lifestyle that redefines luxury in the heart of Nagpur Indulge yourself in this oasis of calm nestled away from the busy streets of Nagpur surrounded by trees and gardens.</p>
                            </div>
                            <div>
                                <ul className=' list-disc list-inside leading-tight'>
                                    <li>Good Experiance</li>
                                    <li>Our Best Confidence</li>
                                    <li>Good Services</li>
                                </ul>
                            </div>
                            <div>
                                <button className=' text-lg border rounded-md px-2 py-1 mt-20'>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}

export default Home
