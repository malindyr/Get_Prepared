import { useState, useEffect } from "react";
import React from 'react'
import Names from "./Names";


const Example = () => {

    const [inputA, setInputA] = useState('');
    const [inputB, setInputB] = useState('');
    const [namesA, setNamesA] = useState([])

    const handleChange = (e) => {
        setInputA(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setNamesA([...namesA, inputB])
        
    }

    useEffect(() => {
        console.log(namesA); // Logs the updated array after state changes
      }, [namesA]);


  return (
    <>
        <input type="text" 
            onChange={handleChange}/>

    <form onSubmit={onSubmit}>
        <input type="text"
            onChange={(e) => setInputB((e.target.value))}/>

            <div>{inputA}</div>
            <div>{inputB}</div>

            <button type="submit">submit</button>
    </form>

        <ul>
            {Names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
    </>
  )
}

export default Example