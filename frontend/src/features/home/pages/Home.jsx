import React, { useRef,useState } from 'react'
import "../style/home.scss"
import FaceExpression from '../../expression/components/FaceExpression'
import { useSong } from '../hooks/useSong'



const Home = () => {

  const {Song} = useSong()
  console.log(Song.findSongByMood)

  const audioRef = useRef(null)
  const [isPlaying, setisPlaying] = useState(false)
  const [isProgress, setisProgress] = useState(0)
  // console.log(audioRef.current.currentTime)
  // console.log(audioRef.current.duration)

  function handlePlayPause(){
    if(audioRef.current.paused === false){
      setisPlaying(false)
      audioRef.current.pause()
      
    }else{
      audioRef.current.play()
      setisPlaying(true)
    }
  }

  function forward(){
    audioRef.current.currentTime += 5;
  }

  function backward(){
    audioRef.current.currentTime -= 5;
  }

  function reset(){
    audioRef.current.currentTime = 0;
  }

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
              <div className='posterimage'>
                <img src={Song?.findSongByMood.posterUrl} alt="poster" />
              </div>

              <div className='songtitle'>
                <p>{Song?.findSongByMood.title}</p>
              </div>
            </div>

            <div className='box2'>
              <audio
              onTimeUpdate={()=>{
                const timing = audioRef.current.currentTime
                const duration = audioRef.current.duration

                if(duration){
                  setisProgress((timing/duration)*100)
                }

                console.log(isProgress)
              }}
              ref={audioRef} src={Song?.findSongByMood.songUrl}></audio>
              <input type="range" id="progress" value={isProgress} min="0" max="100"></input>

              <div className='controller'>
                <button onClick={backward} className='forwardcontroller'><i class="ri-replay-5-line"></i></button>
                <button onClick={handlePlayPause} className='playcontroller'><i className={isPlaying ? "ri-pause-fill" : "ri-play-fill"}></i></button>
                <button onClick={forward} className='backwardcontroller'><i class="ri-forward-5-line"></i></button>
              </div>
            </div >

            <div className='box3'>

              <div>
                <select onChange={(e)=>{
                  const seletedValue = e.target.value

                  audioRef.current.playbackRate = seletedValue
                }}>
                  <option value="1">1x</option>
                  <option value="1.5">1.5x</option>
                  <option value="1.75">1.75x</option>
                  <option value="2">2x</option>
                </select>
              </div>

              <div>
                <button onClick={reset}><i class="ri-loop-right-line"></i></button>
              </div>

              <div>
                <button><i class="ri-shuffle-fill"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
