import React from 'react'
import Label from '../StyledComponents/Label'
import InnerContainer from '../StyledComponents/InnerContainer'

export default function DatePicker(props){
    
    const { setDate, date, today } = props

    const handleChange = (e) => {
        setDate(e.target.value)
    }
   
    
    return (
        <InnerContainer justify="center" align="center" margin="2rem 0">
            <Label htmlFor="date-picker">Choose date:</Label>
            <input type="date" id="date-picker" name="date-picker"
                   value={date}
                   min="1995-06-16" max={today()}
                   onChange={handleChange} />
        </InnerContainer>
    )
}