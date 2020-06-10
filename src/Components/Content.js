import React from 'react'

export default function Content(props) {
    const { imgSrc, title, author } = props
    
    return (
        <div className="content">
            <img src={imgSrc} alt={`${title}, taken by ${author}`}/>
        </div>
    )
}