import { useState } from "react";
import React from 'react'


const Example = () => {

    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');

    const handleChange = (e) => {
        setInputA(e.target.value);
    }

  return (
    <>
        <input type="text" 
            onChange={handleChange}/>

        <input type="text"
            onChange={(e) => setInputB((e.target.value))}/>

            <div>{inputA}</div>
            <div>{inputB}</div>
    </>
  )
}

export default Example