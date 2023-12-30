// import React from "react";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom'
import background from '../images/background.jpg'
import logo from'../images/logo2.png';
import bg2 from '../images/bg2.png';
import Facebook from '../images/facebook.gif';
import instargram from '../images/instagram.gif';
import youtube from '../images/youtube.gif';
import twitchter from '../images/twitter.gif';
import telegram from '../images/telegram.gif';

import nature1 from'../images/nature1.1.png';
import nature2 from'../images/nature2.png';

import earth1 from'../images/earth1.png';
import earth2 from'../images/earth2.png';
import earth3 from'../images/earth3.png';
import earth4 from'../images/earth4.png';
import earth5 from'../images/earth5.png';
import earth6 from'../images/earth6.png';

import photo1 from'../images/photo-1.jpg';
import photo2 from'../images/photo-2.jpg';
import photo3 from'../images/photo-3.jpg';

import img1 from'../images/img1.jpg';
import img2 from'../images/img2.jpg';
import img3 from'../images/img3.jpg';

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


function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="flex flex-col justify-center items-center text-gray-100 w-full overflow-hidden">
            {/* Make the World */}
            <div className="w-full h-[768px] mt-20 flex flex-col justify-center items-center lg:flex-row lg:justify-between" style={{background: `url(${background})`,}}>

                <div className="w-full flex flex-col gap-8 lg:mb-72 lg:justify-center items-center">
                    <div className="span-text flex justify-center items-center gap-2 flex-col text-white">
                        <span className="world-text large rise text-gray-800 text-2xl sm:text-4xl text-center font-bold tracking-wide">Make this World</span>
                        <span className="better large rise outline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wider">THE BETTER PLACE</span>
                        <p className="text-sm sm:text-xl text-green-800 text-center mt-5">Start recycling today and protect our enviroment</p>
                    </div>

                    <div className="flex gap-4 text-xs sm:text-sm font-bold text-gray-600">
                        <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border border-green-700 shadow bg-yellow-500 rounded hover:bg-green-400 duration-300">START TODAY</div>
                        <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border border-green-700 shadow rounded hover:bg-green-400 duration-300">LEARN MORE</div>
                    </div>
                </div>

                <div className="w-full flex justify-center lg:justify-end items-center px-10">
                    <div className="flex gap-2 lg:flex-col mt-16 sm:mt-24 lg:mt-0">
                        <img src={Facebook} className="w-8 sm:w-10 rounded-full cursor-pointer" alt="facebook"></img>
                        <img src={instargram} className="w-8 sm:w-10 rounded-full cursor-pointer" alt="instargram"></img>
                        <img src={youtube} className="w-8 sm:w-10 rounded-full cursor-pointer" alt="youtube"></img>
                        <img src={twitchter} className="w-8 sm:w-10 rounded-full cursor-pointer" alt="twitchter"></img>
                        <img src={telegram} className="w-8 sm:w-10 rounded-full cursor-pointer" alt="telegram"></img>
                    </div>
                </div>
            </div>

            {/* We Are The Saviours */}
            <div data-aos="zoom-in"data-aos-duration="3000" className="grid sm:grid-cols-2 max-w-7xl p-3">
                <div className="font-normal flex justify-center flex-col">
                    <span className="text-gray-700 text-3xl font-semibold">We Are The Saviours of Planet Earth</span>
                    <div className="w-20 h-1 mt-4 bg-green-500"></div>
                    <p className="text-[15px] text-gray-700 mt-4 sm:w-10/12 leading-6 text-justify">Fight against oppression amplify assistance,countries medicine new approaches The Elders Global South advocate organization equal opportunity of vaccine international vulnerable cityzens. Lifting people social challenges democracy microloans fight against malnutrition, think tank social innovation global health truth dignity civic engagement. Design thinking diversification efficient recognize potential marginalized communitiess human potential governance change.</p>
                    <div className="mt-8 flex text-sm">
                        <div className="py-3 font-bold tracking-wide cursor-pointer px-6 border border-green-700 shadow text-gray-700 bg-yellow-500 rounded hover:bg-green-400 duration-300">READ MORE</div>
                    </div>
                </div>

                <div className="flex justify-center items-center p-4"><img src={nature2} className="w-7/12 sm:w-5/12"></img></div>
            </div>
            
            {/* the best time */}
            <div className="w-full h-[512px] sm:h-[720px]" style={{background: `url(${nature1})`,}}>
                <div data-aos="zoom-in"data-aos-duration="2000" className="flex flex-col justify-center items-center h-full">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <span className="text-3xl sm:text-5xl font-bold text-white text-center">THE BEST TIME TO <span className="text-yellow-500">PLANT TREE </span> IS NOW</span>
                        <span className="world-text text-md sm:text-lg font-normal text-center">The only way to make this happened is to take action!</span>
                    </div>
                    <div className="flex gap-4 text-sm mt-8 font-bold">
                        <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border bg-yellow-500 shadow rounded hover:bg-green-400 duration-300">DONATE NOW</div>
                        <div className="py-2 sm:py-3 tracking-wide cursor-pointer px-4 sm:px-6 border shadow rounded hover:bg-green-400 duration-300">TAKE ACTION</div>
                    </div>
                </div>
            </div>

            {/* What we do */}
            <div className="flex justify-center items-center mt-20">
                <div className="text-sm flex flex-col text-gray-800 max-w-7xl p-4">
                    <span className="world-text text-center text-gray-600">Respon to choose us</span>
                    <span className="text-3xl sm:text-4xl font-bold text-center">WHAT WE ARE DOING</span>
                    <div className="flex justify-center items-center mt-4">
                        <div className="w-16 h-0.5 bg-yellow-500"></div>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                        <div data-aos="fade-right"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth1} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">RECYCLING</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>
                        
                        <div data-aos="zoom-in"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth2} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">ECO SYSTEM</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div data-aos="fade-left"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth3} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">SAVING FORESTS</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div data-aos="fade-right"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth4} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">WATER REFINING</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div data-aos="zoom-in"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth5} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">WIND ENERGY</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
                        </div>

                        <div data-aos="fade-left"data-aos-duration="3000" className="text-normal flex justify-center items-center flex-col p-4">
                            <img src={earth6} className=""></img>
                            <span className="text-lg mt-4 text-gray-700">SAVING ANIMALS</span>
                            <p className="mt-4 text-center text-gray-500 font-normal">Carbon emissions reductions truth, approaches enable medical supplies malnutrition achieving developing pathway to a better life.</p>
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

export default Home;
