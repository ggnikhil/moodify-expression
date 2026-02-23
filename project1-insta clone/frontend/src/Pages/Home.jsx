import React from 'react'
import StoryBar from "../components/Stories/StoryBar"
import PostFeed from "../components/Posts/PostFeed"
import Navbar from "../components/Navigation/Navbar"

const Home = () => {
  return (
    <div className='homepage'>
      <StoryBar />
      <PostFeed />
      <Navbar />
    </div>
  )
}

export default Home
