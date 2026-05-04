import React from 'react'
import "../style/home.scss"
import FaceExpression from '../../expression/components/FaceExpression'


const Home = () => {
  return (
    <div className='main'>
      <div className='home'>
        <nav>
          <img src="moododo-removebg-preview.png" alt="logo" />
          <button className='sidebarbutton'><i class="ri-layout-right-line"></i></button>
        </nav>

        <section>
            <FaceExpression />
        </section>

        <div className='playerdiv'>
          <div className='playercontainer'>
            <div className='box1'>

            </div>

            <div className='box2'>

            </div >

            <div className='box3'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
