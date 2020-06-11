import React from 'react'
import './Footer.css'
import Date from '../StyledComponents/Date'

export default function Footer(props) {
    const { date, description } = props
    
    return (
        <div className="footer">
            <Date className='date'>{date}</Date>
            <p className='description'>{description}</p>
        </div>
    )
}