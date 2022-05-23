import React from 'react'
import styled from 'styled-components'

const dummyHeading = () => {
  return (
    <Container>
        <h2>Dummy Heading</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus numquam quaerat atque quod fugit. A non architecto saepe natus quas.</p>
    </Container>
  )
}

const Container = styled.div`
    background-color: #276efa;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    h2{
        font-weight: 700;
        color: white;
        letter-spacing: 1.5px;
        font-size: 30px;
    }
    p{
        color: white;
        font-size: 20px;
        width: 60%;
        line-height: 1.5;

    }
`

export default dummyHeading;