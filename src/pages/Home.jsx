import React, { useRef, useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Home.css'
import { useInView } from 'react-intersection-observer';
import { useAnimate } from "framer-motion";

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
import animationData from '../assets/lottie_phone.json';
import animationData2 from '../assets/people.json';

import uob_color from "../assets/universities/uob_color.png"
import icl from "../assets/universities/icl.png"
import ucl from "../assets/universities/ucl.png"
import warwick from "../assets/universities/warwick.png"
import bristol from "../assets/universities/bristol.png"
import cam from "../assets/universities/cambridge.jpg"
import bro from "../assets/bro.svg"

import sat from "../assets/satellite.svg"


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
                <a href="/services">
                  <p className="font-alliance text-lg">
                    Check our Services
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

const PeopleAnimation = ({ play, className }) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null);

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: animationData2,
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

function SolutionsSection({ solutionsRef }) {

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
      { threshold: 0.4 } // Trigger when 50% of the element is in view
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

  return (
    <div ref={sectionRef} className="flex flex-col gap-y-20 justify-center items-center px-8 py-10 lg:pb-40 lg:pt-20">
      <p className="font-alliance text-4xl md:text-6xl font-semibold md:px-80 text-center">How we help your <span className="text-[#2468FF]">business</span></p>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row gap-y-3 md:gap-x-6 md:px-40">
          <div className="flex flex-col gap-y-5 justify-center p-10 md:pt-10 md:pr-10 md:pl-10 basis-1/2 bg-[#2468FF]">
            <p className="font-alliance text-3xl text-white font-semibold text-left">Launch and build your MVP with Karter</p>
            <p className="font-alliance text-lg text-[#dbdbdb] text-left">We assist start-ups by helping them design, develop and get their products to market in no time. 360° technical assistance.</p>
            <div className="hidden lg:block flex flex-col justify-center items-center pt-10">
              <LottieAnimation play={playAnimation} className="w-[400px] md:w-[500px]"/>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 p-10 basis-1/2 bg-[#7B41ED]">
            <div className="hidden lg:block flex flex-col justify-center items-center">
              <PeopleAnimation play={playAnimation} className="w-[400px] md:w-[500px]"/>
            </div>
            <p className="font-alliance text-3xl text-white font-semibold text-left">Instant access to undervalued talent</p>
            <p className="font-alliance text-lg text-[#dbdbdb] text-left">Our students are future industry leaders and will end up working at top companies. Leverage their talent and work with them now.</p>
          </div>
        </div>
        <div className="md:px-40">
          <div className="flex flex-row gap-x-10 bg-[#1B998B] justify-center items-center px-10 py-10 md:p-20">
            <div className="flex flex-col gap-y-5">
              <p className="font-alliance text-3xl text-white font-semibold text-left">Build remote teams in a few clicks</p>
              <p className="font-alliance text-lg text-[#dbdbdb] text-left">Our students are future industry leaders and will end up working at top companies. Leverage their talent and work with them now.</p>
              <div className="flex flex-col justify-center items-center">
                <button class="buttonWOW3">
                  <a href="/book-a-call">
                    <p className="font-alliance text-lg">
                      Start building
                    </p>
                  </a>
                </button>
              </div>
            </div>
            {/* <div className="flex flex-col justify-start items-start gap-y-5 basis-1/2">
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
  
  


  function QuoteSection() {
    return (
      <div className="flex flex-col">
        {/* <figure className="bg-[#F6F9FC] mx-auto text-center px-10 md:px-40 pb-10 md:pb-28">
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
        </figure> */}
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
  