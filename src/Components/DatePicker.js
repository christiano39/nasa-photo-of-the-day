import React from 'react'
import './DatePicker.css'

export default function DatePicker(props){
    
    const { setDate, date, today } = props

    const handleChange = (e) => {
        setDate(e.target.value)
    }
   
    
    return (
        <div className='date-picker-container'>
            <label htmlFor="date-picker">Choose date:</label>
            <input type="date" id="date-picker" name="date-picker"
                   value={date}
                   min="1995-06-16" max={today()}
                   onChange={handleChange} />
        </div>
    )
}