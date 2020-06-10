import React, { useState, useEffect } from "react";
import "./App.css";
import { apiKey } from './APIKey'

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    console.log(apiKey)
  }, [])
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
