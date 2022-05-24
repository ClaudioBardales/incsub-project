import React from 'react'
import styled from 'styled-components';

const forms = () => {
  return (
    <Container>
        <Wrapper>
            <h1>Let's set up your account</h1>
            <p>Already have a account? <span>Sign in</span></p>
            <form>
                <input type="text" name='name' />
                <input type="email" name='email'/>
                <select>
                    <option value="">I would describe my user type as</option>
                    <option value="">Developer</option>
                </select> 
                <input type="password" />
                <p>Minimum 8 Characters</p>
                <button type="submit">Next</button>
                <p>By clicking the "Next" button, you agree to creating a free, and to <span>Terms of Service</span> and <span>Privacy Policy</span></p>
            </form>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
min-height: 50vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center ;
background-color: white;
`

const Wrapper = styled.div`
display: flex;
gap: 1.5rem;
flex-direction: column;
margin: auto;
h1,p{
  width: 60%;
  margin: auto;
}
form{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 60%;
  margin: auto;
  p{
    width: 100%;
    margin: auto;
    line-height: 2;
  }
  input,select{
    padding: 0.5rem;
  }
  button{
    padding: 1rem;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: #276efa;
    cursor: pointer;
  }
}
span{
  color: #276efa;
  font-weight: bold;
}

`

export default forms