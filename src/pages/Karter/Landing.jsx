import React, { useRef, useState, useEffect } from "react";
import '../Home.css'
import ScrollTrigger from "react-scroll-trigger";
import axios from 'axios';
import Lottie from 'lottie-react';
import loadingAnimation from "../../assets/Loader-[remix].json"
import './Landing.css'
import { motion } from "framer-motion";


export default function KarterLandingPage() {

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
            <FindTalentSection />
        </div>
    )
}

{/* COOL MAP SECTION */}

function FindTalentSection() {
    const [inputText, setInputText] = useState('');
    const textareaRef = useRef(null);

    const [talents, setTalents] = useState([]);
    const [doWeHaveTalents, setDoWeHaveTalents] = useState(false);
  

    useEffect(() => {
      const textarea = textareaRef.current;
      textarea.style.height = '1.5em';
      textarea.style.height = textarea.scrollHeight + 'px';
    }, [inputText]);
  
    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const FindDevelopers = async () => {
        const component = document.querySelector('.component-container');
        component.classList.add('animated-border');
        axios.post("http://127.0.0.1:8000/karter/api/talents/search", {
            "prompt": inputText
        }).then(response => {
            setTalents(response.data.output_talents);
            setDoWeHaveTalents(true);
            console.log(response.data);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setIsLoading(false); 
            component.classList.remove('animated-border');
        });
    }
    
    
    return (
        <div className="relative group">
            <div className="mapItem flex p-10 flex-col items-center h-auto md:h-[600px] md:gap-x-3 md:py-20 md:px-60">
                <div className="component-container flex flex-col gap-y-5 md:gap-y-10 p-5 md:p-14 justify-center items-center border-2 border-gray w-auto md:w-[800px] rounded-lg bg-white/30 backdrop-blur-md">
                    {/* <LottieAnimation play={playAnimation} className="w-[500px]"/> */}
                    <p className="font-alliance text-2xl md:text-4xl mx:px-8 font-semibold">Hire student developers in a few clicks:</p>
                    <p className="font-alliance text-lg md:text-xl mx:px-8 ">Find top talent by describing your ideal candidate and thanks to our AI-powered search algorithm.</p>
                    <textarea
                        ref={textareaRef}
                        className="w-full border rounded-lg p-2 resize-none overflow-hidden"
                        value={inputText}
                        onChange={handleChange}
                        rows={1}
                        placeholder="Type your description here ..."
                    />
                    <button class="buttonWOW2" onClick={FindDevelopers}>
                        <p className="font-alliance text-lg">
                            Find Developers
                        </p> 
                    </button>

                </div>
            </div>
            {doWeHaveTalents && 
            <div className="px-20 py-10 flex flex-row justify-center items-center">
                <div className="basis-1/2">

                </div>
                <div className="basis-1/2">
                    <div className="grid grid-cols-2 gap-4">
                        {talents.map(talent => (
                            <TalentBox first_name={talent.first_name} university={talent.university.name}/>
                        ))}
                    </div>
                </div>
            </div>
            }

        </div>
    );
}


function TalentBox({first_name, university}){
    return (
        <div className="flex flex-col rounded bg-white justify-center items-center border border-gray p-5">
            <p>{first_name}</p>
            <p>{university}</p>
        </div>
    )
}