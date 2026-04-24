import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Start = () => {

  const navigate = useNavigate()
  return (
    <main>
        <div className='startpage'>
            <div className='startTop'>
                <img src="/public/start page.jpg" alt="" />
            </div>

            <div className='startBottom'>
                <h1 className='startH1'>Let’s Get Started</h1>
                <button onClick={()=> navigate("/login")} className='startButton'>Start →</button>
            </div>
         </div>
    </main>
  )
}


export default Start
