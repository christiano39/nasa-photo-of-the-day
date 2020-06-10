import React from 'react'
import './Header.css'

export default function Header(props) {
    const { title, author } = props
    
    return (
        <div className="header">
            <h2 className='photo-title'>{title}</h2>
            {
                author
                    ? <p className='credit'>Photo by <span className='author'>{author}</span></p>
                    : <p className='credit'>Uncredited Photo</p>
            }
        </div>
    )
}