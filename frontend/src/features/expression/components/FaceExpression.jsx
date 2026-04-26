import { useEffect, useRef, useState } from "react";
import { detect,init } from "../utils/utils";
import "../style/FaceExpression.scss"


export default function FaceExpression() {
    const videoRef = useRef(null);
    const landmarkerRef = useRef(null);
    const streamRef = useRef(null);

    const [ expression, setExpression ] = useState("Detecting...");

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
                style={{ width: "600px", borderRadius: "12px" }}
                playsInline
            />
            <h2 className="title">{expression}</h2>
            <button className="btn-red" onClick={()=>{detect({landmarkerRef,videoRef,setExpression})}} >Detect expression</button>
        </div>
    );
}