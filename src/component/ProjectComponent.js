// import React from "react";
import React, { useEffect } from "react";
import 'aos/dist/aos.css';

import { Link } from 'react-router-dom'
import background from '../about-img/Bg.png'
import logo from'../images/logo2.png';

import projectimg1 from'../project-img/project-img1.jpg';
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
import { PiPhoneCallDuotone } from "react-icons/pi";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";


function Project () {
    
    return(
        <div className="flex flex-col justify-center items-center text-gray-100 w-full overflow-hidden">
            {/* Make the World */}
            <div className="w-full mt-16 h-[388px] flex flex-col justify-center items-center lg:flex-row lg:justify-between bg-no-repeat" style={{background: `url(${background})`,}}>

                <div className="w-full flex flex-col justify-center items-center">
                    <span className="text-5xl font-bold">PROJECT SINGLE</span>
                    <div className="flex mt-3 gap-1.5">
                        <span className="world-text block text-md text-yellow-500">Home</span>
                        <span className="world-text block text-md"> // Project</span>
                    </div>
                </div>
            </div>

            {/* project */}
            <div className="max-w-7xl p-3">
                <div className="grid md:grid-cols-12 py-10 ">
                    <div className="grid md:col-span-7">
                        <img src={projectimg1} className=""></img>
                    </div>
                    <div className="grid md:col-span-5 text-gray-800 bg-gray-100 w-full">
                        <div className="p-10">
                            <span className="text-2xl font-bold">PROJECT DETAILS</span>
                            <div className="flex gap-2 text-sm font-bold flex-col mt-4">
                                <div className="flex justify-between font-semibold border-b py-4">
                                    <span className="">CURRENT STATUS OF THE PROJECT:</span>
                                    <span className="text-gray-500">Active</span>
                                </div>
                                <div className="flex justify-between font-semibold border-b py-4">
                                    <span className="">PROJECT STARTING DATE:</span>
                                    <span className="text-gray-500">08-08-2018</span>
                                </div>
                                <div className="flex justify-between font-semibold border-b py-4">
                                    <span className="">PROJECT COMPLETION DATE:</span>
                                    <span className="text-gray-500">08-12-2018</span>
                                </div>
                                <div className="flex justify-between font-semibold border-b py-4">
                                    <span className="">PROJECT ORGANIZER:</span>
                                    <span className="text-gray-500">08-12-2018</span>
                                </div>
                                <div className="flex justify-between font-semibold border-b py-4">
                                    <span className="">PROJECT ORGANIZER:</span>
                                    <span className="text-gray-500">Richards</span>
                                </div>
                                <div className="flex justify-between font-semibold py-2">
                                    <span className="">PROJECT CATEGORIES:</span>
                                    <span className="text-gray-500">Ecology, Planting Trees</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-md text-gray-700 border-b py-4">
                    <span className="world-text">Nature, Plant Seedling</span>
                    <span className="flex justify-between mt-2">
                        <span className="text-xl font-bold">PLANT SEEDLING AND GROWTH</span>
                        <button className="py-2 px-6 bg-yellow-500 rounded text-sm font-semibold text-gray-100">DONATE</button>
                    </span>
                </div>

                <div className="text-gray-800 mt-5 flex flex-col gap-4 py-4 border-b">
                    <p className="font-semibold">Empowerment, countries policy agency carbon rights interconnectivity participatory monitoring; aid, disruptor thinkers who make change happen sanitation nonviolent risistance agenda Bloomberg. Recognition; political honor natural resources rural humanitarian. Inspiration dedicated medical supplies leverage Bill and Melinda Gates assessment expert inspire social change shft underprivileged liberal activist strengthen democracy research gun control.</p>
                    <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam veritatis aliquam, cupiditate voluptatem labore officia, inventore dolorem eaque aut necessitatibus sapiente odio illum! Animi quas facere consectetur iure quibusdam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quam veritatis aliquam, cupiditate voluptatem labore officia, inventore dolorem eaque aut necessitatibus sapiente odio illum! Animi quas facere consectetur iure quibusdam. Empowerment, countries policy agency carbon rights interconnectivity participatory monitoring; aid, disruptor thinkers who make change happen sanitation nonviolent risistance agenda Bloomberg. Recognition; political honor natural resources rural humanitarian. Inspiration dedicated medical supplies leverage Bill and Melinda Gates assessment expert inspire social change shft underprivileged liberal activist strengthen democracy research gun control.</p>

                    <span>- Partner collaborative consumption sharing economy.</span>
                    <span>- Vaccine public-private partnerships planned giving proper resources change.</span>
                    <span>- Giving Gandhi fundraising campaign vulnerable citizens developing.</span>
                    <span>- Revitalize, honor, communities, inspire breakthroughs harness.</span>
                    <span>- Technology Andrew Carnegie, confilict pursue these aspirations fairness.</span>
                </div>

                <div className="flex justify-between py-6 text-sm font-bold tracking-wider">
                    <div className="flex justify-center items-center gap-2 text-gray-600">
                        <FaArrowLeft />
                        <span className="block text-center">PREVIOUS PROJECT</span>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-yellow-500">
                        <span className="block text-center"> NEXT PROJECT</span>
                        <FaArrowRight />
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="flex justify-center items-center py-20 mt-20 bg-gray-800 w-full">
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

export default Project;