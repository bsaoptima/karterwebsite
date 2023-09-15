import React, { Suspense, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import './Solutions.css'
import { UserCheck, ArrowDownCircle, Repeat, CheckCircle, DollarSign } from 'feather-icons-react'
import Marquee from "react-fast-marquee";


const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SolutionPage (){
    return (
        <div className="relative flex flex-col scroll-smooth">
            <LandingItem />
            <StayLean />
            <p className="text-4xl bg-[#F6F9FC] pt-20 pb-12  lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]">What you get from us</p>
            <Services />
            <WhatYouGet />
            <EndingComponent />
        </div>
    )
}

function LandingItem(){
    return (
        <div className="bg-[#F6F9FC] flex flex-row justify-around items-center p-10 md:p-20">
            <div className="flex flex-col justify-center items-center gap-y-6">
                <p className="text-lg text-center lg:text-xl font-alliance font-semibold text-[#00A6B2]">Quality, Speed and Reliability</p>
                <div className="">
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                        // 500,
                        // 'We build web apps...', // initially rendered starting point
                        // 1000,
                        // 'We build mobile apps...',
                        // 1000,
                        // 'We build data pipelines...',
                        // 1000,
                        'We build your idea.',
                        5000,
                        ]}
                        speed={50}
                        // style={{ fontSize: '2em', font: 'sfprodisplay', fontWeight: '500'}}
                        repeat={Infinity}
                        className="text-[35px] lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]"
                    />
                </div>
                <p className="text-[#656B8A] text-center text-lg md:text-xl md:px-40 lg:px-96 font-alliance">Hire on demand a team of student developers & project managers without the hassle of managing a team by yourself.</p>
                <a href="/build">
                    <button>
                        <div className="flex flex-row bg-[#00A6B2] text-white hover:bg-[#02becc] mt-5 drop-shadow-xl rounded-3xl px-4 py-2 gap-x-2">
                            <p className="font-alliance">Build your idea</p>
                            <ArrowDownCircle />
                        </div>
                    </button>
                </a>
            </div>
        </div>
    )
}


function StayLean(){
    return(
        <div className="flex flex-col md:flex-row bg-[#F6F9FC] gap-y-10 md:gap-x-10 justify-center items-center p-10 md:p-20">
            <div className="flex flex-col gap-y-5 basis-1/2">
                <p className="text-4xl lg:text-5xl text-start font-sfprodisplay font-bold text-[#29363D]">Stay Lean and get to market</p>
                <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">These days, founders need to run lean operations. Focus on your strengths and outsource tasks to build great products fast.</p>
                <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">In a few clicks, you have a dedicated project manager and student developers ready to go.</p>
            </div>
            <div className="basis-1/2">
                <CodeComponent />
            </div>
        </div>
    )
}

function CodeComponent() {
    return (
        <div className="code-editor">
            <div className="header">
                <span className="title">success.py</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path stroke-linecap="round" stroke-width="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
            </div>
            <div className="px-3">
                <div className="bg-[#575757] h-[0.5px] mb-3"></div>
            </div>
            <div className="editor-content">
                <code className="code">
                <p className=''><span className="text-[#c26eb5]">import</span> <span className='text-[#00A6B2]'>Karter</span></p>
                <p className='mb-5'><span className="text-[#c26eb5]">import</span> <span className='text-[#00A6B2]'>Founder</span></p>
                <p><span className="color-0">def <span className="color-6">BuildMyMVP</span></span><span className="color-5">()</span>:</p>

                <p className="property">
                    <span className="color-4"><span className="color-2">idea</span> <span className="text-white">=</span> Founder<span className="text-white">.</span>brain<span className="text-white">.</span><span className="text-white">generate<span className="color-5">()</span></span></span>
                </p>
                <p className="property">
                    <span className="color-4"><span className="color-2">project_manager</span> <span className="text-white">=</span> Karter<span className="text-white">.</span>addProjectManager<span className="color-5">(</span><span className="color-2">number</span><span className="text-white">=</span><span className="color-3">"1"</span><span className="color-5">)</span></span>
                </p>
                <p className="property">
                    <span className="color-4"><span className="color-2">backend_dev</span> <span className="text-white">=</span> Karter<span className="text-white">.</span>addDeveloper<span className="color-5">(</span><span className="color-2">number</span><span className="text-white">=</span><span className="color-3">"1"</span><span className="color-5"><span className="text-white">,</span> <span className="color-2">type</span><span className="text-white">=</span><span className="color-3">"BE"</span>)</span></span>
                </p>
                <p className="property">
                    <span className="color-4"><span className="color-2">frontend_dev</span> <span className="text-white">=</span> Karter<span className="text-white">.</span>addDeveloper<span className="color-5">(</span><span className="color-2">number</span><span className="text-white">=</span><span className="color-3">"2"</span><span className="color-5"><span className="text-white">,</span> <span className="color-2">type</span><span className="text-white">=</span><span className="color-3">"FE"</span>)</span></span>
                </p>
                <p className="property mt-5">
                    <span className="text-[#c26eb5]">return <span className="color-3">"Great Success!"</span></span>
                </p>
                </code>
            </div>
        </div>
    )
}

function WhatYouGet(){
    return (
        <div className="flex flex-col bg-[#F6F9FC] justify-center items-center gap-y-10 px-20">
            <div className="bg-[#F6F9FC] flex flex-col justify-center items-center md:px-10 md:mb-10">
                <div className="bg-[#F6F9FC] mt-5 lg:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-x-10 md:gap-x-20 lg:gap-x-32 gap-y-10">
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <CheckCircle className="text-[#00A6B2]"/>
                        <p className="text-[#29363D] text-xl font-alliance font-semibold">Top Vetted Talent</p>
                        <p className="text-[#656B8A] text-start md:text-start lg:text-start font-alliance">Our students will work at the best tech companies out there. Leverage this great talent now.</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <UserCheck className="text-[#00A6B2]"/>
                        <p className="text-[#29363D] text-xl font-alliance font-semibold">Fully-Managed Teams</p>
                        <p className="text-[#656B8A] text-start md:text-start lg:text-start text-md font-alliance">You get a dedicated team managed by us with clear and quick communication channels to track progress.</p>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-y-2">
                        <DollarSign className="text-[#00A6B2]"/>
                        <p className="text-[#29363D] text-xl font-alliance font-semibold">Predicable Pricing</p>
                        <p className="text-[#656B8A] text-start md:text-start lg:text-start text-md font-alliance">Our rates are competitive and simple. No recruiting & setup fees. Get an estimation of your project and pay as you go.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-y-10 gap-x-10">
                <div className="flex flex-col basis-1/2 justify-start items-start gap-y-5 py-5 md:px-10">
                    <p className="text-2xl lg:text-3xl text-center font-sfprodisplay font-semibold text-[#29363D]">Without <span class="text-[#00A6B2]">&lt;</span><span className="font-alliance">karter</span><span class="text-[#00A6B2]">&gt;</span></p>
                    <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Investors nowadays want to see results even at the Pre-Seed stage. Software agencies and hiring full-time devs is too expensive and a massive commitment just for an MVP.</p>
                    <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Don't get us started on no-code tools.</p>
                </div>
                <div className="bg-white flex flex-col basis-1/2 gap-y-5 justify-start items-start drop-shadow-xl rounded-xl p-10 withKarterItem text-black">
                    <p className="text-2xl lg:text-3xl text-center font-sfprodisplay font-semibold text-[#29363D]">With <span class="text-[#00A6B2]">&lt;</span><span className="font-alliance">karter</span><span class="text-[#00A6B2]">&gt;</span></p>
                    <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">You get a team of student developers and a dedicated project manager that will build your idea at competitive rates. Perfect for lean startups, agencies and solo-founders.</p>
                    <div className="flex flex-col md:justify-center md:items-center md:flex-row md:gap-x-10 gap-y-5">
                        <div className="flex flex-row justify-center items-center gap-x-5">
                            <Repeat className="text-[#00A6B2]"/>
                            <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Launch, Win and Repeat.</p>
                        </div>
                        {/* <a href="/build">
                            <button>
                                <div className="flex flex-row bg-[#00A6B2] text-white hover:bg-[#02becc] drop-shadow-xl rounded-3xl px-4 py-2 gap-x-2">
                                    <p className="font-alliance">Start building</p>
                                </div>
                            </button>
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

function Services(){
    return(
        <div className="flex flex-col bg-[#F6F9FC] gap-y-10">
            <Marquee autoFill="true" speed={50} gradient="true">
                <a href="/services">
                    <button>
                        <div className="px-5 py-2 bg-[#EEEEEE] text-[#37434a] hover:bg-[#00A6B2] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl mx-4">
                            <p className="font-alliance text-lg">Web Development</p>
                        </div>
                    </button>
                </a>
                <a href="/services">
                    <button>
                        <div className="px-5 py-2 bg-[#EEEEEE] text-[#37434a] hover:bg-[#00A6B2] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl mx-4">
                            <p className="font-alliance text-lg">Mobile Apps</p>
                        </div>
                    </button>
                </a>
                <a href="/services">
                    <button>
                        <div className="px-5 py-2 bg-[#EEEEEE] text-[#37434a] hover:bg-[#00A6B2] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl mx-4">
                            <p className="font-alliance text-lg">Data Analytics</p>
                        </div>
                    </button>
                </a>
                <a href="/services">
                    <button>
                        <div className="px-5 py-2 bg-[#EEEEEE] text-[#37434a] hover:bg-[#00A6B2] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl mx-4">
                            <p className="font-alliance text-lg">Figma</p>
                        </div>
                    </button>
                </a>
                <a href="/services">
                    <button>
                        <div className="px-5 py-2 bg-[#EEEEEE] text-[#37434a] hover:bg-[#00A6B2] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl mx-4">
                            <p className="font-alliance text-lg">Automations</p>
                        </div>
                    </button>
                </a>
                <a href="/services">
                    <button>
                        <div className="px-5 py-2 bg-[#EEEEEE] text-[#37434a] hover:bg-[#00A6B2] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl mx-4">
                            <p className="font-alliance text-lg">Ecommerce</p>
                        </div>
                    </button>
                </a>
                <a href="/services">
                    <button>
                        <div className="px-5 py-2 bg-[#EEEEEE] text-[#37434a] hover:bg-[#00A6B2] hover:text-white transition-colors duration-300 ease-in-out rounded-3xl mx-4">
                            <p className="font-alliance text-lg">Databases</p>
                        </div>
                    </button>
                </a>
            </Marquee>
        </div>
    )
}

function EndingComponent(){
    return (
        <div className="px-20 pt-40 pb-20 bg-[#F6F9FC]">
            <div className="flex flex-col justify-center gap-y-10 items-center bg-[#00A6B2] rounded px-40 py-28">
                <p className="text-5xl text-white font-alliance font-medium text-center">Launch Startups & Build MVPs</p>
                <p className="text-xl text-[#F4F4F4] font-alliance text-center px-20">We help you build quality products at competitive prices thanks to our network of trained and talented student developers.</p>
                <div className="flex flex-row justify-center gap-x-2 items-center">
                    <a href="/build" class="block text-[18px] py-2 pl-3 pr-4 rounded border-1 ">
                        <div className="rounded-md border-[3px] border-black bg-black font-alliance text-white px-5 py-2">
                            Book a Free Call
                        </div>
                    </a>
                    <a href="/projects" class="block text-[18px]  md:hover:text-[#00A6B2]">
                        <div className="rounded-md border-[3px] border-black bg-white font-alliance text-black px-5 py-2">
                            Check our Past Projects
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}