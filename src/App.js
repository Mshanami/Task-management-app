import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import 'animate.css';
import {BsTelephone} from 'react-icons/bs'

function App() {
  const [tasks,setTasks] = useState([]);
  const [taskinput, setTaskinput]=useState('');
  const [emptyInput, setEmptyInput]=useState(true);

  const today = new Date();
  const dayOfWeek = today.toLocaleString('default', {weekday : 'long'});
  const date = today.toLocaleString('default',{ day: 'numeric', month: 'long'});

  const handleChange = (event) =>{
    const value=event.target.value
    setTaskinput(value);
    setEmptyInput(value === '')
    
  };
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setTasks([...tasks, taskinput]);
    setTaskinput('')
    console.log(taskinput);
  }
  const handleDone = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = <span style={{ textDecoration: 'line-through' }}>{prevTasks[index]}</span>;
      return updatedTasks;
    });
  };
  const handleDelete = (index) =>{
    const updatedTasks=[...tasks];
    updatedTasks.splice(index, tasks.length);
    setTasks(updatedTasks);

    console.log('Deleted')
  
  }

  return (
    <div className='App'>
    <h2>Easy Way To Manage Your Daily Tasks.</h2>
    
   <div className='task'>
    <p className='date'>{dayOfWeek} {date}</p>
    <form onSubmit={handleSubmit}>
      <input type='text'
       value={taskinput}
       onChange={handleChange}
       placeholder='add your task here....'
       required
        />
        <button type="submit" disabled={emptyInput} className={emptyInput? "disabled-button":""} >Add task</button>

        </form>
        
        <ul>
      {tasks.map((task,index) => <li key={index}>{task}
      <button className='done' onClick={() => handleDone(index)}>Done</button>
      </li>)}
      {tasks.length > 0 ?<button className='remove'  onClick={handleDelete}>Clear tasks</button> : <div></div>}
      
      </ul>
      
    </div>
    <h2 className='animate__animated animate__fadeOutDown'>Wishing you a productive day</h2>
    </div>
  );
}

export default App;
