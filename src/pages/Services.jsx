import React from "react";
import { ArrowDownCircle } from "feather-icons-react";
import minds from '../assets/minds.svg'


export default function ServicesPage(){
    return (
        <div className="relative scroll-smooth">
            <LandingItem />
            <StudentAreGreatComponent />
        </div>
    )
}

function LandingItem(){
    return (
        <div className="bg-[#F6F9FC] flex flex-col justify-center items-center px-10 py-10 lg:py-20 gap-y-5">
            <p className="text-lg lg:text-xl text-center font-alliance font-semibold text-[#00A6B2]">Digital Services for Innovative Startups</p>
            <p className="text-4xl lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]">Areas of expertise</p>
            <p className="text-[#656B8A] text-center text-lg md:text-xl md:px-40 lg:px-60 xl:px-96 font-alliance">Thanks to our network, we have a large coverage in services offered. Leverage all this talent to build your products.</p>
            <button>
                <div className="flex flex-row bg-[#00A6B2] text-white hover:bg-[#02becc] mt-5 drop-shadow-xl rounded-3xl px-4 py-2 gap-x-2">
                    <p className="font-alliance">Check our Services</p>
                    <ArrowDownCircle />
                </div>
            </button>
        </div>
    )
}

function StudentAreGreatComponent(){
    return(
        <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-2 bg-[#F6F9FC] justify-between items-center px-10 md:px-20">
            <div className="flex flex-col gap-y-5 basis-1/2 md:px-10">
                <p className="text-4xl lg:text-5xl text-start font-sfprodisplay font-bold text-[#29363D]">Young, brilliant minds</p>
                <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Our trained and vetted student developers are at the forefront of technical innovation.</p>
                <p className="text-[#37434a] text-start text-lg md:text-xl font-alliance">Get access to the latest frameworks, technologies and trends. This allows us to build innovative and reliable products fast.</p>
            </div>
            <div className="flex flex-col justify-center items-center basis-1/2">
                <img src={minds} className="rounded" alt="Team Image" height={500} width={500}/>
            </div>
        </div>
    )
}