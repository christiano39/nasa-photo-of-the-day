import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './APODContainer.css'

export default function APODContainer(props) {
    const { potd } = props

    if (!potd){
        return <h2>Oops! Looks like there is no photo for this date :(</h2>
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