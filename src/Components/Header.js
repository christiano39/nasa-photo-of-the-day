import React from 'react'

export default function Header(props) {
    const { title, author } = props
    
    return (
        <div className="header">
            <h2>{title}</h2>
            <p>{author}</p>
        </div>
    )
}