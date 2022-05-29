import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { FaEye } from "react-icons/fa";

const forms = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }


  return (
    <Container>
        <Wrapper>
            <h1>Let's set up your account</h1>
            <p>Already have a account? <span>Sign in</span></p>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' onChange={handleNameChange}  value={name}placeholder='Your Name'/>
                <input type="email" name='email' onChange={handleEmailChange} value={email}  placeholder='Email Address'/>
                <select>
                    <option value="">I would describe my user type as</option>
                    <option value="Developer">Developer</option>
                </select> 
                <input type={passwordShown ? "text" : "password"} onChange={handlePasswordChange} value={password} placeholder='Password'/>
                <PasswordIcon onClick={togglePassword} />
                <p>Minimum 8 Characters</p>
                <button type="submit" disabled={!email || !password}>Next</button>
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
  width: 100%;
  font-weight: bold;
  margin: auto;
}
form{
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin: auto;
  p{
    width: 100%;
    margin: auto;
    font-size: 11px;
    line-height: 2;
  }
  input,select{
    width: 100%;
    height: 2.5rem;
    font-size: 18px;
    border: 1px solid lightgray;
    border-radius: 4px;
    padding: 7px 7px;
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
    &:disabled{
      background-color: #ededed;
      color: #aaaaaa;
      cursor: not-allowed;
    }
  }
}
span{
  color: #276efa;
  font-weight: bold;
}

`

 const PasswordIcon = styled(FaEye)`
   position: absolute;
   top: 534px;
   left: 802px;
 `

export default forms