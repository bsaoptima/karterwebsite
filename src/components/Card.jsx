import React from 'react';
import './Card.css'

export default function Card({ card }) {

    const feFrameworks = card.frameworks.filter(framework => framework.purpose === "FE");
    const beFrameworks = card.frameworks.filter(framework => framework.purpose === "BE");
    const ciFrameworks = card.frameworks.filter(framework => framework.purpose === "CI");
    const hoFrameworks = card.frameworks.filter(framework => framework.purpose === "HO");

    return (
        <div className='flex flex-col w-80 justify-start bg-[#1B2239] rounded-2xl p-5'>
            <div className='flex flex-row justify-start items-center mb-8'>
                <p className='text-white font-mono'>from:</p>
                <p className='ml-2 rounded-lg w-28 h-8 bg-[#010923] px-2 text-white font-mono text-start flex items-center'>{card.creator}</p>
            </div>
            <div className='flex flex-row justify-start items-center mb-8'>
                <p className='text-white font-mono'>frontend:</p>
                <div className='flex flex-row-wrap'>
                    {feFrameworks.map((framework) => (
                        <button className='buttonCard' title={framework.name}>
                            <img
                                className='mx-3'
                                src={framework.icon} 
                                width="50px" 
                                height="50px"
                            />
                            <span className="tooltip">{framework.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex flex-row justify-start items-center mb-8'>
                <p className='text-white font-mono'>backend:</p>
                <div className='flex flex-row-wrap'>
                    {beFrameworks.map((framework) => (
                        <button className='buttonCard'>
                            <img
                                className='mx-3'
                                src={framework.icon} 
                                width="50px" 
                                height="50px"
                            />
                            <span class="tooltip">{framework.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex flex-row justify-start items-center mb-8'>
                <p className='text-white font-mono'>ci/cd:</p>
                <div className='flex flex-row-wrap'>
                    {ciFrameworks.map((framework) => (
                        <button className='buttonCard'>
                            <img
                                className='mx-3'
                                src={framework.icon} 
                                width="40px" 
                                height="50px"
                            />
                            <span class="tooltip">{framework.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex flex-row justify-start items-center mb-8'>
                <p className='text-white font-mono'>hosting:</p>
                <div className='flex flex-row-wrap'>
                    {hoFrameworks.map((framework) => (
                        <button className='buttonCard'>
                            <img
                                className='mx-3'
                                src={framework.icon} 
                                width="40px" 
                                height="50px"
                            />
                            <span class="tooltip">{framework.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className='flex flex-row justify-start items-center'>
                <p className='text-white font-mono'>explanation:</p>
                <div className='flex flex-row-wrap'>
                    <p className='rounded-lg bg-[#010923] p-2 ml-2 text-white font-mono'>{card.explanation}</p>
                </div>
            </div>
        </div>
    )
}