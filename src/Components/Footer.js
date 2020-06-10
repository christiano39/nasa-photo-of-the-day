import React from 'react'

export default function Footer(props) {
    const { date, description } = props
    
    return (
        <div className="footer">
            <time>{date}</time>
            <p>{description}</p>
        </div>
    )
}