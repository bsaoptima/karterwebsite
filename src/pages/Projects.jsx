import React from "react";
import "./Projects.css"
import { ArrowDownCircle, Clock, Map, DollarSign, Users, Award, MapPin } from 'feather-icons-react';
import { CheckCircle } from "feather-icons-react/build/IconComponents";
import { TypeAnimation } from 'react-type-animation';
    

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
                    <div class="rounded-lg container-project">
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">Weeb Express</div>
                            <div class="project-hover">
                                <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                            <div class="types">
                                <span style={{backgroundColor: "#00A6B2", color: '#FFFFFF'}} className="project-type">Automation</span>
                                <span style={{backgroundColor: 'rgba(143, 143, 143)', color: 'rgb(59, 59, 59)'}} class="project-type">Internal Tool</span>
                            </div>
                    </div>
                </article>
                <article class="article-wrapper drop-shadow">
                    <div class="rounded-lg container-project">
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">NuZones</div>
                            <div class="project-hover">
                                <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">UpList</div>
                            <div class="project-hover">
                                <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">SafeQueen</div>
                            <div class="project-hover">
                                <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
                    </div>
                    <div class="project-info">
                        <div class="flex-pr">
                            <div class="project-title text-nowrap">Vanguard STS</div>
                            <div class="project-hover">
                                <svg style={{ color: 'black' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </div>
                            </div>
                            <div class="types">
                                <span style={{backgroundColor: 'rgba(212, 214, 109)', color: 'rgb(85,27,177)'}} class="project-type">Data Engineering</span>
                            </div>
                    </div>
                </article>
            </div>
            
        </div>
    )
}