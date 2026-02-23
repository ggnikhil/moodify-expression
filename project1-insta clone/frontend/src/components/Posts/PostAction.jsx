import React from 'react'

const PostAction = () => {
  return (
    <div className='postaction'>
      <div className='likecommentshareSection'>

        <div className='like actiondiv'>
          <i class="ri-heart-3-line"></i>
          <p className='actioncoount'>121</p>
        </div>

        <div className='comment actiondiv'>
          <i class="ri-chat-1-line"></i>
          <p className='actioncoount '>121</p>
        </div>
        
        <div className='share actiondiv'>
          <i id='rotate' class="ri-send-plane-2-line"></i>
          <p className='actioncoount'>121</p>
        </div>

      </div>

      <div className='save'><i class="ri-bookmark-line"></i></div>
    </div>
  )
}

export default PostAction
