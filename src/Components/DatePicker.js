import React, { useEffect } from 'react'

export default function DatePicker(props){
    
    const { setDate, date } = props

    const handleChange = (e) => {
        console.log(e.target.value)
        setDate(e.target.value)
    }
   
    
    return (
        <div>
            <label htmlFor="date-picker">Choose date:</label>
            <input type="date" id="date-picker" name="date-picker"
                   value={date}
                   min="1995-06-15" max="2020-06-10"
                   onChange={handleChange} />
        </div>
    )
}