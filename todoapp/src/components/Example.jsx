import { useState } from "react";
import React from 'react'
import Names from "./Names";


const Example = () => {

    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');

    const handleChange = (e) => {
        setInputA(e.target.value);
    }

    const getNames = () => {

    }

  return (
    <>
        <input type="text" 
            onChange={handleChange}/>

        <input type="text"
            onChange={(e) => setInputB((e.target.value))}/>

            <div>{inputA}</div>
            <div>{inputB}</div>

        <ul>
            {Names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    </>
  )
}

export default Example