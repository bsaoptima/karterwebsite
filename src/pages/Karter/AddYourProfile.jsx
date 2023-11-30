import React, { Fragment, useRef, useState, useEffect } from "react";
import axios from 'axios';
import emailjs from 'emailjs-com'
import '../Home.css'
import { AnimatePresence, motion } from "framer-motion";
import { Datepicker, Dropdown, Label, Textarea } from 'flowbite-react';
import CoolButton from "../../components/CoolButton";
import { TypeAnimation } from 'react-type-animation';


export default function AddYourProfile(){
    return(
        <div className="relative scroll-smooth">
            <SteppedProgress />
        </div>
    )
}


function SteppedProgress(){
    //Track at which step we are at
    const [stepsComplete, setStepsComplete] = useState(0);

    //This will log the profile data to be sent out to the backend
    const [profileData, setProfileData] = useState({
        basicDetails: {},
        education: [],
        experience: [],
    })

    const updateProfileData = (section, data) => {
        setProfileData(prev => ({ ...prev, [section]: data}));
    }
    
    const numSteps = 4;
    const stepsContents = [
        <BasicDetails profileData={profileData} updateProfileData={updateProfileData}/>,
        <Education profileData={profileData} updateProfileData={updateProfileData}/>,
        <Experience profileData={profileData} updateProfileData={updateProfileData}/>,
        <CompleteProfile />,
    ]
    const handleSetStep = (num) => {
        if (
        (stepsComplete === 0 && num === -1) ||
        (stepsComplete === numSteps && num === 1)
        ) {
        return;
        }

        setStepsComplete((pv) => pv + num);
    };

    const handleRegisterProfile = () => {
       console.log(profileData)
    };

    return (
        <div className="px-4 py-14">
            <div className="p-8 bg-white/30 backdrop-blur-md border-2 shadow-lg rounded-md w-full max-w-2xl mx-auto">
                <Steps numSteps={numSteps} stepsComplete={stepsComplete} />
                <div className="p-2 my-6 bg-gray-100 border-2 border-dashed border-gray-200 rounded-lg">
                    {stepsContents[stepsComplete]}
                </div>
                <div className="flex items-center justify-end gap-2">
                    <button
                        className="px-4 py-1 rounded hover:bg-gray-100 text-black"
                        onClick={() => handleSetStep(-1)}
                    >
                        Prev
                    </button>
                    {stepsComplete === numSteps - 1 ? (
                        <CoolButton onClick={handleRegisterProfile}/>
                    ) : (
                        <button
                            className="px-4 py-1 rounded bg-black text-white"
                            onClick={() => handleSetStep(1)}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
  
const Steps = ({ numSteps, stepsComplete }) => {
    const stepArray = Array.from(Array(numSteps).keys());

    return (
        <div className="flex items-center justify-between gap-3">
        {stepArray.map((num) => {
            const stepNum = num + 1;
            const isActive = stepNum <= stepsComplete;
            return (
            <React.Fragment key={stepNum}>
                <Step num={stepNum} isActive={isActive} />
                {stepNum !== stepArray.length && (
                <div className="w-full h-1 rounded-full bg-gray-200 relative">
                    <motion.div
                    className="absolute top-0 bottom-0 left-0 bg-indigo-600 rounded-full"
                    animate={{ width: isActive ? "100%" : 0 }}
                    transition={{ ease: "easeIn", duration: 0.3 }}
                    />
                </div>
                )}
            </React.Fragment>
            );
        })}
        </div>
    );
};
  
const Step = ({ num, isActive }) => {
    return (
        <div className="relative">
            <div
                className={`w-10 h-10 flex items-center justify-center shrink-0 border-2 rounded-full font-semibold text-sm relative z-10 transition-colors duration-300 ${
                isActive
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-gray-300 text-gray-300"
                }`}
            >
            <AnimatePresence mode="wait">
            {isActive ? (
                <motion.svg
                key="icon-marker-check"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1.6em"
                width="1.6em"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.125 }}
                >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                </motion.svg>
            ) : (
                <motion.span
                key="icon-marker-num"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.125 }}
                >
                {num}
                </motion.span>
            )}
            </AnimatePresence>
        </div>
        {isActive && (
            <div className="absolute z-0 -inset-1.5 bg-indigo-100 rounded-full animate-pulse" />
        )}
        </div>
    );
};


function BasicDetails({ profileData, updateProfileData }){
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        updateProfileData('basicDetails', { ...profileData.basicDetails, [name]: value})
    }
    return(
        <div className="flex flex-col justify-center items-start p-10 gap-y-5">
            <p className="font-alliance text-xl md:text-2xl font-semibold">Let's start with some personal details:</p>
            <div className="flex flex-col gap-y-5 gap-x-5 md:flex-row justify-center items-center">
                <div className="">
                    <label
                      htmlFor="password-input"
                      className="mb-1 inline-block text-sm font-alliance"
                    >
                      First Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="firstName" 
                      onChange={handleInputChange} 
                      value={profileData.basicDetails.firstName || ''}
                      placeholder="Enter your first name..."
                      className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                      required
                    />
                </div>
                <div className="">
                    <label
                      htmlFor="password-input"
                      className="mb-1 inline-block text-sm font-alliance"
                    >
                      Last Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      name="lastName" 
                      onChange={handleInputChange} 
                      value={profileData.basicDetails.lastName || ''}
                      placeholder="Enter your last name..."
                      className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                    />
                </div>
            </div>
            <div className="w-full">
                <label
                    htmlFor="password-input"
                    className="mb-1 inline-block text-sm font-alliance"
                >
                    LinkedIn<span className="text-red-600">*</span>
                </label>
                <input
                    name="linkedin" 
                    onChange={handleInputChange} 
                    value={profileData.basicDetails.linkedin || ''}
                    placeholder="linkedin.com/in/{your_account}/"
                    className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                />
            </div>
            <div className="w-full">
                <label
                    htmlFor="password-input"
                    className="mb-1 inline-block text-sm font-alliance"
                >
                    Github
                </label>
                <input
                    name="github" 
                    onChange={handleInputChange} 
                    value={profileData.basicDetails.github || ''}
                    placeholder="github.com/{your_account}/"
                    className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                />
            </div>
            <div className="w-full">
                <label
                    htmlFor="password-input"
                    className="mb-1 inline-block text-sm font-alliance"
                >
                    Website
                </label>
                <input
                    name="website" 
                    onChange={handleInputChange} 
                    value={profileData.basicDetails.website || ''}
                    placeholder="..."
                    className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                />
            </div>
        </div>
    )
}

function Education({ profileData, updateProfileData }){
    // const [educations, setEducations] = useState([]);
    // const addEducation = () => {
    //     setEducations([...educations, {}]);
    // };

    const addEducation = () => {
        const newEducations = [ ...profileData.education, {}];
        updateProfileData('education', newEducations);
    }

    const updateEducation = (index, newEducation) => {
        const newEducations = profileData.education.map((edu, i) => i === index ? newEducation: edu);
        updateProfileData('education', newEducations);
    }

    const deleteEducation = (index) => {
        const newEducations = profileData.education.filter((_, i) => i !== index);
        updateProfileData('education', newEducations);
    };

    const handleInputChange = (index, fieldName, value) => {
        const updatedItem = { ...profileData.education[index], [fieldName]: value };
        updateEducation(index, updatedItem);
    };

    return(
        <div className="flex flex-col justify-center items-start p-10 gap-y-5">
            <p className="font-alliance text-xl md:text-2xl font-semibold">Tell us about your education:</p>
            
            {profileData.education.map((education, index) => (
                <div key={index} className="w-full flex flex-col justify-start items-start gap-y-5">
                    <div className="w-full">
                        <label
                            htmlFor="password-input"
                            className="mb-1 inline-block text-sm font-alliance"
                        >
                            University
                        </label>
                        <input
                            type="text"
                            value={education.university || ''}
                            onChange={(e) => handleInputChange(index, 'university', e.target.value)}
                            placeholder="Enter your university..."
                            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                            required
                        />
                        
                    </div>
                    <div className="w-full">
                        <label
                            htmlFor="password-input"
                            className="mb-1 inline-block text-sm font-alliance"
                        >
                            Degree (Level + Topic)
                        </label>
                        <input
                            type="text"
                            value={education.degree || ''}
                            onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                            placeholder="BSc Keeping it lemon..."
                            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                            required
                        />
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-5">
                        
                    {/* <div className="flex flex-row gap-x-5 justify-center items-center">
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <p className="inline-block text-sm font-alliance">Start Date</p>
                            <Datepicker />
                        </div>
                        <p className="mt-6 inline-block text-sm font-alliance">to</p>
                        <div className="flex flex-col justify-start items-start gap-y-2">
                            <p className="inline-block text-sm font-alliance">End Date</p>
                            <Datepicker />
                        </div>
                    </div> */}

                    </div>
                    <button 
                        onClick={() => deleteEducation(index)}
                        className="mt-2 mb-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}

            <button 
                onClick={addEducation} 
                className="cursor-pointer w-full transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
                Add Education
            </button>
        </div>
    )
}

function Experience({ profileData, updateProfileData }){
    // const [experiences, setExperiences] = useState([]);
    // const addExperience = () => {
    //     setExperiences([...experiences, {}]);
    // };
    // const deleteExperience = (index) => {
    //     const newExperiences = experiences.filter((_, idx) => idx !== index);
    //     setExperiences(newExperiences);
    // };


    const addExperience = () => {
        const newExperiences = [ ...profileData.experience, {}];
        updateProfileData('experience', newExperiences);
    }

    const updateExperience = (index, newExperience) => {
        const newExperiences = profileData.experience.map((edu, i) => i === index ? newExperience: edu);
        updateProfileData('experience', newExperiences);
    }

    const deleteExperience = (index) => {
        const newExperiences = profileData.experience.filter((_, i) => i !== index);
        updateProfileData('experience', newExperiences);
    };

    const handleInputChange = (index, fieldName, value) => {
        const updatedItem = { ...profileData.experience[index], [fieldName]: value };
        updateExperience(index, updatedItem);
    };

    const handleSelectChange = (index, value) => {
        const updatedItem = { ...profileData.experience[index], employmentType: value };
        updateExperience(index, updatedItem);
    };

    const handleTextareaChange = (index, value) => {
        const updatedItem = { ...profileData.experience[index], description: value };
        updateExperience(index, updatedItem);
    };

    return(
        <div className="flex flex-col justify-center items-start p-10 gap-y-5">
            <p className="font-alliance text-xl md:text-2xl font-semibold">Now your professional experiences:</p>
            
            {profileData.experience.map((experience, index) => (
                <div key={index} className="w-full flex flex-col justify-start items-start gap-y-5">
                    <div className="flex flex-row justify-center items-center gap-x-5">
                        <div className="w-full">
                            <label
                                htmlFor="password-input"
                                className="mb-1 inline-block text-sm font-alliance"
                            >
                                Employer
                            </label>
                            <input
                                type="text"
                                value={experience.employer || ''}
                                onChange={(e) => handleInputChange(index, 'employer', e.target.value)}
                                placeholder="Employer's name..."
                                className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="password-input"
                                className="mb-1 inline-block text-sm font-alliance"
                            >
                                Location
                            </label>
                            <input
                                type="text"
                                value={experience.location || ''}
                                onChange={(e) => handleInputChange(index, 'location', e.target.value)}
                                placeholder="Ex: London, UK..."
                                className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-x-5">
                        <div className="w-full basis-1/2">
                            <label
                                htmlFor="password-input"
                                className="mb-1 inline-block text-sm font-alliance"
                            >
                                Role
                            </label>
                            <input
                                type="text"
                                value={experience.role || ''}
                                onChange={(e) => handleInputChange(index, 'role', e.target.value)}
                                placeholder="What was your title..."
                                className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
                                required
                            />
                        </div>
                        <div className="w-full basis-1/2">
                            <label
                                htmlFor="password-input"
                                className="mb-1 inline-block text-sm font-alliance"
                            >
                                Employment Type
                            </label>
                            <select id="types" value={experience.employmentType || ''} onChange={(e) => handleSelectChange(index, e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                                <option selected>Choose an option</option>
                                <option value="FT">Full-time</option>
                                <option value="PT">Part-time</option>
                                <option value="IN">Internship</option>
                                <option value="CO">Contract</option>
                            </select>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-y-2">
                        <p className="inline-block text-sm font-alliance">Description</p>
                        <Textarea id="comment" value={experience.description || ''} onChange={(e) => handleTextareaChange(index, e.target.value)} placeholder="Talk about your role. Avoid using bullet point characters..." required rows={4} />
                    </div>

                    <button 
                        onClick={() => deleteExperience(index)}
                        className="mt-2 mb-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            ))}

            <button 
                onClick={addExperience} 
                className="cursor-pointer w-full transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
            >
                Add Experience
            </button>
        </div>
    )
}

function CompleteProfile(){
    return(
        <div className="flex flex-col w-full justify-center items-center gap-y-10 p-10">
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                'Thank you for your details.',
                5000,
                ]}
                speed={50}
                className="text-3xl font-alliance font-semibold text-center"
            />
            <p className="font-alliance text-center">Your Karter profile is now under review by our team. We will let you know when you can start earning!</p>
        </div>
    )
}