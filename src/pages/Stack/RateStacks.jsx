import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import CardStack from '../../components/CardStack';
import Card from '../../components/Card';


export default function RateStacks(){

    const [stacks, setStacks] = useState([]);
    useEffect(() => {
        axios.post(
            "http://127.0.0.1:8000/stacks/api/stacks",
        )
        .then(response => {
            setStacks(response.data.stacks);
            console.log(stacks)
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <div className='flex flex-col bg-[#F6F9FC] justify-center h-[350px] items-center'>
            <h1 className='text-2xl font-semibold font-alliance'>discover and rate these stacks</h1>
            <p className='font-alliance mb-5'>maybe you'll get some inspiration</p>
            <CardStack cards={stacks} />
        </div>
    )
}