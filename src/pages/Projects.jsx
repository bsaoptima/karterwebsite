import React from "react";
import "./Projects.css"
import { ArrowDownCircle, Clock, Map, DollarSign, Users, Award, MapPin } from 'feather-icons-react';
import { CheckCircle } from "feather-icons-react/build/IconComponents";
import { TypeAnimation } from 'react-type-animation';
import InternalTool from "../assets/internaltool.png";
import nuzones from "../assets/2.png"
import uplist from "../assets/4.png"
import safequeen from "../assets/7.png"

export default function ProjectsPage(){
    return (
        <div className="flex flex-col justify-center items-center bg-[#F6F9FC]">
            <div className="bg-[#F6F9FC] flex flex-col justify-center items-center px-10 py-10 lg:py-20 gap-y-5">
                <p className="text-lg lg:text-xl text-center font-alliance font-semibold text-[#00A6B2]">Our portofolio of case studies</p>
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                    'Our Past Projects.',
                    5000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="text-[35px] lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]"
                />
                <p className="text-[#656B8A] text-center text-lg md:text-xl md:px-40 lg:px-60 xl:px-96 font-alliance">We have talent in software engineering, data engineering & analytics and automations.</p>
                <a href="/build">
                    <button>
                        <div className="flex flex-row bg-[#00A6B2] text-white hover:bg-[#02becc] mt-5 drop-shadow-xl rounded-3xl px-4 py-2 gap-x-2">
                            <p className="font-alliance">Work with us</p>
                            <CheckCircle />
                        </div>
                    </button>
                </a>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
                <article class="article-wrapper drop-shadow">
                    <div className="flex flex-col justify-center items-center">
                        <div class="rounded-lg container-project">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="250" height="200" preserveAspectRatio="none" viewBox="0 0 250 200">
                                <g mask="url(&quot;#SvgjsMask1036&quot;)" fill="none">
                                    <rect width="250" height="200" x="0" y="0" fill="#0e2a47"></rect>
                                    <g transform="translate(0, 0)" stroke-linecap="round">
                                        <path d="M15 42.53 L15 157.47" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M35 20.64 L35 179.36" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M55 21.39 L55 178.62" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M75 60.08 L75 139.92" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M95 89.21 L95 110.79" stroke-width="15" stroke="#dd1133"></path>
                                        <path d="M115 76.01 L115 123.99" stroke-width="15" stroke="#dd1133"></path>
                                        <path d="M135 37.18 L135 162.82" stroke-width="15" stroke="#dd1133"></path>
                                        <path d="M155 24.27 L155 175.74" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M175 69.52 L175 130.48" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M195 67.19 L195 132.81" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M215 34.42 L215 165.58" stroke-width="15" stroke="#3a7cc3"></path>
                                        <path d="M235 45.53 L235 154.47" stroke-width="15" stroke="#dd1133"></path>
                                    </g>
                                </g>
                                <defs>
                                    <mask id="SvgjsMask1036">
                                        <rect width="250" height="200" fill="#ffffff"></rect>
                                    </mask>
                                </defs>
                            </svg>
                        </div>
                        <div class="project-info">
                            <div class="flex-pr">
                                <div class="project-title text-nowrap">
                                    Weeb Express
                                </div>
                                <div class="project-hover">
                                    <button>
                                        <a target="_blank" href="https://www.linkedin.com/posts/karter-dev_customsoftware-ecommerce-listingsynchronisation-activity-7119630689821417473-ud7-?utm_source=share&utm_medium=member_desktop">
                                            <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div class="types">
                                <span style={{backgroundColor: "#00A6B2", color: '#FFFFFF'}} className="project-type">Automation</span>
                                <span style={{backgroundColor: 'rgba(143, 143, 143)', color: 'rgb(59, 59, 59)'}} class="project-type">Internal Tool</span>
                            </div>
                        </div>
                    </div>
                </article>
                <article class="article-wrapper drop-shadow">
                    <div class="rounded-lg container-project">
                        <img src={nuzones} height={200} width={250}/>
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">
                                NuZones
                            </div>
                            <div class="project-hover">
                                <button>
                                    <a target="_blank" href="https://www.linkedin.com/posts/karter-dev_webdevelopment-innovation-techsolutions-activity-7122222138387791872-ARhW?utm_source=share&utm_medium=member_desktop">
                                        <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div class="types">
                            <span style={{backgroundColor: 'rgba(165,96,247,0.43)', color: 'rgb(85,27,177)'}} class="project-type">Web Dev</span>
                            <span class="project-type">MVP</span>
                        </div>
                    </div>
                </article>
                <article class="article-wrapper drop-shadow">
                    <div class="rounded-lg container-project">
                        <img src={uplist}/>
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">
                                Uplist
                            </div>
                            <div class="project-hover">
                                <button>
                                    <a target="_blank" href="https://uplist.uk/">
                                        <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div class="types">
                            <span style={{backgroundColor: 'rgba(165,96,247,0.43)', color: 'rgb(85,27,177)'}} class="project-type">Web Dev</span>
                            <span class="project-type">MVP</span>
                        </div>
                    </div>
                </article>
                <article class="article-wrapper drop-shadow">
                    <div class="rounded-lg container-project">
                        <img src={safequeen}/>
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">
                                Safequeen
                            </div>
                            <div class="project-hover">
                                <button>
                                    <a target="_blank" href="https://safequeen.herokuapp.com/">
                                        <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div class="types">
                            <span style={{backgroundColor: 'rgba(165,96,247,0.43)', color: 'rgb(85,27,177)'}} class="project-type">Web Dev</span>
                            <span class="project-type">MVP</span>
                        </div>
                    </div>
                </article>
                <article class="article-wrapper drop-shadow">
                    <div class="rounded-lg container-project">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" width="250" height="200" preserveAspectRatio="none" viewBox="0 0 250 200">
                            <g mask="url(&quot;#SvgjsMask1156&quot;)" fill="none">
                                <rect width="250" height="200" x="0" y="0" fill="url(&quot;#SvgjsLinearGradient1157&quot;)"></rect>
                                <g mask="url(&quot;#SvgjsMask1158&quot;)">
                                    <path d="M10 130L30 110L50 110L70 110M110 130L130 150L150 150M90 130L110 110L130 110L150 110M-10 110L10 130L30 130L50 130L70 130L90 130L110 130L130 130L150 130" stroke="#3a7cc3" stroke-width="3.33"></path>
                                    <path d="M145 130 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0zM65 110 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0zM145 150 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0zM145 110 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z" fill="#3a7cc3"></path>
                                    <path d="M50 90L70 70M30 90L50 70L70 50L90 50M-10 90L10 90L30 90L50 90L70 90L90 90" stroke="#dd1133" stroke-width="3.33"></path>
                                    <path d="M85 90 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0zM65 70 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0zM85 50 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z" fill="#dd1133"></path>
                                    <path d="M10 150L30 170L50 170L70 170L90 170M-10 130L10 150L30 150L50 150L70 150L90 150" stroke="#3a7cc3" stroke-width="3.33"></path>
                                    <path d="M85 150 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0zM85 170 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z" fill="#3a7cc3"></path>
                                    <path d="M-10 70L10 70" stroke="#dd1133" stroke-width="3.33"></path>
                                    <path d="M5 70 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z" fill="#dd1133"></path>
                                </g>
                            </g>
                            <defs>
                                <mask id="SvgjsMask1156">
                                    <rect width="250" height="200" fill="#ffffff"></rect>
                                </mask>
                                <linearGradient x1="5%" y1="-6.25%" x2="95%" y2="106.25%" gradientUnits="userSpaceOnUse" id="SvgjsLinearGradient1157">
                                    <stop stop-color="#0e2a47" offset="0"></stop>
                                    <stop stop-color="#00459e" offset="1"></stop>
                                </linearGradient>
                                <mask id="SvgjsMask1158">
                                    <rect width="250" height="200" fill="white"></rect>
                                    <path d="M147.5 130 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0zM67.5 110 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0zM147.5 150 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0zM147.5 110 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0z" fill="black"></path>
                                    <path d="M87.5 90 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0zM67.5 70 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0zM87.5 50 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0z" fill="black"></path>
                                    <path d="M87.5 150 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0zM87.5 170 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0z" fill="black"></path>
                                    <path d="M7.5 70 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0z" fill="black"></path>
                                </mask>
                            </defs>
                        </svg>
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">
                                Vanguard STS
                            </div>
                            <div class="project-hover">
                                <button>
                                    <a target="_blank" href="https://www.linkedin.com/posts/karter-dev_datasolutions-innovation-techconsulting-activity-7117090291743870980-R84J?utm_source=share&utm_medium=member_desktop">
                                        <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div class="types">
                            <span style={{backgroundColor: 'rgba(165,96,247,0.43)', color: 'rgb(85,27,177)'}} class="project-type">Database</span>
                            <span class="project-type">Analytics</span>
                        </div>
                    </div>
                </article>
            </div>
            
        </div>
    )
}