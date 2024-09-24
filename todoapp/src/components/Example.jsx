import { useState, useEffect } from "react";
import React from 'react'


const Example = () => {

    const [taskInput, setTasksInput] = useState('');
    const [tasks, setTasks] = useState([])


    const onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            name: taskInput,
            completed: false,
        }
        setTasks([...tasks, newTask])
        setTasksInput('');       
    }

    useEffect(() => {
        console.log(tasks); // Logs the updated array after state changes
    }, [tasks]);
      

  return (
    <>

    <form onSubmit={onSubmit}>
        <input type="text"
            value={taskInput}
            onChange={(e) => setTasksInput((e.target.value))}/>

            <div>{taskInput}</div>

            <button type="submit">submit</button>
    </form>

        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.name}, {(task.completed) ? 'done' : 'not done'}</li>
            ))}
        </ul>
    </>
  )
}

export default Example