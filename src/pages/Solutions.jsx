import React from "react";
import { TypeAnimation } from 'react-type-animation';


export default function SolutionPage (){
    return (
        <div className="relative scroll-smooth">
            <LandingItem />
        </div>
    )
}


function LandingItem(){
    return (
        <div className="flex flex-row justify-around items-center p-20">
            <div className="flex flex-col gap-y-2">
                <p className="text-lg lg:text-xl text-center font-alliance font-semibold text-[#00A6B2]">Quality, Speed and Reliability</p>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                    500,
                    'We build web apps...', // initially rendered starting point
                    1000,
                    'We build mobile apps...',
                    1000,
                    'We build data pipelines...',
                    1000,
                    'We build B2B GenAI Blockchain Cloud Based SaaS........',
                    1000,
                    'We build your idea.',
                    5000,
                    ]}
                    speed={50}
                    // style={{ fontSize: '2em', font: 'sfprodisplay', fontWeight: '500'}}
                    repeat={Infinity}
                    className="text-4xl lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]"
                />
            </div>
        </div>
    )
}