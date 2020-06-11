import styled from 'styled-components'

export default styled.div`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    flex-wrap: ${props => props.wrap ? props.wrap : 'no-wrap'};
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    align-items: ${props => props.align ? props.align : 'flex-start'};
`