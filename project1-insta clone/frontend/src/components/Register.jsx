import React from 'react'
import axios from "axios";

const Register = () => {

  async function handleSubmit(e){
    e.preventDefault();

    let user = e.target.elements.user.value
    let email = e.target.elements.email.value
    let bio = e.target.elements.bio.value
    let password = e.target.elements.password.value

    console.log(user,bio,password,email)

    await axios.post("http://localhost:3000/api/auth/register",{
      userName:user,
      email:email,
      bio:bio,
      password:password
    })

    e.target.reset();
  }


  return (
    <div className='registerPage'>
      <div className='imgbox'>

      </div>

      <div className='registerinput'>
        <div className='regtop'>
          <h2>Register</h2>
          <p>Please register to login</p>
        </div>

        <div className='regbottom'>
          <form onSubmit={handleSubmit}>
            <input name='user' type="text" placeholder='enter your user name '/>
            <input name='email' type="text" placeholder='enter your email'/>
            <input name='bio' type="text" placeholder='enter your bio'/>
            <input name='password' type="password" placeholder='enter your password'/>
            <button className='regbutton'>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
