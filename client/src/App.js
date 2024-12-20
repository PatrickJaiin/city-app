import React, { useState } from "react";
import './App.css';
import interior from './interiors_site.png';
import exterior from './exterior_site.png';
import chat from './chat1.png'
import Draggable from 'react-draggable'; 

function App() {
  const handleInteriorClick = () => {
    // Replace this with your desired logic for the interior button
    console.log('Interior button clicked!'); 
  };

  const handleExteriorClick = () => {
    // Replace this with your desired logic for the exterior button
    console.log('Exterior button clicked!');
  };

  const [showSpotify, setShowSp] = useState(false);

  function hideSp(){
    setShowSp(false);
  }

  function showSp(){
    setShowSp(true);
  } // This closing brace was missing

  return (
    <div className="">
      <Draggable>
        <div 
          style={{ display: showSpotify ? "block" : 'none' }} 
          className="h-[69%] w-[81%] bg-gray-800 opacity-91 rounded-3xl absolute"
        >
          <div className="h-[6%] bg-gray-700 rounded-t-3xl flex">
            <button 
              className="ml-[5%] mt-[1.5%] w-5 h-5 bg-red-800 rounded-full" 
              onClick={hideSp} 
            />
            <button className="ml-[2%] mt-[1.5%] w-5 h-5 bg-orange-600 rounded-full" />
            <button className="ml-[2%] mt-[1.5%] w-5 h-5 bg-green-700 rounded-full" />
          </div>
          <img src={chat} alt="chat" /> 
        </div>
      </Draggable>

      {/*heading*/}
      <div className="flex justify-around mt-10">
        <a className=" hover:animate-bounce">DesignGPT</a>
        <nav className="flex-row">
          <a className="pr-20">About</a>
          <a className="">Dashboard</a>
        </nav>
      </div>
      <div className="flex w-screen justify-evenly mt-[3%]">
        <div className="border-2 w-1/3 rounded-2xl">
          <button onClick={() => showSp()}> 
            <img src={interior} alt="Interior Design" /> 
          </button>
        </div>
        <div className="border-2 w-1/3 rounded-2xl">
          <button onClick={() => showSp()}>
            <img src={exterior} alt="Exterior Design" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;