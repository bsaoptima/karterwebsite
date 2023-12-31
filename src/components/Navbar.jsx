import React, { useState } from "react";
import logo from "../assets/logo.png"
import "./Navbar.css"


export default function Navbar() {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavbar = () => {
        setIsExpanded(prevState => !prevState);
    };

    return (
        <div className="md:px-20 sticky md:top-5 z-50">
            <nav class="bg-white drop-shadow-md md:rounded-md">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-6">
                    <a href="/" class="flex items-center px-5">
                        <p className="text-2xl font-alliance"><span class="bracket">&lt;</span>karter<span class="bracket">&gt;</span></p>
                    </a>
                    <button
                        onClick={toggleNavbar}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={isExpanded}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`w-full md:block md:w-auto ${isExpanded ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <a href="/services" class="block text-[18px] py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A6B2] md:p-0">Services</a>
                            </li>
                            <li>
                                <a href="/solutions" class="block text-[18px] py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A6B2] md:p-0">Solutions</a>
                            </li>
                            <li>
                                <a href="/projects" class="block text-[18px] py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A6B2] md:p-0">Past Projects</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`w-full md:block md:w-auto ${isExpanded ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul class="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <a href="/vetting-process" class="block text-[18px] py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A6B2] md:p-0">Apply to Karter</a>
                            </li>
                            <li>
                                <a href="/book-a-call" class="block text-[18px] py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A6B2] md:p-0">
                                    <div className="rounded-md bg-black text-white px-5 py-2">
                                        Book a Call
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        

    )
}