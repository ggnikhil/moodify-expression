import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  return (
    <div className='regpage'>
      <div className='regTop'>
        <img src="/public/register image.jpg" alt="loginImage" />
      </div>

      <div className='regBottom'>
        <form>
          <div className='inputDetail'>
            <h3>Username</h3>
            <input type="text" placeholder='Username'/>
          </div>

          <div className='inputDetail'>
            <h3>What's your email</h3>
            <input type="email" placeholder='email@example.com'/>
          </div>

          <div className='resinputDetail'>
            <h3>Bio</h3>
            <input type="text" placeholder='discribe your bio'/>
          </div>

          <div className='inputDetail'>
            <h3>Enter password</h3>
            <input type="password" placeholder='password'/>
          </div>

          <button onClick={()=> navigate("/login")} className='regButton'>Create Account</button>
        </form>
        <p className='regPtag'>Already have account? <Link to={"/login"}>login here</Link></p>
      </div>
    </div>
  )
}

export default Register
