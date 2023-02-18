import react, { Component } from 'react';
import { useState } from 'react';
import { Form, Input, Rating, Button } from "semantic-ui-react";
import axios from 'axios';

function Cityname(){
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
function handleClick() {
// Send data to the backend via POST
    fetch('/weather', {  // Enter your IP address here
    method: 'POST', 
    mode: 'no-cors', 
    body: JSON.stringify({title: title}),
   },[])
    }

    return(
        <div>
            <input 
                placeholder="movie title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type='submit' onClick={handleClick}>Submit</button>
        </div>
    );
}
export default Cityname;
