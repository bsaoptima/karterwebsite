import React, { useRef } from "react";
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-scroll';
import './Home.css'
import { useInView } from 'react-intersection-observer';

import product from '../assets/technology.png'
import team from '../assets/cpu.png'
import graduate from '../assets/touch.png'
import rocket from '../assets/rocket.png'


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
            <StatsSection />
            <SolutionsSection solutionsRef={solutionsRef}/>
            <QuoteSection/>
            <ContactSection contactRef={contactRef} />
        </div>
    )
}


{/* LANDING SECTION */}
function LandingSection({ scrollToContact, scrollToSolutions }) {
    return (
      <div className="flex flex-col md:flex-row landingItem md:h-screen p-10">
        <div className="flex flex-col justify-center md:px-20 md:gap-y-20 md:basis-4/5 phone-gap-y-10">
          <p className="text-4xl md:text-[85px] font-sfprodisplay leading-tight">
            Bridging the gap between <strong>University</strong> &{" "}
            <strong>Industry</strong>
          </p>
          <p className="text-lg md:text-2xl font-sfprodisplay">
            We are building the largest network of student developers,
            <br /> accessible to companies of all sizes.
          </p>
          <div className="flex flex-row md:items-center gap-x-5 md:gap-x-10 phone-flex-col">
            <div className="bg-black text-white transition-colors duration-300 ease-in-out hover:text-black hover:bg-white px-8 md:px-16 py-4 md:py-6">
              <button onClick={scrollToContact}>
                <p className="text-lg md:text-2xl font-alliance">Contact us</p>
              </button>
            </div>
            <div className="flex flex-row items-center gap-x-2 md:gap-x-4 phone-hidden">
              <div className="triangle"></div>
              <a
                onClick={scrollToSolutions}
                className="text-sm md:text-lg font-alliance relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:bg-black before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/5"></div>
      </div>
    );
  }
  
{/* COOL MAP SECTION */}

function MapSection() {
    return (
      <div className="relative">
        <div className="mapItem flex p-10 flex-col md:flex-row items-center h-auto md:h-[825px] w-auto md:gap-x-3">
          <div className="flex flex-col justify-center md:justify-start md:basis-1/2 gap-y-10 md:gap-y-16 md:pl-20 md:pr-10">
            <p className="text-white text-3xl md:text-5xl font-alliance">
              Connect your business with <strong>tomorrow's</strong> best{" "}
              <strong>leaders</strong> and <strong>engineers</strong>
            </p>
            <p className="text-white text-base md:text-lg font-alliance">
              Our teams are made of brilliant students studying computer science,
              engineering, physics, and gaining work experience through placements,
              projects, and internships.
            </p>
            <p className="text-white text-base md:text-lg font-alliance">
              We operate on a Talent-as-a-Service basis. Tap into our network of
              brilliant students to develop your products, promote your company,
              and hire top-notch graduate talent.
            </p>
            <button>
              <div className="bg-[#DE4321] w-60 py-3 px-6 md:py-5 md:px-10 text-white font-alliance">
                <p className="text-white">Access our Network</p>
              </div>
            </button>
          </div>
          <div className="flex flex-col md:basis-1/2">
            {/* Add content for the right side if needed */}
          </div>
        </div>
      </div>   
    );
  }

{/* STATISTICS SECTION */}
function StatsSection() {
    return (
      <div className="whitesections flex flex-row gap-x-10 justify-center px-10 py-20">
        <div className="flex flex-col gap-y-2 justify-start p-8 bg-white">
          <p className="font-alliance text-2xl">2000+</p>
          <p className="font-alliance">STEM students <br/> in the United Kingdom</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-start p-8 bg-white">
          <p className="font-alliance text-2xl">8+</p>
          <p className="font-alliance">Projects completed in <br/> under one year</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-start p-8 bg-white">
          <p className="font-alliance text-2xl">Started in</p>
          <p className="font-alliance">September 2022</p>
        </div>
      </div>
    )
}

{/* WHAT WE CAN BRING SECTION */}
function SolutionsSection({ solutionsRef }) {
    return (
      <div ref={solutionsRef} className="flex flex-col whitesections gap-y-20 justify-center px-10 py-20 md:pb-40 md:pt-20">
        <div className="">
          <p className="text-3xl md:text-6xl font-alliance text-center">
            How we help <strong>you</strong> and <strong>your business</strong>
          </p>
        </div>
        <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-5 justify-center">
          <div id="mainDiv" className="flex boxItem flex-col gap-y-5 bg-white w-full md:w-1/3">
            {/* TEAM */}
            <div className="overflow-hidden hoveredSolution transition-basis ease-in-out duration-300">
              <img src={rocket}/>
            </div>
            <p className="text-xl font-alliance hoveredText px-10">Build your teams remotely</p>
            <p className="font-alliance px-10">
              Hire developers part-time to work in your company with a fixed
              day-rate.
            </p>
          </div>
  
          <div id="mainDiv" className="flex flex-col rounded boxItem gap-y-5 bg-white w-full md:w-1/3">
            {/* PRODUCT */}
            <div className="p-5 rounded-lg hoveredSolution transition-basis ease-in-out duration-300">

            </div>
            <p className="text-xl font-alliance hoveredText px-10">Product Development</p>
            <p className="font-alliance px-10">
              Hire developers part-time to work in your company with a fixed
              day-rate.
            </p>
          </div>
  
          <div id="mainDiv" className="flex flex-col rounded boxItem gap-y-5 bg-white p-10 w-full md:w-1/3">
            {/* GRADUATE */}
            <div className="p-5 rounded-lg hoveredSolution transition-basis ease-in-out duration-300">

            </div>
            <p className="text-xl font-alliance hoveredText">Hire top graduate talent</p>
            <p className="font-alliance ">
              Hire developers part-time to work in your company with a fixed
              day-rate.
            </p>
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
              "I joined Karter to utilize the data analytical skills I have
              developed over my current internship and apply these skills to have
              a rewarding impact on clients. Working with Karter has enabled me to
              gain client exposure and subsequently improve my client management
              skills."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500">
              <cite className="pr-3 font-medium text-gray-900">
                Abhirup
              </cite>
              <cite className="pl-3 text-sm text-gray-500">
                Student at the University of Birmingham
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
        <p className="text-white text-3xl md:text-4xl font-alliance font-bold">
          Interested in working with / joining us?
        </p>
        <p className="text-white text-md md:text-xl font-alliance">
          Click the <strong>button</strong> below, fill the <strong>short form</strong>{" "}
          and we will <strong>get back to you shortly</strong>:
        </p>
        <div className="bg-[#DE4321] py-3 px-6 md:py-5 md:px-10 text-white font-alliance">
          <button>
            <a href="/contact">Contact us</a>
          </button>
        </div>
      </div>
    );
  }
  