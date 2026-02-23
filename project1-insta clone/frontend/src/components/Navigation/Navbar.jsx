import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navhome'><i class="ri-home-5-line"></i></div>
      <div className='navnotification'><i class="ri-notification-4-line"></i></div>
      <div className='createnav'><i class="ri-add-box-line"></i></div>
      <div className='navreel'><i class="ri-movie-line"></i></div>
      <div id='navuserprofile' className='navprofile'>
        <img src="/public/unkown user.jpg" alt="navprofile" />
      </div>
    </div>
  )
}

export default Navbar
