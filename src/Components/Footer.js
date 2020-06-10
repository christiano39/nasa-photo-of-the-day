import React from 'react'

export default function Footer(props) {
    const { date, description } = props
    
    return (
        <div className="footer">
            <time className='date'>{date}</time>
            <p className='description'>{description}</p>
        </div>
    )
}