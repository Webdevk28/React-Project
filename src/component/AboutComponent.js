// import React from "react";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom'
import background from '../about-img/Bg.png'
import logo from'../images/logo2.png';

import nature1 from'../about-img/img1.png';
import nature2 from'../about-img/img4.png';

import volunteer1 from'../about-img/volunteer1.jpg';
import volunteer2 from'../about-img/volunteer2.jpg';
import volunteer3 from'../about-img/volunteer3.jpg';
import volunteer4 from'../about-img/volunteer4.jpg';
import volunteer5 from'../about-img/volunteer5.jpg';
import volunteer6 from'../about-img/volunteer6.jpg';

import photo1 from'../images/photo-1.jpg';
import photo2 from'../images/photo-2.jpg';
import photo3 from'../images/photo-3.jpg';

import img1 from'../images/img1.jpg';
import img2 from'../images/img2.jpg';
import img3 from'../images/img3.jpg';

import text1 from'../images/text1.png';
import text2 from'../images/text2.png';
import text3 from'../images/text3.png';

import fotter1 from'../images/fotter1.jpg'
import fotter2 from'../images/fotter2.jpg'
import fotter3 from'../images/fotter3.jpg'
import fotter4 from'../images/fotter4.jpg'
import fotter5 from'../images/fotter5.jpg'
import fotter6 from'../images/fotter6.jpg'


import { FaCalendarAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { RiLoginCircleLine } from "react-icons/ri";


function About () {
    
    return(
        <div className="flex flex-col justify-center items-center text-gray-100 w-full overflow-hidden">
            {/* Make the World */}
            <div className="w-full mt-20 h-[388px] flex flex-col justify-center items-center lg:flex-row lg:justify-between bg-no-repeat" style={{background: `url(${background})`,}}>

                <div className="w-full flex flex-col justify-center items-center">
                    <span className="text-5xl font-bold">ABOUT</span>
                    <div className="flex mt-3 gap-1.5">
                        <span className="world-text block text-md text-yellow-500">Home</span>
                        <span className="world-text block text-md"> // About</span>
                    </div>
                </div>
            </div>

            {/* We Are The Saviours */}
            <div  className="grid sm:grid-cols-2 max-w-7xl px-3 py-10">
                <div className="font-normal flex justify-center flex-col">
                    <span className="text-gray-700 text-3xl font-semibold">We Are The Saviours of Planet Earth</span>
                    <div className="w-20 h-1 mt-4 bg-green-500"></div>
                    <p className="text-[15px] text-gray-700 mt-4 sm:w-10/12 leading-6 text-justify">Fight against oppression amplify assistance,countries medicine new approaches The Elders Global South advocate organization equal opportunity of vaccine international vulnerable cityzens. Lifting people social challenges democracy microloans fight against malnutrition, think tank social innovation global health truth dignity civic engagement. Design thinking diversification efficient recognize potential marginalized communitiess human potential governance change.</p>
                    <div className="mt-8 flex text-sm">
                        <div className="py-3 font-bold tracking-wide cursor-pointer px-6 border text-gray-700 bg-yellow-500 rounded hover:bg-green-400 duration-300">READ MORE</div>
                    </div>
                </div>

                <div data-aos="zoom-in-down"data-aos-duration="3000" className="flex justify-center items-center p-4"><img src={nature1} className="sm:w-10/12"></img></div>
            </div>
            
            {/* join our team */}
            <div className="w-full h-[508px]" style={{background: `url(${nature2})`,}}>
                <div data-aos="zoom-in"data-aos-duration="2000" className="flex flex-col justify-center items-center h-full">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <span className="text-4xl sm:text-7xl font-bold text-white text-center">Join <span className="world-text text-3xl sm:text-5xl text-yellow-500">our team</span> and get <span className="world-text text-3xl sm:text-5xl text-yellow-500">involved</span></span>
                    </div>
                    <div className="flex gap-4 text-xs sm:text-sm mt-10 font-bold">
                        <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-6 sm:px-10 border bg-yellow-500 rounded hover:bg-green-400 duration-300">JOIN NOW</div>
                    </div>
                </div>
            </div>

            {/* Our volunteers */}
            <div className="flex justify-center items-center mt-20">
                <div className="text-sm flex flex-col text-gray-800 max-w-7xl">
                    <span className="world-text text-center text-xl text-gray-600">Join us</span>
                    <span className="text-3xl sm:text-5xl font-bold text-center">OUR VOLUNTEERS</span>
                    <div className="flex justify-center items-center mt-4">
                        <div className="w-16 h-0.5 bg-yellow-500"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        <div data-aos="fade-right"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={volunteer1} className=""></img>
                            <span className="world-text text-lg mt-4 text-gray-500">Volunteer</span>
                            <p className="text-center text-xl text-gray-700 font-bold">Carbon Villson</p>
                        </div>
                        
                        <div data-aos="zoom-in"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={volunteer2} className=""></img>
                            <span className="world-text text-lg mt-4 text-gray-500">Volunteer</span>
                            <p className="text-center text-xl text-gray-700 font-bold">Pathway Bold</p>
                        </div>

                        <div data-aos="fade-left"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={volunteer3} className=""></img>
                            <span className="world-text text-lg mt-4 text-gray-500">Volunteer</span>
                            <p className="text-center text-xl text-gray-700 font-bold">Mary Layla</p>
                        </div>

                        <div data-aos="fade-right"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={volunteer4} className=""></img>
                            <span className="world-text text-lg mt-4 text-gray-500">Volunteer</span>
                            <p className="text-center text-xl text-gray-700 font-bold">Olivia - James - Rose</p>
                        </div>

                        <div data-aos="zoom-in"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={volunteer5} className=""></img>
                            <span className="world-text text-lg mt-4 text-gray-500">Volunteer</span>
                            <p className="text-center text-xl text-gray-700 font-bold">Sandra</p>
                        </div>

                        <div data-aos="fade-left"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={volunteer6} className=""></img>
                            <span className="world-text text-lg mt-4 text-gray-500">Volunteer</span>
                            <p className="text-center text-xl text-gray-700 font-bold">Pisey - SokHaii</p>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* our new */}
            <div className="flex justify-center items-center mt-16">
                <div className="text-sm flex flex-col text-gray-700 max-w-7xl p-3">
                    <span className="world-text text-center text-gray-600">Our New</span>
                    <span className="text-3xl font-bold text-center">RECENT POST</span>
                    <div className="flex justify-center items-center mt-3">
                        <div className="w-16 h-0.5 bg-yellow-500"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        {/* 1 */}
                        <div data-aos="fade-up"data-aos-duration="3000" className="text-normal border">
                            <img src={photo1} className="" data-aos="zoom-in"data-aos-duration="3000"></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-gray-700">HOW TO RECILE THINGS</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* 2 */}
                        <div className="text-normal border">
                            <img src={photo2} className="" data-aos="zoom-in"data-aos-duration="3000"></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-yellow-500">CONTROLLING WATER POLLUTION</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div data-aos="fade-up"data-aos-duration="3000" className="text-normal border">
                            <img src={photo3} className="" data-aos="zoom-in"data-aos-duration="3000"></img>
                            <div className="flex justify-center items-center flex-col p-4 ">
                                <div className="flex flex-col p-4">
                                    <span className="world-text text-sm mt-2 text-gray-500">Protect Nature</span>
                                    <span className="text-lg mt-2 text-gray-700">PLANTING TREES</span>
                                    <p className="mt-4 text-sm text-gray-500 font-normal">Lifting people socialaize challenges democracy microloans fight against the malnutrition, think tank social truth dignity civic engagement.</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full py-4 px-8 font-normal text-gray-400 border-t">
                                <div className="flex  gap-2">
                                    <FaCalendarAlt />
                                    <span>0.01.2024</span>
                                </div>

                                <div className="flex justify-center items-center gap-2">
                                    <MdMessage />
                                    <span>8</span>
                                    <FaHeart />
                                    <span>28</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* footer */}

            <div className="flex justify-center items-center py-20 bg-gray-800 w-full">
                <div className="max-w-7xl grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-3">
                    {/* 1 */}
                    <div className="text-sm text-gray-400 font-normal">
                        <img src={logo} className="w-20"></img>
                        <p className="mt-4">Lifting people social challenge democracy micro fight against malnutrition, think tank social innovation global health truth dignity civic engagement</p>
                        <div className=" flex gap-1 items-center mt-4">
                            <div className="text-lg text-white"><PiPhoneCallDuotone /></div>
                            <span className="text-gray-100"> Call us <span className="text-yellow-400">+855 282828</span></span>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="">
                        <div className="text-sm flex flex-col">
                            <span>LATEST POST</span>
                            <div className="flex gap-4 mt-4 text-sm font-normal">
                                <div className=""><img src={img1} className="w-28"></img></div>
                                <div className="flex justify-center flex-col">
                                    <span>Recycling Plastic Bottle</span>
                                    <div className="flex gap-2 mt-3 text-gray-500">
                                        <FaCalendarAlt />
                                        <span className="block"> 08.08.2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4 text-sm font-normal">
                                <div className=""><img src={img2} className="w-28"></img></div>
                                <div className="flex justify-center flex-col">
                                    <span>Recycling Plastic Bottle</span>
                                    <div className="flex gap-2 mt-3 text-gray-500">
                                        <FaCalendarAlt />
                                        <span className="block"> 08.08.2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-4 text-sm font-normal">
                                <div className=""><img src={img3} className="w-28"></img></div>
                                <div className="flex justify-center flex-col">
                                    <span>Recycling Plastic Bottle</span>
                                    <div className="flex gap-2 mt-3 text-gray-500">
                                        <FaCalendarAlt />
                                        <span className="block"> 08.08.2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="flex flex-col font-normal">
                        <span className="text-sm font-bold">INSTAGRAM</span>
                        <div className="grid grid-cols-3 mt-4">
                            <div className=""><img src={fotter1} className="w-32"></img></div>
                            <div className=""><img src={fotter2} className="w-32"></img></div>
                            <div className=""><img src={fotter3} className="w-32"></img></div>
                            <div className=""><img src={fotter4} className="w-32"></img></div>
                            <div className=""><img src={fotter5} className="w-32"></img></div>
                            <div className=""><img src={fotter6} className="w-32"></img></div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="">
                        <div className="text-sm font-normal">
                            <span className="text-sm font-bold">SUBSCRIBE</span>
                            <p className="mt-4">Design thinking diversification efficient recognize potential communities human potential governance change.</p>
                            <div class="w-full flex items-center justify-center mt-4">
                                 <input class="w-full tracking-wide mt-1.5 border border-gray-400 bg-gray-900 bg-opacity-25 focus:outline-none focus:ring-primary-300 placeholder-gray-500 px-3 py-2" type='text' placeholder='Email' required />
                                 <div class="block text-gray-100 text-2xl bg-yellow-500 p-[7px] px-2 mt-1.5 text-center hover:bg-green-500 duration-300 cursor-pointer"><RiLoginCircleLine /></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default About;