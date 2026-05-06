import React from 'react'
import { useState } from 'react'
import "../style/uploadsong.scss"
import { useSong } from "../hooks/useSong"

const UploadSong = () => {

    const {handleUplaodSong,loading} = useSong()

    const [Filename, setFilename] = useState("No file Selected")
    const [Files, setFiles] = useState(null)
    const [Mood, setMood] = useState("")

    async function handleSubmit(e){
        e.preventDefault()

        await handleUplaodSong(Files,Mood)

        setFiles(null)
        setMood("")
        setFilename("No file Selected")
    }

    function handleFiles(e){
        const file = e.target.files[0]
        setFilename(file.name)
        setFiles(e.target.files[0])
    }

    function handleMood(e){
        setMood(e.target.value)
    }

  return (
    <main>
        <div className='uploadpage'>
            <div className='song-box'>
                <label htmlFor="songinput" className='songinputlabel'>uplaod file</label>
                <input hidden onChange={handleFiles} type="file" id="songinput" accept='audio/*' required/>
                <div className='Filenamediv'>{Filename}</div>
            </div>

            <form onSubmit={handleSubmit}>
                <div>
                    <select onChange={handleMood} defaultValue="">
                        <option value="" disabled>select mood</option>
                        <option value="happy">happy</option>
                        <option value="surprised">surprised</option>
                        <option value="sad">sad</option>
                    </select>
                </div>

                <button className='uploadButton'>Upload</button>
            </form>
        </div>
    </main>
  )
}

export default UploadSong
