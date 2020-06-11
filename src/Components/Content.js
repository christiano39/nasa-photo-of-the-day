import React from 'react'
import './Content.css'

export default function Content(props) {
    const { src, hdSrc, title, type, wantsHD } = props
    
    return (
        <div className="content">
            {
                type === 'image' && <img className='photo' src={wantsHD ? (hdSrc ? hdSrc : src) : src} alt={title}/>
            }
            {
                type === 'video' && <iframe className='video' title={title} src={src} width='560' height='315' frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }
        </div>
    )
}