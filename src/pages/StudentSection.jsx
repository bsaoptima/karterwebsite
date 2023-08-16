import React, { useState, useRef } from "react";
import "./VettingProcess.css"
import { ArrowDownCircle, Clock, Map, DollarSign, Users, Award, MapPin } from 'feather-icons-react';

export default function StudentSectionTesting(){

    const processRef = useRef();
    const scrollToProcess = () => {
        processRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative scroll-smooth">
            <MainSection scrollToProcess={scrollToProcess}/>
            <BenefitSection />
            <VettingProcess processRef={processRef}/>
        </div>
    )
}

function MainSection({ scrollToProcess }) {
    return (
        <div className="bg-[#F6F9FC] flex flex-col justify-center items-center px-10 py-10 lg:py-20 gap-y-5">
            <p className="text-lg lg:text-xl text-center font-alliance font-semibold text-[#4B8BFC]">Join our remote vibrant community</p>
            <p className="text-4xl lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]">Working at Karter</p>
            <p className="text-[#656B8A] text-center text-lg md:text-xl font-alliance"> blablablabalablabllabalbalb</p>
            <button onClick={scrollToProcess}>
                <div className="flex flex-row bg-[#00A6B2] text-white hover:bg-[#02becc] mt-5 drop-shadow-xl rounded-3xl px-4 py-2 gap-x-2">
                    <p className="font-alliance">How to join us</p>
                    <ArrowDownCircle />
                </div>
            </button>
            
        </div>
    )
}

function BenefitSection() {
    return (
        <div className="bg-[#F6F9FC] flex flex-col justify-center items-center px-10 py-10 lg:py-20 gap-y-5 lg:gap-y-5">
            <p className="text-3xl md:text-4xl text-center font-sfprodisplay font-semibold text-[#29363D]">Benefits at Karter</p>
            <p className="text-[#656B8A] text-center md:text-xl font-alliance">Our goal is to make sure that students are able to balance both academic duties <br/> and their work with us while extracting the most value out of their experience.</p>
            <div className="bg-[#F6F9FC] mt-5 lg:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-20 lg:gap-x-32 gap-y-10">
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <Clock className="text-[#00A6B2] mb-2"/>
                    <p className="text-[#29363D] text-xl font-alliance font-semibold">Flexible contracts</p>
                    <p className="text-[#656B8A] text-center font-alliance">You work per contract. If you need to <br/> take a break after a project, go ahead!</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <Map className="text-[#00A6B2] mb-2"/>
                    <p className="text-[#29363D] text-xl font-alliance font-semibold">Remote work</p>
                    <p className="text-[#656B8A] text-center text-md font-alliance">Work from home, on campus, <br/>in a café, it does not matter!</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <DollarSign className="text-[#00A6B2] mb-2"/>
                    <p className="text-[#29363D] text-xl font-alliance font-semibold">Competitive pay</p>
                    <p className="text-[#656B8A] text-center text-md font-alliance">Earn on average 2x minimal wage <br/> on each project.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <Users className="text-[#00A6B2] mb-2"/>
                    <p className="text-[#29363D] text-xl font-alliance font-semibold">Meet people</p>
                    <p className="text-[#656B8A] text-center text-md font-alliance">We encourage people to work with <br/> their classmates on campus.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <Award className="text-[#00A6B2] mb-2"/>
                    <p className="text-[#29363D] text-xl font-alliance font-semibold">Gain experience</p>
                    <p className="text-[#656B8A] text-center text-md font-alliance">Stand out in front of employers <br/> with the experience built with Karter.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <MapPin className="text-[#00A6B2] mb-2"/>
                    <p className="text-[#29363D] text-xl font-alliance font-semibold">Discover employers</p>
                    <p className="text-[#656B8A] text-center text-md font-alliance">Interact regularly with great <br/> companies to kick-start your career.</p>
                </div>  
            </div>
        </div>
    )
}

function VettingProcess({ processRef }){

    const [isEmailCopied, setIsEmailCopied] = useState("")

    return (
        <div ref={processRef} className="relative scroll-smooth bg-[#F6F9FC]">
            <div className="flex flex-col justify-center items-center gap-y-20 p-10 md:p-20">
                <div className="flex flex-col items-center gap-y-10 w-full md:max-w-[600px]">
                    <p className="text-3xl md:text-4xl text-center font-sfprodisplay font-semibold text-[#29363D]">How to join our Network</p>
                    <p className="text-[#656B8A] text-center text-lg md:text-xl font-alliance">Every student in our network is thoroughly vetted <br/> through interviews and assessments.</p>
                    <button className="">
                        <div className="bg-white flex flex-col justify-start rounded-lg p-4 hover:drop-shadow-xl ring-2 ring-[#4B8BFC] text-[#4B8BFC] hover:text-white hover:bg-[#4B8BFC] transform hover:scale-105 transition-transform duration-300">
                            <a href="/contact" className="text-xl font-alliance">Join us</a>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-10 md:gap-y-20">
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white flex flex-col gap-y-5 justify-start drop-shadow-xl rounded-xl p-8 stepItem text-black transform hover:scale-105 transition-transform duration-300 w-full md:max-w-[600px]">
                            <p className="text-2xl font-alliance">1. Contact us with your CV</p>
                            <p className="font-alliance">Reach out to us through our <a href="/contact" className="hover:text-[#4B8BFC]">contact form</a>, <a href="https://www.linkedin.com/company/karter-dev/" className="hover:text-[#4B8BFC]">LinkedIn</a> or <button className="hover:text-[#4B8BFC]" onClick={() => {{setIsEmailCopied("(copied)")}; {navigator.clipboard.writeText("karterdevelopment@gmail.com")}}}>email</button> {isEmailCopied} with your CV. <br /> If your profile meets our fundamental requirements you will be invited for a Screening Interview.</p>
                        </div>
                        <div className="">
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white flex flex-col gap-y-5 justify-start drop-shadow-xl rounded-xl p-8 stepItem text-black transform hover:scale-105 transition-transform duration-300 w-full md:max-w-[600px]">
                            <p className="text-2xl font-alliance">2. Screening Interview</p>
                            <p className="font-alliance">After an initial CV check, we invite students into a Screen Interview where we discuss their situation, their motivations and their experiences.</p>
                        </div>
                        <div className="">
                        </div>
                    </div> 
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white flex flex-col gap-y-5 justify-start drop-shadow-xl rounded-xl p-8 stepItem text-black transform hover:scale-105 transition-transform duration-300 w-full md:max-w-[600px]">
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
