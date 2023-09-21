import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import classnames from 'classnames'

export default function AddStack(){

    {/* API CALLS */}
    const [Frameworks, setFrameworks] = useState({
        query: '',
        list: []
    });
    const getFrameworks = async () => {
        axios.post(
            "http://127.0.0.1:8000/stacks/api/frameworks",
            )
            .then(response => {
                setFrameworks({
                    list: response.data.frameworks
                });
            })
            .catch(error => {
                console.error(error);
            })
    };

    const createStack = () => {

        const allFrameworks = fe_frameworks.map(framework => framework.id)
            .concat(be_frameworks.map(framework => framework.id))
            .concat(ci_frameworks.map(framework => framework.id))
            .concat(ho_frameworks.map(framework => framework.id));

        axios.post(
            "http://127.0.0.1:8000/stacks/api/stacks/add",
            {
                creator: inputValue,
                frameworks: allFrameworks,
                explanation: explanationValue,
            }
            ).then(response => {
                console.log(response)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const [stackCreated, setStackCreated] = useState(false);
    const confirmAddStack = () => {
        setStackCreated(true);
    }

    {/* TYPING STUFF */}
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const [explanationValue, setExplanationValue] = useState('')
    const handleExplanationChange = (event) => {
        setExplanationValue(event.target.value)
    }

    const [sectionNameValue, setSectionNameValue] = useState('');
    const handleNameInputChange = (event) => {
        setSectionNameValue(event.target.value)
    }

    const handleSearchFrameworkValue = (event) => {
        const results = Frameworks.list.filter(framework => {
            if (event.target.value === "") return Frameworks
            return framework.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setFrameworks({
            query: event.target.value,
            list: results
        })
    }


    {/* MODALS */}
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = async () => {
        await getFrameworks();
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    const handleContentClick = (event) => {
        event.stopPropagation();
    }

    {/* FRAMEWORK LISTS */}
    const [selectedFrameworks, setSelectedFrameworks] = useState([])
    const addFramework = (framework) => {
        setSelectedFrameworks(prevFrameworks => [...prevFrameworks, framework]);
    }
    const removeFramework = (framework) => {
        setSelectedFrameworks(prevFrameworks => prevFrameworks.filter(fw => fw !== framework));
    }

    const [dowehaveFrameworks, setdowehaveFrameworks] = useState(false);

    return (
        <div className='flex flex-col bg-[#F6F9FC] justify-center items-center'>
            <h1 className='text-2xl font-semibold font-alliance mb-2 mt-20'>create and add your stack:</h1>
            <p className='font-alli mb-5'>maybe someone will like it</p>

            {stackCreated
                ? <div className='flex flex-col justify-center items-center bg-[#1B2239] rounded-2xl p-5'>
                    <p className='text-white font-alliance'>item added!</p>
                </div>
                : <div className='flex flex-col justify-start items-start bg-[#1B2239] rounded-2xl p-5 gap-y-8'>
                    <div className='flex flex-row justify-start items-center gap-x-2'>
                        <p className='text-white font-alliance'>from:</p>
                        <input
                            type='text'
                            value={inputValue}
                            onChange={handleInputChange}
                            className='rounded-lg h-8 bg-[#010923] px-2 text-white font-alliance'
                            placeholder='(enter a name tag)'
                        />
                    </div>
                    {dowehaveFrameworks
                        ? <div></div>
                        : <div>
                            <button 
                            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg"
                            onClick={()=> {handleOpenModal();}}
                            >
                            add a section
                            </button>
                        </div>
                    }
                    
                    <div className='py-2 px-4 bg-white rounded-lg'>
                        <button className='text-[#1A2139] font-alliance text-center' onClick={() => {createStack();}}>
                            add your stack
                        </button>
                    </div>
                    
                </div>
            }

            
            {isModalOpen && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm' onClick={handleCloseModal}>
                    <div className='bg-[#1A2139] p-4 rounded-xl flex flex-col items-center' onClick={handleContentClick}>
                        <div className='flex flex-row justify-start items-center mb-8'>
                            <p className='text-white font-alliance'>section name:</p>
                            <input
                                type='text'
                                value={sectionNameValue}
                                onChange={handleNameInputChange}
                                className='ml-2 rounded-lg h-8 bg-[#010923] px-2 text-white font-alliance'
                                placeholder='(...)'
                            />
                        </div>
                        <h2 className='mb-2 text-white font-alliance'>select a framework:</h2>

                        <div class="mb-3">
                            <input
                                type='text'
                                value={Frameworks.query}
                                onChange={handleSearchFrameworkValue}
                                className='rounded-lg h-8 w-full bg-[#010923] px-2 text-white font-alliance'
                            />
                        </div>

                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 mb-2 items-center'>
                            {Frameworks.list.map(framework => (
                                <button
                                    key = {framework.name}
                                    className={classnames({
                                        selected: selectedFrameworks.includes(framework)
                                    })}
                                >
                                    <img 
                                        src={framework.icon} 
                                        width="40px" 
                                        height="50px"
                                        onClick={() => {
                                            if (selectedFrameworks.includes(framework)) {
                                                removeFramework(framework)
                                            } else {
                                                addFramework(framework)
                                            }
                                        }}
                                    />
                                    <span className="tooltip">{framework.name}</span>
                                </button>
                                
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}