import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useMemo } from 'react';
import Forms2 from './form2.js';
import axios from 'axios';

function App() {

  const [data, setData] = useMemo(() => {},[]);

    useEffect(() => {
      fetch('/weather').then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    },[data])
  
const [title, setTitle] = useState("");
// function makePostRequest(path, title) {
//     axios.post(path, { name: title }).then(
//         (response) => {
//             var result = response.data;
//             console.log(result);
//         },
//         (error) => {
//             console.log(error);
//         }
//     );
// }
function HandleClick() {
// Send data to the backend via POST
    fetch('/weather', { 
    method: 'POST', 
    mode: 'no-cors', 
    body: JSON.stringify({title: title}),
   })
  }
  return (
    <div className=''>
      {/*heading*/}
      <div className='flex justify-around'>
        <a className=''>Shiv Gupta</a>
        <nav className = ' flex-row'>
          <a className=' pr-20'>About</a>
          <a className=''>Dashboard</a>
        </nav>      
      </div>
      <div className='mt-6'>
        <div className='flex justify-center text-xs'>Search for a city</div>
        <div>
            <input 
                placeholder="movie title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type='submit' onClick={HandleClick}>Submit</button>
            <button type='submit' onClick={App}>Refresh</button>
        </div>
      </div>
      <div className='flex'>
      {/*weather block*/
      <div className=' bg-black ml-9 mt-[20%] p-3 rounded-md text-red-50'>City: {data.city}<br/>Temperature:  {data.temperature}<br/>Humidity: {data.humidity}<br/>Description: {data.description}</div>
      }
      </div>
    </div>
  );
}
export default App;
