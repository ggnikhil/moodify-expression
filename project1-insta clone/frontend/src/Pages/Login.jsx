import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()
  
  return (
    <div className='loginPage'>
      <div className='loginTop'>
        <img src="/public/login image.jpg" alt="loginImage" />
      </div>

      <div className='loginBottom'>
        <form>
          <div className='inputDetail'>
            <h3>What's your email</h3>
            <input type="email" placeholder='email@example.com'/>
          </div>

          <div className='inputDetail'>
            <h3>Enter password</h3>
            <input type="password" placeholder='password'/>
          </div>

          <button onClick={()=> navigate("/home")} className='loginButton'>Login</button>
        </form>
        <p className='loginPtag'>New here? <Link to={"/register"}>Create new Account</Link></p>
        <p className='policyPara'>By continuing to log in or sign up, you confirm that you have read, understood, and agree to our Terms of Service and Privacy Policy, which govern your use here.</p>
      </div>
    </div>
  )
}

export default Login
