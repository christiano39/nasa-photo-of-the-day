import React, { useState, useEffect } from "react";
import "./App.css";
import { apiKey } from './APIKey'
import axios from 'axios'

function App() {
  const [potd, setPOTD] = useState()

  useEffect(() => {
    // axios
    //   .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    //   .then(response => {
    //     console.log(response)
    //     setPOTD(response.data)
    //   })
    //   .catch(err => {
    //     console.log(`Error: ${err}`)
    //   })
  }, [])
  
  return (
    <div className="App">
      <h1>NASA Astronomical Photo of the Day</h1>
    </div>
  );
}

export default App;
