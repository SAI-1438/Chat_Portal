import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confPassword,setConfPassword] = useState("")

    const emailHandler = (event) =>{
        event.preventDefault()
        setEmail(event.target.value)
    }
    const passwordHandler = (event) =>{
        event.preventDefault()
        setPassword(event.target.value)
    }
    const confPasswordHandler = (event) =>{
        event.preventDefault()
        setConfPassword(event.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        const userData = {
            email:email,
            password:password,
            confPassword:confPassword
        }
        setConfPassword("")
        setPassword("")
        setEmail("")
        const api="http://localhost:8080/user/signup"
        const response = axios.post(api,userData)
    }
  return (
    <>
    <h1>Sign-Up Page</h1>
    <form>
        <inpput type="email" value={email} onChange={emailHandler}/><br/>
        <input type="password" value={password} onChange={passwordHandler}/><br/>
        <input type="password" value={confPassword} onChange={confPasswordHandler}/>
    </form>
    <button onClick={submitHandler}>Submit</button>
    </>
  )
}

export default SignUp