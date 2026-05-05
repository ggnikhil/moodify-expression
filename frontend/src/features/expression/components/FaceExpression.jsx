import { useEffect, useRef, useState } from "react";
import { detect,init } from "../utils/utils";
import "../style/FaceExpression.scss"
import { useSong } from "../../home/hooks/useSong.js"



export default function FaceExpression() {

    const {loading,handleGetSongByMood,Song} = useSong()
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [ expression, setExpression ] = useState("Detecting...");

    useEffect(() => {
        if(expression !== "Detecting..."){
            handleGetSongByMood({ mood: expression })
        }
    }, [expression]);

    useEffect(() => {
        init({landmarkerRef,videoRef,streamRef});

        return () => {
            if (landmarkerRef.current) {
                landmarkerRef.current.close();
            }

            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject
                    .getTracks()
                    .forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <div className="outerbox">
            <video className="mainbox"
                ref={videoRef}
                style={{ width: "550px", borderRadius: "12px" }}
                playsInline
            />
            <h2 className="title">{expression}</h2>
            <button className="btn-red" onClick={()=>{detect({landmarkerRef,videoRef,setExpression})}} >Detect expression</button>
        </div>
    );
}