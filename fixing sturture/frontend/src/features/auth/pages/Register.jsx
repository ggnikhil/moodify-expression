import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

  const {loading, handleRegister} = useAuth()

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [bio, setbio] = useState("")
  const [userpassword, setuserpassword] = useState("")

  const navigate = useNavigate()


  async function submitHandler(e) {
    e.preventDefault()

    try{
      await handleRegister(username,email,userpassword,bio)

      setusername("")
      setemail("")
      setbio("")
      setuserpassword("")
      navigate("/login")

    }catch(err){
      alert(err.response?.data?.message || "register failed!")
    }

    
  }

  if(loading){
    return (<main><h1>Loading.......</h1></main>)
  }


  return (
    <main>
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
    </main>
  )
}

export default Register
