import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense, useState, useEffect, useMemo } from 'react';

function App() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [URL, setURL] = useState("");
  const [data, setData] = useState({})

    useEffect(() => {
      fetch('/weather').then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [title])

    useEffect(() => {
      fetch('/map').then(
        res => res.json()
      ).then(
        data => {
          setURL(data)
          console.log(data)
        }
      )
    }, [title])
    
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
    body: JSON.stringify({title: text}),
   })
  }
function update(){
  HandleClick();
  setTitle(text);
  console.log(title);
}
function HandleSubmit() {
  HandleClick();
  update();
}

  return (
    <div className=''>
      {/*heading*/}
      <div className='flex justify-around'>
        <a className=' hover:animate-bounce'>Shiv Gupta</a>
        <nav className = ' flex-row'>
          <a className=' pr-20'>About</a>
          <a className=''>Dashboard</a>
        </nav>      
      </div>
      <div className=''>
        <div className='flex justify-between mt-[3%]'>
        {
        /*map block*/
        <div className=' ml-3'>
          <img width="250" height="150" src={URL.address}></img>
        </div>
        }
        <div className= 'w-full'>
          <div className='border border-black rounded-md p-2 w-[50%] ml-3 flex justify-around hover:animate-bounce '>
            <input 
                className=' w-[80%]'
                placeholder="Search for a city"
                value={text}
                onChange={e=>setText(e.target.value)}
            />
            <button type='submit' onClick={update} className=''>Submit</button>
         </div>
          {/*weather block*/
          <div className=' bg-black ml-9 mt-[3%] p-3 rounded-md text-red-50 w-[20%]'>City: {data.city}<br/>Temperature:  {data.temperature}°C<br/>Humidity: {data.humidity}%<br/>Description: {data.description}</div>
          }
        </div>
      </div>
    </div>
  </div>
  );
}
export default App;
