import React from 'react';
import './App.css';
import { useState } from 'react';
import {BsTelephone} from 'react-icons/bs'

function App() {
  const [celnumber, setCelnumber]=useState('');
  const [data, setData]=useState('');
  const [valid, setValid]=useState('')
  const valueChange = (event) =>{
    setCelnumber(event.target.value)
  }
  const handleClick = () =>{
    fetch('https://api.api-ninjas.com/v1/validatephone?number='+ celnumber,
        {headers: {'X-Api-Key': '/49MvzZK96l4l3uyoXBPBA==zBegcro3P0xGlGFV'
          }
        })
  .then(response => response.json())
  .then(data => {setValid(data.is_valid)
               }

    )
  
  }
  return (
    <div className="App">
      
        <nav>Authephone<BsTelephone /></nav>
        <div className='body'>
        <p className='text'>Want to validate the cellphone or telephone number on your,you're in the right place</p>
        <div className='content'>
        <div className='content-input'>
        <label>Enter the phone number below
        <input type="text" 
        value={celnumber} 
        onChange={valueChange}
        placeholder='eg. +27607017420'
        ></input></label>
        <button onClick={handleClick}>Validate</button>
        </div>
        <div className='results'>
          <p>Valid:{valid}</p>
          <p>country:</p>
          <p>Int.number:</p>
          <p>local number:</p>
          <p>Region:</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
