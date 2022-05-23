import React from 'react'
import styled from 'styled-components';

const forms = () => {
  return (
    <Container>
        <div>
            <h1>Let's set up your account</h1>
            <p>Already have a account? <span>Sign in</span></p>
            <form>
                <input type="text" name='name' />
                <input type="email" name='email'/>
                <select name="" id="" placeholder='I would describe my user type as'>
                    <option value="">Developer</option>
                    <option value="">Developer</option>
                </select> 
                <input type="password" />
                <p>Minimum 8 Characters</p>
                <button type="submit">Next</button>
                <p>By clicking the "Next" button, you agree to creating a free, and to <span>Terms of Service</span> and <span>Privacy Policy</span></p>
            </form>
        </div>
    </Container>
  )
}

const Container = styled.div`
min-height: 50vh;
width: 100%;
background-color: white;
`

export default forms