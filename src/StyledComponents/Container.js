import styled from 'styled-components'

export default styled.div`
    max-width: 1000px;
    width: 70%;
    margin: 0 auto;
    font-size: 1.8rem;
    border: 2px solid black;
    background-color: white;
    color: black;
    box-shadow: 3px 4px 12px 2px rgba(0,0,0,0.75);

    /* .no-photo {
        font-size: 3rem;
    } */

    @media (max-width: 800px) {
        width: 85%
    }

    @media (max-width: 500px) {
        width: 95%
    }
`