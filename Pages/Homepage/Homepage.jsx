import React, {useEffect, useState} from "react";
import axios from 'axios'
import styles from './homepage.module.css'
import { useNavigate } from "react-router-dom";

const Homepage = () =>{
    let navigate=useNavigate()
    const [responseData,setResponseData] = useState({})
    const [userData,setUserData] = useState({})

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    useEffect(async ()=>{
        const api="http://localhost:8080/user/login"
        const response = await axios.get(api)
        setResponseData(response.data)
    },userData)

    const buttonHandler = () =>{
        setUserData({
            email:email,
            password:password
        })
        navigate('/login')
    }
    return(
        <>
        <div className={styles.main}>
            <div className={styles.info}>
                <h2>Welcome to ChatSocket,Please Login</h2>
                <button className={styles.login_btn} onClick={buttonHandler}>Login</button>
            </div>
            <div>
                <h2>A@B</h2>
            </div>
        </div>
        </>
    )
}

export default Homepage