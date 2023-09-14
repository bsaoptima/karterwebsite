import React, { Suspense, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import './Solutions.css'
import { FiArrowRightCircle, ArrowDownCircle } from 'feather-icons-react'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SolutionPage (){
    return (
        <div className="relative scroll-smooth">
            <LandingItem />
        </div>
    )
}

function LandingItem(){
    return (
        <div className="bg-[#F6F9FC] flex flex-row justify-around items-center p-20">
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
                        className="text-4xl lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]"
                    />
                </div>
                <p className="text-[#656B8A] text-center text-lg md:text-xl md:px-40 lg:px-96 font-alliance">Hire on demand a team of developers & project managers without the hassle of managing a team by yourself</p>
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
