import React, { useState, useEffect } from "react";
import "./App.css";
import { apiKey } from './APIKey'
import axios from 'axios'
import APODContainer from './Components/APODContainer'

function App() {
  const [potd, setPOTD] = useState()

  useEffect(() => {
    const fetchData = () => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => {
        setPOTD(response.data)
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <h1>NASA Astronomical Photo of the Day</h1>
      <APODContainer potd={potd}/>
    </div>
  );
}

export default App;
