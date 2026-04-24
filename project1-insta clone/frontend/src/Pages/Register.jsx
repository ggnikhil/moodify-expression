import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'

const Register = () => {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [bio, setbio] = useState("")
  const [userpassword, setuserpassword] = useState("")
  const navigate = useNavigate()

  

  async function submitHandler(e) {
    e.preventDefault()

    try{

      const response = await axios.post("http://localhost:3000/api/auth/register",{
        userName: username,     
        email: email,
        bio: bio,
        password: userpassword,
      },)

    setusername("")
    setemail("")
    setbio("")
    setuserpassword("")

    navigate("/login")

    }catch(err){
      alert(err.response?.data?.message || "Registration failed!")
    }
    
  }


  return (
    <div className='regpage'>
      <div className='regTop'>
        <img src="/public/register image.jpg" alt="loginImage" />
      </div>

      <div className='regBottom'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>

          <div className='inputDetail'>
            <h3>Username</h3>
            <input value={username}
            onChange={(e)=>{
              setusername(e.target.value)
            }}
            type="text" placeholder='Username' required/>
          </div>

          <div className='inputDetail'>
            <h3>What's your email</h3>
            <input value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
            type="email" placeholder='email@example.com' required/>
          </div>

          <div className='resinputDetail'>
            <h3>Bio</h3>
            <input value={bio}
            onChange={(e)=>{
              setbio(e.target.value)
            }}
            type="text" placeholder='discribe your bio' required/>
          </div>

          <div className='inputDetail'>
            <h3>Enter password</h3>
            <input value={userpassword}
            onChange={(e)=>{
              setuserpassword(e.target.value)
            }}
            type="password" placeholder='password' required/>
          </div>

          <button  className='regButton'>Create Account</button>
        </form>
        <p className='regPtag'>Already have account? <Link to={"/login"}>login here</Link></p>
      </div>
    </div>
  )
}

// onClick={()=> navigate("/login")}
export default Register
