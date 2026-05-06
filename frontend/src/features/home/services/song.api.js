import axios from "axios";


const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export async function getSongByMood({mood}){
    const response = await api.get(`/api/song?mood=${mood}`)

    return response.data

    console.log(response.data)  
}

export async function uploadSong(Files, mood) {

    const formData = new FormData()

    formData.append("song", Files)
    formData.append("mood", mood)

    const response = await api.post("/api/song/upload",formData)

    return response.data

    console.log(response.data)
}