import React from 'react'
import AddStory from "../Stories/AddStory"
import StoryList from "../Stories/StoryList"

const StoryBar = () => {
  return (
    <div className='storybar'>
      <AddStory />
      <StoryList />
    </div>
  )
}

export default StoryBar
