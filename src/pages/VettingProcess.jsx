import React, { useState } from "react";
import "./VettingProcess.css"


export default function VettingProcess(){

    const [isEmailCopied, setIsEmailCopied] = useState("")

    return (
        <div className="relative scroll-smooth bg-[#F6F9FC]">
            <div className="flex flex-col justify-center items-center gap-y-20 p-10 md:p-20">
                <div className="flex flex-col items-center gap-y-10 w-full md:max-w-[600px]">
                    <p className="text-4xl md:text-5xl text-center font-sfprodisplay text-[#29363D]">How to join our Network</p>
                    <p className="text-[#656B8A] text-center text-lg md:text-xl font-alliance">Every student in our network is thoroughly vetted <br/> through interviews and assessments.</p>
                    <button className="">
                        <div className="bg-white flex flex-col justify-start rounded-lg p-4 hover:drop-shadow-xl ring-2 ring-[#4B8BFC] text-[#4B8BFC] hover:text-white hover:bg-[#4B8BFC] transform hover:scale-105 transition-transform duration-300">
                            <a href="/contact" className="text-xl font-alliance">Join us</a>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-10 md:gap-y-20">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white flex flex-col gap-y-5 justify-start drop-shadow-xl rounded-xl p-8 stepItem text-[#D3D3D3] hover:text-black transform hover:scale-105 transition-transform duration-300 w-full md:max-w-[600px]">
                            <p className="text-2xl font-alliance">1. Contact us with your CV</p>
                            <p className="font-alliance">Reach out to us through our <a href="/contact" className="hover:text-[#4B8BFC]">contact form</a>, <a href="https://www.linkedin.com/company/karter-dev/" className="hover:text-[#4B8BFC]">LinkedIn</a> or <button className="hover:text-[#4B8BFC]" onClick={() => {{setIsEmailCopied("(copied)")}; {navigator.clipboard.writeText("karterdevelopment@gmail.com")}}}>email</button> {isEmailCopied} with your CV. <br /> If your profile meets our fundamental requirements you will be invited for a Screening Interview.</p>
                        </div>
                        <div className="">
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white flex flex-col gap-y-5 justify-start drop-shadow-xl rounded-xl p-8 stepItem text-[#D3D3D3] hover:text-black transform hover:scale-105 transition-transform duration-300 w-full md:max-w-[600px]">
                            <p className="text-2xl font-alliance">2. Screening Interview</p>
                            <p className="font-alliance">After an initial CV check, we invite students into a Screen Interview where we discuss their situation, their motivations and their experiences.</p>
                        </div>
                        <div className="">
                        </div>
                    </div> 
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white flex flex-col gap-y-5 justify-start drop-shadow-xl rounded-xl p-8 stepItem text-[#D3D3D3] hover:text-black transform hover:scale-105 transition-transform duration-300 w-full md:max-w-[600px]">
                            <p className="text-2xl font-alliance">3. Technical Interview</p>
                            <p className="font-alliance">Shortly after the Screening Interview, students go through a Technical Interview where they can showcase and explain their past projects. They will also solve problems and answer system design questions.</p>
                        </div>
                        <div className="">
                        </div>
                    </div> 
                </div>

                <div className="flex flex-col items-center gap-y-10 w-full md:max-w-[600px]">
                    <p className="text-[#656B8A] text-center text-lg md:text-xl font-alliance">After passing our vetting process, your profile will be added to our talent pool. Sit tight and get ready to be proposed on projects!</p>
                    <button className="">
                        <div className="bg-white flex flex-col justify-start rounded-lg p-4 hover:drop-shadow-xl ring-2 ring-[#4B8BFC] text-[#4B8BFC] hover:text-white hover:bg-[#4B8BFC] transform hover:scale-105 transition-transform duration-300">
                            <a href="/contact" className="text-xl font-alliance">Start your application</a>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    )
}
