import React, { useState, useEffect } from "react";
import "./reset.css"
import "./general.css"
import "./App.css";
import { API_KEY } from './apiKey'
import axios from 'axios'
import APODContainer from './Components/APODContainer'
import DatePicker from './Components/DatePicker'

function App() {
  const getToday = () => {
    const pad = (num) => {
      num = num.toString()
      return num.length < 2 ? pad('0' + num) : num
    }
    const today = new Date()
    const year = today.getFullYear()
    const month = pad(today.getMonth() + 1)
    const day = pad(today.getDate())
    return `${year}-${month}-${day}`
  }
  
  const [potd, setPOTD] = useState(null)
  const [date, setDate] = useState(getToday())
  

  useEffect(() => {
    const fetchData = () => {
      axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`)
      .then(response => {
        setPOTD(response.data)
      })
      .catch(err => {
        console.log(`Error: ${err}`)
      })
    }
    fetchData()
  }, [date])
  
  return (
    <div className="App">
      <h1 className="page-title">NASA Astronomical Photo of the Day</h1>
      <APODContainer potd={potd}/>
      <DatePicker setDate={setDate} date={date} today={getToday}/>
    </div>
  );
}

export default App;
