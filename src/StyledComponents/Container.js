import styled from 'styled-components'

export default styled.div`
    max-width: 1000px;
    width: 70%;
    margin: 0 auto;
    font-size: 2.4rem;
    border: 2px solid black;
    background-color: white;
    color: black;
    box-shadow: 3px 4px 10px 2px rgba(0,0,0,0.75);
    border-radius: 15px;

    @media (max-width: 800px) {
        width: 85%
    }

    @media (max-width: 500px) {
        width: 95%
    }
`