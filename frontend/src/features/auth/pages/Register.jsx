import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import FromGroup from "../components/FromGroup.jsx";
import "../style/register.scss"
import { useAuth } from '../hooks/useAuth.js';



const Register = () => {

  const navigate = useNavigate()

  const {loading, handleRegister} = useAuth()

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")



  async function handleSubmit(e){
    e.preventDefault()
    try{
      await handleRegister({username,password,email})
      setusername("")
      setpassword("")
      setemail("")

      navigate("/login")
    }catch(err){
      alert(err.response?.data?.message || "Registration failed!")
      console.log(err)
    }
  }

  if (loading) return <main><h1>Loading.......</h1></main>

  return (
    <div className='mainRegister'>
      <div className='register'>

        <div className='header'>
          <h1>Register</h1>
        </div>

        <div className='frombox'>
          <form onSubmit={handleSubmit} >
            <FromGroup label="username" value={username} placeholder="enter your username" onChange={(e)=>setusername(e.target.value)}/>
            <FromGroup label="email" value={email} placeholder="enter your email" onChange={(e)=>setemail(e.target.value)}/>
            <FromGroup label="password" value={password} placeholder="enter your password" onChange={(e)=>setpassword(e.target.value)}/>
            <p className='loginPtag'>Already have account? <Link to={"/login"}>login here</Link></p>
            <button className='btn-base'>Register</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Register
