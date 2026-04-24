import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Login = () => {

  const [email, setemail] = useState("")
  const [userpassword, setuserpassword] = useState("")
  const navigate = useNavigate()

  async function submitHandler(e){
    e.preventDefault()

    try{
      const response = await axios.post("http://localhost:3000/api/auth/login",{
        email: email,
        password: userpassword
      },{
        withCredentials:true
      })

      setemail("")
      setuserpassword("")

      navigate("/home")

    }catch(err){
      alert(err.response?.data?.message || "Login failed!")
    }

  }
  
  return (
    <div className='loginPage'>
      <div className='loginTop'>
        <img src="/public/login image.jpg" alt="loginImage" />
      </div>

      <div className='loginBottom'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div className='inputDetail'>
            <h3>Login via Email/Username</h3>
            <input value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            type="text" placeholder='email@example.com / Username' required/>
          </div>

          <div className='inputDetail'>
            <h3>Enter password</h3>
            <input value={userpassword}
            onChange={(e)=>{
              setuserpassword(e.target.value)
            }}
            type="password" placeholder='password' required/>
          </div>

          <button className='loginButton'>Login</button>
        </form>
        <p className='loginPtag'>New here? <Link to={"/register"}>Create new Account</Link></p>
        <p className='policyPara'>By continuing to log in or sign up, you confirm that you have read, understood, and agree to our Terms of Service and Privacy Policy, which govern your use here.</p>
      </div>
    </div>
  )
}

export default Login
