import React from 'react'
import PostAction from './PostAction'

const PostCard = () => {
  return (
    <>
      <div className='postcard'>
        <div className='postheader'>

          <div className='twoelement'>
            <div className='userprofilepost'>
              <img src="/public/unkown user.jpg" alt="userProfile" />
            </div>

            <div className='userLoacyionId'>
              <p className='nameuser'>__.nikhil.__29</p> 
              <p className='location'>bhiwandi</p>
            </div>
          </div>
          
          <div className='menu'>
            <i class="ri-more-2-line"></i>
          </div>
        </div>

        <div className='postimage'>
          {/* <video autoPlay muted loop src="/public/video1.mp4"></video> */}
          <img src="/public/sample imag.jpg" alt="posts" />
        </div>

        <div className='postcount'>
          <PostAction />
        </div>

        <div className='postcaption'>
          <p className='captionpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsum ut sit officiis dignissimos minima voluptas voluptatum praesentium unde assumenda!</p>
        </div>

        <div className='postdaye'>5 day ago</div>
      </div>

      <div className='postcard'>
        <div className='postheader'>

          <div className='twoelement'>
            <div className='userprofilepost'>
              <img src="/public/unkown user.jpg" alt="userProfile" />
            </div>

            <div className='userLoacyionId'>
              <p className='nameuser'>__.nikhil.__29</p> 
              <p className='location'>bhiwandi</p>
            </div>
          </div>
          
          <div className='menu'>
            <i class="ri-more-2-line"></i>
          </div>
        </div>

        <div className='postimage'>
          {/* <video autoPlay muted loop src="/public/video1.mp4"></video> */}
          <img src="/public/sample imag.jpg" alt="posts" />
        </div>

        <div className='postcount'>
          <PostAction />
        </div>

        <div className='postcaption'>
          <p className='captionpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsum ut sit officiis dignissimos minima voluptas voluptatum praesentium unde assumenda!</p>
        </div>

        <div className='postdaye'>5 day ago</div>
      </div>

      <div className='postcard'>
        <div className='postheader'>

          <div className='twoelement'>
            <div className='userprofilepost'>
              <img src="/public/unkown user.jpg" alt="userProfile" />
            </div>

            <div className='userLoacyionId'>
              <p className='nameuser'>__.nikhil.__29</p> 
              <p className='location'>bhiwandi</p>
            </div>
          </div>
          
          <div className='menu'>
            <i class="ri-more-2-line"></i>
          </div>
        </div>

        <div className='postimage'>
          {/* <video autoPlay muted loop src="/public/video1.mp4"></video> */}
          <img src="/public/sample imag.jpg" alt="posts" />
        </div>

        <div className='postcount'>
          <PostAction />
        </div>

        <div className='postcaption'>
          <p className='captionpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsum ut sit officiis dignissimos minima voluptas voluptatum praesentium unde assumenda!</p>
        </div>

        <div className='postdaye'>5 day ago</div>
      </div>

      <div className='postcard'>
        <div className='postheader'>

          <div className='twoelement'>
            <div className='userprofilepost'>
              <img src="/public/unkown user.jpg" alt="userProfile" />
            </div>

            <div className='userLoacyionId'>
              <p className='nameuser'>__.nikhil.__29</p> 
              <p className='location'>bhiwandi</p>
            </div>
          </div>
          
          <div className='menu'>
            <i class="ri-more-2-line"></i>
          </div>
        </div>

        <div className='postimage'>
          {/* <video autoPlay muted loop src="/public/video1.mp4"></video> */}
          <img src="/public/sample imag.jpg" alt="posts" />
        </div>

        <div className='postcount'>
          <PostAction />
        </div>

        <div className='postcaption'>
          <p className='captionpara'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ipsum ut sit officiis dignissimos minima voluptas voluptatum praesentium unde assumenda!</p>
        </div>

        <div className='postdaye'>5 day ago</div>
      </div>
    </>

    

    
  )
}

export default PostCard
