import React from 'react'
import Label from '../StyledComponents/Label'
import InnerContainer from '../StyledComponents/InnerContainer'

export default function HDCheckbox(props) {
    const { setWantsHD } = props

    const handleChange = e => {
        setWantsHD(e.target.checked)
    }

    return (
        <InnerContainer>
            <Label htmlFor="hd-checkbox">
                Do you want HD images when available? <br/> (Not reccommended for slow internet)
            </Label>
            <input type="checkbox" id="hd-checkbox" name="hd-checkbox" onChange={handleChange}></input>
        </InnerContainer>
    )
}