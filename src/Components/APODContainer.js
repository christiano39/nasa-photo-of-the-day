import React, { useEffect } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default function APODContainer(props) {
    const { potd } = props

    useEffect(() => {
        console.log(potd)
    })

    if (!potd){
        return <h2>Loading...</h2>
    }else{
        return (
            <div className="apod-container">
                <Header title={potd.title} author={potd.copyright}/>
                <Content title={potd.title} author={potd.copyright} imgSrc={potd.url}/>
                <Footer date={potd.date} description={potd.explanation}/>
            </div>
        )
    }
    
}