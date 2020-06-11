import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Container from '../StyledComponents/Container'

export default function APODContainer(props) {
    const { potd } = props

    if (!potd){
        return <h2 className="no-photo">Oops! Looks like there is no photo for this date :(</h2>
    }else{
        return (
            <Container>
                <Header title={potd.title} author={potd.copyright}/>
                <Content title={potd.title} src={potd.url} hdSrc={potd.hdurl} type={potd.media_type}/>
                <Footer date={potd.date} description={potd.explanation}/>
            </Container>
        )
    }
    
}