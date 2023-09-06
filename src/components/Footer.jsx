import React from "react";
import logo from "../assets/logo.png"

export default function Footer() {
    return (
        
        <section class="">
            <div class="flex flex-col items-center bg-[#F6F9FC] py-12 space-y-10 overflow-hidden sm:px-6 lg:px-8">
                <a href="/" class="flex items-center">
                    <p className="text-xl font-alliance text-gray-500 hover:text-black">&lt;karter&gt;</p>
                </a>
                <div class="flex justify-center items-center mt-8 space-x-6">
                    <a href="https://www.linkedin.com/company/karter-dev/" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">Twitter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                    </a>
                    <a href="https://substack.com/@karterdevelopment" class="text-gray-400 hover:text-gray-500">
                        <span class="sr-only">SubStack</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path fill="currentColor" d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>

                    </a>
                </div>
                <p class="mt-5 text-base leading-6 text-center text-gray-400 p-5">
                    © 2023 Karter is the trading name of Karter Labs Limited. All rights reserved.
                </p>
            </div>
        </section>


    )
}

