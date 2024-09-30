import { useState, useEffect } from "react";
import React from 'react'


const Example = () => {

    const [taskInput, setTasksInput] = useState('');
    const [finishTask, setFinishTask] = useState();
    const [tasks, setTasks] = useState([
            {name: 'Paint wall',
               id: 1,
               completed: false,
            },
            {name: 'Vacuum',
               id: 2,
               completed: false,
            },
            {name: 'Make lunch',
               id: 3,
               completed: false,
            }]);


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

    const doneTask = (e, id) => {

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
                <>
                <li key={task.id}><input type="checkbox" onclick={finishTask}/>
                 {task.name}, {(task.completed) ? 'done' : 'not done'}</li>
                
                </>
            ))}
        </ul>
    </>
  )
}

export default Example