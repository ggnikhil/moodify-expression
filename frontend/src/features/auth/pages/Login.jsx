import React from 'react'
import { Link,useNavigate } from 'react-router'
import FromGroup from "../components/FromGroup.jsx";
import { useState } from 'react'
import "../style/login.scss"
import { useAuth } from '../hooks/useAuth.js';
 
const Login = () => {

  const {loading,handleLogin} = useAuth()
  const navigate = useNavigate()

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  // const [username, setusername] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{
      await handleLogin({email,password})
      setemail("")
      setpassword("")

      navigate("/home")
    }catch(err){
      alert(err.response?.data?.message || "login failed!")
      console.log(err)
    } 
  }

  if (loading) return <main><h1>Loading.......</h1></main>


  return (
    <div className='mainLogin'>
      <div className='login'>
        <div className='header'>
          <h1>login</h1>
        </div>

        <div className='frombox'>
          <form onSubmit={handleSubmit}>

            <FromGroup label="email" value={email} placeholder="enter your email" onChange={(e)=>setemail(e.target.value)}/>
            <FromGroup label="password" value={password} placeholder="enter your username" onChange={(e)=>setpassword(e.target.value)}/>
            <button className='btn-base'>login</button>
            <p className='loginPtag'>New here? <Link to={"/register"}>Create new Account</Link></p>
            
          </form>
        </div>

        <div className='policyParabox'>
          <p className='policyPara'>By continuing to log in or sign up, you confirm that you have read, understood, and agree to our Terms of Service and Privacy Policy, which govern your use here.</p>
        </div>
      </div>      
    </div>
  )
}

export default Login
