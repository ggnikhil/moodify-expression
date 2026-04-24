import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import "../style/from.scss"




const Login = () => {

  const {loading,handleLogin} = useAuth()

  const [email, setemail] = useState("")
  const [userpassword, setuserpassword] = useState("")
  const navigate = useNavigate()

  async function submitHandler(e){
    e.preventDefault()

    try{
      await handleLogin(email,userpassword)
      setemail("")
      setuserpassword("")
      navigate("/home")

    }catch(err){
      console.log(err)
    }

    if(loading){
      return(<main><h1>Loading.....</h1></main>)
    }
  }


  return (
    <main>
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
    </main>
  )
}

export default Login
