import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import {BsTelephone} from 'react-icons/bs'

function App() {
  const [sports,setSports] = useState([]);
  const [spoinput, setSpoinput]=useState('');
  const handleChange = (event) =>{
    setSpoinput(event.target.value);
    
  };
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    setSports([...sports, spoinput]);
    setSpoinput('')
    console.log(spoinput);
  }
  const handleDelete = (index) =>{
    const updatedSports=[...sports];
    updatedSports.splice(index, 1);
    setSports(updatedSports);

    console.log('Deleted')
  
  }

  return (
    <div className='App'>
    <h2>What to do today?</h2>
   <div className='task'>
    <form onSubmit={handleSubmit}>
      <input type='text'
       value={spoinput}
       onChange={handleChange}
       placeholder='add your task here....'
       required
        />
       <button type="submit">Add task</button>

        </form>
        
        <ul>
      {sports.map((sport,index) => <li key={index}>{sport}
      
      </li>)}
      <button className='remove' onClick={handleDelete}>Clear tasks</button>
      </ul>
      
    </div>
    </div>
  );
}

export default App;
