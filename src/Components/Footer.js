import React from 'react'
import Date from '../StyledComponents/Date'
import InnerContainer from '../StyledComponents/InnerContainer'
import Description from '../StyledComponents/Description'

export default function Footer(props) {
    const { date, description } = props
    
    return (
        <InnerContainer direction="column" justify="center" align="center">
            <Date>{date}</Date>
            <Description>{description}</Description>
        </InnerContainer>
    )
}