import React, { useRef, useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Home.css'
import { useInView } from 'react-intersection-observer';

import product from '../assets/product.png'
import team from '../assets/team.png'
import world from '../assets/world.png'

import code from "../assets/code.png"
import bulb from "../assets/bulb.png"

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { TypeAnimation } from 'react-type-animation';

import Marquee from "react-fast-marquee";

import lottie from 'lottie-web';
import animationData from '../assets/lottie.json';

import uob_color from "../assets/universities/uob_color.png"
import icl from "../assets/universities/icl.png"
import ucl from "../assets/universities/ucl.png"
import warwick from "../assets/universities/warwick.png"
import bristol from "../assets/universities/bristol.png"
import cam from "../assets/universities/cambridge.jpg"

import sat from "../assets/satellite.svg"

const LottieAnimation = ({ play, className }) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData,
    });

    return () => animationInstance.current?.destroy();
  }, []);

  useEffect(() => {
    if (play) {
      animationInstance.current?.play();
    }
  }, [play]);

  return <div ref={animationContainer} className={className} />;
};

export default function HomePage() {

    const contactRef = useRef();
    const solutionsRef = useRef();

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToSolutions = () => {
        solutionsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="relative scroll-smooth">
            <LandingSection scrollToContact={scrollToContact} scrollToSolutions={scrollToSolutions}/>
            <MapSection />
            <UniMarqueeSection />
            <SolutionsSection solutionsRef={solutionsRef}/>
            <QuoteSection/>
            <ContactSection contactRef={contactRef} />
        </div>
    )
}


{/* LANDING SECTION */}
function LandingSection({ scrollToContact, scrollToSolutions }) {
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-20 md:py-28">
      <div className="flex flex-col justify-center items-center md:px-20 gap-y-8 md:gap-y-12">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
          'Bridging the gap between University & Industry.',
          5000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-3xl md:text-6xl lg:text-[80px] font-alliance font-semibold text-center px-5"
        />
        <p className="text-lg md:text-2xl font-alliance text-center text-[#5E5E5E] px-5">
          Get access to the best UK student developers for hire in just a few clicks!
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-x-5 md:gap-x-8 phone-flex-col">
          <div className="py-4 md:py-6">
            <button class="buttonWOW">
              <a href="/book-a-call">
                <p className="font-alliance text-lg">
                  Start building
                </p>
              </a>  
            </button>
          </div>
          <div className="flex flex-row items-center gap-x-2 md:gap-x-4 phone-hidden">
            <button class="buttonWOW2">
                <a href="/solutions">
                  <p className="font-alliance text-lg">
                    How it works
                  </p>
                </a>  
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function UniversitySection(){
  return (
    <div>
      
    </div>
  )
}
  

{/* COOL MAP SECTION */}

function MapSection() {
  const [playAnimation, setPlayAnimation] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPlayAnimation(true);
          // Optional: Unobserve after playing once
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div ref={sectionRef} className="relative">
        <div className="mapItem flex p-10 flex-col items-center h-auto md:h-[600px] md:gap-x-3 md:py-20 md:px-60">
          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="flex flex-col gap-y-5 md:gap-y-10 p-5 md:p-14 justify-center items-center border-2 border-gray w-auto md:w-[800px] rounded-lg bg-white/30 backdrop-blur-md">
              {/* <LottieAnimation play={playAnimation} className="w-[500px]"/> */}
              <p className="font-alliance text-2xl md:text-4xl mx:px-8 font-semibold">Build your websites, MVP, internal tools, ... with top remote talent</p>
              
              <div className="flex flex-row gap-x-5 md:gap-x-12 justify-start items-start">
                <div className="flex flex-col gap-y-2 justify-center">
                  <p className="font-alliance font-semibold text-xl md:text-4xl text-[#00A6B2]">
                    {counterOn && <CountUp start={0} end={15} duration={5}/>}
                    k+
                  </p>
                  <p className="font-alliance text-xs md:text-lg">Student developers <br/> accessible</p>
                </div>
                <div className="flex flex-col gap-y-2 justify-center">
                  <p className="font-alliance font-semibold  text-xl md:text-4xl text-[#00A6B2]">
                    {counterOn && <CountUp start={0} end={10} duration={5} delay={0.2}/>}
                    +
                  </p>
                  <p className="font-alliance text-xs md:text-lg">Projects completed in <br/> under one year</p>
                </div>
                <div className="flex flex-col gap-y-2 justify-center">
                  <p className="font-alliance font-semibold  text-xl md:text-4xl text-[#00A6B2]">
                    {counterOn && <CountUp start={0} end={3} duration={5} delay={0.2}/>}
                    
                  </p>
                  <p className="font-alliance text-xs md:text-lg">Months on average<br/>to build  an MVP</p>
                </div>
              </div>

              <button class="buttonWOW2">
                <a href="/projects">
                  <p className="font-alliance text-lg">
                    Check our Past Projects
                  </p>
                </a>  
              </button>


            </div>
          </ScrollTrigger>
        </div>
    </div>
  );
}

{/* HIRE TOP TALENT AND UNI MARQUEE */}

function UniMarqueeSection(){
  return (
    <div className="flex flex-col justify-center items-center py-10 md:py-20 gap-y-10">
      <p className="hidden lg:block font-alliance text-3xl md:text-5xl p-8 font-semibold md:px-80 text-center">Hire top students directly from campus</p>
      <Marquee autoFill="true" speed={30} className="hidden md:flex flex-row justify-center items-center">
        <div className="px-10 w-[200px]">
          <img src={uob_color} alt="Default" className="default-image"/>
        </div>
        <div className="px-10 w-[200px]">
          <img src={icl} alt="Default" className="default-image"/>
        </div>
        <div className="px-10 w-[200px]">
          <img src={ucl} alt="Default" className="default-image"/>
        </div>
        <div className="px-10 w-[150px]">
          <img src={warwick} alt="Default" className="default-image"/>
        </div>
        <div className="px-10 w-[200px]">
          <img src={bristol} alt="Default" className="default-image"/>
        </div>
        <div className="px-10 w-[200px]">
          <img src={cam} alt="Default" className="default-image"/>
        </div>
      </Marquee>

      <div className="flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-x-10 px-8">
        <div className="flex flex-col justify-start items-start gap-y-5 basis-1/2 md:px-10">
          <p className="text-left font-alliance text-3xl text-[#00A6B2]">Discover talent remotely and easily</p>
          <p className="text-left font-alliance text-lg">Get exclusive access to the best and most brilliant student developers in the country thanks to our vetting process.</p>
          <p className="text-left font-alliance text-lg">Walk us through your project in order to get a team ready in just a few clicks. Leverage our wide network to build your start-up.</p>
          
          <div className="flex flex-row gap-x-5 justify-center items-center">

          </div>
          
          <button class="buttonWOW2">
            <a href="/book-a-call">
              <p className="font-alliance text-lg">
                Hire talent
              </p>
            </a> 
          </button> 
        </div>

        <div className="hidden lg:block">
          <img src={sat} />
        </div>

      </div>

    </div>
  )
}

{/* WHAT WE CAN BRING SECTION */}
function SolutionsSection({ solutionsRef }) {
    return (
      <div ref={solutionsRef} className="flex flex-col whitesections gap-y-20 justify-center px-5 py-10 lg:pb-40 lg:pt-20">
        <div className="lg:mb-16">
          <p className="text-4xl lg:text-5xl text-center font-sfprodisplay font-bold text-[#29363D]">
            How we help <strong>you</strong> and <strong>your business</strong>
          </p>
        </div>
        <div className="flex flex-col gap-y-16 md:gap-y-20 lg:gap-y-40 md:flex-col md:gap-x-5 justify-center lg:px-20">
          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-16 gap-y-8">
            <div className="flex flex-col gap-y-2 md:px-20 lg:basis-1/2 items-start">
              <p className="text-[#00A6B2] text-[20px] md:text-[25px] font-alliance">Create teams for your business</p>
              <p className="text-[#29363D] font-sfprodisplay font-bold text-[30px] md:text-[40px]">Part-time student developers</p>
              <p className="text-[#656B8A] text-[16px] md:text-[20px] font-alliance py-5 md:py-10">We provide talented student developers for your business that can work on a part-time basis with a fixed day rate.</p>
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-20 justify-between">
                <div className="flex flex-col gap-y-1 basis-1/2 md:mb-0">
                  <img src={code} width="50px" height="50px"/>
                  <p className="text-[#656B8A] text-[14px] md:text-[16px] px-2 font-alliance">Build teams throughout universities in the United Kingdom</p>
                </div>
                <div className="flex flex-col gap-y-1 basis 1/2 md:mb-0">
                  <img src={bulb} width="50px" height="50px"/>
                  <p className="text-[#656B8A] text-[14px] md:text-[16px] px-2 font-alliance">Tap into campuses to work with tomorrow’s top engineers</p>
                </div>
              </div>
              <button className="rounded-xl bg-[#39D3DE] drop-shadow-xl transform hover:scale-105 transition-transform duration-150 my-10 px-5 py-2 text-white">
                <a href="https://open.substack.com/pub/karterdevelopment/p/coming-soon?utm_campaign=post&utm_medium=web">Learn more</a>
              </button>
            </div>
            <div className="basis-1/2 hidden lg:block max-w-[800px] max-h-[800px]">
              <img src={team} className="rounded-2xl"/>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-16 gap-y-8">
            <div className="basis-1/2 hidden lg:block max-w-[800px] max-h-[800px]">
              <img src={product} className="rounded-2xl"/>
            </div>
            <div className="flex flex-col gap-y-2 md:px-20 lg:basis-1/2 items-start">
              <p className="text-[#00A6B2] text-[20px] md:text-[25px] font-alliance">Build your products with us</p>
              <p className="text-[#29363D] font-sfprodisplay font-bold text-[30px] md:text-[40px]">Bespoke Product Development</p>
              <p className="text-[#656B8A] text-[16px] md:text-[20px] font-alliance py-5 md:py-10">We build teams of developers, led by one of our project managers helping you outsource the development of your products.</p>
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-20 justify-between">
                <div className="flex flex-col gap-y-1 basis-1/2 md:mb-0">
                  <img src={code} width="50px" height="50px"/>
                  <p className="text-[#656B8A] text-[14px] md:text-[16px] px-2 font-alliance">From Web & Mobile apps to internal software development</p>
                </div>
                <div className="flex flex-col gap-y-1 basis-1/2 md:mb-0">
                  <img src={bulb} width="50px" height="50px"/>
                  <p className="text-[#656B8A] text-[14px] md:text-[16px] px-2 font-alliance">Data Analytics and Database Engineering for business purposes  </p>
                </div>
              </div>
              <button className="rounded-xl bg-[#39D3DE] drop-shadow-xl transform hover:scale-105 transition-transform duration-150 my-10 px-5 py-2 text-white">
                <a href="https://open.substack.com/pub/karterdevelopment/p/coming-soon?utm_campaign=post&utm_medium=web">Learn more</a>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-16 gap-y-8">
            <div className="flex flex-col gap-y-2 md:px-20 lg:basis-1/2 items-start">
              <p className="text-[#00A6B2] text-[20px] md:text-[25px] font-alliance">Hire top vetted junior engineers</p>
              <p className="text-[#29363D] font-sfprodisplay font-bold text-[30px] md:text-[40px]">Elite Graduate Talent</p>
              <p className="text-[#656B8A] text-[16px] md:text-[20px] font-alliance py-5 md:py-10">We identify the brightest students in universities and train them for months. Hire from us to secure the best talent for your business.</p>
              <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-0 md:gap-x-20 justify-between">
                <div className="flex flex-col gap-y-1 basis-1/2 md:mb-0">
                  <img src={code} width="50px" height="50px" alt="Code Icon"/>
                  <p className="text-[#656B8A] text-[14px] md:text-[16px] px-2 font-alliance">Advertise job opportunities throughout our network</p>
                </div>
                <div className="flex flex-col gap-y-1 basis-1/2 md:mb-0">
                  <img src={bulb} width="50px" height="50px" alt="Bulb Icon"/>
                  <p className="text-[#656B8A] text-[14px] md:text-[16px] px-2 font-alliance">Vetted and trained talent prepared for employment</p>
                </div>
              </div>
              <button className="rounded-xl bg-[#39D3DE] drop-shadow-xl transform hover:scale-105 transition-transform duration-150 my-10 px-5 py-2 text-white">
                <a href="https://open.substack.com/pub/karterdevelopment/p/coming-soon?utm_campaign=post&utm_medium=web">Learn more</a>
              </button>
            </div>
            <div className="basis-1/2 hidden lg:block max-w-[800px] max-h-[800px]">
              <img src={world} className="rounded-2xl" alt="Team Image"/>
            </div>
          </div>


        </div>
      </div>
    );
  }
  
  


  function QuoteSection() {
    return (
      <div className="flex flex-col">
        <figure className="bg-[#F6F9FC] mx-auto text-center px-10 md:px-40 pb-10 md:pb-28">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#16B6DF"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-md md:text-2xl font-alliance text-gray-900">
              "I joined Karter to utilize the data analytical skills I have
              developed over my current internship and apply these skills to have
              a rewarding impact on clients. Working with Karter has enabled me to
              gain client exposure and subsequently improve my client management
              skills."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500">
              <cite className="pr-3 font-medium text-gray-900 ">
                Abhirup
              </cite>
              <cite className="pl-3 text-sm text-gray-500">
                Student at the University of Birmingham
              </cite>
            </div>
          </figcaption>
        </figure>
        <figure className="bg-[#F6F9FC] mx-auto text-center px-10 md:px-40 pb-20 md:pb-40">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="#16B6DF"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-md md:text-2xl font-alliance text-gray-900">
            "It has been a pleasure working with Karter. They really helped bring my idea to life and construct something that is going to help connect more mountain bikers together. I came to them with some initial designs and ideas. They were able to integrate all these features into a great web application and I am looking forward to future plans we have together."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500">
              <cite className="pr-3 font-medium text-gray-900">
                Alex Watkins
              </cite>
              <cite className="pl-3 text-sm text-gray-500">
                CEO, NuZones
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }
  


  function ContactSection({ contactRef }) {
    return (
      <div
        ref={contactRef}
        id="contact"
        className="contactItem flex flex-col justify-center items-center p-10 md:p-40 gap-y-10"
      >
        <p className="text-white text-3xl md:text-4xl font-sfprodisplay font-semibold">
          Interested in working with / joining us?
        </p>
        <p className="text-white text-md md:text-xl font-alliance">
          Click the <strong>button</strong> below, fill the <strong>short form</strong>{" "}
          and we will <strong>get back to you shortly</strong>:
        </p>
        <div className="bg-[#DE4321] py-3 px-6 rounded md:py-5 md:px-10 text-white font-alliance">
          <button>
            <a href="/contact">Contact us</a>
          </button>
        </div>
      </div>
    );
  }
  