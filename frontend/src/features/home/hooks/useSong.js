import { SongContext } from "../song.context";
import { useContext,useEffect } from "react";
import { getSongByMood } from "../services/song.api";

export const useSong = ()=>{
    const songDataContext = useContext(SongContext)

    const {loading,setloading,Song,setSong} = songDataContext

    async function handleGetSongByMood({mood}){
        setloading(true)
        const response = await getSongByMood({mood})
        setSong(response)
        setloading(false)
    }

    return{
        loading,setloading,Song,setSong,handleGetSongByMood
    }
}