import React from 'react'
import './Header.css'
import Title from '../StyledComponents/Title'
import Credit from '../StyledComponents/Credit'
import Author from '../StyledComponents/Author'
import InnerContainer from '../StyledComponents/InnerContainer'

export default function Header(props) {
    const { title, author } = props
    
    return (
        <InnerContainer wrap="wrap" justify="space-around" align="flex-end">
            <Title>{title}</Title>
            {
                author && <Credit>Photo by <Author>{author}</Author></Credit>
            }
        </InnerContainer>
    )
}