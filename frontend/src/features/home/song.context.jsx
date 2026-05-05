import { createContext } from "react";
import { useState } from 'react'


export const SongContext = createContext()

export const SongProvider = ({children})=>{
    const [loading, setloading] = useState(false)
    const [Song, setSong] = useState({
        "findSongByMood": {
            "_id": "69f71dd01f49345655c5792b",
            "songUrl": "https://ik.imagekit.io/nikhil29/moodify/song/Dhai_Liter_Dudh-_SambalpuriStar.In__6GjcQtIlN.mp3",
            "posterUrl": "https://ik.imagekit.io/nikhil29/moodify/poster/Dhai_Liter_Dudh-_SambalpuriStar.In__SaZTbZ2Xx.jpeg",
            "title": "Dhai Liter Dudh-(SambalpuriStar.In)",
            "mood": "happy",
            "__v": 0
        }
    })


    return(
        <SongContext.Provider value={{loading,setloading,Song,setSong}}>
            {children}
        </SongContext.Provider>
    )
}